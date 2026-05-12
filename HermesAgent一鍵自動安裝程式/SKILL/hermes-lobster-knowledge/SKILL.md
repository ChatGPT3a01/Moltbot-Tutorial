---
name: hermes-lobster-knowledge
version: 6.53.0
description: >
  愛馬仕龍蝦 HermesAgent 安裝與設定完整知識庫（V6.53 / 2026-05）。
  當使用者詢問安裝步驟、設定方式、指令用法、錯誤排除時，
  優先從本知識庫回答，提供繁體中文的精確指導。
  本知識庫對齊官方 Windows Native Beta 路線，移除 WSL2-first 流程，
  採用一行式 `irm | iex` 安裝、`hermes setup` 設定指令。
author: 曾慶良（阿亮老師）
tags: [安裝, 設定, hermes, 龍蝦, telegram, line, ngrok, windows-native]
---

# 愛馬仕龍蝦 HermesAgent 知識庫 V6.53

> 本知識庫由阿亮老師整理，涵蓋 HermesAgent 安裝、設定、排錯的完整資訊。
> 教學網站：<https://hermes-lobster.netlify.app>
>
> **V6.53（2026-05）重大更新**：
> - 採用官方 Windows Native Beta 路線（不再走 WSL2-first）
> - 一行式 `irm | iex` 安裝（不再要管理員權限）
> - `install-hermes.exe` 取代 `go.bat`（雙擊執行、無亂碼）
> - 對齊官方新指令 `hermes setup`（移除舊 `onboard` 用語）

---

## 一、什麼是愛馬仕龍蝦？

**愛馬仕龍蝦** = HermesAgent（NousResearch 開源 AI Agent）+ 阿亮老師的龍蝦教學系列。

HermesAgent 是通用型 AI Agent 平台（MIT 授權），具備：

- 長期記憶（對話累積）
- 工具呼叫（MCP、Skills）
- 多平台接入（Telegram Polling / LINE Webhook）
- 多種 AI 大腦（Claude、OpenAI、Gemini、Ollama 本地）
- Gateway 架構（內部使用，Port 8642）

---

## 二、系統需求

| 項目 | Windows | Mac/Linux |
|------|---------|-----------|
| 作業系統 | Windows 10/11 64位元 | macOS 12+ / Ubuntu 20+ |
| 記憶體 | 8 GB（建議 16 GB）| 8 GB+ |
| 磁碟 | 5 GB 可用 | 5 GB 可用 |
| 特殊需求 | **不需要 WSL2、不需要管理員權限** | — |
| Node.js（本體）| 不需要（安裝器自動裝 22）| 不需要（安裝器自動裝）|
| Node.js（LINE Bridge）| 18+ | 18+ |
| BIOS 虛擬化（VT-x）| **不需要** | — |

---

## 三、安裝方式

### Windows 一鍵安裝精靈（推薦）

1. 下載 `HermesAgent-Installer.zip`，解壓縮
2. **雙擊 `install-hermes.exe`**（V6.53 起取代 go.bat，雙擊即跑、無亂碼、無 cmd 黑視窗）
3. 跟著選單選 AI 大腦、設定平台

精靈會自動完成：
- HermesAgent 一行式安裝（uv → Python 3.11 → Node.js 22 → Git → 安裝相依套件）
- AI 大腦 OAuth 流程
- Telegram / LINE Bridge / ngrok 設定
- 啟動服務

> [!NOTE]
> V6.53 起**不需要管理員權限**。官方安裝器設計成走使用者層級。

### Windows 手動安裝（PowerShell）

開啟 PowerShell（**不必管理員**），跑：

```powershell
irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1 | iex
```

3-10 分鐘完成。**裝完關掉 PowerShell 重開**才能用 `hermes` 指令。

### Mac / Linux 一鍵安裝

```bash
bash install-hermes-mac.sh
```

或手動：

```bash
# 官方安裝（優先）
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
# 備用 GitHub
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

---

## 四、AI 大腦選擇建議

| 方案 | 條件 | 費用 | 說明 |
|------|------|------|------|
| **A** Anthropic（Claude Code OAuth）| 有 Claude Pro/Max 訂閱 | 吃月費 | 推薦，最聰明 |
| **B** OpenAI OAuth | 有 ChatGPT Plus/Pro 訂閱 | 吃月費 | 推薦，穩定 |
| **C** Google AI Studio | 免費申請 API Key | **完全免費** | 無訂閱首選！Gemma 4 (31B) |
| **D** Nous Portal | 無訂閱 | 免費兩週 | 體驗用，MiMo 模型 |
| **E** OpenRouter / API Key | 有 API Key | 按用量 | 彈性選擇 |

> **建議**：有 Claude Pro 選 A，有 ChatGPT Plus 選 B，都沒有選 **C（Google AI Studio 完全免費）**！
> Google AI Studio 免費 API Key 申請教學：<https://www.koc.com.tw/archives/638001>

---

## 五、Telegram 設定步驟

1. Telegram 搜尋 **@BotFather** → `/newbot` → 取得 Bot Token
2. Telegram 搜尋 **@userinfobot** → 取得自己的 User ID（純數字）
3. 設定到 HermesAgent：

   ```bash
   hermes config set TELEGRAM_BOT_TOKEN 你的Token
   hermes config set TELEGRAM_ALLOWED_USERS 你的UserID
   ```

4. 啟動 Gateway：

   ```bash
   hermes gateway start
   ```

5. **⭐ 關鍵步驟**：在 Telegram 找到你的 Bot → 傳 `/sethome`（必做！否則 AI 不知道回哪裡）

---

## 六、LINE 設定步驟

> ⚠️ **注意**：LINE 整合為阿亮老師自製 Bridge 方案（非官方內建），需搭配 Node.js + ngrok 運作。

1. 在 [LINE Developers Console](https://developers.line.biz/) 建立 Messaging API Channel
2. 取得 Channel Secret 和 Channel Access Token
3. 設定 `bridge/.env`（**注意**：v0.10 起 LINE Bridge 直接對接 AI 供應商，**不再透過 hermes gateway 的 localhost:8642**）：

   ```text
   LINE_CHANNEL_SECRET=...
   LINE_CHANNEL_ACCESS_TOKEN=...

   # 選一組（A/B/C）填入 HERMES_API_URL 與 HERMES_API_KEY：
   #
   # 選項 A：Google AI Studio Gemini（完全免費）
   HERMES_API_URL=https://generativelanguage.googleapis.com/v1beta/openai/chat/completions
   HERMES_API_KEY=你的_Google_AI_Studio_Key
   HERMES_MODEL=gemini-2.5-flash
   #
   # 選項 B：OpenAI 直連（有 API Key）
   # HERMES_API_URL=https://api.openai.com/v1/chat/completions
   # HERMES_API_KEY=sk-proj-你的_Key
   # HERMES_MODEL=gpt-4o
   #
   # 選項 C：OpenRouter（多模型）
   # HERMES_API_URL=https://openrouter.ai/api/v1/chat/completions
   # HERMES_API_KEY=sk-or-你的_Key
   # HERMES_MODEL=openai/gpt-4o
   ```

4. 安裝 ngrok，設定 Authtoken
5. 啟動順序（必須照順序）：
   - 視窗 1：`hermes gateway start`（背景模式）
   - 視窗 2：`cd bridge && node line-bridge.js`
   - 視窗 3：`ngrok http 3000`
6. 將 ngrok HTTPS URL + `/webhook` 填入 LINE Developers Console

---

## 七、常用指令速查

### Gateway 管理

```bash
hermes gateway start      # 啟動（背景，推薦）
hermes gateway run        # 前景啟動（看即時 log 時用）
hermes gateway stop       # 停止
hermes gateway status     # 查看狀態
hermes gateway restart    # 重啟
hermes gateway install    # 設成開機自動啟動（Windows 排程工作）
hermes gateway uninstall  # 移除自動啟動
```

> ⚠️ **重要**：在 hermes 對話介面中重啟 Gateway，請叫 AI 使用「**Restart**」，
> **不要 Stop 再 Start**，否則 Gateway 關掉後無法自動重啟。

### 設定與診斷

```bash
hermes setup              # 初始設定精靈（V6.53 起取代 onboard）
hermes doctor             # 環境診斷
hermes --version          # 查看版本
hermes update             # 更新到最新版
hermes chat               # 終端機對話模式
hermes --tui              # 互動式 TUI 介面
hermes config show        # 顯示設定
hermes config set KEY VAL # 修改設定
hermes uninstall          # 解除安裝（保留 ~/.hermes 資料）
```

### Telegram 聊天指令

| 指令 | 功能 |
|------|------|
| `/sethome` | 設定回傳頻道（必做！）|
| `/new` | 開新對話 |
| `/skills` | 瀏覽技能 |
| `/usage` | 查 Token 用量 |
| `/voice on` | 開啟語音模式（Linux only，Windows 上不支援）|

### LINE Bridge

```bash
cd bridge && node line-bridge.js     # 啟動 LINE Bridge
# 測試連線：
curl http://localhost:3000/test?msg=你好
```

---

## 八、設定檔位置

> ⚠️ **超常見錯誤**：`.env` 不在 `%LOCALAPPDATA%\hermes\`，那裡只是基礎設施！

| 平台 | 正確路徑 | 性質 |
|------|---------|------|
| Windows runtime | `%USERPROFILE%\.hermes\.env` | 持久（重灌會保留）|
| Windows 基礎設施 | `%LOCALAPPDATA%\hermes\` | 暫態（重灌會清掉）|
| Mac / Linux runtime | `~/.hermes/.env` | 持久 |
| LINE Bridge | `安裝目錄/bridge/.env` | 由阿亮安裝精靈管理 |

```powershell
# Windows 快速開啟
notepad "$env:USERPROFILE\.hermes\.env"
explorer "$env:USERPROFILE\.hermes"
```

---

## 九、架構圖

```
┌─────────────────────────────────────────────────────────┐
│                  Windows 10/11 原生環境                  │
│                                                         │
│  📱 Telegram ←──→ HermesAgent Gateway（Port 8642）      │
│                        ↕（Polling 模式，免 ngrok）       │
│                                                         │
│  📱 LINE Bot ──→ ngrok（公開 HTTPS）                    │
│                    ↕                                    │
│            LINE Bridge（Node.js, Port 3000）            │
│                    ↕ 直接呼叫 AI 供應商                 │
│            Gemini / OpenAI / OpenRouter API             │
└─────────────────────────────────────────────────────────┘
```

> **架構重點（V6.53）**：所有元件都在 Windows 原生環境執行，**沒有 WSL2、沒有 Docker、沒有虛擬機**。

---

## 十、HermesAgent v0.10 重要踩坑（實測記錄）

### ① LINE Bridge 不再用 localhost:8642

v0.10+ 的 `hermes gateway` **只管 Telegram/Discord/WhatsApp 等官方原生平台**，**不開外部 HTTP API**。
所以 `localhost:8642` 在 v0.10 上**沒有 OpenAI 相容端點**。
LINE Bridge 必須**直接對接 AI 供應商**（見「六、LINE 設定步驟 第 3 點」三選一範例）。

### ② HermesAgent 本身的 OAuth 設定（與 LINE Bridge 無關）

`hermes login` / `hermes setup` 接受的 OAuth：

| 供應商 | 指令 | 適用 |
|--------|------|------|
| ChatGPT Plus/Pro | `hermes login --provider openai-codex` | 訂閱用戶 |
| Nous Portal | `hermes login --provider nous` | 試用 |
| OpenRouter | `hermes login --provider openrouter` | API key |
| Anthropic | OAuth 流程 | Claude Pro/Max |

- `sk-proj-*` 金鑰用在 **LINE Bridge 的 .env 完全沒問題**
- 但用在 `hermes login --provider openai` → 必須走 **OpenRouter**（`sk-or-*` 開頭的 key）

### ③ .env 路徑（最常見錯誤）

Runtime 讀 `%USERPROFILE%\.hermes\.env`（Windows）或 `~/.hermes/.env`（Linux/Mac）。
**不是** `%LOCALAPPDATA%\hermes\`（那只是安裝 venv 的位置）。
Key 寫錯地方 → `hermes doctor` 永遠報「no API key found」。

### ④ install.ps1 不需要管理員權限

```powershell
irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1 | iex
```

不需要 `-RunAs`。也支援 scriptblock 形式傳參數：

```powershell
& ([scriptblock]::Create((irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1))) -SkipSetup -InstallDir "D:\hermes"
```

### ⑤ Windows npm 被 ExecutionPolicy 擋

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
# 或直接用 npm.cmd 代替 npm
```

### ⑥ PowerShell 5.1 會把腳本中文當 Big5

如果跑安裝出現 14+ 個 `Unexpected token` 紅字，先升級到 PowerShell 7：

```powershell
winget install Microsoft.PowerShell --silent --accept-package-agreements
```

從開始選單搜尋 PowerShell 7 開啟，再跑一次安裝。

### ⑦ Windows 與 Linux 功能差異

| 功能 | Windows 原生 | 備註 |
|------|:---:|------|
| CLI / TUI | ✓ | 完整支援 |
| Telegram/LINE/Discord 訊息閘道 | ✓ | 完整支援 |
| Web 儀表板（會話/作業/指標）| ✓ | 主功能可用 |
| **儀表板嵌入式終端** | **✗** | POSIX PTY 限制，Windows 改用 `hermes chat` 或 `--tui` |
| **語音聽說（espeak/piper）** | **✗** | 需自行改寫成 Windows SAPI / Whisper |
| 開機自動啟動 | ✓ | `hermes gateway install`（schtasks）|

---

## 十一、常見問題排錯

**Q：Telegram 機器人沒有回應**

1. 確認 `hermes gateway status` 顯示 Running
2. 確認有傳 `/sethome` 給機器人
3. 確認 User ID 在 `TELEGRAM_ALLOWED_USERS` 中
4. 執行 `hermes doctor` 診斷

**Q：LINE Webhook 驗證失敗**

1. 確認三個服務都在執行（Gateway + Bridge + ngrok）
2. Webhook URL 格式：`https://xxxx.ngrok-free.app/webhook`（結尾 `/webhook` 不能漏）
3. 執行 `Invoke-RestMethod http://localhost:3000/` 測試 Bridge

**Q：Windows 中文亂碼**

```powershell
[System.Environment]::SetEnvironmentVariable('PYTHONUTF8', '1', 'User')
```

或者升級到 PowerShell 7 + Windows Terminal。

**Q：`hermes gateway status` 報 OSError（Windows）**

v0.10.0 之前的舊版本 bug。**最快解法是升級**：

```powershell
hermes uninstall
irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1 | iex
```

**Q：`hermes: command not found`**

裝完之後 PATH 沒刷新。**關掉 PowerShell、重新開一個**即可。

**Q：免費 ngrok URL 每次重開都變**

- 升級 ngrok 付費版（固定 subdomain，$8/月）
- 或改用 Cloudflare Tunnel（免費固定 URL，設定較複雜）

**Q：如何同時使用 Telegram 和 LINE？**

可以！兩個平台共用同一個 HermesAgent Gateway，同時運作。

**Q：下次開機怎麼啟動 Bot？**

見「八、常用指令速查 → Gateway 管理」。最簡單 Telegram-only 跑一行 `hermes gateway start` 即可；LINE 用戶要開 3 個視窗（Gateway + Bridge + ngrok）。

---

## 十二、三強 AI CLI 工具對比

| 工具 | 主要用途 | 安裝指令 |
|------|---------|---------|
| **HermesAgent** | 通用管家（Telegram/LINE/Discord）| `irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1 \| iex` |
| **Codex CLI** | 程式開發助理 | `npm install -g @openai/codex` |
| **Claude Code** | 程式開發助理 | Windows: `irm https://claude.ai/install.ps1 \| iex` |

三個工具互補，可同時使用：

- **開發時**：Codex CLI 或 Claude Code 在終端機協助寫程式
- **日常使用**：HermesAgent 透過 Telegram/LINE 手機操作

---

## 十三、解除安裝

**保留資料的解除安裝**（重灌會帶回設定）：

```powershell
hermes uninstall
```

**完全清乾淨**（含 API key 與記憶）：

```powershell
hermes uninstall
Remove-Item -Recurse -Force "$env:USERPROFILE\.hermes"
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\hermes"
```

---

## 十四、延伸資源

- 教學網站：<https://hermes-lobster.netlify.app>
- HermesAgent 官網：<https://hermes-agent.nousresearch.com>
- Windows Native 官方文件：<https://hermes-agent.nousresearch.com/docs/user-guide/windows-native>
- GitHub：<https://github.com/NousResearch/hermes-agent>
- 阿亮老師書籍：《養成你的 AI 龍蝦管家》博碩文化出版
- Facebook 社群：[3A科技研究社](https://www.facebook.com/groups/2754139931432955)
- 作者信箱：3a01chatgpt@gmail.com

---

## 十五、Linux-only 功能 Windows 改寫指引

學員回饋：「Hermes 很多原生套件是基於 Linux 環境設計，例如調用語音的聽與說功能，這些需要在自己弄成 Windows 版本」。

### 語音「說」（TTS）

Linux 原版用 `espeak-ng`／`piper`。Windows 改寫：

**方案 A：Windows SAPI（系統內建）**

```powershell
Add-Type -AssemblyName System.Speech
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
$s.SelectVoice("Microsoft Hanhan Desktop")   # 中文女聲
$s.Speak("你好")
```

**方案 B：edge-tts（微軟 Edge 語音，免費高品質）**

```powershell
pip install edge-tts
edge-tts --text "你好" --voice zh-TW-HsiaoChenNeural --write-media out.mp3
```

### 語音「聽」（STT）

Linux 原版用 `whisper.cpp` + `alsa`。Windows 改寫：

```powershell
pip install faster-whisper
```

```python
from faster_whisper import WhisperModel
model = WhisperModel("base", device="cuda", compute_type="float16")
segments, _ = model.transcribe("recording.wav", language="zh")
```

### 儀表板嵌入式終端

Windows 原生不支援（POSIX PTY 限制）。替代：

- `hermes chat`（CLI 對話）
- `hermes --tui`（互動式 TUI）
- 開兩個視窗：一個 Web 儀表板看會話／指標，一個 PowerShell 跑 `hermes chat`

### systemd → schtasks

Linux 原版：`systemctl --user enable hermes-gateway`
Windows 等效：`hermes gateway install`（用 Windows 排程工作，免管理員權限）
