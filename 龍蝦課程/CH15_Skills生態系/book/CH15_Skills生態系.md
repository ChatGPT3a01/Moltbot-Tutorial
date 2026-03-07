# CH15 | Skills 生態系

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

### 15.1.1 技能的定義

在 OpenClaw 的架構裡，Skill 是一個**擴充龍蝦能力的模組**。每個 Skill 定義了：

- **龍蝦能做什麼新的事**（例如查天氣、寄 Email）
- **怎麼跟外部服務互動**（例如呼叫天氣 API、連接 Gmail）
- **什麼時候觸發**（例如使用者說「天氣」的時候）

### 15.1.2 Skill 的運作流程

當你跟龍蝦說「今天台北天氣如何？」，背後發生的事情是：

```
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

OpenClaw 官方和社群提供了超過 60 個技能。以下按八大分類介紹：

### 15.2.1 生活實用類

| 技能名稱 | 功能 | 需要 API Key |
|---------|------|------------|
| **weather** | 查詢天氣和預報 | ✅ OpenWeatherMap |
| **news** | 新聞摘要和即時新聞 | ✅ NewsAPI |
| **translate** | 多國語言翻譯 | ❌ 用 AI 模型本身 |
| **calculator** | 數學計算和單位換算 | ❌ |
| **timer** | 設定計時器和鬧鐘 | ❌ |
| **recipe** | 食譜搜尋和推薦 | ❌ |
| **currency** | 匯率查詢和換算 | ✅ ExchangeRate API |

### 15.2.2 生產力類

| 技能名稱 | 功能 | 需要 API Key |
|---------|------|------------|
| **google-calendar** | Google 行事曆管理 | ✅ Google API |
| **notion** | Notion 資料庫操作 | ✅ Notion API |
| **email** | 寄送和讀取 Email | ✅ Gmail App Password |
| **todo** | 待辦事項管理 | ❌ 本地儲存 |
| **notes** | 筆記和備忘錄 | ❌ 本地儲存 |
| **summary** | 長文摘要 | ❌ 用 AI 模型 |
| **web-search** | 網頁搜尋 | ✅ Google/Bing API |

### 15.2.3 娛樂與社交類

| 技能名稱 | 功能 | 需要 API Key |
|---------|------|------------|
| **clawra** | 龍蝦自拍（CH8 教過） | ✅ fal.ai |
| **music** | 音樂推薦和搜尋 | ✅ Spotify API |
| **joke** | 講笑話 | ❌ |
| **quote** | 每日金句 | ❌ |
| **trivia** | 冷知識問答 | ❌ |

### 15.2.4 系統工具類

| 技能名稱 | 功能 | 需要 API Key |
|---------|------|------------|
| **disk-audit** | 磁碟空間盤點 | ❌ 本地腳本 |
| **sag** | 文字轉語音（TTS） | ✅ ElevenLabs |
| **screenshot** | 螢幕截圖 | ❌ |
| **file-manager** | 檔案管理 | ❌ |
| **system-monitor** | 系統資源監控 | ❌ |

### 15.2.5 開發者工具類

| 技能名稱 | 功能 | 需要 API Key |
|---------|------|------------|
| **git** | Git 版本控制操作 | ❌ |
| **code-review** | 程式碼審查 | ❌ 用 AI 模型 |
| **docker** | Docker 容器管理 | ❌ |
| **ssh** | 遠端伺服器管理 | ❌ 需要 SSH Key |
| **database** | 資料庫查詢 | ✅ 資料庫連線 |

### 15.2.6 雲端儲存與文件類

| 技能名稱 | 功能 | 需要 API Key |
|---------|------|------------|
| **google-drive** | Google 雲端硬碟管理 | ✅ Google API |
| **onedrive** | OneDrive 檔案管理 | ✅ Microsoft API |
| **doc-converter** | 文件格式轉換 | ❌ 本地處理 |
| **pdf-tools** | PDF 閱讀和操作 | ❌ 本地處理 |
| **pptx-generator** | 簡報自動生成 | ❌ 本地處理 |
| **excel-tools** | Excel 讀寫和分析 | ❌ 本地處理 |

### 15.2.7 財經資訊類

| 技能名稱 | 功能 | 需要 API Key |
|---------|------|------------|
| **stock-tracker** | 股票即時報價和走勢 | ✅ Alpha Vantage |
| **crypto-tracker** | 加密貨幣行情 | ✅ CoinGecko |
| **finance-news** | 財經新聞摘要 | ✅ NewsAPI |
| **exchange-rate** | 匯率查詢和歷史走勢 | ✅ ExchangeRate API |

### 15.2.8 智慧家庭類

| 技能名稱 | 功能 | 需要 API Key |
|---------|------|------------|
| **home-assistant** | Home Assistant 整合 | ✅ HA Token |
| **camera** | IP 攝影機監控 | ✅ 攝影機設定 |
| **light** | 智慧燈具控制 | ✅ 看燈具品牌 |

> 💡 **不用全部都裝**：技能太多反而會讓龍蝦「不知道該用哪個」。建議先裝你最需要的 3-5 個，用熟了再慢慢擴充。

---

## 15.3 Skills 安裝與管理

### 15.3.1 用 ClawdHub 搜尋技能

ClawdHub 是 OpenClaw 的技能商店。你可以在裡面搜尋和安裝技能：

```powershell
clawdhub search weather
```

輸出範例：

```
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

```
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

以下是幾個常用技能的 API Key 申請方式：

**OpenWeatherMap（天氣）：**

1. 到 https://openweathermap.org/api 註冊帳號
2. 免費方案每分鐘 60 次呼叫，個人用綽綽有餘
3. 註冊後在帳號頁面找到 API Key

**NewsAPI（新聞）：**

1. 到 https://newsapi.org/ 註冊
2. 免費方案每天 100 次呼叫
3. 註冊後取得 API Key

**Google Calendar：**

1. 到 Google Cloud Console 建立專案
2. 啟用 Google Calendar API
3. 建立服務帳號，下載 JSON 金鑰
4. 把 JSON 金鑰放到工作區資料夾

這些 API Key 的申請步驟在 CH1 已經有介紹基本概念，各技能的 SKILL.md 裡也會附上詳細的設定說明。

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

```
~/.openclaw/workspace/
└── skills/
    ├── weather/
    │   ├── SKILL.md          ← 技能定義檔
    │   └── scripts/          ← 腳本（如果需要的話）
    │       └── fetch.js
    ├── todo/
    │   └── SKILL.md
    └── clawra/
        └── SKILL.md
```

每個技能是一個獨立的資料夾。如果你想手動安裝技能（不透過 ClawdHub），只要把技能的資料夾複製到 `skills/` 裡就好。

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
- **60+ 官方技能**——涵蓋生活、工作、娛樂、開發、雲端儲存、財經、智慧家庭等八大類
- **安裝與管理**——用 `clawdhub` 或 `openclaw skills` 指令一鍵搞定
- **設定與客製化**——API Key 寫在 TOOLS.md、行為調整改 SKILL.md

你的龍蝦現在不只是一個聊天機器人了——它可以查天氣、管行程、讀新聞、寫 Email、甚至控制你的智慧家電。

但光會「裝技能」還不夠。在下一章 CH16，我們要用實際的例子教你怎麼把這些技能**組合運用**到日常生活中——排程提醒、天氣查詢、新聞摘要、Notion 整合、Google Calendar 整合。不是教你「怎麼安裝」，而是教你「怎麼用得好」。
