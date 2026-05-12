# 🦞🪽 愛馬仕龍蝦 HermesAgent 一鍵安裝精靈 V6.53

> 將 [HermesAgent](https://github.com/NousResearch/hermes-agent)（Nous Research 開源 AI Agent）串接 **Telegram** 或 **LINE Bot**，透過 **ngrok** 暴露 Webhook，一鍵自動完成！
>
> **V6.53（2026-05）重大更新**：對齊官方 **Windows Native Beta** + 移除 WSL2-first 流程 + 改用 `install-hermes.exe`（取代 go.bat，雙擊即執行、無亂碼、無 cmd 視窗閃跳）

---

## 🌐 教學網站

**<https://hermes-lobster.netlify.app>**

完整教學網站，包含：使用情境、Windows/Mac 安裝教學、Telegram/LINE 設定、指令速查、SKILL 安裝示範。

---

## 🚀 快速開始（3 秒鐘）

1. **雙擊 `install-hermes.exe`** ← 不必右鍵以管理員身分執行
2. 跟著精靈選 AI 大腦與通訊平台
3. 完成 ✅

> [!TIP]
> **V6.53 起，go.bat 已被 install-hermes.exe 取代**。新版優勢：
> - 不再跳出黑色 cmd 視窗
> - 不再有中文亂碼（chcp 自動 65001）
> - 不需要右鍵以管理員身分執行（官方安裝器走使用者層級）
> - 雙擊即啟動，UX 跟一般軟體一樣

---

## 📋 系統需求

| 項目 | 需求 |
|------|------|
| 作業系統 | Windows 10/11（64位元）|
| 磁碟空間 | 至少 5 GB 可用空間 |
| 記憶體 | 至少 8 GB RAM（建議 16 GB 才順）|
| 網路 | 需要網際網路連線 |
| 權限 | **不需要管理員權限**（V6.53 新設計）|
| BIOS | 不需要啟用 VT-x／AMD-V（Windows Native 不走 WSL2）|

---

## 🏗️ 架構說明（Windows Native）

```
┌─────────────────────────────────────────────────────────┐
│                  Windows 10/11 原生環境                  │
│                                                         │
│  📱 Telegram ←──→ HermesAgent Gateway（Port 8642）      │
│                        ↕（Polling 模式，免 ngrok）       │
│                                                         │
│  📱 LINE Bot ──→ ngrok（Port 3000）                     │
│                    ↕                                    │
│            LINE Bridge（Node.js, Port 3000）            │
│                    ↕                                    │
│            HermesAgent Gateway（Port 8642）             │
└─────────────────────────────────────────────────────────┘
```

**重點**：所有元件都在 Windows 原生環境執行，**沒有 WSL2、沒有 Docker、沒有虛擬機**。

---

## 📁 檔案結構

```
HermesAgent一鍵自動安裝程式/
├── install-hermes.exe      ← 🚪 雙擊執行（V6.53 起取代 go.bat）
├── install-hermes.ps1      ← 🤖 主安裝腳本（exe 內部呼叫）
├── go.bat                  ← 🪦 舊版啟動器（保留相容性，建議改用 .exe）
├── Readme.md               ← 📖 本說明文件
├── 參考.txt                ← 📚 教學參考資料
└── bridge/                 ← 🌉 LINE Bridge（Node.js）
    ├── line-bridge.js      ← LINE Webhook → Hermes API
    ├── package.json        ← Node.js 相依套件
    └── .env.example        ← 設定檔範本
```

---

## 🔧 安裝流程（V6.53 新版）

### Step 1：HermesAgent 本體（官方一行指令）

安裝精靈會自動跑官方 Windows Native 一行式安裝：

```powershell
irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1 | iex
```

這一行指令會自動完成：

| # | 動作 |
|---|------|
| 1 | 📦 安裝 uv 套件管理器 |
| 2 | 🐍 安裝 Python 3.11（透過 uv）|
| 3 | 🟢 安裝 Node.js 22 |
| 4 | 🌳 安裝便攜版 Git |
| 5 | 📥 複製 hermes-agent 程式倉庫 |
| 6 | 🧱 安裝相依套件 |
| 7 | 💬 訊息 SDK 自動配置 |
| 8 | 🐚 設定 Git Bash PATH |
| 9 | 🪟 更新使用者 PATH |
| 10 | 🧙 進入 `hermes setup` 設定精靈 |

整個過程 3-10 分鐘，**不需要管理員權限**。

### Step 2：選擇 AI 大腦

| 選項 | 條件 | 費用 |
|------|------|------|
| **A** Claude Code OAuth | 有 Claude Pro/Max 訂閱 | 吃月費，不另付 |
| **B** OpenAI OAuth | 有 ChatGPT Plus/Pro 訂閱 | 吃月費，不另付 |
| **C** Google AI Studio | 沒訂閱首選！ | 免費（Gemma 4）|
| **D** Nous Portal | 想試用 | 免費（MiMo 兩週）|
| **E** OpenRouter / 其他 | 有 API Key | 按用量付費 |

### Step 3A：Telegram 機器人設定

- 向 [@BotFather](https://t.me/BotFather) 申請 Bot Token
- 向 [@userinfobot](https://t.me/userinfobot) 取得 User ID
- **不需要 ngrok！** 使用 Polling 模式，隨開即用

### Step 3B：LINE 機器人設定

- 在 [LINE Developers Console](https://developers.line.biz/) 建立 Messaging API Channel
- 取得 Channel Secret 和 Access Token
- 安裝精靈自動建立 `bridge/.env`

### Step 4：ngrok 設定（LINE 必須）

- 下載並安裝 ngrok
- 設定 Authtoken（免費帳號）
- 啟動隧道，自動取得公開 HTTPS URL

### Step 5：啟動服務

- 自動啟動 HermesAgent Gateway（Windows 原生，Port 8642）
- 自動啟動 LINE Bridge（Node.js，Port 3000）
- 自動啟動 ngrok 隧道

---

## 🛠️ 手動操作指令

### HermesAgent 本體

```powershell
hermes --version         # 版本資訊
hermes setup             # 互動式首次設定（V6.53 起取代 onboard）
hermes doctor            # 環境健診
hermes chat              # 終端機對話
hermes --tui             # 互動式 TUI 介面

hermes gateway start     # 啟動 Gateway（背景）
hermes gateway stop      # 停止 Gateway
hermes gateway status    # 查看狀態
hermes gateway install   # 設定開機自動啟動（Windows 排程工作）
```

### LINE Bridge

```powershell
cd bridge
npm start                # 啟動 LINE Bridge（Port 3000）
```

### ngrok

```powershell
ngrok http 3000          # 為 LINE Bridge 建立隧道（LINE 模式）
```

> [!NOTE]
> Telegram 用 **Polling 模式**（HermesAgent 主動向 Telegram 拉訊息），不需要 ngrok。只有 LINE 走 Webhook 模式需要 ngrok。

---

## 📂 資料目錄差異（重要觀念）

> [!WARNING]
> HermesAgent 把資料放在**兩個不同位置**，搞混會導致設定遺失或備份不完整！

| 資料夾 | 路徑 | 性質 | 內容 |
|--------|------|------|------|
| 🗑️ **基礎設施（可丟）** | `%LOCALAPPDATA%\hermes\` | 重灌會重建 | hermes-agent repo、Python venv、Node modules |
| 💾 **使用者資料（要備份）** | `%USERPROFILE%\.hermes\` | 升級／重灌**會保留** | `.env` 設定、API 憑證、技能、對話記憶 |

PowerShell 一行打開：

```powershell
explorer "$env:LOCALAPPDATA\hermes"        # 基礎設施
explorer "$env:USERPROFILE\.hermes"        # 使用者資料
```

---

## ❓ 常見問題

**Q: 安裝完之後 `hermes` 指令找不到？**
A: 關掉現在的 PowerShell，重新開一個。PATH 環境變數要新 shell 才會生效。

**Q: `install.ps1` 報 14+ 個 `Unexpected token` 錯誤？**
A: 你用的是 **PowerShell 5.1**（舊版）。升級到 PowerShell 7：

```powershell
winget install Microsoft.PowerShell --silent --accept-package-agreements
```

從開始選單搜尋 PowerShell 7 開啟，再跑一次安裝。

**Q: LINE 回覆很慢怎麼辦？**
A: 確認 `hermes gateway status` 顯示運行中，並用 `Invoke-RestMethod http://localhost:3000/` 測試 Bridge 連線。

**Q: Telegram Polling 模式和 Webhook 模式有什麼差別？**
A: Polling 模式（預設）不需要 ngrok，HermesAgent 主動拉訊息；Webhook 模式需要 ngrok，由 Telegram 主動推送。LINE 不支援 Polling，必須走 ngrok。

**Q: 如何更新 HermesAgent 到新版？**
A: 重跑 `irm | iex` 那行即可。`%USERPROFILE%\.hermes\` 的設定不會被動到。

**Q: 想徹底解除安裝？**
A:
```powershell
hermes uninstall                                       # 移除基礎設施
Remove-Item -Recurse -Force "$env:USERPROFILE\.hermes" # 連使用者資料一起清
```

**Q: 為什麼 Windows 上沒有「語音聽說」「儀表板嵌入式終端」？**
A: 那些是 Linux-only 功能。Hermes Agent 的原生套件部分基於 Linux 環境（`espeak`、`ptyprocess`），Windows 上需要自己改寫成 SAPI/Whisper/Windows Terminal。詳見教學網站「附錄 C：Linux-only 功能 Windows 改寫指引」。

---

## 📝 版本紀錄

| 版本 | 日期 | 更新內容 |
|------|------|---------|
| **V6.53** | **2026-05-13** | **對齊官方 Windows Native Beta + 改用 install-hermes.exe + 移除 WSL2-first 流程** |
| V1.1 | 2026-05-10 | install-hermes.ps1 對齊一行式 `irm \| iex` |
| V1.0 | 2026-04-11 | 初始版本（WSL2 + Telegram + LINE + ngrok）|

---

## 🎯 HermesAgent 適合什麼？

**HermesAgent 不是單純聊天工具，而是通用型 AI Agent 平台。**

| ✅ 適合的場景 | ❌ 不適合的場景 |
|-------------|--------------|
| 多步驟自動化工作流 | 需要毫秒級即時回應 |
| 長期持續使用（記憶積累） | 無邊界高權限全自動執行 |
| 跨 Telegram/LINE 多平台接入 | 替代確定性核心商業邏輯 |
| 定期自動化任務（cron） | |
| 整合多個外部系統（MCP） | |

**核心架構三層：**

```
擴展生態層  ── skills、MCP、插件、自訂工具
平台能力層  ── CLI、Gateway、排程、設定、權限
Agent 執行層 ── 對話循環、工具調度、上下文壓縮
```

---

## 👨‍🏫 關於作者

<div align="center">

### 曾慶良 主任（阿亮老師）

<table>
<tr>
<td width="50%">

**📌 現任職務**

🎓 新興科技推廣中心主任<br>
🎓 教育部學科中心研究教師<br>
🎓 臺北市資訊教育輔導員

</td>
<td width="50%">

**🏆 獲獎紀錄**

🥇 2025年 SETEAM教學專業講師認證<br>
🥇 2024年 教育部人工智慧講師認證<br>
🥇 2022、2023年 指導學生XR專題競賽特優<br>
🥇 2022年 VR教材開發教師組特優<br>
🥇 2019年 百大資訊人才獎<br>
🥇 2018、2019年 親子天下創新100教師<br>
🥇 2018年 臺北市特殊優良教師<br>
🥇 2017年 教育部行動學習優等

</td>
</tr>
</table>

<br>

### 📞 聯絡方式

[![YouTube](https://img.shields.io/badge/YouTube-@Liang--yt02-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/@Liang-yt02)
[![Facebook](https://img.shields.io/badge/Facebook-3A科技研究社-blue?style=for-the-badge&logo=facebook)](https://www.facebook.com/groups/2754139931432955)
[![Email](https://img.shields.io/badge/Email-3a01chatgpt@gmail.com-green?style=for-the-badge&logo=gmail)](mailto:3a01chatgpt@gmail.com)

</div>

---

## 📜 授權聲明

**© 2026 曾慶良（阿亮老師）版權所有**

本安裝精靈相關檔案（`install-hermes.exe`、`install-hermes.ps1`、`go.bat`、`bridge/line-bridge.js`）由**阿亮老師**開發，僅供阿亮老師課程學員個人學習使用。

> HermesAgent 本體（`github.com/NousResearch/hermes-agent`）採 MIT 授權，由 NousResearch 開發。

### ⚠️ 禁止事項

- ❌ 禁止修改本安裝精靈內容
- ❌ 禁止轉傳或散布
- ❌ 禁止商業使用
- ❌ 禁止未經授權之任何形式重製或公開傳輸

如有授權需求，請聯繫作者：3a01chatgpt@gmail.com

---

<div align="center">

**🦞🪽 Made with ❤️ by 阿亮老師（曾慶良）**

---

© 2026 曾慶良 版權所有 | V6.53 (2026-05-13)

</div>
