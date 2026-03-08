# CH15 | 60+ 技能——讓龍蝦無所不能

---

前面的章節裡，你的龍蝦主要靠 AI 模型的「通用能力」在幫你做事——回答問題、翻譯、寫文章、看圖片。這些都是 AI 本身就會的。但有些事情，光靠 AI 模型做不到：

- 查即時天氣（AI 不能連網查資料）
- 操作 Google Calendar（AI 不知道你的帳號）
- 幫你在 Notion 裡新增一筆資料
- 播放音樂、控制智慧家電
- 自動寄 Email

這些需要「跟外部服務互動」的能力，就是 **Skills（技能）** 的領域。

Skills 就像手機上的 App——你的手機本身可以打電話、拍照，但你裝了 Uber 才能叫車、裝了 Foodpanda 才能訂餐。龍蝦也是一樣，裝了天氣技能才能查天氣、裝了行事曆技能才能管行程。

這一章帶你認識 OpenClaw 的技能生態系，教你怎麼找技能、裝技能、用技能。

> **本章學習目標**
>
> 1. 理解 Skills 的概念和運作原理
> 2. 認識官方 60+ Skills 的分類和功能
> 3. 學會安裝、管理、設定技能
> 4. 知道哪些技能最值得裝

---

## 15.1 什麼是 Skills


![Skill 運作流程：訊息 → AI 判斷 → 調用技能 → 回覆](../截圖/ch15_01_skill_flow.png)

### 15.1.1 技能的定義

在 OpenClaw 的架構裡，Skill 是一個**擴充龍蝦能力的模組**。每個 Skill 定義了：

- **龍蝦能做什麼新的事**（例如查天氣、寄 Email）
- **怎麼跟外部服務互動**（例如呼叫天氣 API、連接 Gmail）
- **什麼時候觸發**（例如使用者說「天氣」的時候）

### 15.1.2 Skill 的運作流程

當你跟龍蝦說「今天台北天氣如何？」，背後發生的事情是：

```text
1. 你傳訊息：「今天台北天氣如何？」
2. 龍蝦的 AI 大腦判斷：這是在問天氣
3. AI 決定使用「天氣技能」
4. 天氣技能去呼叫天氣 API，拿到資料
5. AI 把天氣資料整理成自然語言
6. 龍蝦回覆你：「今天台北 26°C，多雲偶陣雨...」
```

關鍵在第 3 步——AI 模型會自己判斷應該使用哪個技能。你不需要打什麼特殊指令，用自然語言就好。

### 15.1.3 SKILL.md 格式

每個技能都有一個 `SKILL.md` 定義檔，告訴龍蝦這個技能是什麼、能做什麼。它的格式長這樣：

```markdown
---
name: weather
description: 查詢全球各城市的即時天氣、未來預報和氣象資訊。
---

# Weather（天氣查詢）

目標：根據使用者提供的城市或位置，查詢即時天氣資訊。

## 功能

- 查詢即時天氣（溫度、濕度、風速、天氣狀況）
- 查詢未來 3-7 天預報
- 紫外線指數
- 穿衣建議

## 使用方式

使用者可能會這樣說：
- 「今天天氣怎麼樣？」
- 「台北明天會下雨嗎？」
- 「東京這週的天氣預報」

## 需要的設定

- API Key：在 TOOLS.md 裡設定 OpenWeatherMap API Key
- 預設城市：在 TOOLS.md 裡設定使用者所在城市
```

龍蝦讀了這個檔案，就知道這個技能的用途和使用時機。

---

## 15.2 官方 Skills 總覽與分類

OpenClaw 官方和社群提供了超過 60 個技能。以下按九大分類介紹：

![九大分類技能視覺化呈現](../截圖/ch15_02_skill_categories.png)


### 15.2.1 生活實用類

| 技能名稱 | 功能 | 需要 API Key | 詳細教學 |
|---------|------|------------|---------|
| **weather** | 查詢天氣和預報 | ✅ OpenWeatherMap | CH16 §16.2 |
| **news** | 新聞摘要和即時新聞 | ✅ NewsAPI | CH16 §16.3 |
| **rss-reader** | RSS 訂閱與新聞聚合 | ❌ | 下方說明 |
| **translate** | 多國語言翻譯 | ❌ 用 AI 模型本身 | 下方說明 |
| **calculator** | 數學計算和單位換算 | ❌ | 下方說明 |
| **timer** | 設定計時器和鬧鐘 | ❌ | 下方說明 |
| **recipe** | 食譜搜尋和推薦 | ❌ | 下方說明 |
| **currency** | 匯率查詢和換算 | ✅ ExchangeRate API | 下方說明 |

**📋 各技能說明：**

- **weather**（天氣）：這是最多人裝的第一個技能。你說「今天天氣如何」，龍蝦就會去 OpenWeatherMap 拿資料回來。需要 API Key，完整的安裝設定步驟在 CH16 §16.2 有手把手教學，包含 API Key 申請、TOOLS.md 設定、搭配 Heartbeat 排程。
- **news**（新聞）：幫你把新聞濃縮成摘要。支援指定主題（科技、財經、體育等）。完整教學在 CH16 §16.3。
- **rss-reader**（RSS 訂閱）：如果你有常看的部落格或新聞網站，可以把它們的 RSS 網址加到 TOOLS.md 裡，龍蝦就會定時去抓新文章給你看。不需要 API Key，只需要在 TOOLS.md 寫上你要訂閱的 RSS 網址就好。使用方式：「有什麼新文章？」「幫我看一下 RSS 有沒有更新」。
- **translate**（翻譯）：直接靠 AI 模型翻譯，不呼叫外部 API，所以零設定。裝好就能用：「幫我把這段翻成日文」「這個英文什麼意思」。支援所有 AI 模型認識的語言。
- **calculator**（計算機）：數學計算、單位換算、匯率換算的計算部分。「1 英里等於幾公里？」「12345 × 67890 是多少？」零設定。
- **timer**（計時器）：「5 分鐘後提醒我」「設定 25 分鐘番茄鐘」。龍蝦會在時間到的時候傳訊息通知你。零設定，但需要 Gateway 保持運行。
- **recipe**（食譜）：「今天中午吃什麼好？」「用冰箱裡的雞腿和洋蔥能做什麼？」龍蝦會根據你的食材和口味推薦食譜。零設定，靠 AI 模型的知識庫。
- **currency**（匯率）：「美金換台幣現在多少？」「1000 日圓等於多少台幣？」需要 ExchangeRate API Key。到 https://www.exchangerate-api.com/ 註冊免費帳號，每月 1,500 次免費呼叫，個人用足夠了。在 TOOLS.md 設定：`ExchangeRate API Key: 你的Key`。

### 15.2.2 生產力類

| 技能名稱 | 功能 | 需要 API Key | 詳細教學 |
|---------|------|------------|---------|
| **google-calendar** | Google 行事曆管理 | ✅ Google API | CH16 §16.5 |
| **notion** | Notion 資料庫操作 | ✅ Notion API | CH16 §16.4 |
| **email** | 寄送和讀取 Email | ✅ Gmail App Password | 下方說明 |
| **todo** | 待辦事項管理 | ❌ 本地儲存 | 下方說明 |
| **notes** | 筆記和備忘錄 | ❌ 本地儲存 | 下方說明 |
| **summary** | 長文摘要 | ❌ 用 AI 模型 | 下方說明 |
| **web-search** | 網頁搜尋 | ✅ Google/Bing API | 下方說明 |

**📋 各技能說明：**

- **google-calendar**（行事曆）：讓龍蝦管理你的 Google Calendar——新增、查詢、修改、刪除行程，搭配 Heartbeat 還能每天早上主動報告今天行程。完整教學在 CH16 §16.5，包含 Google Cloud Console 設定、服務帳號建立、JSON 金鑰配置。
- **notion**（Notion）：用自然語言操作 Notion 資料庫——新增項目、查詢資料、更新狀態。完整教學在 CH16 §16.4，包含 Integration 建立和 Token 取得。
- **email**（Email）：讓龍蝦幫你讀信、回信、寄信。這個技能需要 Gmail App Password（應用程式專用密碼），設定步驟如下：
  1. 到 Google 帳號設定 → 安全性 → 兩步驟驗證（必須先開啟）
  2. 兩步驟驗證頁面底部 → 「應用程式密碼」
  3. 選擇「郵件」和你的裝置，產生一組 16 位密碼
  4. 在 TOOLS.md 設定：`Gmail: 你的email@gmail.com` 和 `Gmail App Password: xxxx xxxx xxxx xxxx`
  5. 使用方式：「幫我看最近有什麼新信」「寄一封信給 xxx@xxx.com 說明天會議改時間」
  > ⚠️ **安全提醒**：App Password 等同於你的 Gmail 密碼，請勿將 TOOLS.md 上傳到 GitHub 或其他公開場所。如果你的工作區有做版本控制，務必把 TOOLS.md 加入 `.gitignore`。
- **todo**（待辦事項）：把待辦清單存在本地——不需要任何 API Key 或帳號。「幫我記住明天要繳報告」「我的待辦清單有什麼」「把買牛奶從清單移除」。資料存在工作區的本地檔案裡，簡單但實用。
- **notes**（筆記）：隨手記錄想法和備忘。和 todo 類似是本地儲存，但更適合記錄較長的內容。「幫我記一下會議重點：...」「我之前記的那個食譜找給我看」。
- **summary**（摘要）：把長文濃縮成重點。直接靠 AI 模型處理，零設定。「幫我把這篇文章摘要成三個重點」「這份報告太長了，幫我抓重點」。你可以直接貼文字或丟網址給龍蝦。
**web-search**（網頁搜尋）

讓龍蝦上網搜尋資料。需要 Google Custom Search API 或 Bing Search API：

- **Google Custom Search**：到 https://programmablesearchengine.google.com/ 建立搜尋引擎，再到 Google Cloud Console 啟用 Custom Search API 取得 API Key。免費額度每天 100 次。
- **Bing Search**：到 https://www.microsoft.com/en-us/bing/apis/bing-web-search-api 申請，免費額度每月 1,000 次。
- **TOOLS.md 設定**：`Web Search API Key: 你的Key` 和 `Search Engine: google`（或 `bing`）
- **使用方式**：「幫我搜尋 Python 最新版本」「查一下明天有什麼活動」

### 15.2.3 娛樂與社交類

| 技能名稱 | 功能 | 需要 API Key | 詳細教學 |
|---------|------|------------|---------|
| **clawra** | 龍蝦自拍（CH8 教過） | ✅ fal.ai | CH8 §8.5 |
| **music** | 音樂推薦和搜尋 | ✅ Spotify API | 下方說明 |
| **joke** | 講笑話 | ❌ | 下方說明 |
| **quote** | 每日金句 | ❌ | 下方說明 |
| **trivia** | 冷知識問答 | ❌ | 下方說明 |

**📋 各技能說明：**

- **clawra**（龍蝦自拍）：龍蝦最受歡迎的娛樂技能！讓龍蝦用 AI 繪圖產生自拍照。完整教學在 CH8 §8.5，包含 fal.ai API Key 申請和設定。
- **music**（音樂）：搜尋歌曲、推薦歌單、查歌詞。需要 Spotify Developer API：
  1. 到 https://developer.spotify.com/dashboard 用 Spotify 帳號登入
  2. 點「Create App」建立應用程式
  3. 記下 Client ID 和 Client Secret
  4. 在 TOOLS.md 設定：`Spotify Client ID: xxx` 和 `Spotify Client Secret: xxx`
  5. 使用方式：「推薦一些放鬆的音樂」「周杰倫最新專輯有哪些歌」「幫我找適合跑步的歌單」
- **joke**（笑話）：「講個笑話」「說個冷笑話」——龍蝦會從笑話庫或 AI 知識裡找笑話給你。零設定，裝好直接用，是最輕量的技能之一。
- **quote**（每日金句）：「給我一句激勵的話」「今天的金句是什麼」——適合搭配 Heartbeat 每天早上傳一句話給你。零設定。
- **trivia**（冷知識）：「告訴我一個冷知識」「你知道嗎」——龍蝦會隨機分享有趣的冷知識。適合當聊天的調劑品。零設定。

### 15.2.4 系統工具類

| 技能名稱 | 功能 | 需要 API Key | 詳細教學 |
|---------|------|------------|---------|
| **disk-audit** | 磁碟空間盤點 | ❌ 本地腳本 | CH18 §18.3 |
| **sag** | 文字轉語音（TTS） | ✅ ElevenLabs | 下方說明 |
| **screenshot** | 螢幕截圖 | ❌ | 下方說明 |
| **file-manager** | 檔案管理 | ❌ | CH18 §18.3 |
| **system-monitor** | 系統資源監控 | ❌ | CH18 §18.4 |

**📋 各技能說明：**

- **disk-audit**（磁碟盤點）：掃描你的硬碟，找出佔空間的大檔案和資料夾，幫你釋放空間。不需要 API Key，教學在 CH18 §18.3。使用方式：「掃描一下 D 槽有什麼大檔案」「幫我盤點磁碟空間」。
- **sag**（文字轉語音 TTS）：把文字轉成語音，讓龍蝦「說話」給你聽。需要 ElevenLabs API：
  1. 到 https://elevenlabs.io/ 註冊帳號
  2. 免費方案每月 10,000 字元的語音額度
  3. 在帳號設定頁面找到 API Key
  4. 在 TOOLS.md 設定：`ElevenLabs API Key: 你的Key`
  5. 可選設定：`TTS Voice: Rachel`（選擇聲音角色）、`TTS Language: zh`（語言）
  6. 使用方式：「把這段文字唸給我聽」「用語音說早安」。搭配 CH20 的 Twilio 語音通話，龍蝦就能用好聽的聲音跟你通電話。
- **screenshot**（螢幕截圖）：讓龍蝦截取電腦畫面，搭配視覺辨識功能（CH8）可以「看懂」畫面上的內容。零設定，但需要 Desktop Agent 模式（CH18）才能使用。使用方式：「截個圖讓我看」「把現在螢幕畫面截下來」。
- **file-manager**（檔案管理）：瀏覽、搬移、複製、刪除檔案。教學在 CH18 §18.3。零設定，但需要 Desktop Agent 模式。使用方式：「把桌面的 PDF 搬到文件資料夾」「找一下 D 槽有沒有叫 report 的檔案」。
- **system-monitor**（系統監控）：查看 CPU、記憶體、磁碟使用率、網路狀態。教學在 CH18 §18.4。零設定。使用方式：「現在電腦跑多重？」「記憶體還剩多少？」。搭配 Heartbeat 可以定時監控，異常時主動通知。

### 15.2.5 開發者工具類

| 技能名稱 | 功能 | 需要 API Key | 詳細教學 |
|---------|------|------------|---------|
| **git** | Git 版本控制操作 | ❌ | 下方說明 |
| **code-review** | 程式碼審查 | ❌ 用 AI 模型 | 下方說明 |
| **docker** | Docker 容器管理 | ❌ | 下方說明 |
| **ssh** | 遠端伺服器管理 | ❌ 需要 SSH Key | 下方說明 |
| **database** | 資料庫查詢 | ✅ 資料庫連線 | 下方說明 |

**📋 各技能說明：**

> 💡 這類技能主要給有程式開發經驗的使用者。如果你不是開發者，可以跳過這一節。

- **git**（Git 版本控制）：在聊天室裡操作 Git——提交變更、切換分支、查看歷史。零設定（前提是電腦上已安裝 Git）。使用方式：「幫我 commit 目前的修改」「現在在哪個分支？」「最近的 5 筆 commit 是什麼？」。需要 Desktop Agent 模式（CH18）。
- **code-review**（程式碼審查）：把程式碼丟給龍蝦，它會幫你檢查有沒有 bug、效能問題、安全漏洞。靠 AI 模型本身的能力，零設定。使用方式：直接貼程式碼並說「幫我看看這段程式有沒有問題」。
- **docker**（Docker 管理）：管理 Docker 容器——啟動、停止、查看狀態、看 log。零設定（前提是電腦已安裝 Docker）。使用方式：「目前跑了哪些容器？」「重啟那個 nginx 容器」。需要 Desktop Agent 模式。
- **ssh**（SSH 遠端管理）：透過龍蝦連線到遠端伺服器執行指令。需要設定 SSH Key 或密碼：
  1. 在 TOOLS.md 設定遠端主機資訊：`SSH Host: 192.168.1.100`、`SSH User: admin`、`SSH Key Path: ~/.ssh/id_rsa`
  2. 使用方式：「連到伺服器看一下 nginx 狀態」「重啟遠端的 MySQL」
  3. 搭配 CH19 多機協作 Nodes 功能更強大
- **database**（資料庫查詢）：用自然語言查資料庫——龍蝦幫你轉成 SQL 去查。需要設定資料庫連線：
  1. 在 TOOLS.md 設定：`Database Type: mysql`（支援 mysql/postgresql/sqlite）
  2. `Database Host: localhost`、`Database Port: 3306`、`Database Name: mydb`
  3. `Database User: root`、`Database Password: 你的密碼`
  4. 使用方式：「上個月有多少新會員？」「銷售額最高的前 10 個產品」。龍蝦會自動把你的問題翻譯成 SQL 查詢。

### 15.2.6 雲端儲存與文件類

| 技能名稱 | 功能 | 需要 API Key | 詳細教學 |
|---------|------|------------|---------|
| **google-drive** | Google 雲端硬碟管理 | ✅ rclone 認證 | 下方說明 |
| **onedrive** | OneDrive 檔案管理 | ✅ Microsoft API | 下方說明 |
| **doc-converter** | 文件格式轉換 | ❌ 本地處理 | 下方說明 |
| **pdf-tools** | PDF 閱讀和操作 | ❌ 本地處理 | 下方說明 |
| **pptx-generator** | 簡報自動生成 | ❌ 本地處理 | 下方說明 |
| **excel-tools** | Excel 讀寫和分析 | ❌ 本地處理 | 下方說明 |

**📋 各技能說明：**

- **google-drive**（Google 雲端硬碟）：瀏覽、上傳、下載、搜尋、修改你的 Google Drive 檔案。這個技能使用 rclone 作為底層工具，不需要自己建 Google Cloud 專案，設定比 Google Calendar 簡單得多：
  1. 安裝 rclone（開源雲端同步工具）：到 https://rclone.org/downloads/ 下載，或用指令 `curl -L -o rclone.zip https://downloads.rclone.org/rclone-current-windows-amd64.zip` 下載解壓
  2. 執行 `rclone authorize "drive"`，瀏覽器會自動打開讓你登入 Google 帳號並授權
  3. rclone 會輸出一段 token，用 `rclone config create gdrive drive token '<TOKEN>'` 建立設定，之後不需要重複認證
  4. 在 TOOLS.md 設定：`rclone 路徑: /usr/local/bin/rclone`（或你的 rclone 安裝位置）
  5. 使用方式：「找一下我 Drive 裡有沒有叫年度報告的文件」「把桌面的 report.pdf 上傳到 Google Drive」「讀一下雲端 notes/TODO.md 的內容」
- **onedrive**（OneDrive）：瀏覽、上傳、下載 OneDrive 檔案。需要 Microsoft Graph API：
  1. 到 https://portal.azure.com/ → Azure Active Directory → App registrations → 新增應用程式
  2. 記下 Application ID 和 Tenant ID
  3. 建立 Client Secret
  4. 在 TOOLS.md 設定：`OneDrive Client ID: xxx`、`OneDrive Tenant ID: xxx`、`OneDrive Client Secret: xxx`
  5. 使用方式：「OneDrive 裡的文件資料夾有什麼？」「幫我下載那份簡報」
- **doc-converter**（文件轉換）：Markdown 轉 PDF、Markdown 轉 Word、Word 轉 PDF 等格式轉換。零設定，龍蝦會用本地工具（pandoc 等）處理。使用方式：「把這份 .md 轉成 PDF」「把那個 Word 檔轉成 PDF」。
- **pdf-tools**（PDF 工具）：讀取 PDF 內容、合併多個 PDF、拆分頁面、擷取文字。零設定。使用方式：「這份 PDF 在講什麼？」「把這 3 個 PDF 合併成一個」「把第 5-10 頁擷取出來」。
- **pptx-generator**（簡報生成）：自動產生 PowerPoint 簡報。你只要說主題和大綱，龍蝦就幫你做出一份簡報。零設定。使用方式：「幫我做一份關於 AI 教育的 10 頁簡報」「把這份報告整理成簡報」。
- **excel-tools**（Excel 工具）：讀取、分析、產生 Excel 報表。零設定。使用方式：「分析這份 Excel 的銷售數據」「幫我做一張班級成績統計表」「把這些資料整理成 Excel」。

### 15.2.7 財經資訊類

| 技能名稱 | 功能 | 需要 API Key | 詳細教學 |
|---------|------|------------|---------|
| **stock-tracker** | 股票即時報價和走勢 | ✅ Alpha Vantage | 下方說明 |
| **crypto-tracker** | 加密貨幣行情 | ✅ CoinGecko | 下方說明 |
| **finance-news** | 財經新聞摘要 | ✅ NewsAPI | 下方說明 |
| **exchange-rate** | 匯率查詢和歷史走勢 | ✅ ExchangeRate API | 下方說明 |

**📋 各技能說明：**

- **stock-tracker**（股票追蹤）：查詢個股即時報價、K 線走勢、技術指標、基本面分析。需要 Alpha Vantage API（也支援 Yahoo Finance）：
  1. 到 https://www.alphavantage.co/support/#api-key 免費申請 API Key
  2. 免費方案：每分鐘 5 次、每天 500 次查詢，個人用足夠
  3. 在 TOOLS.md 設定：`Alpha Vantage API Key: 你的Key`
  4. 可選：`Stock Default Market: TW`（預設市場，TW=台股、US=美股）
  5. 使用方式：「台積電今天股價多少？」「AAPL 最近一個月走勢如何？」「分析一下 0050 的技術指標」
- **crypto-tracker**（加密貨幣）：追蹤比特幣、以太幣等加密貨幣的即時價格和走勢。需要 CoinGecko API：
  1. 到 https://www.coingecko.com/en/api 註冊免費帳號
  2. 免費方案每分鐘 10-30 次呼叫
  3. 在 TOOLS.md 設定：`CoinGecko API Key: 你的Key`
  4. 使用方式：「比特幣現在多少錢？」「以太幣這週漲還是跌？」「加密貨幣市場今天怎麼樣？」
- **finance-news**（財經新聞）：專注在財經和商業新聞的摘要，篩選條件設定為財經相關。
  - **設定**：可和 news 技能共用 NewsAPI Key。在 TOOLS.md 加上 `Finance News Topics: stock,crypto,forex`
  - **使用方式**：「今天有什麼財經大事？」「科技股最近的新聞」
- **exchange-rate**（進階匯率）：除了即時匯率，還能查歷史走勢、趨勢分析。
  - **設定**：可和生活實用類的 currency 技能共用 ExchangeRate API Key
  - **使用方式**：「美金對台幣過去一個月的走勢」「日圓最近是升還是貶？」

### 15.2.8 智慧家庭類

| 技能名稱 | 功能 | 需要 API Key | 詳細教學 |
|---------|------|------------|---------|
| **home-assistant** | Home Assistant 整合 | ✅ HA Token | 下方說明 |
| **camera** | IP 攝影機監控 | ✅ 攝影機設定 | 下方說明 |
| **light** | 智慧燈具控制 | ✅ 看燈具品牌 | 下方說明 |

**📋 各技能說明：**

> 💡 智慧家庭類技能需要你家裡有對應的設備。如果你還沒有智慧家庭裝置，可以先跳過這一節。

- **home-assistant**（Home Assistant 整合）：Home Assistant 是最熱門的開源智慧家庭中控系統。透過這個技能，龍蝦可以操控你接在 Home Assistant 上的所有設備——開關燈、調冷氣溫度、查看攝影機、控制電器等。設定步驟：
  1. 你需要先有一台運行 Home Assistant 的設備（Raspberry Pi、迷你電腦、或 HA Cloud）
  2. 在 Home Assistant 裡建立「Long-Lived Access Token」：到使用者頭像 → 安全性 → 長期存取權杖 → 建立權杖
  3. 在 TOOLS.md 設定：`Home Assistant URL: http://192.168.1.100:8123`（你的 HA 位址）
  4. `Home Assistant Token: 你的長期存取權杖`
  5. 使用方式：「把客廳的燈打開」「冷氣調到 26 度」「現在家裡溫度多少？」「門口攝影機有沒有人？」
- **camera**（IP 攝影機）：直接連接 IP 攝影機，不透過 Home Assistant。適合只有攝影機沒有其他智慧家庭設備的人。設定步驟：
  1. 在 TOOLS.md 設定攝影機的 RTSP 或 HTTP 串流位址
  2. `Camera URL: rtsp://admin:password@192.168.1.50:554/stream`（依你的攝影機型號調整）
  3. 使用方式：「看一下門口攝影機」「攝影機截圖」。搭配 Heartbeat 可以定時監控，偵測到異常就通知你。
- **light**（智慧燈具）：直接控制智慧燈泡，不需要 Home Assistant。支援主流品牌：
  - **Philips Hue**：需要 Hue Bridge IP 和 API Key。在 TOOLS.md 設定：`Hue Bridge IP: 192.168.1.xxx`、`Hue API Key: 你的Key`
  - **LIFX**：需要 LIFX Token。到 https://cloud.lifx.com/settings 取得
  - **Tuya / 塗鴉智能**（小米、WOOX 等）：需要 Tuya IoT 平台帳號
  - 使用方式：「把臥室的燈調暗一點」「客廳燈改成暖白色」「所有燈關掉」

### 15.2.9 通訊與語音類

| 技能名稱 | 功能 | 需要 API Key | 詳細教學 |
|---------|------|------------|---------|
| **twilio-voice** | 語音通話（打電話/接電話） | ✅ Twilio | CH20 完整教學 |
| **browser-sandbox** | 瀏覽器自動操控 | ❌ 需安裝 Playwright | CH18 §18.2 |

**📋 各技能說明：**

- **twilio-voice**（語音通話）：讓龍蝦可以打電話給你、接聽電話、語音對話。這是最「科幻」的技能之一——你可以打電話問龍蝦問題，它會用語音回答你。完整教學在 CH20，包含 Twilio 帳號申請、電話號碼購買（約 US$1/月）、Webhook 設定、語音引擎選擇。
- **browser-sandbox**（瀏覽器操控）：讓龍蝦像人一樣使用瀏覽器——開網頁、點按鈕、填表單、擷取資訊。不需要 API Key，但需要安裝 Playwright（自動化瀏覽器工具）。完整教學在 CH18 §18.2，包含安裝設定和三個實用場景。

> 💡 **不用全部都裝**：技能太多反而會讓龍蝦「不知道該用哪個」。建議先裝你最需要的 3-5 個，用熟了再慢慢擴充。

---

## 15.3 Skills 安裝與管理


![clawdhub search 搜尋結果](../截圖/ch15_03_clawdhub_search.png)

![openclaw skills list 已安裝技能清單](../截圖/ch15_04_skills_list.png)

### 15.3.1 用 ClawdHub 搜尋技能

ClawdHub 是 OpenClaw 的技能商店。你可以在裡面搜尋和安裝技能：

```powershell
clawdhub search weather
```

輸出範例：

```text
🔍 Search results for "weather":

  weather (v2.1.0) ⭐ 4.8
  查詢全球各城市的即時天氣和預報
  By: @openclaw-official

  weather-advanced (v1.0.3) ⭐ 4.2
  進階天氣：含空氣品質、花粉指數
  By: @community-dev
```

### 15.3.2 安裝技能

找到想要的技能後，用一行指令安裝：

```powershell
clawdhub install weather
```

或者用 OpenClaw 的 CLI：

```powershell
openclaw skills install weather
```

安裝過程會把技能的檔案下載到工作區的 `skills/` 資料夾裡。

### 15.3.3 查看已安裝的技能

```powershell
openclaw skills list
```

輸出範例：

```text
Installed Skills:
  ✅ weather (v2.1.0) - 查詢天氣和預報
  ✅ clawra (v3.0.1) - 龍蝦自拍功能
  ✅ disk-audit (v1.2.0) - 磁碟盤點/整理
  ✅ todo (v1.5.0) - 待辦事項管理
```

### 15.3.4 啟用與停用技能

不想用某個技能但不想刪掉：

```powershell
openclaw skills disable weather      # 停用
openclaw skills enable weather       # 重新啟用
```

停用的技能不會被龍蝦使用，但檔案還在，隨時可以啟用。

### 15.3.5 更新技能

```powershell
clawdhub update weather              # 更新特定技能
clawdhub update --all                # 更新所有技能
```

### 15.3.6 移除技能

```powershell
openclaw skills remove weather
```

這會刪除技能的所有檔案。

### 15.3.7 安裝後記得重啟

每次安裝、移除或修改技能後，都要重啟 Gateway：

```powershell
openclaw gateway restart
```

---

## 15.4 推薦必裝 Skills

如果你不知道從哪裡開始，以下是根據不同使用場景的推薦：

### 15.4.1 新手必裝（3 個）

| 技能 | 為什麼推薦 |
|------|-----------|
| **weather** | 最實用，每天都用得到 |
| **todo** | 待辦事項管理，不需要 API Key |
| **translate** | 翻譯功能，用 AI 模型本身，零設定 |

### 15.4.2 生活玩家（加裝 3 個）

| 技能 | 為什麼推薦 |
|------|-----------|
| **news** | 每天看新聞摘要 |
| **clawra** | 龍蝦自拍，好玩 |
| **recipe** | 不知道吃什麼的時候超好用 |

### 15.4.3 工作族群（加裝 3 個）

| 技能 | 為什麼推薦 |
|------|-----------|
| **google-calendar** | 行程管理，主動提醒 |
| **email** | 幫你讀信、回信 |
| **notion** | 如果你用 Notion 管理工作 |

### 15.4.4 開發者（加裝 3 個）

| 技能 | 為什麼推薦 |
|------|-----------|
| **git** | 在聊天室裡操作 Git |
| **web-search** | 搜尋技術文件 |
| **code-review** | 丟程式碼讓龍蝦幫你看 |

---

## 15.5 Skills 設定與客製化

### 15.5.1 技能的設定檔

很多技能需要額外設定才能使用——最常見的就是 API Key。設定的方式有兩種：

**方式一：寫在 TOOLS.md 裡**

打開 `~/.openclaw/workspace/TOOLS.md`，加入技能需要的資訊：

```markdown
## Weather（天氣）
- API Key: 你的OpenWeatherMap_API_Key
- 預設城市: 台北
- 溫度單位: 攝氏

## Google Calendar
- 服務帳號金鑰路徑: ~/.openclaw/workspace/google-credentials.json
- 主要行事曆: 工作
```

**方式二：用 CLI 設定**

```powershell
openclaw config set skills.weather.apiKey 你的API_Key
openclaw config set skills.weather.defaultCity 台北
```

每個技能的 SKILL.md 裡會說明需要哪些設定。

### 15.5.2 取得 API Key

每個需要 API Key 的技能，在前面 §15.2 的各分類說明中已經詳細列出了申請步驟。以下整理一份快速對照表，方便你查找：

| 技能 | API 服務 | 免費額度 | 申請網址 |
|------|---------|---------|---------|
| weather | OpenWeatherMap | 60 次/分鐘 | https://openweathermap.org/api |
| news / finance-news | NewsAPI | 100 次/天 | https://newsapi.org/ |
| currency / exchange-rate | ExchangeRate API | 1,500 次/月 | https://www.exchangerate-api.com/ |
| google-calendar / google-drive | Google Cloud API | 各 API 不同 | https://console.cloud.google.com/ |
| notion | Notion Integration | 無限制 | https://www.notion.so/my-integrations |
| email | Gmail App Password | 無限制 | Google 帳號安全性設定 |
| web-search | Google Custom Search 或 Bing | 100 次/天（Google） | https://programmablesearchengine.google.com/ |
| clawra | fal.ai | 依方案 | https://fal.ai/（CH8 有教） |
| music | Spotify Developer | 無限制 | https://developer.spotify.com/dashboard |
| sag | ElevenLabs | 10,000 字/月 | https://elevenlabs.io/ |
| stock-tracker | Alpha Vantage | 500 次/天 | https://www.alphavantage.co/ |
| crypto-tracker | CoinGecko | 10-30 次/分鐘 | https://www.coingecko.com/en/api |
| home-assistant | HA 長期存取權杖 | 無限制 | 你的 HA 設定頁面 |
| onedrive | Microsoft Azure AD | 依方案 | https://portal.azure.com/ |
| database | 資料庫連線 | 依你的資料庫 | 不需要申請，設定連線即可 |
| twilio-voice | Twilio | 試用額度 US$15 | https://www.twilio.com/（CH20 有教） |

> 💡 **小提醒**：大部分 API 的免費額度對個人使用來說綽綽有餘。除了 Twilio 語音通話需要每月約 US$1 的電話號碼費用外，其他技能基本上不花錢。

更完整的設定速查表請參考附錄 E。

### 15.5.3 客製化技能行為

你可以修改技能的 SKILL.md 來客製化它的行為。例如天氣技能的 SKILL.md 裡可能寫：

```markdown
## 回覆格式

回覆天氣時，包含以下資訊：
- 目前溫度和天氣狀況
- 體感溫度
- 降雨機率
- 穿衣建議
```

你可以改成：

```markdown
## 回覆格式

回覆天氣時，用簡短一句話就好：
- 溫度和天氣狀況
- 要不要帶傘
不需要體感溫度和其他細節。
```

這樣龍蝦回覆天氣時就會更精簡。

### 15.5.4 技能的檔案結構

安裝一個技能後，它的檔案會放在工作區的 `skills/` 資料夾裡：

```text
~/.openclaw/workspace/
  skills/
    weather/
      SKILL.md          （技能定義檔）
      scripts/          （腳本，如果需要的話）
        fetch.js
    todo/
      SKILL.md
    clawra/
      SKILL.md
```

每個技能是一個獨立的資料夾。如果你想手動安裝技能（不透過 ClawdHub），只要把技能的資料夾複製到 `skills/` 裡就好。

> 💡 **路徑注意**：透過 `clawdhub install` 安裝的技能放在 `~/.openclaw/workspace/skills/`。但有些技能有自己的安裝器（例如 CH8 的 Clawra 用 `npx clawra@latest`），可能會裝到 `~/.openclaw/skills/`。兩個路徑 OpenClaw 都認得，不影響使用。

---

## 15.6 常見問題

**Q1：安裝了技能但龍蝦不會用**

幾個可能的原因：
- 忘記重啟——安裝後要 `openclaw gateway restart`
- API Key 沒設定——檢查技能的 SKILL.md 看需要什麼設定，然後寫在 TOOLS.md 裡
- 技能被停用了——用 `openclaw skills list` 確認狀態是 ✅
- 你的說法龍蝦沒理解——試著用更明確的方式說。例如說「用天氣技能查台北天氣」而不是含糊的「今天怎麼樣」

**Q2：技能太多龍蝦會搞混嗎？**

有可能。如果你安裝了太多功能類似的技能，AI 可能會選錯。建議控制在 10 個以內，功能重複的技能只留一個。

**Q3：我可以自己寫技能嗎？**

當然可以！CH17 會專門教你怎麼從零開始寫一個技能。技能的門檻不高——一個 SKILL.md 加上可能的腳本檔就行。

**Q4：技能需要花錢嗎？**

技能本身都是免費的。但有些技能需要呼叫第三方 API，而那些 API 可能有費用。大部分 API 都有免費額度，個人使用通常不用花錢。

**Q5：哪裡可以找到更多社群技能？**

- **ClawdHub**——用 `clawdhub search 關鍵字` 搜尋
- **GitHub**——搜尋 `openclaw skill` 可以找到社群開發的技能
- **OpenClaw Discord 社群**——有專門的技能分享頻道

**Q6：技能可以跨通道使用嗎？**

可以。技能是跟龍蝦綁定的，不是跟通道綁定的。你在 LINE 上問天氣、在 Telegram 上問天氣、在 Discord 上問天氣，龍蝦都會用同一個天氣技能來回答。

---

## 15.7 小結與展望

這一章帶你認識了 OpenClaw 強大的技能生態系：

- **Skills 的概念**——就像手機上的 App，給龍蝦擴充新能力
- **60+ 官方技能**——涵蓋生活、工作、娛樂、開發、雲端儲存、財經、智慧家庭、通訊語音等九大類
- **安裝與管理**——用 `clawdhub` 或 `openclaw skills` 指令一鍵搞定
- **設定與客製化**——API Key 寫在 TOOLS.md、行為調整改 SKILL.md

你的龍蝦現在不只是一個聊天機器人了——它可以查天氣、管行程、讀新聞、寫 Email、甚至控制你的智慧家電。

但光會「裝技能」還不夠。在下一章 CH16，我們要用實際的例子教你怎麼把這些技能**組合運用**到日常生活中——排程提醒、天氣查詢、新聞摘要、Notion 整合、Google Calendar 整合。不是教你「怎麼安裝」，而是教你「怎麼用得好」。
