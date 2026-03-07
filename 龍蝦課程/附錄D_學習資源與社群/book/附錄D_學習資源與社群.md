# 附錄 D | 學習資源與社群

---

龍蝦的世界很大，這本書只是一個起點。以下整理了各種學習資源，幫你持續精進。

---

## D.1 官方資源

### OpenClaw

| 資源 | 網址 | 說明 |
|------|------|------|
| 官方文件 | https://docs.openclaw.ai | 最完整的技術文件 |
| GitHub | https://github.com/nicholasgasior/openclaw | 原始碼和 Issue 追蹤 |
| ClawdHub | 內建於 CLI | 技能商店，`clawdhub search` 搜尋 |
| Discord 社群 | https://discord.gg/openclaw | 使用者交流、問題求助 |

### Google Antigravity

| 資源 | 網址 | 說明 |
|------|------|------|
| 官方網站 | https://idx.google.com | 登入和使用 |
| 說明文件 | https://developers.google.com/idx | 官方開發者文件 |

### Claude Code

| 資源 | 網址 | 說明 |
|------|------|------|
| 官方文件 | https://docs.anthropic.com/claude-code | 完整使用說明 |
| GitHub | https://github.com/anthropics/claude-code | 問題回報和討論 |

---

## D.2 AI 平台

### API 申請入口

| 平台 | 申請網址 | 免費額度 |
|------|---------|---------|
| Google Gemini | https://aistudio.google.com/apikey | 有免費額度（依方案與模型） |
| OpenAI | https://platform.openai.com/api-keys | 通常需先設定付費方式 |
| Anthropic | https://console.anthropic.com | 依帳號與方案而定 |
| Ollama | https://ollama.com | 完全免費（本地） |
| Groq | https://console.groq.com | 免費額度（有速率限制） |

### 其他實用 API

| 服務 | 網址 | 用途 |
|------|------|------|
| OpenWeatherMap | https://openweathermap.org/api | 天氣查詢 |
| NewsAPI | https://newsapi.org | 新聞摘要 |
| Google Calendar API | https://console.cloud.google.com | 行事曆管理 |
| Notion API | https://developers.notion.com | Notion 整合 |
| fal.ai | https://fal.ai | 龍蝦自拍（Clawra） |
| ElevenLabs | https://elevenlabs.io | TTS 語音合成 |
| Twilio | https://www.twilio.com | 語音通話和簡訊 |

---

## D.3 教學影片

### 阿亮老師頻道

| 平台 | 連結 |
|------|------|
| YouTube | https://youtube.com/@Liang-yt02 |

頻道內容包含：
- OpenClaw 安裝教學
- LINE Bot 設定教學
- AI 工具實用技巧
- 教育科技應用分享

### 推薦觀看順序

1. OpenClaw 快速安裝（對應 CH5）
2. LINE Bot 第一次對話（對應 CH6）
3. 龍蝦人格設定教學（對應 CH10）
4. Skills 安裝教學（對應 CH15）

---

## D.4 社群與交流

### Facebook

| 社群 | 說明 |
|------|------|
| 3A 科技研究社 | 阿亮老師的 Facebook 社群，分享 AI 教學心得 |

### Discord

| 社群 | 說明 |
|------|------|
| OpenClaw 官方 Discord | 技術問題求助、技能分享、開發者交流 |

### 常見的提問方式

在社群提問時，提供以下資訊會更容易得到幫助：

```
1. 你的作業系統（Windows 11 / Mac / Linux）
2. OpenClaw 版本（openclaw --version）
3. 使用的 AI 模型（Gemini / GPT / Claude / Ollama）
4. 問題描述（做了什麼、期望什麼、實際發生什麼）
5. 錯誤訊息（完整複製貼上）
6. 已經嘗試過的解決方法
```

---

## D.5 Gemini Gem 解惑小幫手

阿亮老師製作了一個專門解答龍蝦相關問題的 Gemini Gem：

**龍蝦 AI 解惑小幫手**
https://gemini.google.com/gem/1tU1Fg7oNheh5UmRTbDPnWsSVDs_Z2bSA

它可以幫你：
- 解答安裝過程中的問題
- 解釋書中沒看懂的概念
- 幫你寫 SKILL.md
- 幫你設計 IDENTITY.md
- 排查常見錯誤

24 小時免費使用，有問題隨時問它。

---

## D.6 延伸閱讀

### AI 自主代理

| 主題 | 推薦資源 |
|------|---------|
| Agent 概念入門 | Anthropic 的 "Building effective agents" 文章 |
| MCP 協定 | https://modelcontextprotocol.io — Model Context Protocol 官方文件 |
| AI Agent 框架 | LangChain、CrewAI、AutoGPT 等開源專案 |

### 聊天機器人開發

| 主題 | 推薦資源 |
|------|---------|
| LINE Bot 開發 | LINE Developers 官方文件 |
| Telegram Bot 開發 | Telegram Bot API 文件 |
| Discord Bot 開發 | Discord Developer Portal 文件 |

### 程式設計基礎

| 主題 | 推薦資源 |
|------|---------|
| JavaScript 入門 | MDN Web Docs — JavaScript 教學 |
| PowerShell 入門 | Microsoft Learn — PowerShell 教學 |
| Git 入門 | Pro Git 線上書籍（免費） |
| Markdown 語法 | https://www.markdownguide.org |

---

## D.7 本書配套資源

### 龍蝦人格生成器

| 工具 | 網址 |
|------|------|
| 龍蝦人格生成器 | https://chatgpt3a01.github.io/lobster-workspace-generator/ |

12 種預設角色、6 種個性風格，一鍵產生工作區設定檔。詳見 CH10。

### 技能資源

本書的 `resources/skills/` 資料夾包含：
- `skill-templates/basic-template.md` — 技能範本
- `skill-templates/attendance.md` — 出缺席管理範例（CH17）
- `skill-list.md` — 完整技能清單（八大分類 60+）

### Skills 快速安裝包

本書附帶的安裝程式（`龍蝦自動安裝程式`）已內含常用技能包，安裝後即可使用。

---

## D.8 聯絡作者

有任何關於本書的問題、建議或勘誤回報，歡迎聯繫：

- **作者**：曾慶良（阿亮老師）
- **Email**：3a01chatgpt@gmail.com
- **YouTube**：https://youtube.com/@Liang-yt02
- **Facebook**：3A 科技研究社

感謝你讀完這本書。希望龍蝦能成為你生活和工作中的好幫手！
