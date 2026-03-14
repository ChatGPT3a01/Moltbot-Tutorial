# CH22 | YOLO6 智慧視覺——讓龍蝦長出真正的眼睛

星期一早上八點，阿亮老師走進教室，35 個學生的班級要花整整三分鐘點名。他在 CH8 學會了把照片傳給龍蝦，於是興沖沖地拍了一張教室全景傳過去。龍蝦回覆：「這是一間坐了不少學生的教室，看起來出席率不錯。」

「不錯？到底是幾個人啊！」阿亮老師有點無奈。這就是 CH8 視覺辨識的極限——AI 模型「看得懂」照片，卻「數不出來」。

如果拍一張照片，龍蝦就能回答「28 個人、7 個空位、12 台筆電」呢？不用一個一個唸名字，不用站起來巡視，拍一張照片就搞定。這就是這一章要做的事。我們要幫龍蝦裝上 YOLO6——一個能精準數出照片裡每個物件的「鷹眼」。裝完之後，你傳一張照片到 LINE，龍蝦就能告訴你：教室裡有 28 個人、12 台筆電、35 張椅子。

---

> **本章學習目標**
>
> 1. 用 YOLO6 解決「拍照就能點名」的實際需求
> 2. 把 YOLO6 做成龍蝦技能，LINE 傳照片就能用
> 3. 延伸應用：安全監控、物品盤點
> 4. 進階：Webcam 即時偵測

---

## 22.1 先來解決點名問題

### 22.1.1 為什麼龍蝦現在「看不清楚」？

在 CH8 你學會了把照片傳給龍蝦，龍蝦會用 Vision 模型來「理解」照片。拍一張辦公桌，它會回答：「這張照片裡有一台筆電、一杯咖啡、幾本書。」但「幾本書」到底是 3 本還是 7 本？它不會告訴你。

Vision 是龍蝦的「腦」——很會理解和描述，但不擅長計數。

YOLO6 是龍蝦的「眼」——它像訓練有素的安檢人員，快速掃描整張照片，把每個物體用框框圈出來，標上名字和信心度。同一張辦公桌，YOLO6 的回答是：`laptop: 1 (97%)、cup: 1 (94%)、book: 4 (88%)`——精確到每一個。

| 能力 | CH8 視覺辨識（腦） | CH22 YOLO6（眼） |
|------|-------------------|-----------------|
| 輸入 | 一張照片 | 一張照片或即時影像 |
| 輸出 | AI 文字描述 | 精準框框 + 標籤 + 數量 |
| 能不能數人頭 | 不行（只能說「很多人」） | 可以（person: 28） |
| 即時處理 | 不行 | 可以（每秒 30 張以上） |
| 適合場景 | 描述照片內容 | 監控、計數、辨識 |

兩者搭配起來，龍蝦就真的無所不見了。

### 22.1.2 三步驟完成「拍照點名」

接下來我們要做三件事，心裡先有個底：

| 步驟 | 做什麼 | 預計時間 |
|------|--------|---------|
| 步驟一 | 安裝 YOLO6 | 5 分鐘 |
| 步驟二 | 試拍一張照片看效果 | 2 分鐘 |
| 步驟三 | 做成龍蝦技能，以後 LINE 傳照片就行 | 10 分鐘 |

全部做完大約 17 分鐘。我們開始吧。

---

## 22.2 步驟一：安裝 YOLO6（5 分鐘）

YOLO 的全名是 You Only Look Once（你只需要看一次），YOLO6 是 2025 年推出的最新版本。它是一個 Python 套件，所以電腦上需要先有 Python。

> 💡 **先跑環境檢查**：不確定自己的電腦準備好了嗎？執行資源包裡的 `install_check.py`：
> ```powershell
> python install_check.py
> ```
> 它會逐項檢查 Python 版本、YOLO6 安裝、Webcam 等條件，每項都會告訴你 ✅ 或 ❌。資源包的取得方式請見 22.4.1 的「懶人包」說明。

打開終端機（PowerShell 或命令提示字元），輸入：

```powershell
python --version
```

看到 `Python 3.10` 以上的版本號就沒問題。如果顯示錯誤或找不到指令，有兩個解法：

- **方法 A**：到 [python.org](https://www.python.org/downloads/) 下載安裝，記得勾選「Add Python to PATH」
- **方法 B**：用 CH5 教的 GitHub Codespaces，裡面已經內建 Python

確認有 Python 之後，安裝只需要一行指令：

```powershell
pip install ultralytics
```

安裝過程約 2-5 分鐘，它會連帶裝好 PyTorch、OpenCV 等相依套件。完成後驗證一下：

```powershell
python -c "from ultralytics import YOLO; print('YOLO6 安裝成功！')"
```

關於 GPU：如果你的電腦有 NVIDIA 顯卡，YOLO6 會自動偵測並使用 CUDA 加速，不需要額外設定。沒有 GPU 也完全沒問題，拍照偵測用 CPU 就夠了，只是即時串流會慢一些。

> ✅ **檢查點**：終端機顯示「YOLO6 安裝成功！」就對了。如果看到紅字錯誤，最常見的原因是 Python 版本太舊（需要 3.10+）或 pip 不在 PATH 裡。

### 22.2.2 安裝常見問題排解

順利的話，上面幾行指令就能裝好。但根據阿亮老師的教學經驗，大約三成的同學會在安裝這一步卡住——通常不是 YOLO6 的問題，而是 Python 環境的問題。以下整理了六個最常踩到的坑，遇到紅字不用慌，對照這張表找答案就好。

| # | 症狀 | 原因 | 快速解法 |
|---|------|------|---------|
| 1 | `python` 不是內部命令 | 沒裝 Python 或沒加 PATH | 重新安裝並勾選「Add Python to PATH」 |
| 2 | Python 版本太舊 | 3.8 或 3.9 不符合需求 | 安裝 3.12（推薦） |
| 3 | `pip` 指令找不到 | pip 不在 PATH 裡 | 改用 `python -m pip install` |
| 4 | 安裝過程下載失敗 | PyTorch 太大、網路中斷 | 重跑 pip install 或用鏡像 |
| 5 | `import YOLO` 報錯 | 安裝不完整或版本衝突 | `pip install --upgrade ultralytics` |
| 6 | 沒有 GPU 的警告 | 電腦沒有 NVIDIA 顯卡 | 不用理它，CPU 完全能跑 |

**坑 1：`python` 不是內部命令**

輸入 `python --version` 之後，終端機回你一句冷冰冰的「'python' 不是內部或外部命令」——這表示你的 Windows 要嘛沒裝 Python，要嘛裝了但忘了勾那個最關鍵的選項。

解法：到 [python.org](https://www.python.org/downloads/) 下載最新版的 Python。安裝時第一個畫面最下面有一個小小的核取方塊「**Add Python to PATH**」，這個一定要勾！很多人就是漏了這一步。

裝完之後，**關掉目前的終端機視窗再重開一個新的**（這一步很重要，舊視窗不會自動更新 PATH），然後再試：

```powershell
python --version
```

看到版本號就對了。

**坑 2：Python 版本太舊（3.8 或 3.9）**

有些同學的電腦上確實有 Python，但版本太舊。YOLO6 需要 Python 3.10 以上，如果你的版本是 3.8 或 3.9，安裝 ultralytics 的過程中就會冒出一堆紅字。

解法：直接到 [python.org](https://www.python.org/downloads/) 下載安裝 Python 3.12（目前最穩定的版本）。不用擔心多版本衝突的問題——新版本安裝後，舊版本會自動被覆蓋，或者你可以在「新增或移除程式」裡手動移除舊版。

安裝完驗證一下：

```powershell
python --version
```

顯示 `Python 3.10` 以上就可以繼續了。

**坑 3：`pip` 指令找不到**

有些 Windows 環境下，`pip` 指令雖然裝好了但不在 PATH 裡面，終端機找不到它。

解法很簡單，把所有 `pip install xxx` 的指令改成這個格式：

```powershell
python -m pip install ultralytics
```

`python -m pip` 的意思是「用 Python 來執行 pip 模組」，這樣就不依賴 PATH 設定了。如果你之後看到任何教學寫 `pip install xxx`，都可以用這個替代寫法。

另外，如果連 `python -m pip` 也報錯說找不到 pip，那可能是安裝 Python 時沒有勾選 pip 元件。最快的解法是重新安裝 Python，安裝過程中確認「pip」選項有打勾。

**坑 4：安裝過程下載失敗**

`pip install ultralytics` 會連帶下載 PyTorch，這個套件大約 2GB。如果你的網路不穩定，下載到一半中斷，就會看到紅字錯誤。

解法：重新執行一次 `pip install ultralytics`。pip 很聰明，已經下載完成的部分會從快取讀取，不會重頭來過，所以第二次通常很快就能裝完。

如果重試幾次都失敗（可能是網路環境的問題），可以試試用國內的鏡像源，速度會快很多：

```powershell
pip install ultralytics -i https://pypi.tuna.tsinghua.edu.cn/simple
```

這行指令從清華大學的鏡像伺服器下載，對亞洲地區的使用者來說速度通常快 5-10 倍。

**坑 5：`import YOLO` 報錯**

驗證指令 `python -c "from ultralytics import YOLO"` 報錯，常見的原因有兩個：一是安裝過程中有東西沒裝完（可能是坑 4 的殘留問題），二是系統上有多個 Python 版本，pip 裝到了另一個版本裡。

解法：用 `--upgrade` 旗標重新安裝一次，它會強制更新所有元件：

```powershell
pip install --upgrade ultralytics
```

如果還是不行，試試指定 Python 版本來安裝：

```powershell
python -m pip install --upgrade ultralytics
```

裝完再跑一次驗證指令，應該就能看到「YOLO6 安裝成功！」了。

**坑 6：沒有 GPU 的警告**

安裝完成後跑偵測，終端機可能會出現一行黃字警告：

```text
WARNING: CUDA not available, using CPU
```

看到這個不用緊張，更不用去找什麼 CUDA 驅動來安裝。這只是告訴你：「你的電腦沒有 NVIDIA 顯卡（或沒安裝 CUDA），所以 YOLO6 會用 CPU 來跑偵測。」

CPU 跑偵測完全沒問題——拍照偵測大約 1-3 秒就能出結果，日常使用完全夠用。只有在跑即時 Webcam 串流的時候，有 GPU 才會有明顯的速度差異。所以看到這個警告，忽略它就好，不需要做任何額外操作。

---

## 22.3 步驟二：拍張照片試試（2 分鐘）

拿起手機，拍一張你眼前的場景——教室、辦公室、書架、客廳都行。把照片傳到電腦上，存成 `test.jpg`。

在同一個資料夾新建一個檔案 `detect_test.py`，貼上以下程式碼：

```python
from ultralytics import YOLO

# 載入預訓練模型（第一次執行會自動下載，約 6MB）
model = YOLO("yolo6n.pt")  # n = nano，速度最快

# 偵測照片
results = model("test.jpg")

# 顯示結果（跳出視窗，框出所有物件）
results[0].show()
results[0].save("result.jpg")  # 存一份標好框框的照片

# 列出偵測到的每個物件
for box in results[0].boxes:
    cls = results[0].names[int(box.cls)]
    conf = float(box.conf)
    print(f"偵測到：{cls}（信心度 {conf:.1%}）")
```

執行它：

```powershell
python detect_test.py
```

螢幕上會跳出一張標滿彩色框框的照片——每個被偵測到的物件都被方框圈住，旁邊標著名字和信心度。同時，終端機會逐行列出每個物件。第一次看到結果的時候，你大概會像阿亮老師一樣驚呼：「它真的數出來了！」

這段程式碼在做什麼？其實核心只有三步：`YOLO("yolo6n.pt")` 載入模型、`model("test.jpg")` 跑偵測、`results[0].boxes` 拿到所有框框。每個框框裡面，`box.cls` 是物件類別編號（用 `results[0].names` 對應到名稱），`box.conf` 是信心度（0-1 之間，越高表示越確定）。

如果覺得偵測不夠精準，可以換更大的模型。YOLO6 提供不同大小的版本，換模型只要改一個字母：

| 模型 | 大小 | 速度 | 準確度 | 適合場景 |
|------|------|------|--------|---------|
| yolo6n | 6 MB | 最快 | ★★★ | 即時監控、快速掃描 |
| yolo6s | 22 MB | 快 | ★★★★ | 一般用途（推薦） |
| yolo6m | 50 MB | 中等 | ★★★★★ | 需要高準確度 |
| yolo6l | 85 MB | 慢 | ★★★★★★ | 專業應用 |

> ✅ **檢查點**：看到彩色框框的照片，終端機列出物件名稱和信心度，就表示 YOLO6 運作正常。恭喜你，最難的部分已經結束了！

---

## 22.4 步驟三：做成龍蝦技能（10 分鐘）

拍照偵測成功了，但每次都要開終端機、打指令、找照片，這也太麻煩了。我們把 YOLO6 包裝成龍蝦的技能——以後只要 LINE 傳照片，龍蝦就自動偵測然後回覆結果。一勞永逸。

### 22.4.1 建立技能資料夾

先在龍蝦的技能目錄下建立 `yolo-vision` 資料夾：

```powershell
mkdir ~/.openclaw/workspace/skills/yolo-vision
```

這個技能需要三個檔案：

| 檔案 | 用途 |
|------|------|
| `SKILL.md` | 技能定義——告訴龍蝦這個技能能做什麼 |
| `detect.py` | 偵測腳本——接收照片、跑 YOLO6、回傳結果 |
| `webcam_monitor.py` | 監控腳本——開啟 Webcam 持續偵測 |

> 💡 **懶人包**：不想手打程式碼？本章提供完整的 `yolo-vision` 資源包，包含所有程式碼和安裝檢查工具。資源包在本書 CH22 附屬的 `resources/yolo-vision/` 資料夾中，直接複製到 `~/.openclaw/workspace/skills/` 就能用。
>
> 資源包包含：
> | 檔案 | 用途 |
> |------|------|
> | SKILL.md | 技能定義檔 |
> | detect.py | 照片偵測腳本 |
> | webcam_monitor.py | Webcam 監控腳本 |
> | live_detect.py | 即時偵測視窗 |
> | detect_test.py | 快速測試腳本 |
> | install_check.py | 安裝環境檢查 |
> | README.md | 完整安裝說明 |

### 22.4.2 寫 SKILL.md

在 `~/.openclaw/workspace/skills/yolo-vision/` 裡建立 `SKILL.md`，內容如下：

```markdown
---
name: yolo-vision
description: 用 YOLO6 偵測照片中的物件，精準計數和分類
---

# YOLO6 智慧視覺

目標：讓龍蝦能用 YOLO6 分析照片，精準偵測物件、計數、分類。

## 功能

- 偵測照片中的所有物件（人、車、動物、物品等 80 種類別）
- 精準計數每種物件的數量
- 回報偵測結果（物件名稱 + 數量 + 信心度）
- 支援即時 Webcam 偵測

## 使用方式

使用者可能這樣說：
- 「幫我數這張照片有幾個人」
- 「分析這張照片有什麼東西」
- 「打開攝影機偵測」
- 「監控有沒有人進來」

## 執行方式

1. 收到照片時，用 detect.py 腳本進行 YOLO6 偵測
2. 解析偵測結果，整理成易讀的表格
3. 如果使用者要求即時監控，啟動 webcam_monitor.py
4. 偵測到指定事件時，主動通知使用者
```

### 22.4.3 寫 detect.py

在同一個資料夾建立 `detect.py`，這是主要的偵測腳本：

```python
import sys
import json
from ultralytics import YOLO
from collections import Counter

def detect(image_path, model_size="yolo6n"):
    model = YOLO(f"{model_size}.pt")
    results = model(image_path, verbose=False)

    detections = []
    for box in results[0].boxes:
        cls_name = results[0].names[int(box.cls)]
        confidence = float(box.conf)
        detections.append({"name": cls_name, "confidence": confidence})

    counts = Counter(d["name"] for d in detections)
    output_path = image_path.rsplit(".", 1)[0] + "_detected.jpg"
    results[0].save(output_path)

    result = {
        "total_objects": len(detections),
        "summary": dict(counts),
        "details": detections,
        "output_image": output_path
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    detect(sys.argv[1] if len(sys.argv) > 1 else "test.jpg")
```

### 22.4.4 寫 webcam_monitor.py

最後一個檔案 `webcam_monitor.py`，用來做即時監控：

```python
import sys
import json
import time
from datetime import datetime
from ultralytics import YOLO
from collections import Counter

def monitor(target="person", interval=5, model_size="yolo6n"):
    model = YOLO(f"{model_size}.pt")
    print(f"開始監控，偵測目標：{target}，間隔：{interval} 秒")

    try:
        while True:
            results = model(source=0, stream=False, verbose=False)
            for r in results:
                names_found = [r.names[int(c)] for c in r.boxes.cls]
                counts = Counter(names_found)
                if target in counts:
                    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                    filename = f"alert_{timestamp}.jpg"
                    r.save(filename)
                    alert = {"target": target, "count": counts[target],
                             "timestamp": timestamp, "image": filename}
                    print(json.dumps(alert, ensure_ascii=False))
            time.sleep(interval)
    except KeyboardInterrupt:
        print("監控已停止")

if __name__ == "__main__":
    monitor(sys.argv[1] if len(sys.argv) > 1 else "person",
            int(sys.argv[2]) if len(sys.argv) > 2 else 5)
```

### 22.4.5 啟動！

三個檔案都寫好了，重啟龍蝦的 Gateway 讓它載入新技能：

```powershell
openclaw gateway restart
```

> ✅ **檢查點**：重啟後拿手機拍一張照片，傳到 LINE 跟龍蝦說「幫我分析這張照片有什麼」。如果龍蝦回覆了偵測結果（物件名稱 + 數量），就表示技能安裝成功！

### 22.4.6 佈署常見問題排解

技能裝好了、Gateway 也重啟了，但龍蝦就是沒反應？別急，這一節整理了佈署過程最常踩的五個坑，對照著檢查一遍，通常就能找到問題。

| # | 症狀 | 原因 | 解法 |
|---|------|------|------|
| 1 | 龍蝦完全沒載入技能 | 技能資料夾放錯位置 | 確認路徑在 `~/.openclaw/workspace/skills/yolo-vision/` |
| 2 | 修改技能後沒效果 | 忘了重啟 Gateway | 每次改完都要 `openclaw gateway restart` |
| 3 | Python 腳本權限被拒 | 系統權限限制 | Windows 用管理員 PowerShell；Mac/Linux 加 `chmod +x` |
| 4 | Webcam 畫面打不開 | 攝影機被占用或驅動異常 | 關閉占用程式，檢查裝置管理員 |
| 5 | 傳照片但龍蝦沒回應 | SKILL.md 格式或腳本執行異常 | 逐項排查 SKILL.md → detect.py → Gateway 日誌 |

**坑 1：技能資料夾放錯位置**

這是最常見的錯誤。正確的路徑是：

```text
~/.openclaw/workspace/skills/yolo-vision/SKILL.md
```

很多人會少打 `workspace` 這一層，放到 `~/.openclaw/skills/` 裡面——看起來只差一個資料夾，但龍蝦完全不會載入。用下面這行指令確認檔案有沒有在對的位置：

```powershell
ls ~/.openclaw/workspace/skills/yolo-vision/SKILL.md
```

如果顯示「找不到路徑」，就把整個 `yolo-vision` 資料夾搬到正確位置。

**坑 2：忘了重啟 Gateway**

龍蝦的技能是在 Gateway 啟動時載入的。你修改了 SKILL.md、改了 detect.py、甚至加了新檔案，只要沒重啟 Gateway，龍蝦看到的還是舊版本。養成一個好習慣：**改了任何技能檔案，就跑一次重啟**：

```powershell
openclaw gateway restart
```

重啟大約 3-5 秒，不會影響正在進行的對話。

**坑 3：Python 腳本權限問題**

Windows 使用者通常不會遇到這個問題，但如果你看到「權限被拒絕」之類的紅字錯誤，用管理員身分開啟 PowerShell 再試一次：右鍵點「Windows 終端機」→「以系統管理員身分執行」。

Mac 和 Linux 使用者需要幫腳本加上執行權限：

```powershell
chmod +x ~/.openclaw/workspace/skills/yolo-vision/detect.py
chmod +x ~/.openclaw/workspace/skills/yolo-vision/webcam_monitor.py
```

**坑 4：Webcam 打不開**

Webcam 偵測需要攝影機，而攝影機同一時間只能被一個程式使用。如果你正在用 Zoom、Google Meet、Teams 或其他視訊軟體，Webcam 就會被占用，YOLO6 當然打不開。

排查步驟：

1. 關閉所有可能占用攝影機的程式（Zoom、Teams、瀏覽器的視訊頁面）
2. 如果用的是外接 USB Webcam，拔掉重插一次
3. 打開「裝置管理員」→「攝影機」，確認攝影機裝置有正常顯示（沒有黃色驚嘆號）
4. 還是不行的話，重開機通常能解決——聽起來很蠢，但真的有效

**坑 5：龍蝦收到照片但沒反應**

這個問題稍微複雜，需要逐步排查：

1. **檢查 SKILL.md 格式**：確認 SKILL.md 的開頭有正確的 `---` 前後分隔線，`name` 和 `description` 欄位都有填
2. **檢查 detect.py 能不能單獨執行**：在終端機手動跑 `python detect.py test.jpg`，看有沒有正常輸出 JSON 結果
3. **查看 Gateway 日誌**：這是最有效的排查方式，日誌會告訴你哪裡出錯

```powershell
openclaw gateway logs
```

日誌裡面如果看到紅色的 `Error` 或 `Exception`，通常就是答案。最常見的是 Python 路徑找不到（系統裝了多個 Python 版本）或是 YOLO6 模型檔案沒有自動下載成功。

---

## 22.5 實測：傳照片到 LINE 點名

這是整章的高潮時刻——你第一次用 LINE 完成「拍照點名」的完整流程。

拍一張教室全景照，傳給龍蝦：

```text
你（LINE）：  [拍一張教室全景照片]
              幫我數一下教室裡有幾個人

龍蝦（LINE）：🔍 YOLO6 偵測結果：
              ┌──────────┬──────┬──────────┐
              │ 物件     │ 數量 │ 信心度   │
              ├──────────┼──────┼──────────┤
              │ person   │ 28   │ 平均 91% │
              │ chair    │ 35   │ 平均 87% │
              │ laptop   │ 12   │ 平均 89% │
              └──────────┴──────┴──────────┘
              📊 偵測到 28 個人，35 張椅子，空位約 7 個。

你（LINE）：  今天應到 32 人，那有 4 個沒來

龍蝦（LINE）：今天出席 28 人，缺席 4 人（出席率 87.5%）。
              要我記錄今天的出缺席統計嗎？
```

![智慧點名偵測結果](../截圖/ch22_01_attendance_detect.png)

從拍照到收到結果，前後不到 10 秒。以前花 3 分鐘逐一唸名字，現在一張照片搞定。

如果你在 CH21 學過排程功能，還可以讓龍蝦每節課自動拍照統計。在 `HEARTBEAT.md` 加上：

```markdown
## 每節課自動點名
- 排程: 平日 08:10, 09:10, 10:10, 11:10, 13:10, 14:10, 15:10
- 通道: line
- 動作: 用 Webcam 拍攝教室照片，YOLO6 偵測人數，推播給老師。
```

有一點特別要說明：YOLO6 偵測的是「person」這個類別——它只知道畫面中有幾個「人形物體」，**不會做臉部辨識**。它分不出張三和李四，自然也不會記錄誰是誰。這反而是隱私保護的優點——你計算的是人數，不是身分。

> ✅ **檢查點**：LINE 傳照片給龍蝦，收到包含物件名稱和數量的偵測結果，就表示一切運作正常。你已經完成了「拍照點名」的完整功能！

---

## 22.6 同樣的技術，更多玩法

「拍照數人頭」搞定了。但你有沒有想過——同樣的偵測能力，不只能用在點名？接下來介紹三個延伸場景，全部用你剛裝好的 `yolo-vision` 技能就能做到。

### 22.6.1 安全監控——放學後有人闖進來？

阿亮老師有個困擾：放學後偶爾有學生偷溜進電腦教室玩電腦。以前他只能在門口貼告示「禁止進入」，效果可想而知。

有了 YOLO6 加 Webcam，解決方法很簡單：在教室架一個攝影機，然後在 `HEARTBEAT.md` 加上一段排程：

```markdown
## 放學後教室監控
- 排程: 平日 17:00-22:00 每 5 分鐘
- 條件: Webcam 偵測到 person
- 通道: line
- 動作: 截圖儲存，推播 LINE 警報並附上截圖，回報人數和時間。
```

當有人在放學後闖入教室，你的 LINE 會立刻收到通知：

```text
龍蝦（LINE）：⚠️ 教室監控警報！
              時間：17:42:15
              偵測到：2 個人（信心度 93%、89%）
              [附上截圖]
              目前持續監控中。要我做什麼嗎？
```

安全監控的威力在於它可以和前面學過的功能串接：

- **CH19 Nodes**：教室電腦負責偵測，透過 Nodes 把警報傳到辦公室的龍蝦
- **CH20 Twilio**：偵測到異常時，龍蝦直接打電話給你
- **CH21 排程**：只在放學時段啟動監控，上課時間不會誤報

三個功能組合起來，就是一套完整的校園安全系統——而且零成本，用你已經有的設備就行。

### 22.6.2 物品盤點——書架上有多少本書？

學校圖書館每學期要盤點一次，管理員拿著清冊逐一核對，一個書架要花半小時。YOLO6 雖然沒辦法讀書名，但「快速計數」已經非常實用：

```text
你（LINE）：  [拍一張書架的照片]
              幫我數一下有多少本書

龍蝦（LINE）：🔍 偵測到 47 本書和 2 個花瓶。
              注意：背靠在一起或被遮住的書可能沒偵測到，
              實際數量可能略多。

你（LINE）：  上次盤點是 52 本，少了 5 本

龍蝦（LINE）：已記錄。本次：47 本，上次：52 本，差異 -5 本。
              建議實際清點確認是否有遺失。
```

同樣的原理可以用在很多地方：停車場數車輛和空位、倉庫數貨箱、餐廳計算座位使用率、甚至家裡數收納箱裡有多少東西。只要能拍照，YOLO6 就能數。

### 22.6.3 自訂偵測目標

YOLO6 的預訓練模型不只能偵測「person」，它認得 80 種常見物件。以下是最實用的幾種：

| 類別名稱 | 中文 | 應用場景 |
|---------|------|---------|
| person | 人 | 點名、監控 |
| car / bus / truck | 車輛 | 停車場管理 |
| chair | 椅子 | 座位使用率 |
| laptop | 筆電 | 設備盤點 |
| book | 書 | 圖書館盤點 |
| bottle | 瓶子 | 倉庫管理 |
| cell phone | 手機 | 考試監控 |
| cat / dog | 貓狗 | 寵物監控 |
| backpack | 背包 | 遺失物偵測 |
| umbrella | 雨傘 | 遺失物偵測 |
| cup | 杯子 | 餐飲管理 |
| tv / monitor | 螢幕 | 設備盤點 |

想改偵測目標？修改 `webcam_monitor.py` 啟動時的參數就行。例如偵測手機：

```powershell
python webcam_monitor.py "cell phone" 10
```

這樣每 10 秒偵測一次，發現手機就警報。考試防弊利器？（開玩笑的。）

> ✅ **檢查點**：試著傳一張不同場景的照片給龍蝦——書架、停車場、辦公桌——看看它能偵測到哪些物件。如果結果合理，恭喜你已經完全掌握 YOLO6 技能了！

---

## 22.7 進階：Webcam 即時串流

前面所有操作都是「拍一張照片，偵測一次」。但 YOLO6 的速度快到可以做即時偵測——開著 Webcam，每一幀畫面都在偵測，就像電影裡的監控畫面一樣。

新建一個 `live_detect.py`，貼上以下程式碼：

```python
from ultralytics import YOLO
import cv2

model = YOLO("yolo6n.pt")
cap = cv2.VideoCapture(0)  # 0 = 預設攝影機

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    results = model(frame, verbose=False)
    annotated = results[0].plot()
    cv2.imshow("YOLO6 Live Detection", annotated)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
```

執行 `python live_detect.py`，螢幕會出現一個即時偵測視窗。你在鏡頭前走動，框框會即時跟著你移動；拿起一杯水，框框立刻標上 `cup`；放一本書在桌上，`book` 馬上出現。按 `q` 鍵退出。

不同電腦跑起來的速度差異很大：

| 電腦等級 | 建議模型 | 預估 FPS |
|---------|---------|---------|
| 一般筆電（無 GPU） | yolo6n | 5-10 FPS |
| 有 NVIDIA 顯卡 | yolo6s | 30+ FPS |
| 樹莓派 / 迷你電腦 | yolo6n + 降解析度 | 3-5 FPS |

即時串流可以和前面學過的功能組合出強大的效果：

- 搭配 **CH18 桌面代理**：用 LINE 告訴龍蝦「開始偵測」，龍蝦直接在電腦上啟動偵測腳本
- 搭配 **CH19 Nodes**：家裡電腦開 Webcam 偵測，辦公室的龍蝦遠端接收警報
- 搭配 **CH21 排程**：設定只在特定時段啟動即時偵測，節省電力

> ✅ **檢查點**：執行 `live_detect.py` 後看到即時偵測視窗，框框隨物件移動，按 `q` 能正常退出。如果視窗沒有出現，確認你的電腦有接 Webcam（筆電通常內建）。

---

## 22.8 常見問題

**Q1：需要 GPU 嗎？**

不一定。拍照偵測用 CPU 就夠了，一張照片約 1-3 秒。即時 Webcam 串流才建議有 GPU，否則畫面會比較卡頓。

**Q2：YOLO6 能偵測什麼？**

預訓練模型支援 80 種物件，涵蓋人、車、動物、家具、食物等日常物品。如果需要偵測特殊物件（例如特定教具或零件），就要蒐集照片來訓練自訂模型。

**Q3：和 CH8 的視覺辨識可以同時用嗎？**

可以，而且推薦！YOLO6 負責「數量和位置」（這張照片有 28 個人），CH8 的 Vision 負責「理解和描述」（這是一間電腦教室，學生們正在上課）。兩者互補，龍蝦就真的什麼都看得懂了。

**Q4：偵測結果不準怎麼辦？**

四個解法：

- 換更大的模型（n → s → m），準確度會提升
- 確保拍照時光線充足，避免太暗或逆光
- 物件不要太小或太密集，太遠的東西偵測不到
- 調整信心度閾值：`model("photo.jpg", conf=0.5)` 只顯示信心度 50% 以上的結果，過濾掉不確定的偵測

**Q5：可以在手機上跑嗎？**

YOLO6 不直接在手機上跑，但體驗上和手機 App 沒什麼差別：拍照 → 傳給 LINE 龍蝦 → 龍蝦用電腦上的 YOLO6 偵測 → 回覆結果。從傳照片到收到結果，通常不到 10 秒。

---

## 22.9 小結與展望

我們從一個很具體的問題出發：阿亮老師每天花 3 分鐘點名，能不能拍張照片就搞定？

答案是可以。三個步驟就做到了：

1. **安裝 YOLO6**——`pip install ultralytics`，一行指令
2. **試拍偵測**——十行程式碼，看到框框就表示成功
3. **做成龍蝦技能**——寫好三個檔案，以後 LINE 傳照片就行

做完之後，同樣的技術還能延伸到安全監控、物品盤點、即時串流——甚至搭配 CH18 桌面代理、CH19 多機協作、CH20 語音通話、CH21 排程，組合出一整套智慧校園系統。

回想這本書的旅程：在 CH8 你讓龍蝦第一次「看見」照片，那時候龍蝦只能說「看起來有不少學生」。現在在 CH22，同一張教室照片，龍蝦回答的是 `person: 28, chair: 35, laptop: 12`——精準到每一個物件。從模糊的描述到精確的數字，這就是從 Vision 到 YOLO6 的跨越。

如果你想偵測預訓練模型裡沒有的物件，就需要蒐集照片來訓練自訂模型，可以到 [Ultralytics 官方文件](https://docs.ultralytics.com/) 學習。你的龍蝦，現在真的長出了一雙銳利的眼睛。
