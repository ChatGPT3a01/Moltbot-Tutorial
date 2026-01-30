<p align="center">
  <img src="https://em-content.zobj.net/source/twitter/376/lobster_1f99e.png" alt="龍蝦" width="120">
</p>

<h1 align="center">龍蝦佈署教學</h1>

<p align="center">
  <strong>Clawdbot/Moltbot 完整安裝指南</strong><br>
  <em>在 Windows 11 上打造你的 AI 聊天機器人</em>
</p>

<p align="center">
  <a href="https://chatgpt3a01.github.io/Moltbot-Tutorial/簡報/index.html">
    <img src="https://img.shields.io/badge/📺_線上簡報-點我觀看-FF6B6B?style=for-the-badge" alt="線上簡報">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Windows%2011-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Platform">
  <img src="https://img.shields.io/badge/Node.js-24+-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/LINE-Messaging%20API-00C300?style=flat-square&logo=line&logoColor=white" alt="LINE">
  <img src="https://img.shields.io/badge/AI-Claude%20Code-F97316?style=flat-square" alt="AI">
  <img src="https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/last-commit/ChatGPT3a01/Moltbot-Tutorial?style=flat-square&color=blue" alt="Last Commit">
</p>

---

## 🎯 快速導覽

<table>
<tr>
<td width="50%" valign="top">

### 📖 我要學習
- [📺 線上簡報入口](https://chatgpt3a01.github.io/Moltbot-Tutorial/簡報/index.html)

</td>
<td width="50%" valign="top">

### 🔧 我要安裝
```powershell
# 快速安裝指令
mkdir D:\Moltbot && cd D:\Moltbot
iwr -useb https://molt.bot/install.ps1 | iex
```

</td>
</tr>
</table>

---

## 🦞 這是什麼？

**龍蝦佈署教學** 是一份完整的教學指南，教你如何在 Windows 11 上安裝 **Clawdbot/Moltbot**（龍蝦機器人）。

<table>
<tr>
<td align="center">💰<br><strong>完全免費</strong><br><sub>使用 OpenAI Codex OAuth</sub></td>
<td align="center">🔒<br><strong>本地運行</strong><br><sub>資料不外流</sub></td>
<td align="center">💬<br><strong>LINE 整合</strong><br><sub>隨時隨地對話</sub></td>
<td align="center">🎓<br><strong>零基礎友善</strong><br><sub>新手也能上手</sub></td>
</tr>
</table>

---

## 📚 課程大綱

### 🔰 基礎安裝篇

| Part | 標題 | 內容 |
|:----:|------|------|
| 1️⃣ | 認識龍蝦與準備工作 | 了解 Clawdbot/Moltbot 是什麼，準備所需工具 |
| 2️⃣ | 安裝基礎環境 | 安裝 nvm 和 Node.js 24 |
| 3️⃣ | 安裝 Clawdbot/Moltbot | 執行安裝腳本，回答設定問題 |
| 4️⃣ | 建立 LINE 機器人帳號 | 在 LINE Developers 建立 Messaging API |
| 5️⃣ | 安裝 ngrok | 安裝並設定 ngrok 連線工具 |
| 6️⃣ | 設定 LINE Webhook | 設定 Webhook URL 連接 LINE 與龍蝦 |
| 7️⃣ | 配對與測試 | 完成 LINE 配對，開始與 AI 對話 |
| 8️⃣ | 常見問題與指令表 | 疑難排解與常用指令參考 |

### 🌟 應用篇

| Part | 標題 | 內容 |
|:----:|------|------|
| 9️⃣ | 生活與學習應用 | 10 個實用情境：查資料、寫文章、翻譯、解題... |
| 🔟 | 企業與商業應用 | 10 個商業情境：市場分析、客服回覆、審查程式碼... |

### 🚀 進階篇

| Part | 標題 | 內容 |
|:----:|------|------|
| 1️⃣1️⃣ | 自動開發 + 部署 + 推送 GitHub | Git、GitHub CLI、Plan 模式、GitHub Actions |

---

## 🛠️ 所需工具

| 工具 | 用途 | 安裝指令 |
|------|------|---------|
| [nvm-windows](https://github.com/coreybutler/nvm-windows) | Node.js 版本管理 | [下載安裝檔](https://github.com/coreybutler/nvm-windows/releases) |
| [Node.js 24](https://nodejs.org/) | 執行環境 | `nvm install 24` |
| [ngrok](https://ngrok.com/) | 建立對外連線 | `winget install ngrok.ngrok` |
| [Git](https://git-scm.com/) | 版本控制（進階） | `winget install Git.Git` |
| [GitHub CLI](https://cli.github.com/) | GitHub 操作（進階） | `winget install GitHub.cli` |

---

## ❓ 常見問題

<details>
<summary>💥 <strong>spawn npm ENOENT 怎麼辦？</strong></summary>

```powershell
# 重新開啟 PowerShell（系統管理員）
nvm use 24
setx PATH "$env:APPDATA\npm;$env:Path"
# 關掉再重開 PowerShell
```

</details>

<details>
<summary>🤖 <strong>LINE 機器人沒有回應？</strong></summary>

1. 確認 ngrok 有在執行：`ngrok http 18789`
2. 確認龍蝦有在執行：`clawdbot gateway status`
3. 確認已完成配對（Part 7）

</details>

<details>
<summary>🔑 <strong>OAuth token 過期了？</strong></summary>

```powershell
codex login
clawdbot gateway restart
```

</details>

---

## ⌨️ 常用指令速查

```powershell
# 🦞 龍蝦指令
clawdbot gateway start      # 啟動
clawdbot gateway stop       # 關閉
clawdbot gateway restart    # 重啟
clawdbot doctor            # 檢查問題
clawdbot pairing approve line <code>  # 配對

# 🌐 ngrok 指令
ngrok http 18789           # 啟動連線

# 📦 Node.js 指令
node -v                    # 查看版本
nvm use 24                 # 切換版本
```

---

## 👨‍🏫 作者

<table>
  <tr>
    <td align="center" width="200">
      <img src="https://em-content.zobj.net/source/twitter/376/man-teacher_1f468-200d-1f3eb.png" width="80"><br>
      <strong>曾慶良（阿亮老師）</strong><br>
      <sub>AI 教育推廣者</sub><br>
      <sub>3A科技研究社 創辦人</sub>
    </td>
  </tr>
</table>

### 🔗 社群連結

<p>
  <a href="https://www.facebook.com/?locale=zh_TW">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook">
  </a>
  <a href="https://www.youtube.com/@Liang-yt02">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
  </a>
  <a href="https://www.facebook.com/groups/2754139931432955?locale=zh_TW">
    <img src="https://img.shields.io/badge/3A%20科技研究社-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="3A 科技研究社">
  </a>
  <a href="mailto:3a01chatgpt@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
</p>

---

## ⚠️ 授權聲明

```
© 2026 阿亮老師 版權所有

本專案僅供「阿亮老師課程學員」學習使用。

⛔ 禁止事項：
- 禁止修改本專案內容
- 禁止轉傳或散布
- 禁止商業使用
- 禁止未經授權之任何形式使用

如有任何授權需求，請聯繫作者。
```

---

<p align="center">
  <sub>Made with ❤️ by 阿亮老師</sub><br>
  <sub>🦞 龍蝦佈署教學 © 2026</sub>
</p>
