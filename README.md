<p align="center">
  <img src="https://raw.githubusercontent.com/ChatGPT3a01/Moltbot-Tutorial/main/assets/lobster-banner.png" alt="龍蝦佈署教學" width="600">
</p>

<h1 align="center">龍蝦佈署教學</h1>

<p align="center">
  <strong>Clawdbot/Moltbot 完整安裝指南</strong><br>
  在 Windows 11 上打造你的 AI 聊天機器人
</p>

<p align="center">
  <a href="#-快速開始">快速開始</a> •
  <a href="#-課程大綱">課程大綱</a> •
  <a href="#-線上簡報">線上簡報</a> •
  <a href="#-常見問題">常見問題</a> •
  <a href="#-作者">作者</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Windows%2011-blue?style=for-the-badge&logo=windows" alt="Platform">
  <img src="https://img.shields.io/badge/Node.js-24+-green?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/LINE-Messaging%20API-00C300?style=for-the-badge&logo=line" alt="LINE">
  <img src="https://img.shields.io/badge/AI-Claude%20Code-orange?style=for-the-badge" alt="AI">
</p>

---

## 這是什麼？

**龍蝦佈署教學** 是一份完整的教學指南，教你如何在 Windows 11 上安裝 **Clawdbot/Moltbot**（龍蝦機器人），讓你可以透過 LINE 與 AI 對話！

### 主要特色

| 特色 | 說明 |
|------|------|
| 完全免費 | 使用 OpenAI Codex OAuth，不需要額外付費 |
| 本地運行 | 在你的電腦上運行，資料不外流 |
| LINE 整合 | 透過 LINE 與 AI 對話，隨時隨地都能用 |
| 零基礎友善 | 每一步都有詳細說明，新手也能上手 |

---

## 快速開始

### 系統需求

- Windows 11 電腦
- 網路連線
- LINE 帳號
- ChatGPT 帳號（有 Plus 訂閱更好）

### 安裝步驟摘要

```bash
# 1. 安裝 nvm
# 下載 nvm-setup.exe 並安裝

# 2. 安裝 Node.js 24
nvm install 24
nvm use 24

# 3. 建立工作資料夾
mkdir D:\Moltbot
cd D:\Moltbot

# 4. 安裝 Clawdbot/Moltbot
iwr -useb https://molt.bot/install.ps1 | iex
```

> 詳細步驟請參考 [完整教學文件](龍蝦佈署教學.md) 或 [線上簡報](#-線上簡報)

---

## 課程大綱

### 基礎安裝篇

| 章節 | 內容 |
|------|------|
| Part 1 | 認識龍蝦與準備工作 |
| Part 2 | 安裝基礎環境（nvm + Node.js） |
| Part 3 | 安裝 Clawdbot/Moltbot |
| Part 4 | 建立 LINE 機器人帳號 |
| Part 5 | 安裝 ngrok |
| Part 6 | 設定 LINE Webhook |
| Part 7 | 配對與測試 |
| Part 8 | 常見問題與指令表 |

### 應用篇

| 章節 | 內容 |
|------|------|
| Part 9 | 生活與學習應用（情境 1-10） |
| Part 10 | 企業與商業應用（情境 11-20） |

### 進階篇

| 章節 | 內容 |
|------|------|
| Part 11 | 自動開發 + 部署 + 推送 GitHub |

---

## 線上簡報

本教學配有互動式 HTML 簡報，請由此進入：

**[龍蝦佈署教學｜線上簡報入口](https://chatgpt3a01.github.io/Moltbot-Tutorial/簡報/index.html)**

---

## 常見問題

<details>
<summary><strong>Q: 安裝時出現 spawn npm ENOENT 怎麼辦？</strong></summary>

關掉 PowerShell，重新開一個新的（系統管理員），然後：

```powershell
nvm use 24
setx PATH "$env:APPDATA\npm;$env:Path"
```

關掉再重開 PowerShell，再試一次。

</details>

<details>
<summary><strong>Q: LINE 機器人沒有回應？</strong></summary>

可能原因：
1. ngrok 已經關了 → 重新啟動 `ngrok http 18789`
2. Clawdbot/Moltbot 沒在跑 → 執行 `clawdbot gateway start`
3. 還沒配對 → 參考 Part 7 配對流程

</details>

<details>
<summary><strong>Q: OAuth token 過期了？</strong></summary>

```powershell
codex login
clawdbot gateway restart
```

</details>

---

## 常用指令

```powershell
# Clawdbot/Moltbot 指令
clawdbot gateway start      # 啟動龍蝦
clawdbot gateway stop       # 關閉龍蝦
clawdbot gateway restart    # 重新啟動
clawdbot doctor            # 檢查問題

# ngrok 指令
ngrok http 18789           # 啟動 ngrok

# Node.js 指令
node -v                    # 查看版本
nvm use 24                 # 切換版本
```

---

## 作者

<table>
  <tr>
    <td align="center">
      <strong>曾慶良（阿亮老師）</strong><br>
      AI 教育推廣者 | 3A科技研究社 創辦人
    </td>
  </tr>
</table>

### 社群連結

[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/?locale=zh_TW)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@Liang-yt02)
[![Facebook Group](https://img.shields.io/badge/3A%20科技研究社-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/groups/2754139931432955?locale=zh_TW)

---

## 授權聲明

**© 2026 阿亮老師 版權所有**

本專案僅供「阿亮老師課程學員」學習使用。

- 禁止修改本專案內容
- 禁止轉傳或散布
- 禁止商業使用
- 禁止未經授權之任何形式使用

如有任何授權需求，請聯繫作者。

---

<p align="center">
  Made with ❤️ by 阿亮老師
</p>
