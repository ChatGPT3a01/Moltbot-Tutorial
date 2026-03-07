# CH9 | TUI / CLI / Dashboard 操作介面

---

前面幾章你一直在 LINE 和 Telegram 的聊天室裡跟龍蝦對話——傳訊息、傳照片、叫它自拍。這就像你透過餐廳的外送平台點餐一樣方便。但如果你想知道廚房裡發生了什麼事、想調整食譜、想看看今天的營業報表呢？你就需要走進「後台」了。

龍蝦的「後台」有三種入口，各有各的用途：

- **TUI**（Terminal User Interface）——終端機裡的圖形化互動介面，有選單和畫面可以操作
- **CLI**（Command Line Interface）——指令列工具，直接打指令讓龍蝦做事
- **Dashboard**——網頁版儀表板，用瀏覽器就能管理龍蝦

這一章會一一帶你認識它們，讓你不只會「跟龍蝦聊天」，還能「管理龍蝦」。

> **本章學習目標**
>
> 1. 認識 OpenClaw 的三種操作介面，了解各自的定位
> 2. 學會使用 TUI 互動介面進行日常操作
> 3. 熟悉 CLI 指令列的常用指令
> 4. 學會用 Dashboard 網頁介面管理對話與設定
> 5. 判斷不同情境下該用哪種介面

---

## 9.1 三種操作介面總覽

### 9.1.1 為什麼需要三種介面

你可能會問：「不是有 LINE 就好了嗎？幹嘛還要學後台？」

這是個好問題。LINE 和 Telegram 是你跟龍蝦「聊天」的地方，但有些事情不適合在聊天室裡做：

- **啟動和關閉龍蝦**——龍蝦不會自己按開機鍵
- **查看運行狀態**——龍蝦現在是活的還是掛了？
- **安裝和管理技能**——幫龍蝦學新本領
- **修改設定檔**——調整 AI 模型、API Key 等
- **瀏覽對話記錄**——看看龍蝦跟別人都聊了什麼
- **診斷問題**——龍蝦不回訊息了，到底哪裡出問題？

這些「管理層級」的操作，就是三種後台介面存在的理由。

### 9.1.2 三種介面比較

| 比較項目 | TUI（終端機介面） | CLI（指令列工具） | Dashboard（網頁儀表板） |
|---------|-----------------|------------------|----------------------|
| **開啟方式** | 終端機輸入指令 | 終端機輸入指令 | 瀏覽器開啟網頁 |
| **操作方式** | 用鍵盤選選單 | 打指令 | 用滑鼠點按鈕 |
| **視覺化程度** | ★★★ 中等 | ★ 純文字 | ★★★★★ 最高 |
| **適合誰** | 想快速操作的人 | 熟悉指令的進階用戶 | 喜歡圖形介面的人 |
| **功能完整度** | 常用功能 | 最完整 | 常用功能 |
| **最大優勢** | 選單導引，不用背指令 | 可寫腳本自動化 | 最直覺，視覺化 |
| **需要的軟體** | 終端機（已有） | 終端機（已有） | 瀏覽器（已有） |

簡單來說：

- **新手**：先學 Dashboard（最直覺）→ 再學 TUI（最方便）→ 最後學 CLI（最強大）
- **趕時間**：用 TUI，選幾個選項就搞定
- **進階用戶**：用 CLI，一行指令搞定所有事

三種介面操作的是同一隻龍蝦，就像你可以用遙控器、手機 App、或面板來操作同一台冷氣——用哪個都行，效果一樣。

---

## 9.2 TUI——終端機互動介面

TUI 是龍蝦提供的一個「半圖形化」的終端機介面。它不像 CLI 那樣要你背指令，而是用選單和按鈕引導你操作。對於不想記指令、但又需要快速做事的人來說，TUI 是最好的選擇。

### 9.2.1 啟動 TUI

打開終端機（PowerShell 或 Terminal），輸入：

```powershell
openclaw
```

沒錯，就是單獨一個 `openclaw`，不加任何參數。龍蝦就會進入 TUI 模式，顯示一個互動式的操作介面。

你會看到類似這樣的畫面：

```
╔══════════════════════════════════════════╗
║           🦞 OpenClaw TUI               ║
╠══════════════════════════════════════════╣
║                                          ║
║   > Gateway 管理                         ║
║     設定                                 ║
║     外掛管理                             ║
║     技能管理                             ║
║     配對管理                             ║
║     診斷工具                             ║
║     離開                                 ║
║                                          ║
╚══════════════════════════════════════════╝
```

用**上下方向鍵**移動選取項目，按 **Enter** 進入該功能。想回上一層就按 **Esc** 或選「返回」。

### 9.2.2 TUI 主選單功能

#### Gateway 管理

這是你最常用的功能。進入後可以看到：

- **啟動 Gateway**——讓龍蝦開始運行
- **停止 Gateway**——關閉龍蝦
- **重啟 Gateway**——重新啟動（修改設定後要用）
- **查看狀態**——確認龍蝦是否正在運行

選「啟動 Gateway」後，龍蝦就會開始監聽 LINE 和 Telegram 的訊息。終端機會顯示運行的日誌（log），讓你知道龍蝦正在做什麼。

#### 設定

可以瀏覽和修改龍蝦的設定，包括：

- AI 模型選擇（切換 Gemini / GPT / Claude / Ollama）
- API Key 設定
- 通道設定（LINE / Telegram 等）
- 進階選項

TUI 會用表單的方式讓你填寫，比手動編輯 JSON 檔案方便很多。

#### 外掛管理

列出所有已安裝的外掛（Plugins），讓你可以啟用、停用或更新外掛。例如 Telegram 通道就是透過外掛安裝的。

#### 技能管理

顯示龍蝦已安裝的技能（Skills），可以查看每個技能的說明、啟用或停用技能。CH15 會深入教你技能生態系。

#### 配對管理

查看和管理已配對的使用者。可以看到每個使用者的配對狀態、所屬通道，也可以新增或移除配對。

#### 診斷工具

龍蝦的「健康檢查」功能，會自動檢測各項設定是否正確、API 是否連通、通道是否正常。這就是 CLI 裡的 `openclaw doctor`（後面會教）的圖形化版本。

### 9.2.3 TUI 常用操作範例

**範例一：快速重啟龍蝦**

修改了 IDENTITY.md 之後，想讓新人設生效：

1. 開啟 TUI：`openclaw`
2. 選「Gateway 管理」→ Enter
3. 選「重啟 Gateway」→ Enter
4. 等龍蝦顯示「Gateway restarted successfully」
5. 按 Esc 回到主選單，或選「離開」退出 TUI

**範例二：檢查龍蝦狀態**

龍蝦在 LINE 上突然不回了：

1. 開啟 TUI：`openclaw`
2. 選「Gateway 管理」→ Enter
3. 選「查看狀態」→ Enter
4. 看輸出訊息：如果顯示 `running` 表示龍蝦還活著，問題可能在其他地方；如果顯示 `stopped` 就選「啟動 Gateway」

**範例三：幫朋友配對**

朋友加了你的 LINE Bot，傳了訊息拿到配對碼：

1. 開啟 TUI：`openclaw`
2. 選「配對管理」→ Enter
3. 選「新增配對」
4. 選擇通道（LINE）
5. 輸入朋友的配對碼
6. 確認完成

### 9.2.4 離開 TUI

按 **Esc** 到最外層，然後選「離開」；或直接按 **Ctrl + C** 強制退出。

> 💡 **小提醒**：TUI 只是一個管理介面，關掉 TUI 不會影響龍蝦的運行。只要你之前有啟動 Gateway，龍蝦就會持續在背景運行，不需要一直開著 TUI。

---

## 9.3 CLI——指令列工具

CLI 是龍蝦最「硬派」的操作方式。你直接在終端機裡打指令，龍蝦照做。雖然需要記一些指令，但它是功能最完整的介面，而且可以寫進腳本裡實現自動化。

### 9.3.1 指令的基本格式

所有 CLI 指令都以 `openclaw` 開頭，後面接「子指令」和「參數」：

```
openclaw <子指令> <動作> [參數]
```

例如：

```powershell
openclaw gateway start       # 啟動 Gateway
openclaw doctor              # 健康檢查
openclaw skills list         # 列出所有技能
```

如果你不記得有哪些指令，隨時可以加 `--help`：

```powershell
openclaw --help              # 列出所有子指令
openclaw gateway --help      # 列出 gateway 的所有動作
```

### 9.3.2 Gateway 管理指令

Gateway 是龍蝦的核心——所有訊息的收發都透過 Gateway。這是你最常用的一組指令。

| 指令 | 功能 | 什麼時候用 |
|------|------|-----------|
| `openclaw gateway start` | 啟動龍蝦 | 開機後、或龍蝦被關掉後 |
| `openclaw gateway stop` | 關閉龍蝦 | 不需要龍蝦時 |
| `openclaw gateway restart` | 重啟龍蝦 | 修改設定後想讓新設定生效 |
| `openclaw gateway status` | 查看狀態 | 確認龍蝦是否正在運行 |

**啟動龍蝦：**

```powershell
openclaw gateway start
```

成功的話會看到：

```
🦞 OpenClaw Gateway starting...
✅ Gateway is running on port 18789
✅ LINE channel connected
✅ Telegram channel connected
```

如果你在 CH7 有安裝 Telegram 外掛，就會看到兩個通道都連上。

**查看狀態：**

```powershell
openclaw gateway status
```

輸出範例：

```
Gateway Status: running
Port: 18789
Uptime: 2h 35m
Channels:
  - LINE: connected
  - Telegram: connected
AI Model: gemini-3-flash
Memory Usage: 128MB
```

這個指令就像量體溫一樣——龍蝦不回訊息了？先跑這個指令看看。

**重啟龍蝦：**

```powershell
openclaw gateway restart
```

什麼時候需要重啟？

- 修改了 `openclaw.json` 設定檔
- 修改了 `IDENTITY.md`、`SOUL.md` 等工作區檔案
- 安裝了新的外掛或技能
- 龍蝦回覆變得很慢或不正常

> 💡 **小提醒**：重啟的過程中（通常幾秒鐘），龍蝦會暫時無法回覆 LINE / Telegram 的訊息。如果你正好在跟龍蝦聊天，等幾秒再傳就好。

### 9.3.3 設定管理指令

龍蝦的設定檔是 `openclaw.json`，位在 `~/.openclaw/` 目錄下。你可以直接用文字編輯器打開它修改，但 CLI 提供了更方便的方式。

**查看目前設定：**

```powershell
openclaw config list
```

會列出所有設定項目和目前的值。

**修改單一設定：**

```powershell
openclaw config set ai.model gemini-3-flash
```

這會把 AI 模型改成 Gemini 3 Flash。

**查看特定設定值：**

```powershell
openclaw config get ai.model
```

只顯示 AI 模型的設定值。

**常見的設定項目：**

| 設定路徑 | 說明 | 範例值 |
|---------|------|--------|
| `ai.model` | AI 模型 | `gemini-3-flash`、`gpt-5.2`、`claude-sonnet-4-6` |
| `ai.apiKey` | API 金鑰 | （你的金鑰） |
| `line.channelId` | LINE Channel ID | （數字字串） |
| `line.channelSecret` | LINE Channel Secret | （字串） |
| `line.channelAccessToken` | LINE Access Token | （長字串） |
| `gateway.port` | Gateway 埠號 | `18789`（預設） |

> ⚠️ **安全提醒**：`openclaw config list` 可能會顯示你的 API Key。在錄影、直播或截圖時要特別注意，不要曝光這些敏感資訊。

### 9.3.4 外掛管理指令

外掛（Plugins）讓龍蝦可以連接不同的通道和服務。在 CH7 安裝 Telegram 通道時你已經用過了。

**列出已安裝的外掛：**

```powershell
openclaw plugins list
```

輸出範例：

```
Installed Plugins:
  ✅ @anthropic/line-channel (v2.1.0) - LINE Messaging Channel
  ✅ @anthropic/telegram-channel (v1.3.0) - Telegram Bot Channel
  ❌ @anthropic/discord-channel (v1.0.0) - Discord Channel [disabled]
```

✅ 表示已啟用，❌ 表示已安裝但停用中。

**安裝新外掛：**

```powershell
openclaw plugins install @anthropic/外掛名稱
```

**移除外掛：**

```powershell
openclaw plugins remove @anthropic/外掛名稱
```

**啟用 / 停用外掛：**

```powershell
openclaw plugins enable @anthropic/外掛名稱
openclaw plugins disable @anthropic/外掛名稱
```

### 9.3.5 技能管理指令

技能（Skills）是龍蝦的「能力」。每個技能讓龍蝦多會做一件事。

**列出已安裝的技能：**

```powershell
openclaw skills list
```

**安裝新技能：**

```powershell
openclaw skills install 技能名稱
```

**移除技能：**

```powershell
openclaw skills remove 技能名稱
```

技能的完整教學在 CH15，這裡先知道怎麼列出和安裝就好。

### 9.3.6 配對管理指令

管理跟龍蝦配對的使用者。

**列出所有已配對的使用者：**

```powershell
openclaw pairing list
```

**核准配對：**

```powershell
openclaw pairing approve line 配對碼
openclaw pairing approve telegram 配對碼
```

**移除配對：**

```powershell
openclaw pairing remove 使用者ID
```

### 9.3.7 診斷工具——openclaw doctor

這是最實用的一個指令。當龍蝦出問題時，第一件事就是跑它：

```powershell
openclaw doctor
```

它會自動檢查一系列項目，輸出大概長這樣：

```
🩺 OpenClaw Doctor - 健康檢查報告
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Node.js 版本: v24.2.0 (需要 >= 22.0.0)
✅ OpenClaw 版本: v3.8.2 (最新版)
✅ 設定檔: ~/.openclaw/openclaw.json 存在
✅ 工作區: ~/.openclaw/workspace/ 存在
✅ AI 模型: gemini-3-flash (API Key 已設定)
✅ LINE Channel: 已設定 (Channel ID, Secret, Token)
✅ Telegram Bot: 已設定 (Bot Token)
✅ Gateway: 正在運行 (port 18789)
✅ ngrok: 已連線 (https://xxxx.ngrok-free.app)
⚠️ LINE Webhook: 未驗證 (建議到 LINE Console 按 Verify)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
結果: 9 通過 / 0 失敗 / 1 警告
```

每個項目會顯示：

- ✅ 通過：沒問題
- ❌ 失敗：這裡有問題，需要修復
- ⚠️ 警告：可以運行，但建議處理

如果有 ❌ 失敗的項目，`doctor` 通常會附上修復建議。例如：

```
❌ AI 模型: API Key 未設定
   → 請執行: openclaw config set ai.apiKey 你的API金鑰
```

> 💡 **養成習慣**：每次龍蝦出問題，第一步跑 `openclaw doctor`，就像人不舒服先量體溫一樣。大部分問題它都能幫你找出來。

### 9.3.8 其他實用指令

**初始設定精靈：**

```powershell
openclaw onboard
```

重新跑一次初始設定流程，適合忘記當初怎麼設定的時候。

**安裝背景服務：**

```powershell
openclaw onboard --install-daemon
```

這會讓龍蝦在電腦開機時自動啟動，不用每次手動跑 `gateway start`。

**查看版本：**

```powershell
openclaw --version
```

**更新 OpenClaw：**

```powershell
npm update -g openclaw
```

這不是 OpenClaw 自己的指令，而是用 npm 來更新。

### 9.3.9 CLI 指令速查表

整理一下所有常用指令：

| 類別 | 指令 | 功能 |
|------|------|------|
| **Gateway** | `openclaw gateway start` | 啟動龍蝦 |
| | `openclaw gateway stop` | 關閉龍蝦 |
| | `openclaw gateway restart` | 重啟龍蝦 |
| | `openclaw gateway status` | 查看運行狀態 |
| **設定** | `openclaw config list` | 列出所有設定 |
| | `openclaw config get <路徑>` | 查看特定設定 |
| | `openclaw config set <路徑> <值>` | 修改設定 |
| **外掛** | `openclaw plugins list` | 列出外掛 |
| | `openclaw plugins install <名稱>` | 安裝外掛 |
| | `openclaw plugins remove <名稱>` | 移除外掛 |
| **技能** | `openclaw skills list` | 列出技能 |
| | `openclaw skills install <名稱>` | 安裝技能 |
| | `openclaw skills remove <名稱>` | 移除技能 |
| **配對** | `openclaw pairing list` | 列出配對 |
| | `openclaw pairing approve <通道> <碼>` | 核准配對 |
| **診斷** | `openclaw doctor` | 健康檢查 |
| **其他** | `openclaw onboard` | 重跑初始設定 |
| | `openclaw --version` | 查看版本 |
| | `openclaw --help` | 查看說明 |

---

## 9.4 Dashboard——網頁儀表板

如果你覺得終端機太「工程師」了，Dashboard 會讓你耳目一新。它是一個用瀏覽器就能操作的網頁介面，長得像一般的網站後台，用滑鼠點就能管理龍蝦。

### 9.4.1 啟動 Dashboard

在終端機輸入：

```powershell
openclaw dashboard
```

龍蝦會啟動一個本地的網頁伺服器，然後自動用瀏覽器打開 Dashboard 頁面。如果沒有自動開啟，手動在瀏覽器輸入：

```
http://localhost:18790
```

（Dashboard 的預設埠號是 18790，跟 Gateway 的 18789 不同。）

> 💡 **小提醒**：Dashboard 是額外的服務，不會影響 Gateway 的運行。你可以同時開著 Gateway 和 Dashboard。

### 9.4.2 Dashboard 介面導覽

Dashboard 開啟後，你會看到一個清爽的網頁介面，左邊是導航列，右邊是內容區。主要有這些頁面：

#### 首頁（Overview）

一進去就看到龍蝦的「儀表板」：

- **運行狀態**——Gateway 是否正在運行（綠燈 / 紅燈）
- **今日統計**——今天收到幾則訊息、回覆了幾則
- **已連接通道**——LINE、Telegram 等通道的連線狀態
- **系統資訊**——OpenClaw 版本、Node.js 版本、記憶體使用量

這個頁面讓你一眼就知道龍蝦的「健康狀況」。

#### 對話記錄（Conversations）

這可能是 Dashboard 最有價值的功能。你可以：

- **瀏覽所有對話**——按時間排序，看龍蝦跟每個使用者的聊天記錄
- **搜尋對話**——用關鍵字搜尋歷史對話
- **篩選通道**——只看 LINE 的對話、或只看 Telegram 的
- **查看完整脈絡**——每段對話的完整上下文都保留著

這比在手機上翻 LINE 聊天記錄方便太多了。你可以看到龍蝦是怎麼回覆每個使用者的，如果有回答不好的地方，就知道要去調整人設或 AI 模型。

#### 使用者管理（Users）

列出所有跟龍蝦配對的使用者：

- 使用者名稱
- 配對的通道（LINE / Telegram）
- 配對時間
- 對話數量

你可以在這裡直接新增或移除使用者的配對，不用回終端機打指令。

#### 技能與外掛（Skills & Plugins）

用圖形化的方式管理技能和外掛：

- 已安裝的技能清單，可以用開關切換啟用/停用
- 已安裝的外掛清單
- 可以直接搜尋和安裝新的技能

比起在終端機裡一條一條打指令，這裡按幾下滑鼠就搞定了。

#### 設定（Settings）

用表單的方式修改龍蝦的設定：

- **AI 模型設定**——從下拉選單選擇模型，填入 API Key
- **通道設定**——LINE 和 Telegram 的連線資訊
- **Gateway 設定**——埠號、日誌層級等
- **進階設定**——記憶容量、回覆長度限制等

每個設定項目旁邊都有說明文字，告訴你這個設定是做什麼用的。修改後按「儲存」，Dashboard 會提醒你需要重啟 Gateway 才能讓新設定生效。

#### 工作區（Workspace）

直接在瀏覽器裡編輯龍蝦的工作區檔案：

- **IDENTITY.md**——龍蝦的人格設定
- **SOUL.md**——行為準則
- **USER.md**——使用者偏好
- **AGENTS.md**——Agent 定義
- **TOOLS.md**——環境設定
- **HEARTBEAT.md**——排程設定

Dashboard 內建了一個文字編輯器，你可以直接在瀏覽器裡修改這些檔案，存檔後再用 Dashboard 上的「重啟」按鈕讓設定生效。不用另外開 VS Code，也不用跑 CLI 指令。

### 9.4.3 Dashboard 常用操作範例

**範例一：查看龍蝦跟某個朋友的聊天記錄**

1. 開啟 Dashboard：`openclaw dashboard`
2. 點左邊的「對話記錄」
3. 在使用者列表裡找到朋友的名字
4. 點進去就能看到完整的對話記錄

**範例二：在 Dashboard 上修改龍蝦的人設**

1. 點左邊的「工作區」
2. 選「IDENTITY.md」
3. 在編輯器裡修改內容（例如改語氣、加專長）
4. 按「儲存」
5. 回到首頁，按「重啟 Gateway」
6. 在 LINE 上傳一句「你是誰？」，確認新人設生效

**範例三：切換 AI 模型**

1. 點左邊的「設定」
2. 在「AI 模型」的下拉選單裡選新的模型（例如從 Gemini 3 Flash 換成 GPT-5.2）
3. 如果新模型需要不同的 API Key，在下方填入
4. 按「儲存」
5. 按「重啟 Gateway」

### 9.4.4 關閉 Dashboard

回到剛才執行 `openclaw dashboard` 的終端機視窗，按 **Ctrl + C** 就會關閉 Dashboard 服務。關閉 Dashboard 不會影響 Gateway——龍蝦還是會繼續運行。

> 💡 **小提醒**：Dashboard 是本地服務，只有你的電腦可以連上。如果你想從其他電腦或手機存取 Dashboard，需要額外的網路設定（不建議新手嘗試，有安全風險）。

---

## 9.5 什麼情境用哪種介面

三種介面都能用，但不同情境有不同的「最佳選擇」。這裡整理一張決策表：

| 我想做的事 | 推薦的介面 | 為什麼 |
|-----------|-----------|--------|
| 啟動 / 關閉龍蝦 | CLI | 一行指令最快 |
| 檢查龍蝦是否正常 | CLI（doctor） | 最完整的診斷資訊 |
| 快速重啟龍蝦 | CLI 或 TUI | 都很快 |
| 看龍蝦跟別人的聊天記錄 | Dashboard | 視覺化最好讀 |
| 修改龍蝦的人設 | Dashboard | 內建編輯器最方便 |
| 切換 AI 模型 | Dashboard 或 CLI | 怕打錯用 Dashboard，求快用 CLI |
| 安裝新技能 | CLI | 一行指令搞定 |
| 管理外掛 | TUI 或 CLI | TUI 有選單引導 |
| 批次操作 / 自動化腳本 | CLI | 唯一可以寫腳本的介面 |
| 幫朋友配對 | CLI 或 TUI | Dashboard 也行，但 CLI 最快 |
| 第一次設定龍蝦 | TUI（onboard） | 精靈引導最友善 |
| 日常監控 | Dashboard | 首頁一目瞭然 |

**給完全新手的建議**：先從 Dashboard 開始用。它最直覺，不需要記任何指令。等你慢慢熟悉了，再學幾個常用的 CLI 指令（`gateway start`、`gateway restart`、`doctor`），日常管理就靠這三個指令搞定。

**給進階用戶的建議**：平常用 CLI 快速操作，需要看對話記錄或改設定時開 Dashboard。如果要寫自動化腳本（例如開機自動啟動龍蝦），CLI 是唯一的選擇。

---

## 9.6 常見問題

**Q1：TUI、CLI、Dashboard 可以同時開嗎？**

可以。它們是各自獨立的操作介面，同時開著完全沒問題。不過要注意，如果你同時在 Dashboard 和 CLI 修改設定，可能會互相覆蓋，建議同一時間只用一個介面改設定。

**Q2：Dashboard 打不開，顯示「port already in use」**

表示 18790 埠號被其他程式佔用了。你可以換一個埠號：

```powershell
openclaw dashboard --port 18791
```

然後在瀏覽器輸入 `http://localhost:18791` 就可以了。

**Q3：CLI 顯示「openclaw is not recognized」**

這通常表示 OpenClaw 沒有安裝成功，或 npm 的全域路徑沒有加入環境變數。可以先試：

```powershell
npx openclaw --version
```

如果這個指令有回應，表示 OpenClaw 有裝但路徑沒設好。重新執行安裝指令：

```powershell
npm install -g openclaw
```

如果還是不行，請回到 CH5 的安裝教學重新確認。

**Q4：Dashboard 的對話記錄是即時更新的嗎？**

基本上是的。當龍蝦收到新訊息並回覆後，重新整理 Dashboard 的對話記錄頁面就會看到最新的對話。不需要重啟 Dashboard。

**Q5：我可以用手機瀏覽器開 Dashboard 嗎？**

如果你的手機和電腦在同一個 Wi-Fi 網路下，理論上可以。你需要在手機瀏覽器輸入電腦的區網 IP 加上埠號，例如 `http://192.168.1.100:18790`。不過這需要調整防火牆設定，新手不建議嘗試。

---

## 9.7 小結與展望

這一章帶你認識了管理龍蝦的三種後台介面：

- **TUI**——終端機裡的互動式選單，不用背指令，用方向鍵選就好
- **CLI**——指令列工具，功能最完整，從 `gateway start` 到 `doctor` 診斷，一行指令搞定一件事
- **Dashboard**——網頁版儀表板，用瀏覽器和滑鼠操作，看對話記錄和改設定最方便

三種介面沒有「最好」的，只有「最適合」的。你可以根據自己的習慣和當下的需求，選擇最順手的那一個。

但你有沒有發現——不管是用 TUI、CLI 還是 Dashboard，你都只是在「管理」龍蝦的運行。龍蝦的「個性」是怎麼來的？為什麼它的語氣是這樣、專長是那些？這一切都取決於幾個特殊的設定檔：IDENTITY.md、SOUL.md、USER.md……

在下一章 CH10，我們要深入教你**龍蝦的人格設定**。你會學到怎麼用這些檔案打造一隻完全屬於你的龍蝦——不只外觀，連說話方式、知識領域、行為準則都能自訂。這是讓龍蝦從「一般 AI」變成「你的 AI」的關鍵步驟。
