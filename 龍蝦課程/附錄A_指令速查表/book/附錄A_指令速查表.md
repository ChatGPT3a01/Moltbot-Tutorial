# 附錄 A | 一張表打天下——常用指令速查

---

本附錄整理了全書提到的所有常用指令，方便你在日常操作時快速查找。建議列印出來放在螢幕旁邊。

---

## A.1 OpenClaw 指令

### Gateway 管理

| 指令 | 功能 | 出處 |
|------|------|------|
| `openclaw gateway start` | 啟動 Gateway | CH5 |
| `openclaw gateway stop` | 停止 Gateway | CH5 |
| `openclaw gateway restart` | 重啟 Gateway | CH5 |
| `openclaw gateway status` | 查看 Gateway 狀態 | CH9 |
| `openclaw gateway start --workspace 路徑` | 指定工作區啟動 | CH14 |
| `openclaw gateway start --config 路徑` | 指定設定檔啟動 | CH14 |
| `openclaw gateway start --port 埠號` | 指定 Port 啟動 | CH14 |

### 設定管理

| 指令 | 功能 | 出處 |
|------|------|------|
| `openclaw config list` | 列出所有設定 | CH9 |
| `openclaw config get <key>` | 查看某項設定 | CH9 |
| `openclaw config set <key> <value>` | 修改設定 | CH9 |
| `openclaw config reset` | 重設所有設定 | CH9 |

### Skills 管理

> 💡 安裝技能有兩種方式：`openclaw skills install`（內建指令）和 `clawdhub install`（ClawdHub 商店，見 A.2 節），**二擇一即可**，效果相同。

| 指令 | 功能 | 出處 |
|------|------|------|
| `openclaw skills list` | 列出已安裝技能 | CH15 |
| `openclaw skills install <name>` | 安裝技能（同 `clawdhub install`） | CH15 |
| `openclaw skills remove <name>` | 移除技能 | CH15 |
| `openclaw skills enable <name>` | 啟用技能 | CH15 |
| `openclaw skills disable <name>` | 停用技能 | CH15 |

### Plugins 管理

| 指令 | 功能 | 出處 |
|------|------|------|
| `openclaw plugins list` | 列出已安裝外掛 | CH9 |
| `openclaw plugins install <name>` | 安裝外掛 | CH7 |
| `openclaw plugins remove <name>` | 移除外掛 | CH9 |

### 配對管理

| 指令 | 功能 | 出處 |
|------|------|------|
| `openclaw pairing approve line <code>` | 核准 LINE 配對 | CH6 |
| `openclaw pairing approve telegram <code>` | 核准 Telegram 配對 | CH7 |
| `openclaw pairing list` | 列出已配對裝置 | CH9 |
| `openclaw pairing revoke <id>` | 撤銷配對 | CH9 |

### 診斷與工具

| 指令 | 功能 | 出處 |
|------|------|------|
| `openclaw doctor` | 全面健康檢查 | CH5 |
| `openclaw onboard --install-daemon` | 初始設定精靈 | CH5 |
| `openclaw dashboard` | 啟動網頁儀表板（Port 18790） | CH9 |
| `openclaw tui` | 啟動 TUI 互動介面 | CH9 |

### Nodes 管理

| 指令 | 功能 | 出處 |
|------|------|------|
| `openclaw nodes init` | 初始化 Nodes 並產生金鑰 | CH19 |
| `openclaw nodes join --primary <url> --key <key>` | 加入 Nodes 網路 | CH19 |
| `openclaw nodes list` | 列出所有節點狀態 | CH19 |

### Heartbeat 管理

| 指令 | 功能 | 出處 |
|------|------|------|
| `openclaw heartbeat run "<任務名>"` | 手動執行排程任務 | CH21 |
| `openclaw heartbeat test` | 測試所有排程任務 | CH21 |

---

## A.2 ClawdHub 指令

> 💡 `clawdhub install` 和上面的 `openclaw skills install` 效果相同，**二擇一即可**。ClawdHub 額外提供搜尋和發布功能。

| 指令 | 功能 | 出處 |
|------|------|------|
| `clawdhub search <keyword>` | 搜尋技能 | CH15 |
| `clawdhub install <name>` | 安裝技能（同 `openclaw skills install`） | CH15 |
| `clawdhub update <name>` | 更新技能 | CH15 |
| `clawdhub update --all` | 更新所有技能 | CH15 |
| `clawdhub publish <name>` | 發布技能到 ClawdHub | CH17 |
| `clawdhub install github:<user>/<repo>` | 從 GitHub 安裝技能 | CH17 |

---

## A.3 ngrok 指令

| 指令 | 功能 | 出處 |
|------|------|------|
| `ngrok http 18789` | 建立通道指向本地 18789 | CH5 |
| `ngrok http --url=xxx.ngrok-free.app 18789` | 使用固定子域名 | CH5 |

---

## A.4 Cloudflare Tunnel 指令

| 指令 | 功能 | 出處 |
|------|------|------|
| `winget install cloudflare.cloudflared` | 安裝 cloudflared | CH12 |
| `cloudflared tunnel login` | 登入 Cloudflare | CH12 |
| `cloudflared tunnel create lobster` | 建立隧道 | CH12 |
| `cloudflared tunnel route dns lobster 域名` | 設定 DNS 指向 | CH12 |
| `cloudflared tunnel run lobster` | 啟動隧道 | CH12 |
| `cloudflared service install` | 設為開機自動啟動 | CH12 |
| `cloudflared tunnel list` | 列出所有隧道 | CH12 |

---

## A.5 Claude Code 指令

### 基本操作

| 指令 | 功能 | 出處 |
|------|------|------|
| `claude` | 啟動 Claude Code 互動模式 | CH3 |
| `claude "指令"` | 直接執行一次性指令 | CH3 |
| `claude --voice` | 啟動語音模式 | CH3 |

### 斜線指令

| 指令 | 功能 | 出處 |
|------|------|------|
| `/help` | 顯示幫助 | CH3 |
| `/clear` | 清除對話紀錄 | CH3 |
| `/model` | 切換 AI 模型 | CH3 |
| `/compact` | 壓縮對話上下文 | CH3 |
| `/cost` | 查看本次對話花費 | CH3 |
| `/commit` | 產生 Git commit | CH3 |
| `/review` | 程式碼審查 | CH3 |

---

## A.6 Git 常用指令

| 指令 | 功能 | 出處 |
|------|------|------|
| `git init` | 初始化 Git 倉庫 | CH3 |
| `git add .` | 加入所有變更 | CH3 |
| `git commit -m "訊息"` | 提交變更 | CH3 |
| `git status` | 查看狀態 | CH3 |
| `git log --oneline` | 查看提交歷史 | CH3 |
| `git push` | 推送到遠端 | CH3 |
| `git pull` | 拉取遠端更新 | CH3 |

---

## A.7 Node.js / npm 指令

| 指令 | 功能 | 出處 |
|------|------|------|
| `node -v` | 查看 Node.js 版本 | CH1 |
| `npm -v` | 查看 npm 版本 | CH1 |
| `npm install -g openclaw` | 全域安裝 OpenClaw | CH5 |
| `npm update -g openclaw` | 更新 OpenClaw | CH5 |
| `npx playwright install chromium` | 安裝 Playwright 瀏覽器 | CH18 |

---

## A.8 Telegram Bot 指令

| 指令 | 功能 | 出處 |
|------|------|------|
| `/newbot` | 建立新 Bot（在 BotFather 裡） | CH7 |
| `/setcommands` | 設定 Bot 指令選單 | CH7 |
| `/setdescription` | 設定 Bot 描述 | CH7 |
| `/setuserpic` | 設定 Bot 頭像 | CH7 |
| `/mybots` | 管理你的所有 Bot | CH7 |

---

## A.9 工作區檔案速查

| 檔案 | 用途 | 出處 |
|------|------|------|
| `IDENTITY.md` | 龍蝦的身份和個性 | CH10 |
| `SOUL.md` | 行為準則和觸發規則 | CH10 |
| `USER.md` | 使用者偏好和背景 | CH10 |
| `AGENTS.md` | Agent 定義和系統規則 | CH10 |
| `TOOLS.md` | 環境設定和 API Key | CH10 |
| `HEARTBEAT.md` | 排程任務和自動化 | CH16, CH21 |
| `NODE.md` | 節點能力宣告 | CH19 |
| `skills/` | 技能資料夾 | CH15 |
| `data/` | 技能產生的資料 | CH17 |

---

## A.10 Port 速查

| Port | 用途 |
|------|------|
| 18789 | OpenClaw Gateway |
| 18790 | OpenClaw Dashboard |
| 4040 | ngrok 管理介面 |
