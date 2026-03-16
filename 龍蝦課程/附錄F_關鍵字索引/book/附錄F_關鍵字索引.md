# 附錄 F | 找不到？翻這裡——關鍵字索引

---

本索引收錄全書重要的工具名稱、技術名詞、設定檔、操作指令和核心概念，方便你快速翻到對應的章節。

> **使用說明**：每個關鍵字後方的數字代表章節編號。例如「CH5, CH9」表示該關鍵字在第 5 章和第 9 章有重要說明。粗體章節表示該關鍵字的**主要教學章節**。

---

## 工具與平台

| 關鍵字 | 出現章節 |
|--------|---------|
| Antigravity（Google） | CH0, CH1, **CH2**, CH4, 附錄D |
| Claude Code | CH0, CH1, **CH3**, CH4, CH10, 附錄D |
| Cloudflare Tunnel | CH1, **CH12**, 附錄A |
| ClawdHub（技能商店） | **CH15**, 附錄A, 附錄D |
| Dashboard（網頁儀表板） | **CH9**, 附錄A |
| Discord | CH1, **CH13**, 附錄D |
| ElevenLabs（TTS） | 附錄D |
| fal.ai（圖片生成） | **CH8**, 附錄D |
| GitHub Codespaces | CH1, **CH5** |
| Google Calendar API | **CH16**, 附錄D |
| Groq | **附錄C** |
| LINE Messaging API | CH1, **CH5**, CH6, CH11, 附錄A |
| Meta / Facebook Messenger | **CH13** |
| NewsAPI | **CH16**, 附錄D |
| ngrok | CH1, **CH5**, CH9, CH12, 附錄A |
| Node.js | **CH1**, CH3, CH5, 附錄A |
| Notion API | **CH16**, 附錄D |
| Ollama | **CH5**, 附錄C |
| OpenClaw | 全書各章 |
| OpenWeatherMap | **CH16**, 附錄D |
| Telegram | CH1, **CH7**, CH13, 附錄E |
| Twilio（語音通話） | **CH20**, 附錄D |

---

## 技術名詞

| 關鍵字 | 說明 | 出現章節 |
|--------|------|---------|
| Agent（自主代理） | AI 能自主執行任務的系統 | **CH0**, CH18 |
| API（應用程式介面） | 程式之間溝通的橋樑 | CH1, CH5, 附錄C, 附錄D |
| API Key（金鑰） | 存取 API 的驗證碼 | **CH1**, CH5, 附錄E |
| Channel Access Token | LINE API 授權碼 | **CH1**, CH5, 附錄A |
| Channel ID / Channel Secret | LINE 帳號識別碼與密鑰 | **CH1**, CH5, 附錄A |
| CLI（命令列介面） | 文字指令操作模式 | **CH9**, 附錄A |
| Cron（排程語法） | 定時任務的時間表示格式 | **CH21**, 附錄A |
| Desktop Agent | 操控桌面電腦的 AI 代理 | **CH18** |
| Flex Message | LINE 的複雜結構化訊息格式 | **CH11**, 附錄B |
| Gateway | OpenClaw 核心服務，處理所有訊息 | **CH5**, CH9, CH12, 附錄A |
| MCP（Model Context Protocol） | AI 工具整合標準 | CH0, 附錄D |
| Port 18789 | Gateway 預設埠號 | CH5, CH9, CH12, 附錄A |
| Port 18790 | Dashboard 預設埠號 | CH9, 附錄A |
| Push Message（推播訊息） | 主動推送，有月度額度限制 | CH6, **CH21** |
| Reply Message（回覆訊息） | 被動回覆，不計次數 | CH6 |
| Rich Menu（圖文選單） | LINE 底部的按鈕選單 | **CH11**, CH6 |
| TUI（終端機使用者介面） | 圖形化終端操作介面 | **CH9**, 附錄A |
| Vision（視覺辨識） | AI 看懂圖片的能力 | **CH8**, 附錄C |
| Webhook | 事件觸發的即時通知機制 | CH1, **CH5**, CH12, CH13, 附錄A |
| Workspace（工作區） | 存放龍蝦設定檔的資料夾 | CH5, **CH10**, CH17 |

---

## 設定檔案

| 檔案名稱 | 功能 | 主要章節 |
|---------|------|---------|
| `AGENTS.md` | 多重分身定義 | **CH14** |
| `HEARTBEAT.md` | 排程任務與自動化設定 | CH10, **CH21** |
| `IDENTITY.md` | 龍蝦人格、角色、說話風格 | CH4, **CH10**, CH17 |
| `openclaw.json` | OpenClaw 主設定檔 | **CH5**, 附錄A |
| `SKILL.md` | 技能定義模板 | **CH15**, **CH17**, 附錄E |
| `SOUL.md` | 行為準則與價值觀 | **CH10**, CH17 |
| `TOOLS.md` | 環境變數與工具配置 | **CH10** |
| `USER.md` | 使用者偏好設定 | CH10 |

---

## 常用指令

| 指令 | 功能 | 章節 |
|-----|------|------|
| `clawdhub search` | 搜尋技能商店 | **CH15** |
| `openclaw tui` | 啟動 TUI 互動介面 | **CH9** |
| `openclaw config set` | 修改設定值 | CH5, 附錄A, 附錄C |
| `openclaw conversations clear` | 清除對話紀錄 | CH6 |
| `openclaw dashboard` | 啟動網頁儀表板 | **CH9** |
| `openclaw doctor` | 全面健康檢查 | **CH5**, 附錄A, 附錄B |
| `openclaw gateway restart` | 重啟 Gateway 服務 | CH5, 附錄A, 附錄C |
| `openclaw gateway start` | 啟動 Gateway 服務 | **CH5**, 附錄A |
| `openclaw gateway status` | 查看 Gateway 狀態 | CH5, CH6, 附錄A |
| `openclaw gateway stop` | 停止 Gateway 服務 | CH5, 附錄A |
| `openclaw onboard` | 初始設定精靈 | **CH5**, 附錄A |
| `openclaw pairing approve` | 核准通道配對 | **CH5**, CH6, 附錄A |
| `openclaw skills install` | 安裝技能 | **CH15**, 附錄A |
| `openclaw skills list` | 列出已安裝技能 | **CH15**, 附錄A |
| `ollama pull` | 下載本地模型 | **CH5**, 附錄C |
| `ollama run` | 直接與本地模型對話 | CH5, 附錄C |

---

## AI 模型

| 模型 | 廠商 | 主要章節 |
|------|------|---------|
| Claude Haiku 4.5 | Anthropic | **附錄C** |
| Claude Opus 4.6 | Anthropic | **附錄C** |
| Claude Sonnet 4.6 | Anthropic | **附錄C** |
| Gemini 2.5 Flash | Google | CH5, **附錄C** |
| Gemini 2.5 Pro | Google | **附錄C** |
| GPT-5.2 | OpenAI | **附錄C** |
| GPT-5.2 Pro | OpenAI | **附錄C** |
| Llama 3.3 | Meta（開源） | CH5, **附錄C** |
| Qwen3 | 阿里巴巴（開源） | CH5, **附錄C** |

---

## 核心概念

| 概念 | 說明 | 出現章節 |
|------|------|---------|
| 多重分身 | 同一隻龍蝦擁有多個人格身份 | **CH14** |
| 多輪對話 | 龍蝦記住整段對話上下文 | **CH6**, CH10 |
| 多機協作（Nodes） | 多台電腦的龍蝦互相合作 | **CH19** |
| 短期記憶 | 單次對話中的上下文記憶 | **CH6**, CH10 |
| 長期記憶 | 跨對話保留的使用者資訊 | **CH6**, CH10 |
| 配對（Pairing） | 將通道帳號連結到龍蝦 | **CH5**, CH6, CH7, CH13 |
| 排程推播 | 定時自動傳送訊息 | **CH21** |
| 跨平台 | 同時支援 LINE、Telegram、Discord 等 | CH7, **CH13** |
| 離線運作 | 使用 Ollama 本地模型，不需網路 | **CH5**, 附錄C |
| 隱私保護 | 資料不上傳雲端 | CH5, **附錄C** |

---

## 章節速查

需要找特定主題？以下是每章的核心關鍵字：

| 章節 | 核心關鍵字 |
|------|-----------|
| 序 | 本書架構、學習路線、適合讀者 |
| CH0 | Agent、自主代理、三王工具、學習路線圖 |
| CH1 | 環境準備、帳號申請、Node.js、LINE、ngrok、GitHub |
| CH2 | Antigravity、自然語言、網頁建構 |
| CH3 | Claude Code、終端機、VS Code、Git |
| CH4 | 三王聯手、實戰練習、IDENTITY.md 生成 |
| CH5 | 安裝 OpenClaw、五種方式、Gateway、Webhook、配對、Zeabur |
| CH6 | LINE 對話、五種模式、對話技巧、記憶力 |
| CH7 | Telegram、BotFather、跨平台 |
| CH8 | 圖片辨識、Vision、fal.ai、Clawra 自拍 |
| CH9 | TUI、CLI、Dashboard、操作介面 |
| CH10 | IDENTITY.md、SOUL.md、人格設定、Workspace |
| CH11 | Rich Menu、Flex Message、LINE 進階 |
| CH12 | Cloudflare Tunnel、正式域名、反向代理 |
| CH13 | Discord、Facebook、多通道整合 |
| CH14 | 多重分身、AGENTS.md、多角色 |
| CH15 | Skills 生態系、ClawdHub、九大分類 |
| CH16 | 天氣、新聞、行事曆、Notion、生活應用 |
| CH17 | SKILL.md 撰寫、技能開發、自訂技能 |
| CH18 | Desktop Agent、電腦控制、遠端操作 |
| CH19 | Nodes、多機協作、分佈式架構 |
| CH20 | Twilio、語音通話、多媒體整合 |
| CH21 | Cron、HEARTBEAT.md、排程、自動化 |
| 附錄A | 指令速查表 |
| 附錄B | 疑難排解、常見錯誤 |
| 附錄C | AI 模型比較、價格、性能 |
| 附錄D | 學習資源、社群、聯絡作者 |
| 附錄E | Skills 設定速查表、API Key 設定 |
| 附錄F | 本索引 |
