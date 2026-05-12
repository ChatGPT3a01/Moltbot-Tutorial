# 🦞 OpenClaw + NemoClaw 雙龍蝦AI安裝密技

<div class="cover-strip">
  <div class="cover-strip-text">
    <div class="cover-kicker">龍蝦 AI 安裝教材</div>
    <h2>🦞 OpenClaw + NemoClaw 雙龍蝦AI安裝密技</h2>
    <p class="cover-subtitle">Windows / macOS / Ubuntu 快速安裝、設定、卸載</p>
  </div>
</div>

<div class="author-card author-card-compact">
  <div class="author-card-text">
    <div class="author-kicker">作者資訊</div>
    <h3>曾慶良 主任（阿亮老師）</h3>
    <p>新興科技推廣中心主任｜教育部學科中心研究教師｜臺北市資訊教育輔導員</p>
    <p>2025年 SETEAM教學專業講師認證・2024年 教育部人工智慧講師認證・2019年 百大資訊人才獎</p>
    <p>
      YouTube：<a href="https://www.youtube.com/@Liang-yt02">Liang-yt02</a><br>
      Facebook：<a href="https://www.facebook.com/groups/2754139931432955">3A科技研究社</a><br>
      Email：<a href="mailto:3a01chatgpt@gmail.com">3a01chatgpt@gmail.com</a>
    </p>
  </div>
  <div class="author-card-media">
    <img src="作者資訊.png" alt="阿亮老師作者資訊">
  </div>
</div>

本頁內容只做三件事：

1. 準備
2. 安裝
3. 卸載

先找到自己的系統，再照著做。

<div class="doc-layout">
  <aside class="version-nav">
    <div class="version-nav-card">
      <div class="version-nav-kicker">快速導覽</div>
      <h3>安裝內容</h3>
      <p class="version-nav-hint">直接點左邊，跳到要看的章節。</p>
      <p>
        <a href="#先準備" class="version-btn"><span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5"/><path d="M8 12h8M8 16h8M8 20h5"/></svg></span><span class="nav-label">先準備</span></a>
        <a href="#windows" class="version-btn"><span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 5.5 11 4v7H3v-5.5Zm10-1.7L21 2v9h-8V3.8ZM3 13h8v7L3 18.5V13Zm10 0h8v9l-8-1.8V13Z"/></svg></span><span class="nav-label">Windows 版</span></a>
        <a href="#macos" class="version-btn"><span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M15.4 3.2c-.7.8-1.1 1.8-1 2.8 1 0 2.1-.5 2.7-1.3.7-.8 1.1-1.8 1-2.7-1 .1-2 .6-2.7 1.2Z"/><path d="M17.8 12.5c0-2.3 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.2-2.8.8-3.6.8-.8 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.3-1.7 2.9-.4 7.1 1.2 9.4.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.3-.9-2.3-3.6Z"/></svg></span><span class="nav-label">macOS 版</span></a>
        <a href="#ubuntu" class="version-btn"><span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 3.6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/><path d="M12 8.6a7 7 0 0 1 5.7 2.9m.3 1.7A7 7 0 0 1 12 19.8m-6-6.6A7 7 0 0 1 12 8.6"/></svg></span><span class="nav-label">Ubuntu 版</span></a>
        <a href="#龍蝦安裝修復工具" class="version-btn"><span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m14.7 6.3 3 3M12 9l6.7-6.7 3 3L15 12.1"/><path d="M14 7 7 14l-1 4 4-1 7-7"/><path d="M4 20h16"/></svg></span><span class="nav-label">修復工具</span></a>
        <a href="#nemoclaw黃仁勳的龍蝦" class="version-btn"><span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 12c0-3.9 2.7-6.5 6-6.5 2.2 0 4.2 1.1 5.2 3.1"/><path d="M7 12c-1.7 0-3 1.6-3 3.4 0 1.9 1.4 3.6 3.5 3.6H14"/><path d="M14 19c0-2.4 1.5-4 3.6-4 1.6 0 2.9 1 3.4 2.5"/><circle cx="17.8" cy="10.2" r="1.2"/><circle cx="19.5" cy="18" r="1.1"/></svg></span><span class="nav-label">NemoClaw</span></a>
        <a href="#skill" class="version-btn"><span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8.5 4A2.5 2.5 0 1 1 11 6.5V9h2.5a2.5 2.5 0 1 1 0 5H11v2.5A2.5 2.5 0 1 1 6 19v-5H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4V4.5A.5.5 0 0 1 8.5 4Z"/></svg></span><span class="nav-label">SKILL</span></a>
      </p>
    </div>
  </aside>
  <div class="doc-main">
</div>

---

# 先準備

## 要先申請的帳號與資料

### 1. LINE Developers

網站：

```text
https://developers.line.biz/console/
```

需要取得這 4 個值：

1. `Channel ID`
2. `Channel Secret`
3. `Channel Access Token`
4. `LINE USER_ID`

### 2. ngrok

網站：

```text
https://dashboard.ngrok.com/signup
```

註冊後到這裡拿 `Authtoken`：

```text
https://dashboard.ngrok.com/get-started/your-authtoken
```

### 3. AI 模型

三選一即可：

Google AI：

```text
https://aistudio.google.com/apikey
```

OpenAI：

```text
https://platform.openai.com/api-keys
```

Anthropic：

```text
https://console.anthropic.com/
```

## LINE 要怎麼申請

到 LINE Developers Console 之後：

1. 建立 `Provider`
2. 建立 `Messaging API channel`
3. 到 `Basic settings` 複製：
   - `Channel ID`
   - `Channel Secret`
4. 到 `Messaging API` 頁面按 `Issue` 或 `Generate`：
   - 複製 `Channel Access Token`
5. 同一頁把 `Use webhook` 打開

## LINE USER_ID 怎麼拿

先把 Bot 加為好友，傳一則訊息給 Bot。  
之後用既有的方法查出自己的 `LINE USER_ID`。本安裝表要填的就是那個 `U` 開頭的值。

## 要貼到哪裡

本頁出現的內容只有 4 種貼法：

1. 貼到 `PowerShell`
2. 貼到 `Terminal`
3. 貼到 `openclaw.json`
4. 貼到 `LINE Developers > Messaging API > Webhook URL`

---

# Windows

## 準備

先開：

```text
PowerShell
```

確認可用：

```powershell
winget --version
```

## 安裝

### 1. 安裝 Node.js（24 推薦／22.16+ 最低）

貼到：

```text
PowerShell
```

```powershell
winget install OpenJS.NodeJS.LTS
```

安裝完重開 `PowerShell`，再貼：

```powershell
node -v
npm -v
```

### 2. 安裝龍蝦 AI

貼到：

```text
PowerShell
```

```powershell
npm install -g openclaw@latest
openclaw --version
```

### 3. 初始化

貼到：

```text
PowerShell
```

```powershell
openclaw onboard
```

### 4. 安裝 LINE plugin

貼到：

```text
PowerShell
```

```powershell
openclaw plugins install @openclaw/line
```

### 5. 寫入設定檔

先開：

```text
C:\Users\你的帳號\.openclaw\openclaw.json
```

開啟方式：

```powershell
notepad "$env:USERPROFILE\.openclaw\openclaw.json"
```

下面整段貼到：

```text
openclaw.json
```

```json
{
  "llm": {
    "provider": "google",
    "model": "gemini-3-flash",
    "apiKey": "你的_Google_AI_API_Key"
  },
  "gateway": {
    "port": 18789
  },
  "channels": {
    "line": {
      "enabled": true,
      "channelId": "你的Channel ID",
      "channelAccessToken": "你的_LINE_Channel_Access_Token",
      "channelSecret": "你的_LINE_Channel_Secret",
      "dmPolicy": "allowlist",
      "allowFrom": ["你的_LINE_USER_ID"]
    }
  }
}
```

### 6. 啟動龍蝦

貼到：

```text
PowerShell
```

```powershell
openclaw gateway start
```

再開第二個 `PowerShell`，貼：

```powershell
openclaw doctor
openclaw status
```

### 7. 設定 ngrok

先到網站申請：

```text
https://dashboard.ngrok.com/signup
```

申請完到：

```text
https://dashboard.ngrok.com/get-started/your-authtoken
```

複製你的 `Authtoken`。

再開第三個 `PowerShell`，貼：

```powershell
ngrok config add-authtoken <你的_ngrok_token>
ngrok http 18789
```

### 8. 貼 Webhook URL

你會看到一個像這樣的網址：

```text
https://xxxx.ngrok-free.app
```

把這個網址加上 `/line/webhook`，變成：

```text
https://你的_ngrok網址/line/webhook
```

貼到：

```text
LINE Developers Console > Messaging API > Webhook URL
```

然後按：

1. `Update`
2. `Verify`

### 9. 第一次配對

第一次傳訊息後，如果跳出配對碼，貼到：

```text
PowerShell
```

```powershell
openclaw pairing approve line <配對碼>
```

## 卸載

貼到：

```text
PowerShell
```

```powershell
npm uninstall -g openclaw
```

如果要刪掉設定：

```powershell
Remove-Item "$env:USERPROFILE\.openclaw" -Recurse -Force
```

---

# 龍蝦安裝修復工具

## 先下載

這一區是給「龍蝦 AI 裝不起來、裝完不會動、LINE 不通、Webhook 驗證失敗」時使用的修復工具。

可直接下載：

1. [Liang-fix-lobster.zip](Liang-fix-lobster.zip)
2. [龍蝦修復工具使用說明v2.pdf](龍蝦修復工具使用說明v2.pdf)

建議學生優先下載：

```text
1. Liang-fix-lobster.zip
2. 龍蝦修復工具使用說明v2.pdf
```

## 這是做什麼的

這個工具不是重裝整套課程，它是專門處理安裝後或啟動後的修復問題：

1. 診斷
2. 修復
3. 接通 LINE
4. 協助把龍蝦重新啟動到可用狀態

適合處理這幾種情況：

1. 龍蝦突然不回覆
2. LINE Verify 一直失敗
3. Webhook 看起來正確，但還是連不上
4. ngrok 換網址了，不知道要貼哪個
5. LINE 顯示 `access not configured`

## 怎麼使用

1. 先下載 `Liang-fix-lobster.zip`
2. 解壓縮到電腦
3. 先看 `龍蝦修復工具使用說明v2.pdf`
4. Windows 可直接雙擊 `Liang-fix-lobster.cmd`
5. 看到選單後，再依照下面功能選擇

## 什麼時候先用這個

如果你遇到下面情況，不要先重裝，先跑這個：

1. 安裝龍蝦後沒有正常啟動
2. 龍蝦突然不回覆
3. LINE Verify 一直失敗
4. Webhook 路徑不知道有沒有填對
5. ngrok 網址變了，不知道現在該貼哪個
6. LINE 顯示 `access not configured`

## 使用前先知道

這支工具會優先讀這兩個檔案：

```text
C:\Users\你的帳號\.openclaw\openclaw.json
C:\Users\你的帳號\.openclaw\my-credentials.json
```

其中 `my-credentials.json` 很重要，因為新版修復器會用它自動回補：

1. OpenAI API Key
2. LINE Channel ID
3. LINE Channel Secret
4. LINE Channel Access Token
5. LINE User ID

如果 `my-credentials.json` 不存在，工具還是能檢查，但「一鍵修復」不能幫你自動補齊設定。

## 主選單功能

啟動後你會看到：

```text
1. 狀態儀表板
2. 一鍵修復
3. Webhook 深度診斷
4. 一鍵啟動龍蝦 + ngrok
5. LINE 配對
6. 操作導航
7. 常用指令
8. 離開
```

### 1. 狀態儀表板

先看現在壞在哪裡。它會檢查：

1. OpenClaw 版本
2. Node.js 版本
3. ngrok 是否存在
4. `http://127.0.0.1:18789/` 是否正常
5. `http://127.0.0.1:18789/line/webhook` 是否存在
6. Port `18789` 是否有在監聽
7. 目前 ngrok 公開網址
8. 建議貼到 LINE 的 Webhook URL

### 2. 一鍵修復

不知道哪裡壞掉時，先跑這個。它會自動做：

1. 檢查 Node.js
2. 檢查 OpenClaw
3. 檢查或安裝 LINE plugin
4. 用 `my-credentials.json` 修正 `openclaw.json`
5. 清掉舊的 agent 快取
6. 重啟 Gateway
7. 重啟 ngrok
8. 驗證本機 Webhook

### 3. Webhook 深度診斷

專門處理「LINE Verify 失敗」。

它會分 3 層檢查：

1. 本機 Gateway `/`
2. 本機 `/line/webhook`
3. ngrok 公開網址和公開 `/line/webhook`

LINE Webhook URL 正確格式一定要是：

```text
https://你的-ngrok-網址/line/webhook
```

### 4. 一鍵啟動龍蝦 + ngrok

每天開機後快速啟動用。

它會：

1. 重啟 Gateway
2. 啟動 ngrok，固定轉發到 `18789`

成功後會直接顯示：

1. 本次 ngrok 公開網址
2. 你要貼去 LINE 的 Webhook URL

### 5. LINE 配對

當 LINE 顯示 `access not configured` 時使用。

做法：

1. 先用 LINE 傳訊息給你的龍蝦 Bot
2. 如果 LINE 回你配對碼，就貼進工具
3. 工具會幫你跑：

```text
openclaw pairing approve line <配對碼>
```

### 6. 操作導航

這是給學生看的快速提示，會告訴你：

1. 日常使用先選哪一項
2. Verify 失敗要先查什麼
3. 怎麼確認不是舊網址
4. 怎麼確認不是少了 `/line/webhook`
5. 本機正常但外網不通時，要先換手機 hotspot 測試

### 7. 常用指令

會列出常用排錯指令，例如：

```text
openclaw gateway restart
openclaw doctor
openclaw plugins install @openclaw/line
openclaw pairing approve line <配對碼>
ngrok http 18789 --region=ap
```

## 最常見問題

### Q1：`/line/webhook` 顯示 405，是不是錯了？

不是。這通常是正常的。  
因為 LINE 真正送事件時用的是 `POST`，你現在用 `GET` 去測，所以 `405` 反而代表端點存在。

### Q2：為什麼 Verify 一直失敗？

最常見原因：

1. ngrok 換網址了，但 LINE 還在用舊網址
2. Webhook URL 少了 `/line/webhook`
3. 本機 Gateway 沒起來
4. LINE plugin 沒裝好
5. 本機正常，但外網被防火牆或網路環境擋住

先跑「Webhook 深度診斷」。

### Q3：本機都正常，但 LINE 還是不通？

請先照順序試：

1. 換手機 hotspot
2. 重新啟動 ngrok
3. 把最新網址重新貼到 LINE Developers
4. 再按 Verify

### Q4：這工具會不會刪掉我的龍蝦？

不會。  
這版主要做的是檢查、回補設定、清快取、重啟 Gateway、重啟 ngrok。不是重灌，也不是刪除 workspace。

## 建議的使用順序

### 平常開機

```text
4. 一鍵啟動龍蝦 + ngrok
```

### 龍蝦不回覆

```text
1. 狀態儀表板
2. 一鍵修復
```

### LINE Verify 失敗

```text
3. Webhook 深度診斷
```

### LINE 顯示 access not configured

```text
5. LINE 配對
```

---

# macOS

## 準備

先開：

```text
Terminal
```

確認可用：

```bash
sw_vers
```

## 安裝

### 1. 安裝 Node.js（24 推薦／22.16+ 最低）

如果還沒裝 Homebrew，先到：

```text
https://brew.sh/
```

有 Homebrew 後，貼到：

```text
Terminal
```

```bash
brew install node
```

再貼：

```bash
node -v
npm -v
```

### 2. 安裝龍蝦 AI

貼到：

```text
Terminal
```

```bash
npm install -g openclaw@latest
openclaw --version
```

### 3. 初始化

```bash
openclaw onboard
```

### 4. 安裝 LINE plugin

```bash
openclaw plugins install @openclaw/line
```

### 5. 寫入設定檔

先開：

```text
~/.openclaw/openclaw.json
```

開啟方式：

```bash
mkdir -p ~/.openclaw
nano ~/.openclaw/openclaw.json
```

下面整段貼到：

```text
openclaw.json
```

```json
{
  "llm": {
    "provider": "google",
    "model": "gemini-3-flash",
    "apiKey": "你的_Google_AI_API_Key"
  },
  "gateway": {
    "port": 18789
  },
  "channels": {
    "line": {
      "enabled": true,
      "channelId": "你的Channel ID",
      "channelAccessToken": "你的_LINE_Channel_Access_Token",
      "channelSecret": "你的_LINE_Channel_Secret",
      "dmPolicy": "allowlist",
      "allowFrom": ["你的_LINE_USER_ID"]
    }
  }
}
```

### 6. 啟動龍蝦

```bash
openclaw gateway start
```

再開第二個 `Terminal`：

```bash
openclaw doctor
openclaw status
```

### 7. 設定 ngrok

先去網站申請帳號與拿 token：

```text
https://dashboard.ngrok.com/signup
https://dashboard.ngrok.com/get-started/your-authtoken
```

再貼到：

```text
Terminal
```

```bash
brew install ngrok
ngrok config add-authtoken <你的_ngrok_token>
ngrok http 18789
```

### 8. 貼 Webhook URL

把下面這個格式：

```text
https://你的_ngrok網址/line/webhook
```

貼到：

```text
LINE Developers Console > Messaging API > Webhook URL
```

### 9. 第一次配對

```bash
openclaw pairing approve line <配對碼>
```

## 卸載

```bash
npm uninstall -g openclaw
```

如果要刪掉設定：

```bash
rm -rf ~/.openclaw
```

  </div>
</div>

---

# SKILL

## SKILL 是什麼

很多人第一次看到 `SKILL`，會以為那是什麼很硬的開發名詞。  
其實不用想那麼複雜，它就是幫龍蝦補能力的東西。

像讀 Excel、改 Word、收發 Email、語音轉文字、圖片生成、網站自動操作、資料分析，這些都可以靠 `SKILL` 補進去。  
也就是說，龍蝦本體先裝好，通常只是先能聊天；真的要開始做事，還要靠 `SKILL` 把手腳補齊。

所以可以先把 `SKILL` 想成 3 件事：

1. 一個專門處理某類工作的能力包
2. 一份寫清楚流程的 SOP
3. 一個讓 OpenClaw 知道「這種任務要怎麼做」的說明檔

而它最核心的檔案，通常就是 `SKILL.md`。  
這個觀念很重要，因為它代表一件事：  
做技能不一定是先去寫程式，很多時候反而是先把規則講清楚。

所以後面只要記住這 3 點就夠了：

1. 不一定要先會寫程式
2. 很多情況先把流程寫清楚，比急著寫程式更重要
3. 只要規則、步驟、觸發條件、注意事項寫清楚，OpenClaw 就比較知道該怎麼做

ClawHub 上可以找到 500+ 個 SKILL。  
本頁先整理其中一批比較常用、比較適合直接上手的技能，都是從：

```text
https://clawhub.ai/
```

<div class="skill-highlight-box">
  <div class="skill-highlight-kicker">Skills Discovery</div>
  <strong><span class="skill-highlight-number">500+</span>ClawHub 上有大量 SKILL 可以找</strong>
  <p class="skill-highlight-sub">這一頁先整理一批常用、好上手、實務上很常會先用到的技能。</p>
  <div class="skill-highlight-links">
    <a class="skill-highlight-link" href="https://clawhub.ai/" target="_blank" rel="noopener">官方技能站</a>
    <a class="skill-highlight-link" href="https://github.com/VoltAgent/awesome-openclaw-skills" target="_blank" rel="noopener">社群技能榜單</a>
  </div>
</div>

## 為什麼裝完 OpenClaw 還要補 SKILL

這一段最容易被忽略。  
很多人會以為 OpenClaw 裝完就結束了，其實差很大。  
裝完之後，通常只是先能聊天，不代表它已經能幫你把工作做完。

常見狀況像是：

1. 要它查看或整理文件，卻沒有對應能力
2. 要它寄 Email、查 Email，卻還沒補齊郵件技能
3. 要它查最新資訊、天氣、股價，卻沒有聯網搜尋能力
4. 要它操作網站、串外部服務、做長期記憶，卻還沒裝對應工具

所以 `SKILL` 不是裝飾，也不是可有可無。  
你可以把它想成幫龍蝦補工具箱。  
少了技能，它就像只有嘴巴沒有手；技能補上去之後，才比較像真的能去做事的助手。

## 先判斷缺的是哪一類能力

這裡很重要，不要一看到技能市場就一個一個亂裝。  
比較穩的做法，是先問自己一句：現在到底卡在哪一種能力？

可以先分成這幾類：

1. `本地檔案能力`：讀文件、改文件、整理檔案
2. `聯網能力`：查網頁、查即時資訊、做搜尋
3. `外部服務能力`：串接 Google、GitHub、Notion、Slack、Email
4. `瀏覽器操作能力`：打開網站、點擊、輸入、抓取頁面內容
5. `自我改進能力`：記錄錯誤、累積經驗、長期記憶

這樣想就會清楚很多。  
如果卡在「查最新資料」，就先往聯網能力找；  
如果卡在「寄信、查信、排程」，就先往外部服務找；  
如果卡在「網站一直要手動點」，就先往瀏覽器操作找。

先知道缺什麼，再回到 ClawHub 找對應 SKILL，速度會快很多，也比較不容易裝錯。

## 開始找 SKILL 前，先會這 3 個常用命令

在補 SKILL 之前，先把 OpenClaw 的基本操作搞熟：

```text
openclaw gateway start
openclaw dashboard
openclaw gateway stop
```

1. `openclaw gateway start`
   先把 Gateway 啟動起來，不然後面很多功能根本沒開始跑。
2. `openclaw dashboard`
   打開 OpenClaw 控制台 / Dashboard，很多操作用這裡看最直覺。
3. `openclaw gateway stop`
   暫時不用時，可以把 Gateway 停掉，避免背景一直掛著。

如果之前安裝 OpenClaw 時把技能安裝跳過了，也可以重新進入設定頁面：

```text
openclaw onboard
```

重新進去之後，把需要的技能補裝回來即可。

## 如何在 ClawHub 找到需要的 SKILL

真的開始找之前，先不要急著亂搜。  
先把方向抓對，後面會快很多。

1. 先開網站

```text
https://clawhub.ai/
```

2. 按上方 `Skills`
3. 在搜尋框輸入英文關鍵字
4. 點進技能頁面
5. 複製安裝指令

如果只是剛開始找，最簡單的想法就是：  
先用最短的英文關鍵字去試，不要一開始就打一整串很長的需求。

首頁能看到的重點入口：

1. `Skills`：找技能
2. `Search`：直接搜尋
3. `Upload`：上傳自己的技能
4. `Import`：匯入技能

找技能前，先問自己一件事：現在到底缺哪一種能力？  
這個動作看起來很小，但它會直接決定你是不是一直裝錯東西。

1. `本地檔案能力`：讀文件、改文件、整理檔案
2. `聯網能力`：查即時資訊、查股價、查天氣、做搜尋
3. `外部服務能力`：串接 Google、GitHub、Notion、Slack、Email
4. `瀏覽器操作能力`：打開網站、點擊、輸入、抓取頁面內容
5. `自我改進能力`：記錄錯誤、累積經驗、長期記憶

另外也要先記住幾個判斷：

1. `不是每個功能都一定要另外裝 SKILL`
   像瀏覽器操作、部分定時任務、控制台操作，本來就是 OpenClaw 自帶能力。
2. `SKILL 要看需求，不是裝越多越好`
   應該先判斷缺哪一類能力，再回到 ClawHub 找對應技能。

另外還有一個很實用的判斷：

3. `先看內建，再看外掛`
   像 `Summarize`、`Weather` 這類功能，有些版本本來就可能已經內建。  
   先看 dashboard 或 skills 清單裡有沒有，再決定要不要另外裝。

4. `先看新不新、多人在用`
   挑技能時，優先看最近還有人維護、使用量比較高的。  
   這不代表一定安全，但至少比較容易先被大家踩過雷。

簡單講，找技能不是比誰裝得多，而是比誰先判斷對。  
先知道自己要補哪一塊，再回頭看技能頁的用途、前置條件、安裝方式，會穩很多。

安裝指令格式通常長這樣：

```text
npx clawhub@latest install 技能名稱
```

## 這一批常用 SKILL 先看這裡

如果現在不知道要先裝哪些，最簡單就是先從這一批常用技能開始看：

1. `agent-browser-clawdbot`
2. `api-gateway`
3. `data-analysis`
4. `excel-xlsx`
5. `imap-smtp-email`
6. `nano-banana-pro`
7. `openai-whisper-api`
8. `self-improving`
9. `self-improving-agent`
10. `word-docx`

## 常用 SKILL 快速索引

### 1. [agent-browser-clawdbot](https://github.com/vercel-labs/agent-browser)

- 功能介紹：這張就是幫龍蝦去碰瀏覽器。像開網站、點按鈕、填表單、送表單、抓頁面內容，這類「本來要自己手動點來點去」的工作，它就派得上用場。
- 觸發介紹：如果現在卡在網站後台、登入流程、報名頁、查詢頁、送件頁，腦中先想到這張通常沒錯。  
  但也要先知道，它比較像會看畫面再一步一步操作的助手，不是那種一秒跑完整套流程的腳本。

### 2. [api-gateway](https://maton.ai)

- 功能介紹：這張就是幫龍蝦往外接服務。像 Google、GitHub、Notion、Slack 這種平台，如果想讓龍蝦真的去碰，多半就會走到這一類。
- 觸發介紹：只要任務有牽涉到第三方平台、雲端服務、外部帳號資料，就先往這張想，方向通常不會差太遠。

### 3. [data-analysis](https://clawhub.ai/skills/data-analysis)

- 功能介紹：這張就是把數字變成結論。像整理指標、畫圖表、做報表、看趨勢，這些都很適合交給它先處理。
- 觸發介紹：只要任務跟數據分析、趨勢判讀、KPI、報表整理有關，就可以先想到這張。

### 4. [excel-xlsx](https://clawhub.ai/skills/excel-xlsx)

- 功能介紹：這個技能就是專門處理 Excel 的，像 XLSX、CSV、TSV 這些表格資料都在它的範圍內，而且比較能保住格式和公式。
- 觸發介紹：如果現在是在改成績表、報名表、統計表、試算資料，先想到這個通常不會錯。

### 5. [imap-smtp-email](./SKILL下載/imap-smtp-email-0.0.10/SKILL.md)

- 功能介紹：這個技能就是補郵件能力，讓龍蝦可以收信、查信、寄信，也能帶附件出去。
- 觸發介紹：如果工作流程裡有通知信、回信、寄附件、收件匣整理，這個就很有用。

### 6. [nano-banana-pro](./SKILL下載/nano-banana-pro-1.0.1/SKILL.md)

- 功能介紹：這個技能偏向圖片生成和改圖，適合做海報、插圖、素材圖，也能做 image-to-image 類型的工作。
- 觸發介紹：如果現在要做視覺素材、改圖、補圖、出圖，就可以先想到它。

### 7. [openai-whisper-api](https://platform.openai.com/docs/guides/speech-to-text)

- 功能介紹：這個技能很單純，就是把語音或音檔轉成文字。
- 觸發介紹：只要是逐字稿、語音轉文字、錄音整理，基本上就直接想到它。

### 8. [self-improving](https://clawhub.ai/skills/self-improving)

- 功能介紹：這個技能是拿來讓龍蝦自己反省、自己修正、慢慢把經驗記下來。
- 觸發介紹：如果常常在糾正它，或希望它不要一直犯同樣的錯，這個就很值得裝。

### 9. [self-improving-agent](./SKILL下載/self-improving-agent-3.0.5/SKILL.md)

- 功能介紹：這個技能比較像幫龍蝦做學習紀錄，會把錯誤、修正、需求慢慢記下來。
- 觸發介紹：如果想把錯誤經驗留下來，讓後面越做越穩，這個就很適合。

### 額外可留意的技能方向

如果後面還想再擴充，這幾種方向也很值得先留意：

1. `tavily-search`
   適合補聯網搜尋能力，查最新資訊、股價、即時資料，通常還要另外準備 Tavily API Key。
2. `find-skills`
   適合在不知道該裝哪個技能時，先幫忙找技能。
3. `skill-vetter`
   適合在安裝前先做安全檢查，避免直接裝進可疑技能。
4. `weather`
   適合查天氣、行程前判斷天候，特色是通常免 API Key、裝完就能用。
5. `summarize`
   適合整理長文、網頁、文件、字幕，先把重點濃縮出來。
6. `proactive-agent`
   適合補主動規劃與主動提醒能力，讓代理不只是被動等指令。
7. `gog`
   適合需要用 Gmail、Google 日曆、Google Drive、Google Docs 這類 Google 生態的人。

## 其他值得一起收進來的 SKILL

除了前面已整理的常用技能，本頁也建議把下面這幾個一起收進來：

### 11. `tavily-search`

- 功能介紹：這張就是幫龍蝦把「不能直接上網」這件事補起來。像查最新新聞、股價、天氣、即時資料，這類問題最常先想到的就是它。
- 觸發介紹：只要任務跟「現在最新是什麼」有關，像最新消息、即時價格、當天天氣，通常就先想到這張。
- 安裝指令：

```text
npx clawhub@latest install tavily-search
```

- 補充：
  這類技能通常還要先去 Tavily 官網申請 API Key。  
  真正會卡住的地方，通常不是裝不起來，而是 Key 還沒準備好。  
  Key 準備好之後，再交給 OpenClaw 完成設定會比較順。

### 12. `find-skills`

- 功能介紹：這張很像技能導航員。當你只知道自己要做什麼，卻不知道要搜哪個技能名稱時，它就能先幫你縮小範圍。
- 觸發介紹：如果你腦中只有需求，像「我想自動寄信」「我想整理文件」「我想接 Google 服務」，但技能名稱一點概念都沒有，就先用這張。
- 安裝指令：

```text
npx clawhub@latest install find-skills
```

### 13. `skill-vetter`

- 功能介紹：這張就是技能保全。不是幫你做工作流程，而是幫你先看這個技能安不安全、內容有沒有怪怪的地方。
- 觸發介紹：只要準備安裝新的第三方技能，尤其是來源不熟、說明看不太懂、權限看起來很多的，就先過這一關。
- 安裝指令：

```text
npx clawhub@latest install skill-vetter
```

### 14. `weather`

- 功能介紹：這張就是拿來補天氣判斷。像今天會不會下雨、活動適不適合辦、出門要不要改時間，這種需求很直覺就會用到它。
- 觸發介紹：如果任務跟出門、行程安排、活動判斷、天氣查詢有關，就可以先想到這張。  
  另外也要先看一下，有些版本本來就可能已經內建，不一定還要另外裝。
- 安裝指令：

```text
npx clawhub@latest install weather
```

### 15. `summarize`

- 功能介紹：這張就是幫你先濃縮重點。像長文、網頁、文件、字幕、逐字稿，先丟給它整理，後面很多工作都會輕鬆很多。
- 觸發介紹：只要一看到內容很長、資訊很多、不想一段一段慢慢啃，就可以先想到這張。  
  也一樣先看一下，有些版本本來就可能已經內建。
- 安裝指令：

```text
npx clawhub@latest install summarize
```

### 16. `proactive-agent`

- 功能介紹：這張是把龍蝦從「等你一句做一句」再往前推一步，讓它比較會主動規劃、主動提醒、主動往下接。
- 觸發介紹：如果你希望它不要每一步都等你催，而是能自己接著做、自己提醒下一步，那這張就很值得裝。
- 安裝指令：

```text
clawhub install proactive-agent
```

### 17. `gog`

- 功能介紹：如果平常工作就在 Gmail、Google 日曆、Drive、Docs 這些地方打轉，這張就很重要。裝起來之後，龍蝦才比較有機會幫你碰 Google 生態裡的信件、排程和文件。
- 觸發介紹：只要你腦中想的是「幫我寄 Gmail」「幫我看一下今天行程」「幫我整理 Google Drive 裡的資料」，大多就是先想到這張。
- 安裝指令：

```text
npx clawhub@latest install gog
```

- 補充：
  這一類技能通常還要到 Google Cloud 做 OAuth 設定，建立 Desktop 類型的 Client，下載 JSON 憑證，再交給 OpenClaw 幫忙完成授權。  
  這一張常常不是卡在安裝，而是卡在授權。  
  如果剛建立完就授權失敗，很多時候不是壞掉，而是 Google Cloud 的 OAuth 還沒完全啟用，等幾分鐘到幾個小時再試一次就好。

### 18. `mcp-port`

- 功能介紹：這張比較像擴充插槽。當 OpenClaw 原本手上的工具還不夠時，就可以透過 MCP 再往外接更多服務，等於再幫它多開幾隻手。
- 觸發介紹：如果任務已經不是單一技能能解決，而是要串外部工具、地圖服務、資料服務、其他 MCP 服務，就可以開始看這張。
- 安裝提醒：
  這類技能常常會一路牽涉到 API 啟用、API Key、MCP 設定，不是只裝完就結束。  
  簡單講，這張通常比較適合已經開始做進階整合的人。

### 19. `coding-agent`

- 功能介紹：這張可以把 OpenClaw 往開發助手的方向再推一步。像改網站、修程式、整理專案、跑開發流程，這種工作就比較對味。
- 觸發介紹：如果現在不是在做一般文書，而是在做前端、後端、腳本、自動化流程，那這張就值得先放進口袋。
- 補充：
  有些環境本來就已經帶了類似能力，真正重點通常不是先裝一堆，而是先把本機的開發工具準備好，再回來看它有沒有接上。  
  簡單講，這張比較像是給「要做專案的人」用的，不是每個人一開始都一定要先裝。

### 20. [word-docx](https://clawhub.ai/skills/word-docx)

- 功能介紹：這個技能就是拿來處理 Word / DOCX，重點是比較能保住樣式、表格、版面和追蹤修訂。
- 觸發介紹：如果現在在改公文、講義、報告、申請文件這類 Word 檔，就先想到它。

對應安裝指令如下：

```bash
npx clawhub@latest install agent-browser-clawdbot
npx clawhub@latest install api-gateway
npx clawhub@latest install data-analysis
npx clawhub@latest install excel-xlsx
npx clawhub@latest install imap-smtp-email
npx clawhub@latest install nano-banana-pro
npx clawhub@latest install openai-whisper-api
npx clawhub@latest install self-improving
npx clawhub@latest install self-improving-agent
npx clawhub@latest install word-docx
```

## 搜尋技巧

找技能時，不要一開始就打很長一串中文。  
大多數情況，直接搜英文關鍵字會比較快，也比較容易找到真正對應的技能。

如果不知道怎麼下關鍵字，最簡單就是先從任務核心名詞下手。  
像下面這幾個字，就是很常用的起手式：

1. `excel`
2. `word`
3. `data`
4. `email`
5. `whisper`
6. `browser`
7. `api`
8. `image`
9. `self`

## SKILL 可以怎麼分類

### 一、文件與試算表

1. `excel-xlsx`：處理 Excel、XLSX、CSV、TSV
2. `word-docx`：處理 Word、DOCX 文件

這一類很單純，就是碰到 Office 文件、表格、講義、公文時先想到它。

建議搜尋：

```text
excel
word
```

### 二、資料分析

1. `data-analysis`：做圖表、指標分析、報表整理

只要工作重點在「看數據、整理數據、解釋數據」，這一類就優先。

建議搜尋：

```text
data
analysis
```

### 三、網頁與服務串接

1. `agent-browser-clawdbot`：自動打開網站、點按鈕、填表單
2. `api-gateway`：串接 Google、GitHub、Notion、Slack 等外部服務

如果工作是卡在網站流程，或要把龍蝦接到外部平台，通常就往這一類找。

建議搜尋：

```text
browser
api
```

### 四、通訊與語音

1. `imap-smtp-email`：收信、查信、寄信、寄附件
2. `openai-whisper-api`：把語音或音檔轉文字

這一類很適合做通知、逐字稿、錄音整理、郵件工作流。

建議搜尋：

```text
email
whisper
```

### 五、圖片生成

1. `nano-banana-pro`：生成圖片、改圖、文字轉圖片

如果任務重點是出圖、改圖、做視覺素材，先看這一類。

建議搜尋：

```text
image
nano banana
```

### 六、自我學習與修正

1. `self-improving`：讓代理自我反省、記錄修正、累積規則
2. `self-improving-agent`：記錄錯誤、需求、學習筆記

這一類不是拿來做單次任務的，而是讓龍蝦後面越做越穩、越用越聰明。

建議搜尋：

```text
self
improving
```

## 目前資料夾中的 SKILL 對照表

1. `agent-browser-clawdbot-0.1.0` → 網站自動操作
2. `api-gateway-1.0.69` → API 與外部服務串接
3. `data-analysis-1.0.2` → 資料分析與圖表
4. `excel-xlsx-1.0.2` → Excel / XLSX
5. `imap-smtp-email-0.0.10` → Email 收發
6. `nano-banana-pro-1.0.1` → 圖片生成與改圖
7. `openai-whisper-api-1.0.0` → 語音轉文字
8. `self-improving-1.2.16` → 自我學習與修正
9. `self-improving-agent-3.0.5` → 學習紀錄與錯誤整理
10. `word-docx-1.0.2` → Word / DOCX

## 安裝前先知道

這一段一定要先看，不然很容易出現「明明裝了，怎麼還是不能用」。  

不是每個 SKILL 都只要一行就能直接用。  
有些還會需要：

1. `API Key`
2. 額外套件
3. 帳號登入授權
4. 本機已先安裝 Node.js、npm、curl 等工具

所以安裝前，不要只看名字順眼就直接裝。  
比較好的做法，是先把下面這 4 件事過一遍：

1. `有沒有 API Key 需求`
   例如聯網搜尋類技能，常常還要另外設定 API 金鑰。
2. `有沒有安全風險`
   第三方 SKILL 不要看到能裝就直接裝，先確認用途與來源。
3. `是不是其實有內建功能可用`
   像瀏覽器操作、部分定時任務，可能不用額外安裝技能。
4. `裝完後要不要再重啟或補設定`
   某些功能要重啟 Gateway 或補環境變數後才會生效。

很多人不是裝錯，而是少看了前置條件。  
像搜尋類技能常卡在 API Key，Google 類技能常卡在授權，MCP 類技能常卡在 API 啟用和設定。

如果接下來常常要做瀏覽器自動化，模型選擇也會影響效果。  
實務上通常會優先考慮較適合工具調用與瀏覽器操作的模型，再去做網站流程。

如果工作流程牽涉到 Google 生態、MCP、搜尋 API 這種外部服務，也要先有心理準備：  
很多時候真正花時間的不是安裝本身，而是 OAuth、API 啟用、權限與金鑰設定。

如果接下來要讓 OpenClaw 讀取或修改本機檔案，還要先把工具權限確認好：

```text
openclaw config set tools profile full
openclaw gateway restart
```

1. `openclaw config set tools profile full`
   把工具權限切換成完整模式，方便讀寫本機檔案。
2. `openclaw gateway restart`
   重新啟動 Gateway，讓新的權限設定生效。

接下來這組安全與維護觀念，也一定要先記住，不然後面很容易自己把系統弄亂。

## 核心技能不要直接改

如果想修改內建技能，千萬不要直接去改 OpenClaw 核心技能資料夾。  
這裡不要手癢，原因很簡單：

1. `更新會覆蓋`
   執行更新後，原本改過的核心檔案很可能直接被洗掉。
2. `系統可能不穩`
   亂動核心檔案，容易造成技能錯亂、更新失敗或系統異常。
3. `維護成本高`
   核心路徑通常不好找，而且後續還要一直追更新差異。

## 正確做法是用工作區覆寫

OpenClaw 讀技能時有優先級概念。  
簡單記就是這個順序：

1. `工作區技能`：優先級最高
2. `外部安裝技能`
3. `系統內建技能`

所以如果真的要調整某個技能，正確做法不是去改底層原始檔，  
而是把技能複製到工作區後再改，讓 OpenClaw 優先使用工作區版本。這樣才安全，也不怕更新洗掉。

## 安裝外部技能前的檢查方式

外部技能不要下載後就直接啟用。  
比較穩的流程是這樣：

1. 先把技能放到工作區或先打開內容看過
2. 先看 `SKILL.md` 裡到底要 AI 做什麼
3. 如果看到下面這些內容就要提高警覺：
   - 要求大量讀取本機檔案
   - 要求執行系統指令
   - 要連外部不明網址
   - 要求密碼、Token、API Key
   - 說明寫得很怪、看不懂、用途不清楚
4. 有疑慮就不要直接用，先刪除可疑段落或不要安裝

選技能時也可以多看兩個線索：

1. `是不是比較新`
   太舊又沒人在維護的技能，後面比較容易出問題。
2. `是不是很多人在用`
   調用次數、使用量比較高的技能，通常比較容易先被大家踩過雷。

如果用指令安裝失敗，也不用卡住。  
很多技能其實可以改走這個流程：

1. 到技能頁下載 ZIP
2. 解壓後整個資料夾放進 workspace 的 skills 資料夾
3. 重啟 OpenClaw
4. 回 dashboard 看 `workspace skills` 底下有沒有正常啟動

## 幾個實用查詢指令

如果要找目前技能清單、核心路徑或設定位置，可以先用這幾種查法：

```text
openclaw skills list
npm root -g
openclaw config get agents.defaults
```

1. `openclaw skills list`
   查看目前有哪些技能。
2. `npm root -g`
   用來查全域 npm 安裝路徑，也可協助定位 OpenClaw 核心安裝位置。
3. `openclaw config get agents.defaults`
   可用來查看預設設定內容，協助找工作區或代理預設位置。

如果要找目前工作區底下的技能有沒有真的被讀到，也可以配合 dashboard 一起看，通常會比只看資料夾更準。

## 安裝後怎麼確認有沒有真的生效

不要裝完就算了，最好再多做一步確認。

1. 重啟 OpenClaw 或 Gateway
2. 打開 dashboard
3. 到 `workspace skills` 下面看狀態是不是正常
4. 直接丟一個最簡單的測試任務去試

這樣比較不會出現「以為裝好了，其實根本沒啟動」的情況。

## 還可以從哪裡找更多技能

除了 ClawHub 之外，也可以參考社群整理的技能清單：

```text
https://github.com/VoltAgent/awesome-openclaw-skills
```

這種清單適合拿來找方向，但真正要安裝前，還是要回到前面的安全檢查原則。

所以在 ClawHub 找到技能後，要先看 3 件事：

1. 這個技能是做什麼的
2. 它需要什麼前置條件
3. 安裝後要不要再設定

## 最短操作版本

1. 去 `https://clawhub.ai/`
2. 按 `Skills`
3. 搜英文關鍵字
4. 先看是不是比較新、比較多人在用
5. 看分類、用途、前置條件
6. 複製安裝指令
7. 裝完再照技能頁的說明設定

---

# NemoClaw（黃仁勳的龍蝦）

## 這是什麼

`NemoClaw` 是 NVIDIA 的 NemoClaw。很多人也會戲稱它是「黃仁勳的龍蝦」。

它和前面這份 `OpenClaw` 安裝流程不是同一套東西，但可以：

1. 單獨安裝
2. 和 OpenClaw 整合安裝

這一節目前以：

```text
Windows 主機 + WSL Ubuntu + Docker Desktop
```

為主。

## 先下載手冊

可直接看這份：

1. [NemoClaw安裝手冊.md](NemoClaw安裝手冊.md)

## 先選路線

### 路線 A：NemoClaw 獨立安裝

目的：

1. 只要 NemoClaw
2. 本機不一定要接 LINE Bot

需要：

1. `WSL2`
2. `Docker Desktop`
3. `Node`

不需要先安裝 OpenClaw。

### 路線 B：OpenClaw + NemoClaw 整合安裝

目的：

1. 要 LINE / Telegram / Discord 入口
2. 同時具備 NemoClaw

需要：

1. 先有 OpenClaw gateway
2. 再加裝或啟動 NemoClaw

注意：

```text
Webhook 用的是 OpenClaw 的 /line/webhook
```

## 適合誰用

1. 只想跑 NemoClaw，本機做測試：走路線 A
2. 想保留 LINE 對話入口，同時加上 NemoClaw：走路線 B

## 路線 A：NemoClaw 獨立安裝

### A-1 開機後先做

1. 開 `Docker Desktop`，等引擎 Running
2. 開 `PowerShell`（建議系統管理員）

### A-2 環境檢查

```powershell
wsl --status
wsl -l -v
& 'C:\Program Files\Docker\Docker\resources\bin\docker.exe' version
```

再檢查 Ubuntu 內是否可直接用 `docker`：

```powershell
wsl -d Ubuntu-24.04 -- bash -lc "docker version"
```

如果出現：

```text
docker: command not found
```

先做 A-2.1 修復。

### A-2.1 修復：WSL 內沒有 docker 指令

```powershell
$script = @'
#!/usr/bin/env bash
exec '/mnt/c/Program Files/Docker/Docker/resources/bin/docker.exe' "$@"
'@
$script | wsl -d Ubuntu-24.04 -- tee /usr/local/bin/docker > $null
wsl -d Ubuntu-24.04 -- chmod +x /usr/local/bin/docker
wsl -d Ubuntu-24.04 -- bash -lc "sed -i 's/\r$//' /usr/local/bin/docker && docker version"
```

### A-3 安裝 NemoClaw

```powershell
wsl -d Ubuntu-24.04 -- bash -lc "curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash"
```

### A-4 啟動與驗證

```powershell
wsl -d Ubuntu-24.04 -- bash -lc "export PATH=\"\$HOME/.nvm/versions/node/v22.22.1/bin:\$PATH\"; /root/.local/bin/nemoclaw onboard"
wsl -d Ubuntu-24.04 -- bash -lc "export PATH=\"\$HOME/.nvm/versions/node/v22.22.1/bin:\$PATH\"; /root/.local/bin/nemoclaw start"
wsl -d Ubuntu-24.04 -- bash -lc "export PATH=\"\$HOME/.nvm/versions/node/v22.22.1/bin:\$PATH\"; /root/.local/bin/nemoclaw status"
```

### A-5 給 AI 的提示詞（獨立版）

```text
請先讀 C:\Users\user\Downloads\NemoClaw安裝手冊.md。
我要走「路線A：NemoClaw獨立安裝」。
請依序執行：
1) 檢查 WSL/Docker
2) 安裝或驗證 NemoClaw
3) 跑 onboard/start/status
4) 回報每一步成功或失敗
```

## 路線 B：OpenClaw + NemoClaw 整合安裝

### B-1 開機後先做

1. 開 `Docker Desktop`，等 Running
2. 開 `PowerShell`（建議系統管理員）

### B-2 啟動 OpenClaw gateway

```powershell
openclaw.cmd gateway start
Get-NetTCPConnection -LocalPort 18789 -ErrorAction SilentlyContinue | Select-Object LocalAddress,LocalPort,State,OwningProcess
```

預期：

```text
18789 為 Listen
```

### B-3 啟動 ngrok（給 LINE webhook）

```powershell
Start-Process -FilePath C:\OpenClaw_Auto\ngrok_dir\ngrok.exe -ArgumentList 'http','http://127.0.0.1:18789' -WindowStyle Hidden
Start-Sleep -Seconds 2
(Invoke-RestMethod -Uri 'http://127.0.0.1:4040/api/tunnels' -TimeoutSec 5).tunnels | Select-Object name,proto,public_url,config
```

### B-4 設定 LINE Webhook

填入：

```text
https://<ngrok網址>/line/webhook
```

注意：

```text
不是 /webhook
```

### B-5 在同一台機器加裝 NemoClaw

```powershell
wsl --status
& 'C:\Program Files\Docker\Docker\resources\bin\docker.exe' version
wsl -d Ubuntu-24.04 -- bash -lc "docker version"
wsl -d Ubuntu-24.04 -- bash -lc "curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash"
wsl -d Ubuntu-24.04 -- bash -lc "export PATH=\"\$HOME/.nvm/versions/node/v22.22.1/bin:\$PATH\"; /root/.local/bin/nemoclaw onboard"
wsl -d Ubuntu-24.04 -- bash -lc "export PATH=\"\$HOME/.nvm/versions/node/v22.22.1/bin:\$PATH\"; /root/.local/bin/nemoclaw start"
```

如果 `docker version` 在 WSL 內失敗，先回去做 A-2.1 修復。

### B-6 給 AI 的提示詞（整合版）

```text
請先讀 C:\Users\user\Downloads\NemoClaw安裝手冊.md。
我要走「路線B：OpenClaw + NemoClaw整合安裝」。
請依序執行：
1) 起 OpenClaw gateway（18789）
2) 起 ngrok 並給我完整 webhook URL
3) 確認 /line/webhook
4) 進 Ubuntu-24.04 安裝/啟動 NemoClaw
5) 回報每一步成功或失敗
```

## 常見錯誤與解法

### 1. Docker is not running

先開 `Docker Desktop`，等 Running 後重試。

### 2. Ubuntu 內 `docker: command not found`

先確認 Docker Desktop 與 WSL 整合；必要時補 wrapper。

### 3. `nemoclaw: command not found`

1. 用完整路徑 `/root/.local/bin/nemoclaw`
2. 補 PATH：`$HOME/.nvm/versions/node/v22.22.1/bin`

### 4. LINE Verify 失敗

檢查 URL 是否為：

```text
https://<ngrok網址>/line/webhook
```

### 5. 快速檢查 `/line/webhook` 是否存在

```powershell
try { (Invoke-WebRequest -Uri 'http://127.0.0.1:18789/line/webhook' -Method POST -UseBasicParsing -TimeoutSec 5 -Body '{}' -ContentType 'application/json').StatusCode } catch { $_.Exception.Response.StatusCode.value__ }
```

判讀：

1. 回 `400`：正常，代表路徑存在
2. 回 `404`：路徑錯，或 gateway 沒吃到正確路由

## 給下次 AI 的一句話

```text
請先讀 C:\Users\user\Downloads\NemoClaw安裝手冊.md，
先問我要走路線 A 還是路線 B，
然後只執行那一條完整流程。
```

---

# SKILL 安裝教學示範

## 為什麼挑這 3 個 SKILL？

上一節講的是 `SKILL` 的觀念。  
這一節直接做給你看：拿到一個 `SKILL` 包、放進龍蝦、開始用。

挑 3 個 **生圖類 SKILL** 來示範，順序刻意安排成 **免費→付費**、**新手最容易→進階改寫**：

1. 第一個 `algorithmic-art`：**完全免費**，不用任何 API key
2. 第二個 `ai-media-generator`：**付費但便宜**，阿亮老師親寫，台灣使用者最常用
3. 第三個 `imagegen`：**進階**，原本是給 Claude Code 用的，搬到龍蝦／Hermes 要小改

跟完這 3 個示範，你就會：

1. 知道 SKILL 怎麼放、放在哪個資料夾
2. 知道 Hermes 跟 Claude 的 SKILL 有什麼差別
3. 知道遇到 Claude 限定的 SKILL 要怎麼自己改成 Hermes 能用

## 共通觀念 1：SKILL 要放在哪？

愛馬仕龍蝦（HermesAgent）的技能資料夾統一在這裡：

```text
%USERPROFILE%\.hermes\skills\
```

PowerShell 一行打開：

```powershell
explorer "$env:USERPROFILE\.hermes\skills"
```

把下面三個 ZIP 任何一個解壓縮後，**整個資料夾**（含 `SKILL.md`）丟進去就好。  
解開 `algorithmic-art.zip` 之後你會得到一個 `algorithmic-art\` 資料夾，整個丟進去後路徑長這樣：

```text
C:\Users\你的名字\.hermes\skills\algorithmic-art\
  ├── SKILL.md           ← 必備：技能說明檔
  ├── (其他附屬檔案)
  └── ...
```

為什麼路徑這麼重要？  
因為 Hermes 啟動時會掃這個資料夾抓 SKILL。  
放錯位置（例如放在 `%LOCALAPPDATA%\hermes\` 下）會被當作基礎設施目錄忽略掉。

> ⚠️ **不是 `%LOCALAPPDATA%\hermes\`**！  
> 那個是程式本體與 Python venv 所在，重灌會被清掉。  
> 技能要放 `%USERPROFILE%\.hermes\skills\`，這個資料夾在重灌時會保留。

## 共通觀念 2：裝完要重新啟動才會生效

複製進去之後，跑這一行讓 Hermes 重新掃技能：

```powershell
hermes gateway restart
```

或乾脆執行健診：

```powershell
hermes doctor
```

`hermes doctor` 會列出目前掃到哪些 SKILL，如果你新放的技能名字有出現，就代表掛上去了。

## 共通觀念 3：Claude 的 SKILL 不一定能直接搬到 Hermes

這 3 個示範 SKILL 原本是寫給 Claude Code（Anthropic 的官方 CLI）用的。  
Hermes 跟 Claude 共用 `SKILL.md` 格式，**大多數情況都能直接搬**，但有兩個眉角要小心：

1. **某些 SKILL 預設用 Claude 內建工具**（例如 `image_gen`、`view_image`），Hermes 沒這些工具，要走 SKILL 內提供的「CLI fallback 模式」（通常是呼叫一支 Python 或 Bash 腳本）。
2. **某些 SKILL 假設 Linux 環境**（用 bash、espeak、systemd），Hermes 在 Windows 上要用對應的替代品（Git Bash、Windows SAPI、schtasks）。

下面 3 個示範會逐一告訴你哪些要改、改在哪。

---

## 第 1 個：algorithmic-art（演算法藝術）

### 是什麼

`algorithmic-art` 是一個讓 AI **用程式碼**畫圖的 SKILL。  
不是去呼叫雲端模型生圖，而是用 `p5.js` 寫一支會跑動畫的演算法，產出像「流場藝術」「粒子系統」「碎形」「噪聲圖案」這類**生成式藝術作品**。

成果可以直接在瀏覽器互動：拖滑桿改參數、按按鈕換種子、即時看演算法跑出新的構圖。

### 功能與特色

1. `完全免費` — 不需要任何 API key、不打雲端、不會產生費用
2. `離線可用` — 解壓後就能用，斷網也照跑
3. `輸出可玩` — 產生 `.html` + `.js`，瀏覽器打開就是互動藝術
4. `風格多元` — 內建 50+ 種演算法哲學（流場、量子諧波、自然湍流、有機混沌…）
5. `教學意義高` — 學員可以順便看 AI 寫的 p5.js 程式怎麼運作

### Hermes 適切性

**✅ 完全可用，無需任何修改。**

這個 SKILL 不依賴 Claude 任何內建工具，只是教 AI「寫一支 p5.js 程式」。  
Hermes 用什麼主 LLM 都行（OpenAI、Gemini、Claude、Ollama 都可以）。

### 下載

```text
SKILL下載/algorithmic-art.zip
```

ZIP 約 3 MB（含 54 種字體與 77 份哲學定義檔）。

### 安裝 4 步驟

1. 點上方連結下載 `algorithmic-art.zip`
2. 解壓縮，會得到 `algorithmic-art\` 資料夾
3. 整個資料夾丟進 `%USERPROFILE%\.hermes\skills\`
4. `hermes gateway restart`

### 試試看

對 Hermes 說：

```text
用 algorithmic-art 技能，畫一張「流場藝術」風格的動態作品給我，
配色用龍蝦橙紅。
```

Hermes 會：
1. 讀取 SKILL.md 知道步驟
2. 寫一段 p5.js 演算法
3. 產出 `.html` + `.js` 給你
4. 你瀏覽器打開就能看動畫

---

## 第 2 個：ai-media-generator（FAL.AI 多媒體生成器）

### 是什麼

`ai-media-generator` 是**阿亮老師親自寫的** SKILL，整合 [FAL.AI](https://fal.ai) 平台上的多個生圖／生影片模型。  
特色是 **按量計費、無月費**——畫多少付多少，最便宜的模型一張圖 $0.003 美元（約台幣 0.1 元）。

### 功能與特色

#### 生圖

| 模型 | 用途 | 價格 |
|:---|:---|:---:|
| FLUX.1 Dev | 通用、高品質（推薦） | ~$0.025/張 |
| FLUX.1 Pro | 最高品質 | ~$0.05/張 |
| FLUX.1 Schnell | 快速草稿、最便宜 | ~$0.003/張 |
| Ideogram V3 | 文字渲染強 | $0.03~0.09/張 |
| Recraft V3 | 設計風格 | ~$0.04/張 |

#### 生影片

| 模型 | 特色 | 價格 |
|:---|:---|:---:|
| Kling V2.1 | 人臉表情最強 | ~$0.07/秒 |
| Hailuo 2.3 | 電影感 | ~$0.28/6 秒 |
| FAL Seedance 2.0 | 原生音頻、多鏡頭、鏡頭控制 | ~$0.30/秒 |

#### 其他

1. `image-to-video` 圖轉影片
2. `Gemini Vision` 免費讀圖／OCR（用既有 Gemini API key）
3. 全部用 `curl` 同步呼叫，**不需 Python 套件**

### Hermes 適切性

**✅ 完全可用，無需修改。**

整個 SKILL 都是 `curl` HTTP API 呼叫，跟主 LLM 完全解耦。  
Hermes 在 Windows 上用內建便攜 Git Bash 跑 `curl`，完全沒問題。

### 環境設定（重要）

要先到 [fal.ai/dashboard/keys](https://fal.ai/dashboard/keys) 申請 `FAL_KEY`（要綁信用卡，但會送 $10 美元試用額度）。

設環境變數：

```powershell
[System.Environment]::SetEnvironmentVariable('FAL_KEY', '你申請到的 key', 'User')
```

設好後**關掉所有 PowerShell 重開**讓變數生效。

### 下載

```text
SKILL下載/ai-media-generator.zip
```

ZIP 約 14 KB（純 Markdown 文件）。

### 安裝 4 步驟

1. 申請 FAL.AI 帳號並設好 `FAL_KEY` 環境變數
2. 下載 `ai-media-generator.zip` 解壓縮
3. 整個 `ai-media-generator\` 資料夾丟進 `%USERPROFILE%\.hermes\skills\`
4. `hermes gateway restart`

### 試試看

對 Hermes 說：

```text
用 ai-media-generator 技能，
用 FLUX.1 Schnell 模型畫一張「在台北 101 旁邊喝珍珠奶茶的紅色龍蝦」，
1:1 正方形，存成 lobster-bubble-tea.jpg。
```

Hermes 會：
1. 看 SKILL.md 知道怎麼組 `curl` 指令
2. 呼叫 `https://fal.run/fal-ai/flux/schnell`
3. 拿到回傳的圖片網址
4. `curl -o` 下載到本機
5. 給你一張 1024×1024 的圖（這張花你 $0.003 美元）

### 進階：生影片

對 Hermes 說：

```text
用 FAL Seedance 2.0 標準 720p，做一個 5 秒鐘的影片，
場景是「夕陽下的海邊，海浪輕拍沙灘，遠處有一艘小船」，
要原生音頻。
```

費用約 $1.50 美元（720p ~$0.30/秒 × 5 秒）。

---

## 第 3 個：imagegen（Claude → Hermes 轉換示範）

### 是什麼

`imagegen` 是 Anthropic / Codex 官方推的生圖 SKILL，**原本給 Claude Code 用**。  
特色是「**寫得很死板很正式**」——把 prompt 分類成 photorealistic / product-mockup / ui-mockup 等 8 大用途，內建專業 prompt 模板。

如果你要的是「**用 AI 模型畫商業可用、品質高的圖**」，這個 SKILL 的提示詞工程做得很好。

### 功能與特色

1. `prompt 結構化` — 內建 8 種 use-case 分類（photorealistic / logo-brand / illustration-story 等）
2. `編輯模式` — 不只生新圖，還能改既有圖（背景去除、物件替換、光線氛圍轉換）
3. `批次生成` — 一個 prompt 出多張變體
4. `重輸入策略` — 處理「保留人物臉孔、改背景」這種精確需求
5. `Codex 原廠正規寫法` — 適合學員看怎麼寫專業的 SKILL.md

### Hermes 適切性

**⚠️ 部分可用，需小改。**

原版 `imagegen` 預設模式是用 **Claude Code 內建的 `image_gen` 工具**——這個工具 Hermes **沒有**。

好消息：原 SKILL 內附 `scripts/image_gen.py`（CLI fallback 模式），這支腳本 Hermes 可以直接跑。  
壞消息：CLI fallback 模式要 `OPENAI_API_KEY`（OpenAI 的圖像 API，比 FAL.AI 貴一點）。

### 兩種改寫方式（任選）

#### 方式 A（簡單）：用既有 SKILL，講話時明確指定 CLI 模式

對 Hermes 講話時加一句：

```text
用 imagegen 技能（CLI fallback 模式，因為我是 Hermes 不是 Claude），
畫一張高解析的台灣阿里山日出。
```

Hermes 看到指示後就會跳過 built-in 工具，直接跑 `scripts/image_gen.py`。

#### 方式 B（一勞永逸）：改 SKILL.md 把預設模式翻過來

打開 `%USERPROFILE%\.hermes\skills\imagegen\SKILL.md`，找到這段：

```text
- Use the built-in `image_gen` tool by default for all normal image generation and editing requests.
- Never switch to CLI fallback automatically.
```

改成：

```text
- Hermes environment: ALWAYS use the CLI fallback (`scripts/image_gen.py`) since the built-in `image_gen` tool is Claude-only.
- Set OPENAI_API_KEY environment variable before use.
```

之後就不用每次提醒 Hermes 走 CLI 模式。

### 環境設定（重要）

要先到 [platform.openai.com/api-keys](https://platform.openai.com/api-keys) 申請 OpenAI API key。

設環境變數：

```powershell
[System.Environment]::SetEnvironmentVariable('OPENAI_API_KEY', 'sk-...你的key', 'User')
```

> 💡 **省錢提示**：如果只要做圖，OpenAI 的 `gpt-image-1` 比 FAL.AI 貴；但如果你已經有 ChatGPT Plus 訂閱、想拿訂閱額度生圖，這條路才划算。新手建議直接用第 2 個 `ai-media-generator` 比較省。

### 下載

```text
SKILL下載/imagegen.zip
```

ZIP 約 31 KB（含 6 份 Markdown 文件 + 1 支 Python CLI）。

### 安裝 5 步驟

1. 申請 OpenAI API key 並設好 `OPENAI_API_KEY` 環境變數
2. 下載 `imagegen.zip` 解壓縮
3. 整個 `imagegen\` 資料夾丟進 `%USERPROFILE%\.hermes\skills\`
4. **建議：用方式 B 改 SKILL.md** 把預設模式翻過來
5. `hermes gateway restart`

### 試試看

對 Hermes 說：

```text
用 imagegen 技能（CLI fallback 模式），
畫一張「photorealistic-natural」風格的圖：
一隻紅色龍蝦坐在台北 101 觀景台上看夕陽，
背景台北市景燈火通明，光線溫暖柔和。
```

Hermes 會：
1. 從 SKILL.md 找到 CLI 用法
2. 跑 `python scripts/image_gen.py generate ...`
3. 透過 OpenAI API 產圖
4. 存到本機指定路徑

---

## 三個 SKILL 一張表看完

| 比較項 | algorithmic-art | ai-media-generator | imagegen |
|:---|:---:|:---:|:---:|
| **費用** | 免費 | 按量付費（便宜）| 按量付費（中等）|
| **要 API key？** | 不用 | 要 `FAL_KEY` | 要 `OPENAI_API_KEY` |
| **Hermes 適切性** | ✅ 直接可用 | ✅ 直接可用 | ⚠️ 要小改 |
| **作者** | Anthropic 官方 | 阿亮老師 | OpenAI / Codex 官方 |
| **產出類型** | 演算法藝術（HTML+JS）| 真實圖片／影片 | 真實圖片 |
| **適合對象** | 學程式藝術、做封面 | 一般生圖、做素材、影片 | 商業級高品質、企業用途 |
| **建議學員學習順序** | 1（最容易）| 2（最常用）| 3（最進階）|

## 學員常見問題

### Q1. 三個 SKILL 可以同時裝嗎？

可以，**三個都裝**也不會衝突。Hermes 會根據你下指令時用的關鍵字決定該調哪個。

### Q2. 我家小孩沒信用卡，只能用免費的，要選哪個？

只用 `algorithmic-art`。它完全離線，產出是會動的程式藝術，很適合給孩子當入門。

### Q3. 我已經有 ChatGPT Plus 訂閱，為什麼還要付 OpenAI API 錢？

ChatGPT Plus 是「網頁版聊天額度」，**不含 API 額度**。要用 API 就要另外綁信用卡儲值。  
這也是為什麼 Hermes 上推薦先用 `ai-media-generator`（FAL.AI 比 OpenAI 便宜）。

### Q4. 為什麼 imagegen 在 Hermes 上要改？Claude Code 上不用改嗎？

是的。`imagegen` 預設用 Claude Code 的 **內建** `image_gen` 工具——Claude Code 才有這個工具。Hermes 沒有，所以要走 SKILL 自帶的 CLI fallback 模式（呼叫 Python 腳本）。

這個觀念以後遇到其他 Claude SKILL 都用得到：

1. 先看 SKILL.md 有沒有提到 `built-in tool` 或 `Claude tool`
2. 如果有，找有沒有 CLI / Python / Bash 的 fallback
3. 如果沒有 fallback，這個 SKILL 就**無法在 Hermes 上直接用**，要自己重寫

### Q5. 我以後從別的地方下載 SKILL 要怎麼判斷能不能用？

跟著本頁第 3 個 `imagegen` 的判斷邏輯走：

1. 解開 ZIP，先看 `SKILL.md`
2. 找 "tool"、"built-in"、"Claude-specific"、"requires" 等關鍵字
3. 看附屬目錄有沒有 `scripts/` 資料夾（通常裡面就是 CLI fallback）
4. 看 `pyproject.toml`、`package.json` 確認需要哪些套件

---

# Ubuntu

## 準備

先開：

```text
Terminal
```

確認可用：

```bash
lsb_release -a
```

## 安裝

### 1. 安裝 Node.js（24 推薦／22.16+ 最低）

貼到：

```text
Terminal
```

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

再貼：

```bash
node -v
npm -v
```

### 2. 安裝龍蝦 AI

```bash
sudo npm install -g openclaw@latest
openclaw --version
```

### 3. 初始化

```bash
openclaw onboard
```

### 4. 安裝 LINE plugin

```bash
openclaw plugins install @openclaw/line
```

### 5. 寫入設定檔

先開：

```text
~/.openclaw/openclaw.json
```

開啟方式：

```bash
mkdir -p ~/.openclaw
nano ~/.openclaw/openclaw.json
```

下面整段貼到：

```text
openclaw.json
```

```json
{
  "llm": {
    "provider": "google",
    "model": "gemini-3-flash",
    "apiKey": "你的_Google_AI_API_Key"
  },
  "gateway": {
    "port": 18789
  },
  "channels": {
    "line": {
      "enabled": true,
      "channelId": "你的Channel ID",
      "channelAccessToken": "你的_LINE_Channel_Access_Token",
      "channelSecret": "你的_LINE_Channel_Secret",
      "dmPolicy": "allowlist",
      "allowFrom": ["你的_LINE_USER_ID"]
    }
  }
}
```

### 6. 啟動龍蝦

```bash
openclaw gateway start
```

再開第二個 `Terminal`：

```bash
openclaw doctor
openclaw status
```

### 7. 安裝與設定 ngrok

先去網站申請帳號與拿 token：

```text
https://dashboard.ngrok.com/signup
https://dashboard.ngrok.com/get-started/your-authtoken
```

再貼到：

```text
Terminal
```

```bash
curl -sSL https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null
echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list
sudo apt update
sudo apt install ngrok
ngrok config add-authtoken <你的_ngrok_token>
ngrok http 18789
```

### 8. 貼 Webhook URL

把下面這個格式：

```text
https://你的_ngrok網址/line/webhook
```

貼到：

```text
LINE Developers Console > Messaging API > Webhook URL
```

### 9. 第一次配對

```bash
openclaw pairing approve line <配對碼>
```

## 卸載

```bash
sudo npm uninstall -g openclaw
```

如果要刪掉設定：

```bash
rm -rf ~/.openclaw
```

---

# Claude Code 安裝

## Claude Code 是什麼

Claude Code 是 Anthropic 官方推出的 AI 程式開發輔助工具（CLI），讓你在終端機裡直接跟 Claude AI 協作寫程式、問問題。

**重要觀念：Claude Code 跟 OpenClaw 是兩個不同的工具。**

| 工具 | 用途 | 安裝方式 |
|------|------|----------|
| **OpenClaw（龍蝦）** | LINE / Telegram 聊天機器人框架 | `npm install -g openclaw@latest` |
| **Claude Code** | 終端機 AI 程式助手 | 原生安裝腳本（**不是 npm**） |

## 為什麼 Claude Code 不用 npm 安裝

很多學員第一次找到這個舊指令：

```text
npm install -g @anthropic-ai/claude-code
```

**這個方法已被官方標示為淘汰（deprecated）。**

Anthropic 在 2025 年推出了原生安裝程式，優點明顯：

1. 不需要先裝 Node.js — 直接下載獨立執行檔
2. 安裝更快 — 不用等 npm 拉一堆套件
3. 更新只要一行 — `claude update`
4. 權限問題少 — 不會卡在 npm 全域安裝的坑

## 三種安裝方式比較

| 方式 | 指令 | 推薦程度 |
|------|------|----------|
| WinGet | `winget install Anthropic.ClaudeCode` | ⭐⭐⭐ Windows 最省事 |
| 原生腳本（PowerShell） | `irm https://claude.ai/install.ps1 \| iex` | ⭐⭐⭐ 官方通用方法 |
| npm（舊方式） | `npm install -g @anthropic-ai/claude-code` | ❌ 已淘汰，不建議 |

---

## Windows 安裝步驟

### 第一步：先裝 Git for Windows（必做，不能跳過）

Claude Code 在 Windows 上需要 Git Bash 才能運作。沒裝 Git 的話，安裝過程會出現紅色警告，而且 `claude` 指令會跑不起來。

下載網址：

```text
https://git-scm.com/downloads/win
```

下載後全部按預設下一步安裝完畢，完成後**重開機**一次。

### 第二步：安裝 Claude Code（選一種方式）

#### 方式 A：WinGet（最省事，推薦）

開啟 **PowerShell** 或 **CMD**，貼上：

```powershell
winget install Anthropic.ClaudeCode
```

WinGet 會自動處理 PATH 設定，通常不會卡在「找不到 claude 指令」。

#### 方式 B：原生安裝腳本

用 **PowerShell** 貼上：

```powershell
irm https://claude.ai/install.ps1 | iex
```

用 **CMD** 貼上：

```cmd
powershell -Command "irm https://claude.ai/install.ps1 | iex"
```

### 第三步：關掉視窗，重新開一個（必做）

⚠️ **這步驟不能省！** 安裝完的路徑設定，只有在新開的視窗才會生效。

### 第四步：驗證安裝

```cmd
claude --version
claude doctor
```

看到版本號就成功了。`claude doctor` 會檢查環境，有問題它會提示你。

---

## macOS / Linux 安裝步驟

貼到 **Terminal**：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

或用 Homebrew：

```bash
brew install --cask claude-code
```

安裝完重開 Terminal，驗證：

```bash
claude --version
claude doctor
```

---

## 常見問題解法

### 問題一：`claude` 指令找不到（Windows）

**原因：** 安裝腳本把檔案放在 `%USERPROFILE%\.local\bin\`，但沒自動加進 PATH。

**確認方式：** 先看檔案有沒有裝到：

```cmd
dir %USERPROFILE%\.local\bin\claude.exe
```

**解法（手動加 PATH）：**

```cmd
setx PATH "%PATH%;%USERPROFILE%\.local\bin"
setx CLAUDE_CODE_GIT_BASH_PATH "C:\Program Files\Git\bin\bash.exe"
```

**設完一定要關掉 CMD，重新開一個新的視窗！**

然後再測試：

```cmd
claude --version
```

### 問題二：安裝時出現 Git Bash 警告

```text
Claude Code on Windows requires git-bash...
```

**解法：** 按「第一步」先裝 Git for Windows，裝完**重開機**後，再重新執行安裝指令。

### 問題三：用完整路徑才能執行

如果這樣可以跑：

```cmd
%USERPROFILE%\.local\bin\claude.exe --version
```

但 `claude --version` 不行 → 純粹是 PATH 問題，用「問題一」的解法處理即可。

### 問題四：想確認 Git Bash 位置

```cmd
where /r "C:\Program Files" bash.exe
```

如果 Git 裝在其他路徑，把「問題一」的 `CLAUDE_CODE_GIT_BASH_PATH` 換成實際路徑。

---

## 安裝完的基本操作

```cmd
claude              # 開始互動對話
claude --version    # 查版本
claude doctor       # 環境檢查
claude update       # 更新到最新版
```

## 官方資源

- GitHub Repo：`https://github.com/anthropics/claude-code`
- 官方文件：`https://docs.anthropic.com/claude-code`
