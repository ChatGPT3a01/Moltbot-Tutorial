# CH5 | 安裝 OpenClaw（四種方式）

---

還記得小時候第一次組裝模型嗎？打開盒子，裡面有零件、有說明書、有膠水。有些人喜歡照著說明書一步步來，有些人喜歡直接拆開就拼，還有些人乾脆買已經組好的成品——每種人都能得到一架漂亮的模型飛機，只是過程不一樣。

安裝 OpenClaw 也是這樣。這一章提供四種安裝方式，分別對應不同的需求和技術程度。你可以選最適合自己的那一種，不管走哪條路，最後都能得到一隻活蹦亂跳的龍蝦 AI，在你的 LINE 裡面回覆訊息。

如果你在 CH4 的實戰練習中已經用 Claude Code 產生了 `IDENTITY.md`，太棒了——等龍蝦安裝好之後，你可以直接把那個檔案放進去，讓龍蝦一出生就有自己的個性。

> **本章學習目標**
>
> 1. 了解四種安裝方式的差異，選擇最適合自己的路線
> 2. 完成 OpenClaw 的安裝與初始化設定
> 3. 啟動 Gateway 並透過 ngrok 讓 LINE 連接到龍蝦
> 4. 在 LINE 上成功與龍蝦對話，驗證安裝成功

---

## 5.1 四種方式，一張表看懂

在動手之前，先花一分鐘看看這四種安裝方式的比較。就像買電腦可以買品牌機、自己組裝、搭配免費零件自組、或租雲端主機，各有各的適用場景：

| | 方式一：自動安裝程式 | 方式二：手動 npm 安裝 | 方式三：Ollama 本地免費 | 方式四：GitHub Codespaces |
|---|---|---|---|---|
| **適合誰** | 完全零基礎的新手 | 有一點技術底子的人 | 有好顯卡、想零成本 | 電腦太舊或想免費試玩 |
| **難度** | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **費用** | 依選擇的 AI 模型而定 | 依選擇的 AI 模型而定 | 完全免費（AI 跑在你電腦） | 完全免費（用 Qwen） |
| **龍蝦跑在哪** | 你自己的電腦 | 你自己的電腦 | 你自己的電腦 | GitHub 的雲端伺服器 |
| **AI 跑在哪** | 雲端（Gemini/GPT/Claude） | 雲端（Gemini/GPT/Claude） | 你自己的電腦（Ollama） | 雲端（Qwen） |
| **需要的時間** | 約 15 分鐘 | 約 30 分鐘 | 約 40 分鐘（含下載模型） | 約 20 分鐘 |
| **優點** | 一鍵搞定，不用記指令 | 完全掌控每個步驟 | 零成本、完全離線、隱私保護 | 不佔電腦資源，隨開隨用 |
| **缺點** | 僅限 Windows | 需要自己下指令 | 需要好顯卡（至少 8GB VRAM） | 每月 120 小時免費額度 |

> 💡 **選擇建議**：
> - 第一次接觸、什麼都不想管 → 毫不猶豫選**方式一**
> - 有 NVIDIA 獨立顯卡、想要完全免費不花一毛錢 → 選**方式三**
> - 電腦比較舊、只是想先體驗龍蝦能做什麼 → 選**方式四**
> - 喜歡自己動手、想理解每個步驟背後的原理 → 選**方式二**

接下來，四種方式各有一節專門講解。你只需要讀自己選擇的那一節就好，不需要四種都做。

---

## 5.2 安裝前的共同準備

不管你選哪一種安裝方式，有幾件事情是都要先準備好的。如果你已經在 CH1 完成了帳號申請，這裡只需要把資料找出來就好。

### 5.2.1 確認你手邊有這些資料

請打開你在 CH1 記錄的那張帳號清單（或是你自己的筆記），確認以下資料都在手邊：

| 必要資料 | 從哪裡取得 | 用在哪裡 |
|---------|-----------|---------|
| LINE Channel ID | LINE Developers Console | 讓龍蝦知道要連哪個 LINE 帳號 |
| LINE Channel Secret | LINE Developers Console | 驗證訊息來源的密鑰 |
| LINE Channel Access Token | LINE Developers Console（點 Issue 產生） | 龍蝦發送訊息的授權碼 |
| AI API Key（至少一組） | Google AI Studio / OpenAI / Anthropic | 龍蝦的大腦，負責思考和回答 |
| ngrok Authtoken | ngrok Dashboard | 建立通道讓 LINE 連到你的電腦 |

> 📌 **例外**：如果你選擇**方式三（Ollama）**，不需要 AI API Key，因為 AI 模型會直接跑在你自己的電腦上。如果你選擇**方式四（Codespaces）**，不需要 ngrok Authtoken，因為 GitHub 會幫你處理外部連線。

如果你還沒申請這些帳號，請先回到 CH1 完成申請再回來。安裝過程中會需要一項一項填入這些資料，缺了任何一個都會卡住。

### 5.2.2 AI 模型的選擇

在安裝過程中，龍蝦會問你要用哪一家的 AI 模型。這裡幫你整理一下目前的選項：

| AI 平台 | 推薦模型 | 費用 | 適合誰 |
|---------|---------|------|--------|
| **Google Gemini** | Gemini 3 Flash | 有免費額度 | 新手首選，免費又快 |
| **OpenAI** | GPT-5.2 | 付費 | 想要最強中文能力 |
| **Anthropic** | Claude Sonnet 4.6 | 付費 | 想要最佳程式碼品質 |
| **Ollama（本地）** | Llama 3.3 70B | 完全免費 | 有好顯卡，注重隱私 |

對於剛開始學習的讀者，如果你願意使用雲端 AI，建議選 **Google Gemini**——免費額度夠用、申請方便、回應速度快。如果你希望一切都在自己電腦上運行、完全不依賴外部服務，那就選 **Ollama**，詳細教學在 5.5 節。

等你熟悉了龍蝦的操作之後，隨時可以在設定檔裡切換成其他模型，不需要重新安裝。

---

## 5.3 方式一：Windows 自動安裝程式（推薦新手）

這是阿亮老師為這本書的讀者特別準備的懶人包。把所有繁瑣的安裝步驟打包成一支程式，你只要跟著畫面提示點點點，就能完成安裝。整個過程就像在便利商店買微波食品——拆開、加熱、吃，不需要知道怎麼炒菜。

### 5.3.1 取得安裝程式

自動安裝程式包含在本書的教學資源包裡。如果你有阿亮老師提供的資料夾，請找到以下檔案：

```
龍蝦自動安裝程式/
├── go.bat              ← 從這裡啟動
├── install-lobster.ps1 ← 主安裝腳本
└── SKILL/              ← 預裝的技能包
```

> ⚠️ **注意**：安裝程式有密碼保護，密碼會在課堂上或教學社群中提供。這不是為了刁難你，而是確保安裝程式配合正確的教學版本使用。

### 5.3.2 啟動安裝程式

**【步驟 1】** 在檔案總管中找到 `go.bat`，**對它按右鍵**，選擇「**以系統管理員身分執行**」。

為什麼需要系統管理員權限？因為安裝程式要幫你裝 Node.js、設定系統環境變數、安裝全域的 npm 套件——這些操作都需要比較高的權限，就像你要在房子裡裝修水電，需要房東的鑰匙一樣。

![啟動 go.bat](../截圖/ch5_run_gobat.png)

**【步驟 2】** 畫面會要求你輸入密碼。輸入老師提供的密碼後按 Enter。

**【步驟 3】** 密碼正確後，會出現安裝程式的主選單。你會看到一個彩色的龍蝦 ASCII 藝術圖案，以及目前的環境狀態：

```
╔══════════════════════════════════════╗
║     🦞 龍蝦 AI 自動安裝程式 v3.3    ║
╠══════════════════════════════════════╣
║  Node.js:    ✅ v24.2.0             ║
║  OpenClaw:   ❌ 未安裝              ║
║  ngrok:      ❌ 未安裝              ║
║  LINE:       ❌ 未設定              ║
╚══════════════════════════════════════╝
```

如果你是全新安裝，這些狀態應該大部分都是紅色的 ❌，這完全正常。

### 5.3.3 一鍵全部安裝

**【步驟 4】** 在選單中選擇 **`[1] 全部安裝（新手推薦）`**，然後按 Enter。

這個選項會自動幫你完成以下所有事情：

1. **安裝 Node.js**（如果還沒裝的話）
2. **安裝 Git**（OpenClaw 的安裝過程需要它）
3. **安裝 OpenClaw**（龍蝦的本體）
4. **執行初始化設定**（選擇 AI 模型、填入 API Key）
5. **安裝 LINE 外掛**（讓龍蝦能連接 LINE）
6. **設定 LINE 頻道**（填入 Channel ID、Secret、Token）
7. **安裝與設定 ngrok**（建立外部連線通道）

整個過程大約 10-15 分鐘，取決於你的網路速度。安裝程式會在每個步驟完成時顯示綠色的 ✅，讓你知道進度。

### 5.3.4 初始化設定精靈

在全部安裝的過程中，OpenClaw 的初始化精靈會跳出來問你幾個問題。別緊張，就像填問卷一樣照著回答就好：

**問題 1**：「I understand this is powerful...?」（你了解這是一個強大的工具嗎？）

→ 輸入 **Yes** 然後按 Enter。這只是一個確認提示。

**問題 2**：「Onboarding mode?」（要用什麼模式設定？）

→ 選擇 **QuickStart**。這是最簡單的模式，幫你跳過那些進階選項。

**問題 3**：「Model/auth provider?」（要用哪家的 AI？）

→ 這裡根據你準備的 API Key 來選擇。如果你申請了 Google Gemini 的 API Key，就選 **Google**。

**問題 4**：會要求你貼上 API Key。

→ 把你在 CH1 記錄的 API Key 複製貼上。在 PowerShell 裡面，你可以用**右鍵**來貼上（不是 Ctrl+V）。

**問題 5**：「Default model?」（預設用哪個模型？）

→ 選擇 **Keep current** 或者選你偏好的模型。

**問題 6**：「Select channel?」（要連接哪個聊天頻道？）

→ 選擇 **LINE (Messaging API)**。

接下來安裝程式會自動幫你處理 LINE 外掛的安裝和設定。

### 5.3.5 設定 LINE 頻道資料

安裝程式會依序問你三個 LINE 的資料：

**【步驟 5】** 輸入你的 **LINE Channel ID**（一串數字）。

**【步驟 6】** 輸入你的 **LINE Channel Secret**（一串英數混合的密碼）。

**【步驟 7】** 輸入你的 **LINE Channel Access Token**（一串很長的密碼）。

> 💡 **小技巧**：Channel Access Token 非常長（通常超過 100 個字元），手動輸入很容易出錯。建議先在記事本裡把它複製好，然後在 PowerShell 視窗裡按**右鍵**貼上。

### 5.3.6 設定 ngrok

**【步驟 8】** 安裝程式會安裝 ngrok 並要求你輸入 **ngrok Authtoken**。

這個 Token 可以在 ngrok Dashboard（https://dashboard.ngrok.com/）的「Your Authtoken」頁面找到。複製貼上後，安裝程式會自動幫你設定好。

### 5.3.7 啟動龍蝦

全部設定完成後，安裝程式會問你要不要立刻啟動龍蝦。

**【步驟 9】** 選擇 **啟動 OpenClaw + ngrok**（選單中的 `[9]`）。

畫面上會看到兩個重要的訊息：

```
🦞 OpenClaw Gateway 已啟動！
📡 ngrok 通道已建立：https://xxxx-xx-xx-xxx-xx.ngrok-free.app
```

那一串 `ngrok-free.app` 的網址就是你龍蝦的「門牌號碼」，等一下要把它設定到 LINE 裡面去。請先把這個網址複製起來。

完成啟動後，請直接跳到 **5.7 節**（設定 LINE Webhook 與驗證），繼續完成最後的連線設定。

---

## 5.4 方式二：手動 npm 安裝（進階用戶）

如果你喜歡自己動手、想要理解每個步驟在做什麼，這個方式適合你。手動安裝就像自己從頭煮一道菜——雖然步驟多一些，但你會清楚知道每一樣材料是什麼、為什麼要加。

### 5.4.1 安裝 Node.js

OpenClaw 是用 JavaScript 寫的，需要 Node.js 來執行。如果你在 CH3 學 Claude Code 的時候已經裝過 Node.js，可以先確認一下版本：

**【步驟 1】** 打開 PowerShell，輸入：

```powershell
node -v
```

如果看到 `v22.x.x` 或更高的版本號，代表已經安裝好了，可以跳到下一步。如果顯示「不是可辨識的命令」，表示還沒安裝。

**【步驟 2】** 前往 Node.js 官方網站下載安裝：

```
https://nodejs.org/
```

下載頁面會有兩個版本，選擇左邊的 **LTS（長期支援版）** 下載。下載完成後，雙擊安裝檔，一路按「Next」到底就好，所有預設選項都不用改。

**【步驟 3】** 安裝完成後，**關閉再重新打開** PowerShell（這很重要，否則系統找不到剛裝好的 Node.js），再次輸入 `node -v` 確認。

### 5.4.2 安裝 Git

OpenClaw 在安裝過程中會需要 Git。確認方式：

```powershell
git --version
```

如果還沒安裝，請前往 https://git-scm.com/ 下載安裝，安裝時所有選項保持預設即可。

### 5.4.3 安裝 OpenClaw

**【步驟 4】** 在 PowerShell 中執行：

```powershell
npm install -g openclaw@latest
```

這行指令的意思是：用 npm（Node.js 的套件管理工具）把 OpenClaw 安裝成全域指令。`-g` 代表 global（全域），這樣你在任何資料夾都能使用 `openclaw` 指令。`@latest` 代表安裝最新版本。

安裝過程可能需要 2-5 分鐘，期間會看到很多文字在跑，這是正常的。等到出現類似這樣的訊息，就代表安裝成功了：

```
added 287 packages in 45s
```

**【步驟 5】** 確認安裝成功：

```powershell
openclaw --version
```

應該會顯示出版本號碼。

### 5.4.4 初始化設定

**【步驟 6】** 執行初始化精靈：

```powershell
openclaw onboard --install-daemon
```

這個指令會啟動一個互動式的設定精靈，一步步問你要怎麼配置龍蝦。`--install-daemon` 參數的意思是同時把龍蝦設定成背景服務，這樣它可以在你不注意的時候持續運行。

精靈會問你的問題和方式一（5.3.4 節）完全一樣，請參考那邊的說明來回答。

### 5.4.5 安裝 LINE 外掛

**【步驟 7】** OpenClaw 的聊天頻道是以外掛的形式安裝的。要讓龍蝦連上 LINE，需要安裝 LINE 外掛：

```powershell
openclaw plugins install @openclaw/line
```

### 5.4.6 設定 LINE 頻道

**【步驟 8】** 設定 LINE 的三把鑰匙：

```powershell
openclaw config set channels.line.channelId "你的Channel ID"
openclaw config set channels.line.channelSecret "你的Channel Secret"
openclaw config set channels.line.channelAccessToken "你的Channel Access Token"
```

請把引號裡面的文字替換成你自己的資料。注意每一行都是獨立的指令，要一行一行分別執行。

### 5.4.7 安裝與設定 ngrok

**【步驟 9】** 安裝 ngrok。如果你的 Windows 有 winget（Windows 11 預裝），可以直接用這個指令：

```powershell
winget install ngrok.ngrok
```

或者前往 https://ngrok.com/ 下載安裝檔。

**【步驟 10】** 設定 ngrok 的認證：

```powershell
ngrok config add-authtoken 你的ngrok_authtoken
```

### 5.4.8 啟動龍蝦

**【步驟 11】** 啟動 OpenClaw Gateway：

```powershell
openclaw gateway start
```

**【步驟 12】** 另外開一個 PowerShell 視窗，啟動 ngrok 通道：

```powershell
ngrok http 18789
```

`18789` 是 OpenClaw Gateway 的預設連接埠。ngrok 啟動後，畫面上會顯示一個 `Forwarding` 的網址，長得像這樣：

```
Forwarding  https://xxxx-xx-xx-xxx-xx.ngrok-free.app -> http://localhost:18789
```

把 `https://` 開頭的那段網址複製起來，接下來要用。

完成後，請跳到 **5.7 節**繼續設定 LINE Webhook。

---

## 5.5 方式三：Ollama 本地免費方案（零成本、完全離線）

如果你手邊有一張不錯的 NVIDIA 獨立顯卡，這個方式值得認真考慮。Ollama 是一個可以在自己電腦上跑 AI 模型的工具——意思是，龍蝦的「大腦」不需要連到雲端，完全在你的電腦裡運算。好處很明顯：**完全免費**（不用買 API 額度）、**完全離線**（斷網也能用）、**完全隱私**（你的對話不會傳到任何公司的伺服器）。

聽起來太美好了？確實有個門檻：你的顯卡需要有足夠的顯示記憶體（VRAM）來裝得下 AI 模型。下面這張表幫你判斷自己的電腦夠不夠力：

| 顯卡等級 | VRAM | 可以跑的模型 | 回應速度 |
|---------|------|-------------|---------|
| GTX 1660 / RTX 2060 | 6GB | Llama 3.2 3B（輕量版） | 普通，短對話OK |
| RTX 3060 / RTX 4060 | 8GB | Llama 3.1 8B（標準版） | 流暢，日常夠用 |
| RTX 3070 / RTX 4070 | 12GB | Qwen 3 14B | 很流暢 |
| RTX 3090 / RTX 4080+ | 16GB+ | Llama 3.3 70B（最強） | 非常流暢 |

> 💡 **不確定自己顯卡有多少 VRAM？** 在 Windows 搜尋列輸入「dxdiag」，打開後切到「顯示」分頁，「顯示記憶體」那一欄就是你的 VRAM 大小。

如果你的電腦是內建顯卡（Intel UHD 之類的）或者顯卡記憶體不到 6GB，那這個方式可能跑起來會很慢，建議改選方式一或方式四。

### 5.5.1 安裝 Ollama

**【步驟 1】** 前往 Ollama 官方網站下載安裝程式：

```
https://ollama.com/
```

點擊首頁上大大的「Download」按鈕，選擇 Windows 版本下載。

**【步驟 2】** 下載完成後，雙擊安裝檔進行安裝。安裝過程非常簡單，一路按「Next」到底就好。

**【步驟 3】** 安裝完成後，打開 PowerShell，輸入以下指令確認安裝成功：

```powershell
ollama --version
```

如果顯示版本號碼，代表安裝成功了。

### 5.5.2 下載 AI 模型

Ollama 裝好之後，還需要下載一個 AI 模型——就像買了一台電腦，還要安裝作業系統才能用。

**【步驟 4】** 根據你的顯卡能力，選一個模型來下載：

**顯卡 8GB 以上（推薦）**：
```powershell
ollama pull llama3.1:8b
```

**顯卡 12GB 以上**：
```powershell
ollama pull qwen3:14b
```

**顯卡 16GB 以上（最強體驗）**：
```powershell
ollama pull llama3.3:70b
```

**顯卡只有 6GB**：
```powershell
ollama pull llama3.2:3b
```

下載過程需要一些時間（模型檔案通常有好幾 GB），取決於你的網路速度。下載進度會顯示在畫面上，耐心等它跑完就好。

**【步驟 5】** 下載完成後，先測試模型能不能正常運作：

```powershell
ollama run llama3.1:8b
```

這會啟動一個對話視窗，你可以試著打幾句話跟它聊。如果它能正常回覆，代表模型沒有問題。按 `Ctrl+D` 或輸入 `/bye` 離開對話。

### 5.5.3 安裝 OpenClaw 並設定 Ollama

接下來要安裝 OpenClaw 本體。Node.js 和 Git 的安裝步驟和方式二（5.4.1、5.4.2 節）完全一樣，如果你已經裝好了可以直接跳過。

**【步驟 6】** 安裝 OpenClaw：

```powershell
npm install -g openclaw@latest
```

**【步驟 7】** 執行初始化精靈：

```powershell
openclaw onboard --install-daemon
```

這裡的回答和方式一稍有不同——

**問題 3**：「Model/auth provider?」（要用哪家的 AI？）

→ 選擇 **Ollama**。

**問題 4**：不會問你 API Key（因為 Ollama 在本地跑，不需要密鑰）。

**問題 5**：「Default model?」

→ 輸入你剛才下載的模型名稱，例如 `llama3.1:8b`。

其他問題的回答和方式一一樣。

### 5.5.4 確認 Ollama 服務正在運行

OpenClaw 要和 Ollama 溝通，Ollama 的服務必須在背景持續運行。通常安裝 Ollama 之後它會自動啟動，但你可以確認一下：

**【步驟 8】** 在 PowerShell 中執行：

```powershell
ollama list
```

如果能列出你下載的模型，代表 Ollama 服務正在運行。如果顯示錯誤，試著手動啟動：

```powershell
ollama serve
```

> 💡 **小提醒**：Ollama 服務需要一直在背景運行，龍蝦才能正常回覆。如果你重開機之後龍蝦不回話了，通常是因為 Ollama 還沒啟動。Ollama 預設會在 Windows 開機時自動啟動，但如果你關掉了自動啟動功能，記得手動執行 `ollama serve`。

### 5.5.5 安裝 LINE 外掛、設定 ngrok 與啟動

接下來的步驟和方式二完全一樣：

**【步驟 9】** 安裝 LINE 外掛並設定頻道：

```powershell
openclaw plugins install @openclaw/line
openclaw config set channels.line.channelId "你的Channel ID"
openclaw config set channels.line.channelSecret "你的Channel Secret"
openclaw config set channels.line.channelAccessToken "你的Channel Access Token"
```

**【步驟 10】** 安裝並設定 ngrok：

```powershell
winget install ngrok.ngrok
ngrok config add-authtoken 你的ngrok_authtoken
```

**【步驟 11】** 啟動龍蝦和 ngrok：

```powershell
openclaw gateway start
```

另開一個 PowerShell 視窗：

```powershell
ngrok http 18789
```

把 ngrok 顯示的網址複製起來，然後跳到 **5.7 節**設定 LINE Webhook。

---

## 5.6 方式四：GitHub Codespaces（免費雲端方案）

如果你的電腦比較舊，或者你暫時不想在自己的電腦上安裝一堆東西，這個方式是最好的選擇。GitHub Codespaces 提供了一台免費的雲端電腦，龍蝦跑在上面，你只需要打開瀏覽器就能操作。

這個方案完全免費嗎？讓我們算一筆帳：

| 項目 | 費用 | 說明 |
|------|------|------|
| GitHub Codespaces | $0 | 每月免費 120 小時 + 15GB 儲存空間 |
| Qwen AI 模型 | $0 | 每天 2000 次免費呼叫 |
| LINE Messaging API | $0 | 免費方案，訊息數量無限制 |
| **每月總計** | **$0** | 完全免費 |

唯一的限制是每月 120 小時的使用時間。如果龍蝦每天跑 4 小時，一個月剛好用完。對於學習和日常使用來說，這個額度是夠的。不用的時候記得把 Codespace 停下來就好。

### 5.6.1 建立 GitHub 倉庫

**【步驟 1】** 登入你的 GitHub 帳號（https://github.com/），點擊右上角的 **「+」** 號，選擇 **「New repository」**。

**【步驟 2】** 填寫倉庫資訊：

- **Repository name**：`openclaw-ai-bot`（或任何你喜歡的名字）
- **Description**：`My OpenClaw AI Assistant`
- **Visibility**：選擇 **Public**（公開，Codespaces 免費方案需要）
- 勾選 **Add a README file**

然後點 **「Create repository」**。

![建立 GitHub 倉庫](../截圖/ch5_create_repo.png)

### 5.6.2 新增 Codespaces 設定檔

接下來要在倉庫裡新增幾個設定檔，告訴 Codespaces 怎麼建立龍蝦的運行環境。

**【步驟 3】** 在倉庫頁面，點擊 **「Add file」** → **「Create new file」**。

在檔案名稱欄位輸入 `.devcontainer/devcontainer.json`（注意前面有一個點），內容如下：

```json
{
  "name": "OpenClaw AI Bot",
  "image": "mcr.microsoft.com/devcontainers/universal:latest",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "22"
    }
  },
  "postCreateCommand": "npm install -g openclaw@latest && npm install",
  "forwardPorts": [8080],
  "portsAttributes": {
    "8080": {
      "label": "OpenClaw UI",
      "onAutoForward": "openPreview"
    }
  }
}
```

這個檔案的作用是告訴 Codespaces：「請幫我準備一台裝了 Node.js 22 的電腦，建好之後自動安裝 OpenClaw。」

點 **「Commit changes」** 儲存。

**【步驟 4】** 同樣的方式，新增 `package.json`：

```json
{
  "name": "openclaw-ai-bot",
  "version": "1.0.0",
  "description": "OpenClaw AI Assistant",
  "scripts": {
    "start": "openclaw gateway start",
    "setup": "openclaw onboard"
  },
  "dependencies": {
    "openclaw": "latest"
  }
}
```

### 5.6.3 啟動 Codespace

**【步驟 5】** 回到倉庫的主頁面，點擊綠色的 **「Code」** 按鈕，切換到 **「Codespaces」** 分頁，然後點 **「Create codespace on main」**。

![啟動 Codespace](../截圖/ch5_create_codespace.png)

GitHub 會開始建立你的雲端開發環境，這個過程大約需要 2-3 分鐘。完成後，你會看到一個類似 VS Code 的畫面在瀏覽器裡開啟——這就是你的雲端電腦。

### 5.6.4 在 Codespace 中設定龍蝦

**【步驟 6】** 在 Codespace 下方的終端機（Terminal）裡，執行初始化設定：

```bash
openclaw onboard --install-daemon
```

設定精靈的問題和方式一（5.3.4 節）一樣。AI 模型的部分，如果你想要完全免費，可以選擇 **Qwen**（通義千問），它提供了相當慷慨的免費額度。

**【步驟 7】** 安裝 LINE 外掛並設定頻道資料：

```bash
openclaw plugins install @openclaw/line
openclaw config set channels.line.channelId "你的Channel ID"
openclaw config set channels.line.channelSecret "你的Channel Secret"
openclaw config set channels.line.channelAccessToken "你的Channel Access Token"
```

### 5.6.5 啟動龍蝦

**【步驟 8】** 啟動 Gateway：

```bash
openclaw gateway start
```

Codespaces 會自動偵測到有服務在運行，並跳出一個通知問你要不要公開這個端口。點選 **「Make Public」**，這樣 LINE 才能從外面連進來。

**【步驟 9】** 取得你的 Codespace 公開網址。在終端機輸入：

```bash
echo "https://${CODESPACE_NAME}-8080.app.github.dev"
```

或者在 Codespace 左下角的 **「PORTS」** 分頁中找到 8080 端口對應的公開網址。這個網址就是你的 Webhook 位置，把它複製起來。

> 💡 **和方式一、二、三的差別**：Codespaces 不需要 ngrok，因為 GitHub 已經幫你做了類似的事情——把雲端電腦的端口直接公開到網路上。

完成後，請繼續 **5.7 節**設定 LINE Webhook。

---

## 5.7 設定 LINE Webhook 與驗證

不管你用哪一種方式安裝，最後都要做這一步：告訴 LINE「我的龍蝦在這裡，有訊息請送過來」。這個步驟就像在郵局登記你的收件地址——LINE 是郵差，你要告訴它把信（訊息）送到哪裡去。

### 5.7.1 設定 Webhook URL

**【步驟 1】** 打開瀏覽器，前往 LINE Developers Console：

```
https://developers.line.biz/
```

**【步驟 2】** 登入後，進入你在 CH1 建立的那個 **Provider**，點進你的 **Messaging API Channel**。

**【步驟 3】** 找到 **「Messaging API」** 分頁，往下捲到 **「Webhook settings」** 區域。

**【步驟 4】** 在 **「Webhook URL」** 欄位中，填入你的龍蝦網址，後面加上 `/line/webhook`：

- **方式一、二、三**（使用 ngrok）：`https://xxxx-xx-xx-xxx-xx.ngrok-free.app/line/webhook`
- **方式四**（使用 Codespaces）：`https://你的codespace名稱-8080.app.github.dev/line/webhook`

![設定 LINE Webhook URL](../截圖/ch5_line_webhook.png)

**【步驟 5】** 點擊 **「Verify」** 按鈕。如果看到 **「Success」** 的綠色提示，恭喜你，LINE 已經成功連上你的龍蝦了！

如果驗證失敗，先不要慌，常見原因有：

- ngrok 或 Codespace 沒有在運行（檢查那個視窗是不是還開著）
- 網址打錯了（確認有沒有少打 `/line/webhook`）
- Channel Secret 不匹配（回去確認設定值是否正確）

### 5.7.2 關閉 LINE 的自動回覆

這是一個很多人會忘記的步驟，但非常重要。LINE 官方帳號預設會開啟「自動回覆訊息」功能，它會搶在龍蝦之前回覆罐頭訊息，導致使用者收到兩則回覆——一則是龍蝦的、一則是 LINE 內建的。

**【步驟 6】** 在 Webhook settings 區域，找到 **「Auto-reply messages」**，點 **「Edit」**。

這會把你帶到 LINE Official Account Manager 的頁面。在這裡：

- 把 **回應模式** 設成 **Bot**
- 把 **自動回應訊息** 設成 **停用**
- 確認 **Webhook** 是 **啟用** 狀態

![關閉 LINE 自動回覆](../截圖/ch5_disable_autoreply.png)

### 5.7.3 配對你的 LINE 帳號

**【步驟 7】** 用手機打開 LINE，掃描你的 Messaging API Channel 頁面上的 **QR Code**，把這個 Bot 加為好友。

**【步驟 8】** 在 LINE 聊天室裡，隨便傳一句話給龍蝦，例如「你好」。

第一次傳訊息時，龍蝦還不認識你，它會回覆一組 **配對碼**（Pairing Code），看起來像 `A1B2C3` 這樣的英數組合。

**【步驟 9】** 回到電腦上，在 PowerShell（方式一、二、三）或 Codespace 終端機（方式四）中輸入：

```
openclaw pairing approve line 你的配對碼
```

把「你的配對碼」換成龍蝦回覆給你的那組代碼。

**【步驟 10】** 回到 LINE，再傳一次「你好」。

這一次，龍蝦應該會用正常的語氣回覆你了。如果你在 CH4 製作了 IDENTITY.md 並且已經放進 workspace 資料夾，龍蝦還會用你設定的個性來回答。

> 🎉 **恭喜你！** 如果龍蝦成功回覆了，代表整個安裝流程已經完成。你現在擁有了一隻屬於自己的 AI 助手，它住在你的電腦（或雲端）裡，透過 LINE 和你對話。

---

## 5.8 安裝後的健康檢查

就像新車買回來要先跑一趟保養廠做檢查，龍蝦裝好之後也建議做一次健康檢查，確認所有零件都正常運作。

### 5.8.1 使用 doctor 指令

OpenClaw 內建了一個診斷工具，就叫做 `doctor`（醫生）。在終端機中執行：

```powershell
openclaw doctor
```

它會檢查以下項目，並且用 ✅ 和 ❌ 告訴你結果：

- Node.js 版本是否足夠
- OpenClaw 是否正確安裝
- 設定檔是否存在且格式正確
- AI API Key 是否有效（Ollama 用戶則檢查 Ollama 服務是否運行）
- LINE 外掛是否已安裝
- LINE 頻道設定是否完整
- Gateway 是否正在運行

如果全部都是 ✅，那就萬事大吉。如果有 ❌，`doctor` 通常也會告訴你怎麼修復。

### 5.8.2 確認 Gateway 狀態

```powershell
openclaw gateway status
```

正常的話會顯示 Gateway 正在運行中（running），以及它監聽的端口號（18789）。

### 5.8.3 放入你的 IDENTITY.md

如果你在 CH4 用 Claude Code 產生了 `IDENTITY.md`，現在是時候把它放進龍蝦的 workspace 了。

**Windows 方式一、二、三**的 workspace 位置：

```
C:\Users\你的使用者名稱\.openclaw\workspace\
```

**Codespaces 方式四**的 workspace 位置：

```
~/.openclaw/workspace/
```

把 `IDENTITY.md` 複製到上面的資料夾裡，然後重啟 Gateway：

```powershell
openclaw gateway restart
```

重啟之後，再去 LINE 跟龍蝦聊幾句。你會發現它的說話方式變了——變成了你在 IDENTITY.md 裡設定的那個角色。這就是個性化 AI 的魅力所在。

---

## 5.9 常見問題

在安裝過程中，可能會遇到一些狀況。這裡整理了最常見的幾個問題和解決方法。

**Q1：安裝 OpenClaw 時出現「npm ERR! code ERESOLVE」**

這通常是因為 Git 沒有安裝。OpenClaw 在安裝過程中需要從 Git 倉庫拉取一些東西。解決方法是先安裝 Git（https://git-scm.com/），然後再重新執行安裝指令。

**Q2：輸入 `openclaw` 指令顯示「不是可辨識的命令」**

安裝完 Node.js 或 OpenClaw 之後，需要關閉目前的 PowerShell 視窗，然後重新打開一個新的。這是因為系統的 PATH 環境變數在安裝時更新了，但舊的視窗還在用舊的 PATH。

**Q3：ngrok 啟動後，LINE Webhook 驗證失敗**

先確認 ngrok 顯示的網址有沒有正確複製。常見的錯誤包括：多複製了空格、少了 `https://`、或者忘記在後面加 `/line/webhook`。另外，ngrok 免費版每次重啟都會換一個新網址，所以如果你中途關掉又重開 ngrok，需要去 LINE Developers 那邊更新 Webhook URL。

**Q4：龍蝦在 LINE 上回覆了兩則訊息**

這是因為 LINE 的自動回覆功能還沒關掉。請回到 5.7.2 節的步驟，確認已經把自動回應訊息停用了。

**Q5：Codespaces 開了一陣子之後龍蝦不回覆了**

GitHub Codespaces 在閒置一段時間後會自動休眠（預設 30 分鐘沒有操作）。回到 GitHub 的 Codespaces 管理頁面，重新啟動它就好。如果經常使用，可以在 Codespace 設定中把閒置超時時間調長。

**Q6：我想換一個 AI 模型，要怎麼做？**

不需要重新安裝。在終端機中執行：

```powershell
openclaw config set agents.defaults.model.primary "gemini-3-flash"
openclaw gateway restart
```

把 `gemini-3-flash` 換成你想要的模型名稱就好。常用的選項包括：`gpt-5.2`、`claude-sonnet-4-6`、`gemini-3-pro`。如果要切換到 Ollama，填入你下載的模型名稱即可，例如 `llama3.1:8b`。

**Q7：用 Ollama 的時候，龍蝦回覆很慢或是回覆到一半就斷了**

這通常是顯卡記憶體不夠。解決方法有兩個：一是換一個比較小的模型（例如從 `llama3.1:8b` 換成 `llama3.2:3b`）；二是關掉其他佔用顯卡的程式（比如遊戲或影片編輯軟體），讓 Ollama 能用到更多的顯卡記憶體。

**Q8：Ollama 模型下載到一半失敗了**

重新執行同一個 `ollama pull` 指令就好，Ollama 支援斷點續傳，會從上次中斷的地方繼續下載，不會從頭來過。

---

## 5.10 小結與展望

這一章帶你走過了安裝 OpenClaw 的完整流程。不管你選的是一鍵安裝、手動安裝、Ollama 本地方案、還是雲端 Codespaces，現在你的龍蝦應該已經在 LINE 上活蹦亂跳了。

讓我們回顧一下你完成了什麼：你安裝了 OpenClaw 和它的 LINE 外掛、設定了 AI 模型（不管是雲端 API 還是本地 Ollama）、透過 ngrok 或 Codespaces 建立了外部連線通道、在 LINE Developers 設定了 Webhook 讓訊息能送到龍蝦那裡、完成了配對、甚至還放入了你自製的 IDENTITY.md 給龍蝦一個專屬的人格。

但目前龍蝦只會用文字回覆你的訊息——就像一個只會傳簡訊的朋友。在下一章 CH6，我們要教龍蝦一個新技能：**透過 Telegram 和你聊天，而且還能看懂你傳的照片**。Telegram 比 LINE 多了很多好玩的功能（比如內建的機器人生態系），而龍蝦的視覺辨識能力更是會讓你大開眼界——你拍一張冰箱裡的食材照片傳給它，它就能告訴你今天可以煮什麼菜。

準備好了嗎？翻到下一章繼續吧。
