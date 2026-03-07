# CH1 | 環境準備與帳號申請

---

你有沒有過這樣的經驗？滿心期待地買了一台新的組裝電腦回家，拆開箱子、把零件擺好，正準備開始組裝——結果發現少了一條螺絲、少了一根線材。於是你又跑了一趟光華商場，來回折騰了兩個小時。

安裝 AI 工具也是一樣的道理。如果你什麼都沒準備就一頭栽進去，保證會在安裝到一半的時候被問「請輸入你的 API Key」，然後你才手忙腳亂地去申請——等你申請完，前面的進度可能已經過期了，又得重頭來過。

所以這一章要做的事情很單純：**把所有的「零件」備齊**。帳號、密鑰、工具、設定，一次搞定。這一章可能是全書最「無聊」的一章（因為都在填表單和複製貼上），但也是最重要的一章。備好料，後面炒菜才會順利。

泡杯咖啡，我們開始吧。

---

### 本章學習目標

讀完這一章，你將能夠：

- 確認自己的電腦是否符合系統需求
- 擁有一組可用的 Gmail 帳號
- 在 LINE Developers 建立 Messaging API Channel，取得三組關鍵資料
- 在 Telegram 建立 Bot，取得 Bot Token
- 至少取得一個 AI 模型的 API Key（推薦 Google Gemini 免費方案）
- 註冊 ngrok 隧道工具帳號
- 註冊 GitHub 帳號（後續免費雲端方案會用到）
- 了解 API Key 的安全觀念，知道如何妥善保管

---

## 1.1 系統需求確認

---

在申請帳號之前，讓我們先花兩分鐘確認一下你的電腦是否符合需求。好消息是：要求不高。只要你的電腦能正常上網、能打字，基本上就夠了。

### 1.1.1 硬體需求

| 項目 | 最低需求 | 建議配備 |
|------|---------|---------|
| 作業系統 | Windows 10 / macOS 12 / Ubuntu 22 | **Windows 11**（本書主要示範） |
| 記憶體（RAM） | 4 GB | 8 GB 以上 |
| 硬碟空間 | 2 GB 可用空間 | 5 GB 以上 |
| 網路 | 能上網 | 穩定的寬頻網路 |

如果你的電腦比較舊、效能比較弱，也不用擔心。CH5 會教你一種完全免費的雲端方案（GitHub Codespaces），讓龍蝦跑在雲端上，完全不吃你電腦的效能。所以不管你的電腦多老，只要能打開瀏覽器，就能用龍蝦。

### 1.1.2 軟體環境總覽

下面列出的是三強工具會用到的軟體。這裡先讓你有個概念就好，**這一章不用安裝任何東西**——軟體安裝會在各工具的專屬章節裡一步步教你。

| 軟體 | 用途 | 什麼時候安裝 |
|------|------|-------------|
| **Node.js** v22+ | OpenClaw 的運行環境 | CH5 安裝龍蝦時 |
| **ngrok** | 讓 LINE 能連到你的電腦 | CH5 安裝龍蝦時 |
| **Git** | 程式碼版本控制 | CH3 Claude Code 時 |
| **VS Code**（選用） | 程式碼編輯器 | CH3 Claude Code 時 |
| **Google Chrome** | 瀏覽器 | CH2 Antigravity 時 |

### 1.1.3 確認你的 Windows 版本

如果你使用的是 Windows 系統，建議先確認一下版本號碼，確保後面的操作不會出問題。

**【步驟 1】** 同時按下鍵盤上的 `Windows 鍵` + `R`，會跳出一個小小的「執行」視窗。

**【步驟 2】** 在視窗中輸入 `winver`，然後按 Enter。

**【步驟 3】** 螢幕上會出現一個對話框，顯示你的 Windows 版本資訊。對照一下：

- ✅ **Windows 11**：完美，本書所有操作都以 Windows 11 作為示範環境
- ✅ **Windows 10（版本 1909 以上）**：可以正常使用，部分畫面可能略有不同
- ⚠️ **Windows 10（版本 1909 以下）**：建議先更新到最新版本
- ❌ **Windows 7 / 8**：許多工具已不再支援，強烈建議升級

![winver 視窗顯示 Windows 版本](../截圖/ch1_winver.png)

確認完系統版本，我們就可以開始申請帳號了。接下來的幾個小節，我們會依序申請所有需要的帳號和 API Key。建議你打開電腦上的「記事本」程式，把每一組申請到的資料都記錄下來——等到安裝龍蝦的時候，直接複製貼上就好。

---

## 1.2 Gmail 帳號

---

Gmail 帳號是後面幾乎所有服務的「萬用通行證」。LINE Developers 要用它、Google AI Studio 要用它、OpenAI 要用它、GitHub 要用它、ngrok 也可以用它——幾乎所有平台都支援「用 Google 帳號一鍵登入」。所以我們第一步，就是確保你有一組可用的 Gmail。

### 1.2.1 如果你已經有 Gmail

很好，這一步可以快速通過。請確認你記得兩件事：你的 Gmail 地址（例如 `yourname@gmail.com`），以及你的密碼。把它記在記事本裡，我們等下會用到。確認完就可以直接跳到 **1.3**。

### 1.2.2 申請新的 Gmail

如果你還沒有 Gmail 帳號，我們現在就來申請一個。整個過程大約只需要三分鐘。

**【步驟 1】** 打開瀏覽器，在網址列輸入以下網址並按 Enter：

```
https://accounts.google.com/signup
```

**【步驟 2】** 你會看到 Google 帳號的註冊頁面。依序填入以下資料：

| 欄位 | 怎麼填 | 範例 |
|------|--------|------|
| 名字 | 你的名字 | 小明 |
| 姓氏 | 你的姓氏 | 王 |
| 使用者名稱 | 你想要的 Email 名稱 | `wangming2026` |
| 密碼 | 至少 8 個字元，建議包含英數 | `MyP@ss1234` |
| 確認密碼 | 再輸入一次密碼 | `MyP@ss1234` |

**【步驟 3】** 點「下一步」。Google 會要求你填寫手機號碼。建議填寫，萬一日後忘記密碼可以用手機找回。

**【步驟 4】** 閱讀並同意服務條款，點「我同意」即可完成註冊。

> ⚠️ **密碼安全提醒**：不要用生日、電話號碼、或 `password123` 這種容易被猜到的密碼。建議用英文大小寫 + 數字 + 符號的組合，例如 `MyP@ss1234`。

![Google 帳號註冊頁面](../截圖/ch1_gmail_signup.png)

申請完成後，把帳號密碼記在記事本裡：

```
Gmail 帳號：_______________@gmail.com
Gmail 密碼：_______________
```

---

## 1.3 LINE Developer 帳號與機器人申請

---

這是本章最關鍵、也最花時間的一段。我們要在 LINE Developers 平台上建立一個「Messaging API Channel」——簡單來說就是**替龍蝦在 LINE 上開一個帳號**。完成之後，你會拿到三組重要的資料：**Channel ID**、**Channel Secret**、**Channel Access Token**。

這三組資料的作用是什麼？你可以把它想像成「通行密碼」。龍蝦 AI 要透過 LINE 跟你對話，就需要這三組資料來證明它的身份。沒有這三組資料，LINE 不會讓龍蝦進門。

讓我們一步一步來。

### 【步驟 1】登入 LINE Developers

打開瀏覽器，進入 LINE Developers 的網站：

```
https://developers.line.biz/
```

點右上角的 **Log in**（登入）。你會看到幾種登入方式，推薦選擇「用 LINE 帳號登入」——就是你手機上平常用的那個 LINE 帳號。掃描 QR Code 或輸入帳號密碼就能登入。

如果你是第一次進入 LINE Developers，系統會要求你填寫開發者資料：你的名字、Email（填 Gmail）、勾選同意條款，然後點 **Create my account** 就完成了。

![LINE Developers 登入後首頁](../截圖/ch1_line_dev_home.png)

### 【步驟 2】建立 Provider

登入之後，你會看到一個叫做 **Providers** 的頁面。Provider 是一個「組織」的概念，用來管理你底下的所有機器人。你可以把它想像成「公司名稱」——一個 Provider 底下可以有很多個機器人。

點 **Create** 按鈕，輸入一個名稱（隨便取就好，例如「我的AI助手」、「龍蝦工作室」），然後點 **Create** 確認。

![建立 Provider 畫面](../截圖/ch1_line_provider.png)

### 【步驟 3】建立 Messaging API Channel

Provider 建好之後，點進去，你會看到一個幾乎空白的頁面。現在點 **Create a Messaging API channel**，開始建立你的 LINE 機器人。

系統會要求你填寫一張表單，以下是每個欄位的填法：

| 欄位 | 怎麼填 | 範例 |
|------|--------|------|
| Channel type | 已自動選好，不用改 | Messaging API |
| Provider | 已自動選好，不用改 | 我的AI助手 |
| Company or owner's country | 選 **Taiwan** | Taiwan |
| Channel icon | 可以先跳過，之後再換 | （留空） |
| Channel name | 機器人的顯示名稱 | 龍蝦小助手 |
| Channel description | 簡短說明這是什麼 | 我的AI聊天機器人 |
| Category | 選一個接近的類別 | Education |
| Subcategory | 選一個子類別 | School |
| Email address | 你的 Email | yourname@gmail.com |

填好之後，勾選最下面的兩個同意條款，然後點 **Create**。

> 💡 **Channel name 之後可以改**，所以不用想太久。先隨便取一個，等龍蝦跑起來之後再慢慢想一個帥氣的名字。

![建立 Messaging API Channel 的填寫畫面](../截圖/ch1_line_channel_create.png)

### 【步驟 4】取得 Channel ID 和 Channel Secret

Channel 建立完成後，你會自動進入它的設定頁面。請確認你在 **Basic settings**（基本設定）標籤頁。

在這個頁面上，你可以找到兩組重要資料：

1. **Channel ID**：一串純數字（例如 `2006550321`），在頁面上方的位置
2. **Channel Secret**：一串英數混合的字串（例如 `a1b2c3d4e5f6g7h8`），在頁面中間的位置

把它們都複製下來，記在記事本裡。

```
Channel ID：_______________
Channel Secret：_______________
```

![Basic settings 中的 Channel ID 和 Channel Secret](../截圖/ch1_line_channel_id.png)

### 【步驟 5】取得 Channel Access Token

接下來點上方的 **Messaging API** 標籤（注意不是 Basic settings），然後一路往下滑到頁面最底部。你會看到一個區塊叫做 **Channel access token (long-lived)**。

點 **Issue** 按鈕，系統會產生一段非常長的文字——這就是你的 Access Token。點旁邊的複製圖示，小心地把它完整複製下來。

```
Channel Access Token：_______________
```

> ⚠️ **注意**：Access Token 非常長，通常超過 100 個字元。複製的時候請確保沒有漏掉任何一個字。建議複製後貼到記事本裡，目視確認開頭和結尾都有。

![Messaging API 頁面中的 Channel Access Token](../截圖/ch1_line_access_token.png)

### 【步驟 6】關閉自動回覆——這一步千萬不能忘

這是新手最容易遺漏的一步，但它**極其重要**。

LINE 的官方帳號預設會開啟「自動回覆」功能——也就是每當有人傳訊息給你的機器人，LINE 會自動回覆一段罐頭訊息（像是「感謝您的訊息，我們會盡快回覆」）。問題是，龍蝦 AI 也會回覆訊息。如果兩邊同時回覆，你每次傳一句話就會收到兩則回覆——一則是 LINE 的罐頭訊息、一則是龍蝦的回覆，場面非常混亂。

所以我們必須把 LINE 的自動回覆關掉，讓龍蝦獨挑大樑。

**請這樣做：**

1. 在你的 Channel 頁面，點 **Messaging API** 標籤
2. 找到 **Auto-reply messages**（自動回覆訊息）
3. 點旁邊的 **Edit**，會跳轉到 LINE Official Account Manager
4. 在「回應設定」頁面中，做以下三個調整：

| 設定項目 | 改成 |
|---------|------|
| 回應模式 | **Bot** |
| 自動回應訊息 | **停用** |
| Webhook | **啟用** |

5. 點 **儲存**

> 🚨 **再次強調**：如果你跳過這一步，安裝完龍蝦後每次對話都會收到雙重回覆，非常困擾。阿亮老師上課時，每期總會有兩三位同學忘記做這一步，然後在群組裡喊「老師！為什麼龍蝦回覆了兩次？」答案就是這個。

![LINE 官方帳號回應設定頁面](../截圖/ch1_line_auto_reply_off.png)

到這裡，LINE 機器人的部分就全部完成了。你現在手上應該有三組資料：Channel ID、Channel Secret、Channel Access Token。請妥善保管，我們在 CH9 設定 LINE 通道時會用到。

---

## 1.4 Telegram Bot 申請

---

比起 LINE 的繁複步驟，Telegram 的機器人申請簡直是一陣清風。不需要開發者帳號、不需要填表單、不需要等審核——你只要跟 Telegram 上一個叫 **BotFather** 的官方機器人聊天，一分鐘就能建好一個 Bot。

為什麼要申請 Telegram Bot？因為在 CH6 安裝完 OpenClaw 之後，我們會先用 Telegram 來測試龍蝦的對話功能。Telegram 的設定比 LINE 簡單非常多，拿來當「第一次約會」再適合不過了。

### 1.4.1 安裝 Telegram

如果你還沒有 Telegram，先安裝一下。Telegram 支援手機和電腦：

| 平台 | 下載方式 |
|------|---------|
| iOS | App Store 搜尋「Telegram」 |
| Android | Google Play 搜尋「Telegram」 |
| Windows 電腦 | 前往 `https://desktop.telegram.org/` |
| 網頁版 | 前往 `https://web.telegram.org/` |

用手機號碼註冊即可，整個過程不到一分鐘。

### 1.4.2 找到 BotFather 並建立機器人

Telegram 有一個非常特別的設計：所有機器人都是透過一個「機器人之父」——**@BotFather**——來建立和管理的。它是 Telegram 官方的機器人，專門負責「生產」新的機器人。

**【步驟 1】** 在 Telegram 的搜尋欄輸入 `@BotFather`，找到帶有藍色勾勾認證的那個，點進去。

**【步驟 2】** 點 **START** 開始跟 BotFather 對話。

**【步驟 3】** 輸入指令：

```
/newbot
```

**【步驟 4】** BotFather 會問你：「Alright, a new bot. How are we going to call it?」——意思是問你機器人的**顯示名稱**。輸入：

```
龍蝦小助手
```

**【步驟 5】** BotFather 接著問你機器人的 **username**（使用者名稱）。這個 username 有規定必須以 `bot` 結尾，而且只能用英文字母、數字和底線。例如：

```
my_lobster_ai_bot
```

> 💡 **username 的命名技巧**：如果你想到的名字已經被人用了，可以在前面加上你的名字或暱稱來區別。例如 `aliang_lobster_bot`、`smart_lobster_2026_bot`。

**【步驟 6】** 如果 username 沒有跟別人重複，BotFather 會回覆一段恭喜訊息，裡面包含一行關鍵的文字：

```
Use this token to access the HTTP API:
7123456789:AAHxxx-xxxxxxxxxxxxxxxxxxxxxxxxxx
```

那串以數字開頭、冒號分隔的文字就是你的 **Bot Token**。請複製下來，記在記事本裡。

```
Telegram Bot Token：_______________
```

> ⚠️ **Bot Token 就是你機器人的鑰匙**。任何人拿到這組 Token，都可以操控你的機器人。所以千萬不要分享給不認識的人，也不要貼在公開的地方。

![與 BotFather 建立機器人的對話畫面](../截圖/ch1_telegram_botfather.png)

就這麼簡單！跟 LINE 那七八個步驟比起來，Telegram 的體驗是不是清爽多了？

---

## 1.5 AI 模型 API Key 申請

---

帳號準備到這裡，你已經完成了通訊管道的部分（LINE 和 Telegram）。接下來要準備的是 OpenClaw 的「大腦」——AI 模型的 API Key。

OpenClaw 本身不是 AI，它是一個**框架**。就像一個機器人的身體，身體裡面需要裝一顆「腦」才能運作。這顆腦，就是 AI 模型。你可以選擇不同廠牌的「腦」來裝——Google 的 Gemini、OpenAI 的 GPT、Anthropic 的 Claude，或甚至是跑在你自己電腦上的免費開源模型 Ollama。

每一種都有不同的特性和價格，讓我用一張表幫你快速比較：

| 模型 | 提供商 | 費用 | 推薦指數 | 適合對象 |
|------|--------|------|---------|---------|
| **Gemini** | Google | 免費額度充足 | ⭐⭐⭐⭐⭐ | 新手首選，省錢又好用 |
| **GPT** | OpenAI | 需儲值（US$5 起） | ⭐⭐⭐⭐ | 想用最強模型的人 |
| **Claude** | Anthropic | 需儲值（US$5 起） | ⭐⭐⭐⭐ | 想用 Claude Code 的人 |
| **Ollama** | 社群開源 | 完全免費 | ⭐⭐⭐ | 有獨顯的技術愛好者 |

> 💡 **阿亮老師的建議**：你**不需要全部都申請**。先申請 Google Gemini 就好——它免費、好用、額度充足。等你上手之後，再依需求考慮其他選項。一開始貪多反而容易搞混。

以下我會依序教你四種模型的申請方式。你可以根據自己的需求選讀，不一定要全部都做。

---

### 1.5.1 Google Gemini API Key（推薦首選，免費）

Google 的 Gemini 是目前對新手最友善的選擇。它有充足的免費額度，而且申請過程只需要幾個步驟。如果你只想先申請一個 API Key，選這個就對了。

**【步驟 1】** 打開瀏覽器，進入 Google AI Studio：

```
https://aistudio.google.com/
```

**【步驟 2】** 用你的 Gmail 帳號登入。如果是第一次使用，會要求你同意服務條款，點「同意」即可。

**【步驟 3】** 登入後，點左側選單的 **Get API key**。你也可以直接在網址列輸入 `https://aistudio.google.com/apikey` 快速到達。

**【步驟 4】** 點 **Create API key**，然後選擇 **Create API key in new project**（在新專案中建立）。

**【步驟 5】** 等待幾秒鐘，API Key 就會產生。點旁邊的複製圖示，把它複製下來。

```
Google AI API Key：_______________（以 AIza 開頭的一串英數字）
```

> 💡 **免費額度說明**：Gemini 2.5 Flash 每分鐘可以免費發送 30 次請求，Gemini 2.5 Pro 每分鐘 5 次。這對個人使用來說綽綽有餘——你跟龍蝦聊天，每分鐘也很難聊超過 30 句吧？

> ⚠️ **重要**：API Key 只會在建立的當下顯示，請**立刻複製**。如果你不小心關掉視窗，回到同一個頁面可以重新建立一組新的。

![Google AI Studio 的 API Key 頁面](../截圖/ch1_gemini_api_key.png)

---

### 1.5.2 OpenAI GPT API Key（選用，需付費）

如果你想讓龍蝦使用 GPT 系列模型，就需要申請 OpenAI 的 API Key。GPT 的對話品質非常優秀，但它是付費的——需要先儲值才能使用。

> 💡 **如果你只想先用免費方案，可以直接跳到 1.5.4 或 1.6。**

**【步驟 1】** 打開瀏覽器，進入 OpenAI Platform：

```
https://platform.openai.com/
```

> ⚠️ **注意**：是 `platform.openai.com`，不是 `chat.openai.com`。前者是開發者平台（我們要的），後者是 ChatGPT 聊天介面。

**【步驟 2】** 點右上角的 **Sign up** 註冊。推薦用 Google 帳號一鍵註冊，最快。

**【步驟 3】** 登入後，先儲值一點餘額。從左側選單進入 **Settings** → **Billing** → **Add payment method**，輸入信用卡資訊，然後點 **Add to balance** 加值。建議先充 **US$5**（約台幣 160 元），這個金額大概可以跟龍蝦對話 1000 次以上，夠你用好一陣子了。

**【步驟 4】** 建立 API Key。從左側選單進入 **API keys** → **Create new secret key**。取個好辨認的名字（例如 `lobster-ai`），權限選 **All**，然後點 **Create secret key**。

**【步驟 5】** **立刻複製！** OpenAI 的 API Key 建立後只會顯示這一次，關掉視窗就永遠看不到了。如果忘記複製，只能刪掉重新建一組。

```
OpenAI API Key：_______________（以 sk- 開頭）
```

![OpenAI API Key 建立成功畫面](../截圖/ch1_openai_api_key.png)

---

### 1.5.3 Anthropic Claude API Key（選用，需付費）

如果你打算在 CH3 學習 Claude Code，那建議也申請一組 Anthropic 的 API Key。Claude 系列模型以「理解能力強、回覆品質高」著稱，很多進階用戶會選擇它作為龍蝦的「腦」。

**【步驟 1】** 打開瀏覽器，進入 Anthropic Console：

```
https://console.anthropic.com/
```

**【步驟 2】** 註冊帳號（支援 Google 或 GitHub 帳號一鍵註冊）。

**【步驟 3】** 和 OpenAI 一樣，Claude API 也是預付制。從 **Settings** → **Billing** 加入信用卡並儲值，建議也是先充 **US$5**。

**【步驟 4】** 從左側選單進入 **API keys** → **Create Key**，取個名字後複製。

```
Anthropic API Key：_______________（以 sk-ant- 開頭）
```

> 💡 **目前最推薦的 Claude 模型**：
> - **Claude Opus 4.6**：最強，適合複雜任務（寫長文、分析資料）
> - **Claude Sonnet 4.6**：性價比高，適合日常對話和一般操作

![Anthropic Console 的 API Key 頁面](../截圖/ch1_anthropic_api_key.png)

---

### 1.5.4 Ollama 本機 AI（選用，完全免費）

最後介紹一個完全免費、不需要網路（安裝後）的選項：**Ollama**。它可以在你自己的電腦上運行 AI 模型，不用付任何人一毛錢。代價是：你的電腦需要有一張**獨立顯示卡**（內建顯卡跑不動）。

| 項目 | 需求 |
|------|------|
| 顯卡 | NVIDIA GTX 1060 以上 / AMD RX 580 以上 |
| 顯示記憶體 | 4 GB 以上（建議 8 GB+） |
| 系統記憶體 | 8 GB 以上（建議 16 GB+） |

如果你的電腦不符合這些條件，沒關係，先跳過這一節。用 Gemini 免費方案一樣很好用。

**【步驟 1】** 打開瀏覽器，進入 `https://ollama.ai/`，下載 Windows 版本並安裝。

**【步驟 2】** 安裝完成後，打開 PowerShell（按 `Windows 鍵`，搜尋 `PowerShell`），輸入：

```powershell
ollama --version
```

如果看到版本號（例如 `ollama version 0.5.x`），就表示安裝成功了。

**【步驟 3】** 下載一個 AI 模型來試試。在 PowerShell 中輸入：

```powershell
ollama pull qwen3:14b
```

這會下載一個約 8 GB 的模型檔案，需要一些時間。下載完成後，你就有了一顆完全免費的「本機 AI 腦」。

> 💡 **推薦模型**：`qwen3:14b`（中文表現好）、`llama3.3:latest`（通用性強）、`mistral:latest`（輕量快速）。

![Ollama 安裝成功的 PowerShell 畫面](../截圖/ch1_ollama_install.png)

---

## 1.6 ngrok 帳號申請

---

申請完 AI 模型的 API Key，我們還需要一個工具：**ngrok**。

為什麼需要 ngrok？讓我解釋一下。當龍蝦跑在你的電腦上時，它開了一個服務在 `localhost:18789`（你電腦的 18789 號門）。問題是，LINE 的伺服器在日本，它根本不知道你電腦的「18789 號門」在哪裡——因為你的電腦藏在家裡的網路後面，外面的世界看不到它。

ngrok 就像一條「隧道」，它會幫你把這扇門通到外面去，讓 LINE 的伺服器能夠連進來。示意圖如下：

```
LINE 伺服器（日本）
     ↕  ngrok 隧道（打通內外）
你的電腦（龍蝦在 localhost:18789 上運行）
```

沒有 ngrok，LINE 就找不到你的龍蝦。當然，後面在 CH10 我們會教你用 **Cloudflare** 來取代 ngrok，獲得一個永久固定的網址。但現在入門階段，先用 ngrok 就夠了。

### 【步驟 1】註冊帳號

打開瀏覽器，進入：

```
https://dashboard.ngrok.com/signup
```

推薦用 Google 帳號一鍵註冊，最省事。

### 【步驟 2】取得 Authtoken

註冊完成後會自動進入 Dashboard。點左側選單的 **Your Authtoken**（或直接前往 `https://dashboard.ngrok.com/get-started/your-authtoken`），複製那串 Authtoken。

```
ngrok Authtoken：_______________
```

> 💡 **ngrok 免費版的限制**：每次重啟 ngrok，它分配給你的網址會改變，你需要手動到 LINE Developers 後台更新 Webhook URL。聽起來有點麻煩，但一天通常只需要做一次（除非你重開電腦）。這個小不便在 CH10 學了 Cloudflare 之後就能徹底解決。

![ngrok Dashboard 的 Authtoken 頁面](../截圖/ch1_ngrok_authtoken.png)

---

## 1.7 GitHub 帳號申請

---

GitHub 是全球最大的程式碼托管平台。在這本書裡，它有兩個重要用途：

第一，**GitHub Codespaces**（CH5 會教）是一個免費的雲端開發環境。如果你的電腦比較舊、或是不想在自己的電腦上安裝太多東西，Codespaces 可以讓你在瀏覽器裡跑龍蝦——完全不需要本機安裝。

第二，**Claude Code**（CH3 會教）需要用 Git 來管理檔案版本，而 Git 的遠端倉庫通常就託管在 GitHub 上。

### 【步驟 1】註冊

打開瀏覽器，前往：

```
https://github.com/signup
```

依序填寫 Email（填你的 Gmail）、密碼、使用者名稱，通過人機驗證後，到 Gmail 信箱收一封驗證信，點擊確認連結。

### 【步驟 2】選擇方案

GitHub 會問你要選哪個方案。選 **Free**（免費）即可，免費版就包含了我們需要的所有功能（包括 Codespaces 每月 60 小時免費額度）。

```
GitHub 帳號：_______________
GitHub 密碼：_______________
```

![GitHub 註冊成功後的首頁](../截圖/ch1_github_signup.png)

---

## 1.8 Antigravity 帳號準備

---

相較於前面那些申請步驟，Antigravity 的帳號準備堪稱全書最輕鬆的一段——因為它**只需要一個 Google 帳號**。

如果你在 1.2 已經有了 Gmail，那恭喜，你已經準備好了。Antigravity 直接用 Google 帳號登入，不需要額外申請 API Key、不需要填表、不需要付費。

讓我們快速驗證一下：

**【步驟 1】** 打開瀏覽器，前往 `https://idx.google.com/`（Antigravity 的前身叫做 Project IDX，部分連結可能還是用舊名稱）。

**【步驟 2】** 用你的 Google 帳號登入。

**【步驟 3】** 首次登入會要求授權（讀取 Google Drive、管理專案等），點「允許」即可。

**【步驟 4】** 看到 IDE 編輯器介面就表示成功了。

> 💡 **Antigravity 完全免費**，內建 Gemini AI 模型，不需要另外申請 API Key。在 CH2 我們會深入介紹它的使用方式。

![Antigravity 首次登入成功的畫面](../截圖/ch1_antigravity_login.png)

---

## 1.9 安全須知：保護你的 API Key

---

到這裡，你的記事本上應該已經寫滿了各種帳號、密碼、API Key 和 Token。在繼續往下之前，讓我們認真聊一下「資安」這件事。

### 1.9.1 API Key 就是「提款卡密碼」

你可以把 API Key 想像成銀行的提款卡密碼。差別在於：銀行密碼被人知道，別人可以領你的錢；API Key 被人知道，別人可以**花你的錢**——用你的帳號發送大量 API 請求，帳單直接算在你頭上。

這不是嚇你，是真實案例。曾經有人在寫程式時，不小心把 OpenAI 的 API Key 上傳到了 GitHub（一個公開的程式碼平台）。結果不到 24 小時，就被自動掃描機器人偵測到、盜用，帳單飆到 **US$1,200**（約台幣 38,000 元）。

所以，保護好你的 API Key，就跟保護提款卡密碼一樣重要。

### 1.9.2 該做和不該做的事

**✅ 應該做的事：**

- 把所有 Key 存在有密碼保護的檔案裡（例如用 7-Zip 加密壓縮）
- 用完記事本就關掉，不要一直開著放在桌面上
- 在 OpenAI 後台設定每月用量上限，防止意外爆掉
- 如果懷疑被洩露，立刻到各平台重新產生新的 Key

**❌ 千萬不要做的事：**

- 把 Key 貼在 Facebook、LINE 群組、或任何公開的地方
- 把含有 Key 的檔案上傳到 GitHub（機器人幾分鐘內就會掃到）
- 多人共用一組 Key（出事時無法追查是誰造成的）
- 把 Key 用 Email 寄給自己（信箱被入侵就全部外洩）

### 1.9.3 萬一不小心洩露了怎麼辦

別慌，處理方式很簡單：

1. 立刻回到該平台的 Dashboard
2. 刪除或停用已洩露的 Key
3. 重新產生一組新的 Key
4. 把新 Key 更新到龍蝦的設定檔中
5. 檢查帳單，確認是否有異常用量

好消息是：只要你在第一時間刪掉舊 Key，它就會立刻失效。新 Key 即時生效，損失通常可以控制到最小。

---

## 1.10 帳號準備清單

---

辛苦了！到這裡，所有的帳號申請工作應該都已經完成。讓我們用一份清單來做最後的確認。

建議你把下面這段文字複製到記事本，把實際申請到的資料填上去，然後**加密保存**（最簡單的方式是用 7-Zip 壓縮並設密碼）。

```
╔══════════════════════════════════════════════════╗
║    AI 自主代理三強實戰 — 帳號準備清單             ║
║    填寫日期：____年____月____日                   ║
╚══════════════════════════════════════════════════╝

【Gmail 帳號】
  帳號：_______________@gmail.com
  密碼：_______________

【LINE 機器人（LINE Developers）】
  Channel ID：_______________
  Channel Secret：_______________
  Channel Access Token：_______________

【Telegram Bot】
  Bot Token：_______________

【Google AI（Gemini）】★ 推薦先用這個
  API Key：_______________

【OpenAI（GPT）】○ 選填
  API Key：_______________

【Anthropic（Claude）】○ 選填，CH3 會用到
  API Key：_______________

【ngrok】
  Authtoken：_______________

【GitHub】
  帳號：_______________
  密碼：_______________

【Ollama】○ 選填，需要獨立顯卡
  已安裝的模型：_______________

╔══════════════════════════════════════════════════╗
║    ⚠️ 此文件包含敏感資料，請加密保管！             ║
║    不要上傳到網路、不要截圖分享！                  ║
╚══════════════════════════════════════════════════╝
```

### ✅ 最終檢查

在翻到下一章之前，請逐項確認：

- [ ] Gmail 帳號可以正常登入
- [ ] LINE Developers 已建立 Messaging API Channel
- [ ] 已取得 LINE 的三組資料（Channel ID、Secret、Access Token）
- [ ] LINE 官方帳號已**關閉自動回覆**、**啟用 Webhook**
- [ ] Telegram Bot 已建立，取得 Bot Token
- [ ] 至少取得一個 AI API Key（推薦 Google Gemini）
- [ ] ngrok 帳號已註冊，取得 Authtoken
- [ ] GitHub 帳號已註冊
- [ ] Antigravity 可以用 Google 帳號登入
- [ ] 所有 Key 和 Token 都妥善保管

> 💡 **沒辦法一次搞定也沒關係**。最重要的四項是：Gmail、LINE 三組資料、Gemini API Key、ngrok Authtoken。其他的可以等用到再申請。

---

## 1.11 小結與展望

---

恭喜你完成了全書最「苦工」的一章！

回顧一下我們做了哪些事：我們先確認了電腦的系統需求，確保硬體軟體都沒問題。接著一路申請了 Gmail、LINE Developer（取得三組關鍵資料並關閉自動回覆）、Telegram Bot、AI 模型 API Key（至少一個 Gemini）、ngrok 隧道工具帳號、GitHub 帳號，以及確認 Antigravity 可以登入。最後，我們聊了 API Key 的安全觀念，學會了如何妥善保管這些重要資料。

這些帳號和 Key，就像是做菜的食材和調味料。現在食材都備齊了，從下一章開始，我們就要**正式開火**了。

在 CH2，我們將進入 **Google Antigravity** 的世界。你會學到如何用它的圖形化介面來跟 AI 協作、如何派出多個 Agent 同時工作、如何用自然語言建立一個完整的應用程式。更重要的是，你會發現：原來「寫程式」這件事，可以像跟朋友聊天一樣簡單。

準備好了嗎？讓我們翻到下一頁。

---

## 附錄：本章截圖清單

以下是本章所需的所有截圖，共 **14 張**。請依照編號順序截取並命名。

### 系統確認截圖（1 張）

| 編號 | 檔案名稱 | 截圖內容 | 標示重點 | 隱私處理 |
|------|----------|----------|----------|----------|
| 1 | `ch1_winver.png` | winver 視窗顯示 Windows 版本 | 版本號碼 | 無 |

### Gmail 截圖（1 張）

| 編號 | 檔案名稱 | 截圖內容 | 標示重點 | 隱私處理 |
|------|----------|----------|----------|----------|
| 2 | `ch1_gmail_signup.png` | Google 帳號註冊頁面 | 填寫欄位 | 遮蔽個資 |

### LINE Developer 截圖（6 張）

| 編號 | 檔案名稱 | 截圖內容 | 標示重點 | 隱私處理 |
|------|----------|----------|----------|----------|
| 3 | `ch1_line_dev_home.png` | LINE Developers 登入後首頁 | Providers 列表 | 無 |
| 4 | `ch1_line_provider.png` | 建立 Provider 畫面 | Provider 名稱欄位 | 無 |
| 5 | `ch1_line_channel_create.png` | 建立 Channel 的填寫畫面 | 各欄位位置 | 無 |
| 6 | `ch1_line_channel_id.png` | Basic settings 中的 Channel ID | 紅框標示 | 遮蔽數字 |
| 7 | `ch1_line_access_token.png` | Messaging API 中的 Access Token | 紅框標示 Issue 按鈕 | 遮蔽 Token |
| 8 | `ch1_line_auto_reply_off.png` | 官方帳號回應設定頁面 | 標示三個設定項目 | 無 |

### Telegram 截圖（1 張）

| 編號 | 檔案名稱 | 截圖內容 | 標示重點 | 隱私處理 |
|------|----------|----------|----------|----------|
| 9 | `ch1_telegram_botfather.png` | 與 BotFather 建立 Bot 的對話 | 成功訊息 | 遮蔽 Bot Token |

### AI API Key 截圖（4 張）

| 編號 | 檔案名稱 | 截圖內容 | 標示重點 | 隱私處理 |
|------|----------|----------|----------|----------|
| 10 | `ch1_gemini_api_key.png` | Google AI Studio API Key 頁面 | Create 按鈕 | 遮蔽 Key |
| 11 | `ch1_openai_api_key.png` | OpenAI API Key 建立成功 | 複製按鈕 | 遮蔽 Key |
| 12 | `ch1_anthropic_api_key.png` | Anthropic Console API Key 頁面 | Create 按鈕 | 遮蔽 Key |
| 13 | `ch1_ollama_install.png` | Ollama 安裝成功的 PowerShell | 版本號和模型下載 | 無 |

### 其他截圖（1 張）

| 編號 | 檔案名稱 | 截圖內容 | 標示重點 | 隱私處理 |
|------|----------|----------|----------|----------|
| 14 | `ch1_ngrok_authtoken.png` | ngrok Dashboard Authtoken 頁面 | Authtoken 位置 | 遮蔽 Token |

### 截圖注意事項

1. **隱私保護**：標示「遮蔽」的截圖，務必使用馬賽克或黑色方塊遮蔽敏感資訊
2. **標示清楚**：使用紅色方框或箭頭標示重點區域
3. **畫面完整**：確保重要按鈕和文字都在畫面中
4. **解析度**：建議截圖解析度至少 1920×1080
5. **檔案格式**：統一使用 PNG 格式

---

**文件版本**: v2.0
**最後更新**: 2026-03-07
**作者**: 曾慶良（阿亮老師）
**組織**: 3A 科技研究社
