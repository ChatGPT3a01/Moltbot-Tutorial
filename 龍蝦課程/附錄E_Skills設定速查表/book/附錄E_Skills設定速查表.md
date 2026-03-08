# 附錄 E | 45 個技能一次搞定——Skills 設定速查

---

這份速查表整理了 OpenClaw 所有官方技能的設定方式，方便你在安裝技能時快速查閱。每個技能都列出了：需要的設定、在 TOOLS.md 裡要寫什麼、怎麼測試有沒有設定成功。

> 💡 安裝技能後記得重啟 Gateway：`openclaw gateway restart`

---

## 一、生活實用類

### weather（天氣查詢）

- **需要**：OpenWeatherMap API Key
- **免費額度**：每分鐘 60 次呼叫
- **申請步驟**：
  1. 到 https://openweathermap.org/api 點「Sign Up」註冊帳號
  2. 驗證 Email 後登入
  3. 點右上角帳號名稱 → My API Keys
  4. 複製預設的 API Key（或建立新的）
- **TOOLS.md 設定**：
  ```
  ## Weather（天氣）
  - API Key: 你的OpenWeatherMap_API_Key
  - 預設城市: 台北
  - 溫度單位: 攝氏
  ```
- **測試**：跟龍蝦說「今天台北天氣如何？」
- **詳細教學**：CH16 §16.2

---

### news（新聞摘要）

- **需要**：NewsAPI Key
- **免費額度**：每天 100 次呼叫
- **申請步驟**：
  1. 到 https://newsapi.org/ 點「Get API Key」
  2. 填寫基本資料，選免費方案
  3. 註冊後在帳號頁面取得 API Key
- **TOOLS.md 設定**：
  ```
  ## News（新聞）
  - API Key: 你的NewsAPI_Key
  - 語言: zh（中文）
  - 預設類別: general（一般新聞）
  ```
- **測試**：跟龍蝦說「今天有什麼新聞？」
- **詳細教學**：CH16 §16.3

---

### rss-reader（RSS 訂閱）

- **需要**：不需要 API Key
- **TOOLS.md 設定**：
  ```
  ## RSS Reader
  - 訂閱清單:
    - https://feeds.feedburner.com/ithome（iThome）
    - https://www.techbang.com/rss（T客邦）
    - 你想訂閱的 RSS 網址
  ```
- **測試**：跟龍蝦說「有什麼新文章？」

---

### translate（翻譯）

- **需要**：不需要任何設定
- **說明**：直接使用 AI 模型的翻譯能力，安裝後即可使用
- **測試**：跟龍蝦說「幫我把『你好嗎』翻成日文」

---

### calculator（計算機）

- **需要**：不需要任何設定
- **測試**：跟龍蝦說「123 × 456 等於多少？」或「1 英里等於幾公里？」

---

### timer（計時器）

- **需要**：不需要任何設定（Gateway 需保持運行）
- **測試**：跟龍蝦說「5 分鐘後提醒我」

---

### recipe（食譜）

- **需要**：不需要任何設定
- **測試**：跟龍蝦說「用雞胸肉和花椰菜能做什麼菜？」

---

### currency（匯率換算）

- **需要**：ExchangeRate API Key
- **免費額度**：每月 1,500 次呼叫
- **申請步驟**：
  1. 到 https://www.exchangerate-api.com/ 點「Get Free Key」
  2. 用 Email 註冊
  3. 驗證後取得 API Key
- **TOOLS.md 設定**：
  ```
  ## Currency（匯率）
  - ExchangeRate API Key: 你的Key
  - 預設貨幣: TWD（新台幣）
  ```
- **測試**：跟龍蝦說「1000 日圓等於多少台幣？」

---

## 二、生產力類

### google-calendar（Google 行事曆）

- **需要**：Google Cloud 服務帳號 + JSON 金鑰
- **免費額度**：無限制（個人使用）
- **申請步驟**：
  1. 到 https://console.cloud.google.com/ 登入 Google 帳號
  2. 建立新專案（例如「OpenClaw」）
  3. 左側選單 → APIs & Services → Library → 搜尋「Google Calendar API」→ 啟用
  4. 左側選單 → APIs & Services → Credentials → Create Credentials → Service Account
  5. 填寫服務帳號名稱 → Create → Done
  6. 點進剛建立的服務帳號 → Keys → Add Key → Create New Key → JSON → Create
  7. 下載的 JSON 檔案放到 `~/.openclaw/workspace/google-credentials.json`
  8. 到 Google Calendar 設定 → 分享給服務帳號的 Email（xxx@xxx.iam.gserviceaccount.com）
- **TOOLS.md 設定**：
  ```
  ## Google Calendar
  - 服務帳號金鑰路徑: ~/.openclaw/workspace/google-credentials.json
  - 主要行事曆: 工作
  ```
- **測試**：跟龍蝦說「今天有什麼行程？」
- **詳細教學**：CH16 §16.5

---

### notion（Notion 整合）

- **需要**：Notion Integration Token + Database ID
- **免費額度**：無限制
- **申請步驟**：
  1. 到 https://www.notion.so/my-integrations 點「New Integration」
  2. 填寫名稱（例如「OpenClaw」）、選擇工作區
  3. 建立後複製 Internal Integration Token
  4. 到你的 Notion 資料庫頁面 → 右上角 ⋯ → Connections → 搜尋並連接你剛建立的 Integration
  5. 複製資料庫頁面的網址，網址中 `?v=` 前面那一串就是 Database ID
- **TOOLS.md 設定**：
  ```
  ## Notion
  - API Token: 你的Integration_Token
  - 主要資料庫 ID: 你的Database_ID
  - 資料庫名稱: 待辦事項（方便龍蝦辨識）
  ```
- **測試**：跟龍蝦說「在 Notion 新增一筆待辦：寫完作業」
- **詳細教學**：CH16 §16.4

---

### email（Email 管理）

- **需要**：Gmail App Password（應用程式專用密碼）
- **免費額度**：無限制
- **申請步驟**：
  1. 到 Google 帳號 → 安全性 → 兩步驟驗證 → 確認已開啟
  2. 回到安全性頁面，找到「應用程式密碼」（需要兩步驟驗證才會出現）
  3. 選擇「郵件」和「Windows 電腦」
  4. 點「產生」，會得到一組 16 位密碼（格式：xxxx xxxx xxxx xxxx）
  5. **重要**：這組密碼只會顯示一次，請立刻複製
- **TOOLS.md 設定**：
  ```
  ## Email（Gmail）
  - Gmail 帳號: 你的email@gmail.com
  - Gmail App Password: xxxx xxxx xxxx xxxx
  ```
- **測試**：跟龍蝦說「最近有什麼新信？」

---

### todo（待辦事項）

- **需要**：不需要任何設定（資料存在本地）
- **測試**：跟龍蝦說「幫我記住明天要交報告」然後說「我的待辦有什麼？」

---

### notes（筆記備忘）

- **需要**：不需要任何設定（資料存在本地）
- **測試**：跟龍蝦說「幫我記一下：下週二開會要帶筆電」

---

### summary（長文摘要）

- **需要**：不需要任何設定
- **測試**：貼一段長文然後說「幫我摘要成三個重點」

---

### web-search（網頁搜尋）

- **需要**：Google Custom Search API Key 或 Bing Search API Key
- **免費額度**：Google 每天 100 次 / Bing 每月 1,000 次

**Google Custom Search 申請步驟：**
  1. 到 https://programmablesearchengine.google.com/ 建立自訂搜尋引擎
  2. 設定「搜尋整個網路」
  3. 記下 Search Engine ID（cx 值）
  4. 到 Google Cloud Console → 啟用 Custom Search API → 建立 API Key

**Bing Search 申請步驟：**
  1. 到 https://portal.azure.com/ 建立 Azure 帳號
  2. 建立「Bing Search v7」資源
  3. 在 Keys and Endpoint 取得 API Key

- **TOOLS.md 設定**：
  ```
  ## Web Search（網頁搜尋）
  - Search Engine: google（或 bing）
  - Google API Key: 你的Key
  - Google Search Engine ID: 你的cx值
  ```
- **測試**：跟龍蝦說「幫我搜尋台北今天有什麼活動」

---

## 三、娛樂與社交類

### clawra（龍蝦自拍）

- **需要**：fal.ai API Key
- **申請步驟**：見 CH8 §8.5 的詳細教學
- **TOOLS.md 設定**：
  ```
  ## Clawra（自拍）
  - fal.ai API Key: 你的Key
  ```
- **測試**：跟龍蝦說「自拍一張」
- **詳細教學**：CH8 §8.5

---

### music（音樂推薦）

- **需要**：Spotify Developer API
- **免費額度**：無限制（個人使用）
- **申請步驟**：
  1. 到 https://developer.spotify.com/dashboard 用 Spotify 帳號登入
  2. 點「Create App」建立應用程式
  3. 填寫 App Name 和 Description
  4. Redirect URI 填 `http://localhost:3000`（不會用到，但必填）
  5. 記下 Client ID 和 Client Secret
- **TOOLS.md 設定**：
  ```
  ## Music（音樂）
  - Spotify Client ID: 你的Client_ID
  - Spotify Client Secret: 你的Client_Secret
  ```
- **測試**：跟龍蝦說「推薦一些適合工作時聽的音樂」

---

### joke（笑話）

- **需要**：不需要任何設定
- **測試**：跟龍蝦說「講個笑話」

---

### quote（每日金句）

- **需要**：不需要任何設定
- **測試**：跟龍蝦說「給我一句今天的金句」

---

### trivia（冷知識）

- **需要**：不需要任何設定
- **測試**：跟龍蝦說「說個冷知識」

---

## 四、系統工具類

### disk-audit（磁碟盤點）

- **需要**：不需要任何設定（需要 Desktop Agent 模式）
- **測試**：跟龍蝦說「掃描一下 D 槽有什麼大檔案」
- **詳細教學**：CH18 §18.3

---

### sag（文字轉語音 TTS）

- **需要**：ElevenLabs API Key
- **免費額度**：每月 10,000 字元
- **申請步驟**：
  1. 到 https://elevenlabs.io/ 點「Sign Up」註冊
  2. 用 Email 或 Google 帳號登入
  3. 左側選單 → Profile → 找到 API Key
  4. 複製 API Key
- **TOOLS.md 設定**：
  ```
  ## SAG（文字轉語音）
  - ElevenLabs API Key: 你的Key
  - Voice: Rachel（可選：Adam、Bella、Domi、Elli 等）
  - Language: zh（中文）
  ```
- **測試**：跟龍蝦說「用語音說早安」
- **補充**：搭配 CH20 Twilio 語音通話，龍蝦的電話聲音就會用 ElevenLabs 的高品質語音

---

### screenshot（螢幕截圖）

- **需要**：不需要任何設定（需要 Desktop Agent 模式，CH18）
- **測試**：跟龍蝦說「截個圖讓我看」

---

### file-manager（檔案管理）

- **需要**：不需要任何設定（需要 Desktop Agent 模式，CH18）
- **測試**：跟龍蝦說「桌面上有什麼檔案？」
- **詳細教學**：CH18 §18.3

---

### system-monitor（系統監控）

- **需要**：不需要任何設定
- **測試**：跟龍蝦說「電腦現在 CPU 使用率多少？」
- **詳細教學**：CH18 §18.4

---

## 五、開發者工具類

> 這類技能主要給有程式開發經驗的使用者。

### git（Git 版本控制）

- **需要**：電腦已安裝 Git + Desktop Agent 模式
- **測試**：跟龍蝦說「目前這個專案在哪個分支？」

---

### code-review（程式碼審查）

- **需要**：不需要任何設定（用 AI 模型能力）
- **測試**：貼一段程式碼然後說「幫我 review 這段 code」

---

### docker（Docker 管理）

- **需要**：電腦已安裝 Docker + Desktop Agent 模式
- **測試**：跟龍蝦說「現在跑了哪些容器？」

---

### ssh（SSH 遠端管理）

- **需要**：SSH Key 或帳號密碼
- **TOOLS.md 設定**：
  ```
  ## SSH（遠端伺服器）
  - Host: 192.168.1.100
  - User: admin
  - Key Path: ~/.ssh/id_rsa
  - Port: 22
  ```
- **測試**：跟龍蝦說「連到伺服器看一下系統狀態」

---

### database（資料庫查詢）

- **需要**：資料庫連線資訊
- **支援**：MySQL、PostgreSQL、SQLite
- **TOOLS.md 設定**：
  ```
  ## Database（資料庫）
  - Type: mysql（或 postgresql / sqlite）
  - Host: localhost
  - Port: 3306
  - Database: mydb
  - User: root
  - Password: 你的密碼
  ```
- **測試**：跟龍蝦說「資料庫裡有多少筆資料？」

---

## 六、雲端儲存與文件類

### google-drive（Google 雲端硬碟）

- **需要**：rclone（開源雲端同步工具，內建 Google OAuth，不需要自建 Google Cloud 專案）
- **安裝 rclone**：
  1. 到 https://rclone.org/downloads/ 下載對應系統的版本並解壓
  2. 或用指令安裝：
     - Windows：`curl -L -o rclone.zip https://downloads.rclone.org/rclone-current-windows-amd64.zip`
     - Linux：`curl -L -o rclone.zip https://downloads.rclone.org/rclone-current-linux-amd64.zip`
     - macOS：`brew install rclone`
- **認證步驟**（僅需做一次）：
  1. 執行 `rclone authorize "drive"`
  2. 瀏覽器自動打開 → 登入 Google 帳號 → 點「允許」
  3. rclone 輸出一段 JSON token
  4. 執行 `rclone config create gdrive drive token '<那段JSON>' config_refresh_token false config_change_team_drive false --non-interactive`
- **TOOLS.md 設定**：
  ```
  ## Google Drive
  - rclone 路徑: rclone（如果有加入 PATH）或完整路徑
  - rclone 遠端名稱: gdrive
  ```
- **測試**：跟龍蝦說「我的 Google Drive 裡有什麼檔案？」
- **支援功能**：列出、上傳、下載、搜尋、讀取內容、修改、建立/刪除/移動資料夾、分享連結

---

### onedrive（OneDrive）

- **需要**：Microsoft Azure AD App Registration
- **申請步驟**：
  1. 到 https://portal.azure.com/ 用 Microsoft 帳號登入
  2. Azure Active Directory → App registrations → New registration
  3. 填寫名稱「OpenClaw」→ 選「單一租用戶」→ 註冊
  4. 記下 Application (client) ID 和 Directory (tenant) ID
  5. Certificates & secrets → New client secret → 記下 Value
  6. API permissions → Add → Microsoft Graph → Files.ReadWrite → 授權
- **TOOLS.md 設定**：
  ```
  ## OneDrive
  - Client ID: 你的Application_ID
  - Tenant ID: 你的Tenant_ID
  - Client Secret: 你的Secret_Value
  ```
- **測試**：跟龍蝦說「OneDrive 裡有什麼？」

---

### doc-converter（文件轉換）

- **需要**：不需要任何設定（本地處理）
- **支援格式**：Markdown ↔ PDF / Word / PPTX
- **測試**：跟龍蝦說「把這份 .md 檔轉成 PDF」

---

### pdf-tools（PDF 工具）

- **需要**：不需要任何設定（本地處理）
- **功能**：閱讀、合併、拆分、文字擷取
- **測試**：跟龍蝦說「這份 PDF 在講什麼？」

---

### pptx-generator（簡報生成）

- **需要**：不需要任何設定（本地處理）
- **測試**：跟龍蝦說「幫我做一份 10 頁的 AI 教育簡報」

---

### excel-tools（Excel 工具）

- **需要**：不需要任何設定（本地處理）
- **測試**：跟龍蝦說「分析這份 Excel 裡的銷售數據」

---

## 七、財經資訊類

### stock-tracker（股票追蹤）

- **需要**：Alpha Vantage API Key
- **免費額度**：每天 500 次、每分鐘 5 次
- **申請步驟**：
  1. 到 https://www.alphavantage.co/support/#api-key
  2. 填寫基本資料（Email、公司名稱填「Personal」即可）
  3. 提交後立刻取得 API Key
- **TOOLS.md 設定**：
  ```
  ## Stock Tracker（股票）
  - Alpha Vantage API Key: 你的Key
  - 預設市場: TW（台股）
  - 關注股票: 2330.TW, AAPL, TSLA
  ```
- **測試**：跟龍蝦說「台積電今天股價多少？」

---

### crypto-tracker（加密貨幣）

- **需要**：CoinGecko API Key
- **免費額度**：每分鐘 10-30 次
- **申請步驟**：
  1. 到 https://www.coingecko.com/en/api 點「Get Your API Key」
  2. 選擇 Demo（免費）方案
  3. 用 Email 註冊後取得 API Key
- **TOOLS.md 設定**：
  ```
  ## Crypto Tracker（加密貨幣）
  - CoinGecko API Key: 你的Key
  - 預設貨幣: TWD（顯示台幣價格）
  - 關注幣種: bitcoin, ethereum
  ```
- **測試**：跟龍蝦說「比特幣現在多少錢？」

---

### finance-news（財經新聞）

- **需要**：NewsAPI Key（和 news 技能共用同一個）
- **TOOLS.md 設定**：
  ```
  ## Finance News（財經新聞）
  - NewsAPI Key: 你的Key（和 news 技能共用）
  - Topics: stock, crypto, forex, economy
  ```
- **測試**：跟龍蝦說「今天有什麼財經大事？」

---

### exchange-rate（進階匯率）

- **需要**：ExchangeRate API Key（和 currency 技能共用同一個）
- **TOOLS.md 設定**：
  ```
  ## Exchange Rate（匯率分析）
  - ExchangeRate API Key: 你的Key（和 currency 技能共用）
  - 基準貨幣: TWD
  ```
- **測試**：跟龍蝦說「美金對台幣過去一個月的走勢如何？」

---

## 八、智慧家庭類

### home-assistant（Home Assistant 整合）

- **需要**：Home Assistant 伺服器 + 長期存取權杖
- **前提**：你家需要有一台運行 Home Assistant 的設備
- **申請步驟**：
  1. 登入你的 Home Assistant Web UI
  2. 點左下角使用者頭像 → 安全性（Security）
  3. 拉到最下面「長期存取權杖」（Long-Lived Access Tokens）
  4. 點「建立權杖」→ 輸入名稱「OpenClaw」→ 複製產生的 Token
- **TOOLS.md 設定**：
  ```
  ## Home Assistant（智慧家庭）
  - URL: http://192.168.1.xxx:8123
  - Token: 你的長期存取權杖
  ```
- **測試**：跟龍蝦說「家裡現在溫度多少？」或「把客廳的燈打開」

---

### camera（IP 攝影機）

- **需要**：攝影機的串流網址和帳號密碼
- **TOOLS.md 設定**：
  ```
  ## Camera（攝影機）
  - 門口攝影機:
    - URL: rtsp://admin:password@192.168.1.50:554/stream
    - 名稱: 門口
  - 客廳攝影機:
    - URL: rtsp://admin:password@192.168.1.51:554/stream
    - 名稱: 客廳
  ```
- **測試**：跟龍蝦說「看一下門口攝影機」

---

### light（智慧燈具）

- **需要**：依燈具品牌不同

**Philips Hue：**
  1. 確保 Hue Bridge 已連上同一個區域網路
  2. 按下 Hue Bridge 上的按鈕
  3. 在 TOOLS.md 設定 Bridge IP（通常是 `192.168.1.xxx`）
  ```
  ## Light（Philips Hue）
  - Hue Bridge IP: 192.168.1.xxx
  - Hue API Key: 你的Key
  ```

**LIFX：**
  1. 到 https://cloud.lifx.com/settings 取得 Personal Access Token
  ```
  ## Light（LIFX）
  - LIFX Token: 你的Token
  ```

**Tuya / 塗鴉智能（小米等）：**
  1. 到 https://iot.tuya.com/ 建立開發者帳號
  2. 建立雲端專案 → 取得 Access ID 和 Access Secret
  ```
  ## Light（Tuya）
  - Tuya Access ID: 你的ID
  - Tuya Access Secret: 你的Secret
  - Tuya Region: cn（中國）或 us（美國）
  ```

- **測試**：跟龍蝦說「把臥室的燈關掉」

---

## 九、通訊與語音類

### twilio-voice（語音通話）

- **需要**：Twilio 帳號 + 電話號碼
- **費用**：電話號碼約 US$1/月 + 通話費
- **申請步驟**：見 CH20 §20.2（帳號申請與號碼購買）與 §20.3（安裝外掛與設定認證）
- **TOOLS.md 設定**：
  ```
  ## Twilio Voice（語音通話）
  - Account SID: 你的Account_SID
  - Auth Token: 你的Auth_Token
  - Phone Number: +1xxxxxxxxxx
  ```
- **測試**：跟龍蝦說「打電話給我」（需要先完成 CH20 的設定）
- **詳細教學**：CH20 §20.2–§20.5

---

### browser-sandbox（瀏覽器操控）

- **需要**：安裝 Playwright（自動化瀏覽器）
- **安裝步驟**：
  1. 在 OpenClaw 工作區執行：`npm install playwright`
  2. 安裝瀏覽器引擎：`npx playwright install chromium`
  3. 不需要 API Key
- **TOOLS.md 設定**：
  ```
  ## Browser Sandbox（瀏覽器）
  - Browser: chromium
  - Headless: true（背景執行，不顯示瀏覽器視窗）
  ```
- **測試**：跟龍蝦說「幫我上網查一下台北明天的活動」
- **詳細教學**：CH18 §18.2

---

## 快速對照表

| 技能 | 需要 API Key | 免費額度 | 難度 |
|------|------------|---------|------|
| weather | ✅ OpenWeatherMap | 60 次/分鐘 | ⭐ |
| news | ✅ NewsAPI | 100 次/天 | ⭐ |
| rss-reader | ❌ | — | ⭐ |
| translate | ❌ | — | ⭐ |
| calculator | ❌ | — | ⭐ |
| timer | ❌ | — | ⭐ |
| recipe | ❌ | — | ⭐ |
| currency | ✅ ExchangeRate API | 1,500 次/月 | ⭐ |
| google-calendar | ✅ Google API | 無限制 | ⭐⭐⭐ |
| notion | ✅ Notion API | 無限制 | ⭐⭐ |
| email | ✅ Gmail App Password | 無限制 | ⭐⭐ |
| todo | ❌ | — | ⭐ |
| notes | ❌ | — | ⭐ |
| summary | ❌ | — | ⭐ |
| web-search | ✅ Google/Bing API | 100 次/天 | ⭐⭐ |
| clawra | ✅ fal.ai | 依方案 | ⭐⭐ |
| music | ✅ Spotify API | 無限制 | ⭐⭐ |
| joke | ❌ | — | ⭐ |
| quote | ❌ | — | ⭐ |
| trivia | ❌ | — | ⭐ |
| disk-audit | ❌ | — | ⭐ |
| sag | ✅ ElevenLabs | 10,000 字/月 | ⭐⭐ |
| screenshot | ❌ | — | ⭐ |
| file-manager | ❌ | — | ⭐ |
| system-monitor | ❌ | — | ⭐ |
| git | ❌ | — | ⭐ |
| code-review | ❌ | — | ⭐ |
| docker | ❌ | — | ⭐ |
| ssh | ❌（需 SSH Key） | — | ⭐⭐ |
| database | ✅ 資料庫連線 | 依資料庫 | ⭐⭐⭐ |
| google-drive | ✅ rclone 認證 | 無限制 | ⭐⭐ |
| onedrive | ✅ Microsoft API | 依方案 | ⭐⭐⭐ |
| doc-converter | ❌ | — | ⭐ |
| pdf-tools | ❌ | — | ⭐ |
| pptx-generator | ❌ | — | ⭐ |
| excel-tools | ❌ | — | ⭐ |
| stock-tracker | ✅ Alpha Vantage | 500 次/天 | ⭐ |
| crypto-tracker | ✅ CoinGecko | 10-30 次/分鐘 | ⭐ |
| finance-news | ✅ NewsAPI | 100 次/天 | ⭐ |
| exchange-rate | ✅ ExchangeRate API | 1,500 次/月 | ⭐ |
| home-assistant | ✅ HA Token | 無限制 | ⭐⭐⭐ |
| camera | ✅ 攝影機設定 | — | ⭐⭐ |
| light | ✅ 看品牌 | — | ⭐⭐ |
| twilio-voice | ✅ Twilio | 試用 US$15 | ⭐⭐⭐ |
| browser-sandbox | ❌ | — | ⭐⭐ |

> **難度說明**：⭐ = 零設定或一個 Key 搞定 / ⭐⭐ = 需要多步驟設定 / ⭐⭐⭐ = 需要建立雲端專案或複雜設定
