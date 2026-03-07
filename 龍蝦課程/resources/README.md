# resources — 全書資源檔案總覽

本資料夾存放《AI 自主代理三強實戰》全書的範本、設定範例、檢核表和腳本資源。
讀者可直接複製使用，或依需求修改。

---

## 依章節查找（學生請看這裡）

> 找不到資源？先找你正在讀的章節號碼，就能看到該章所有可用的資源檔。

| 章節 | 資源檔案 | 類型 | 路徑 |
|------|---------|------|------|
| **CH1** | 帳號準備清單 | 檢核表 | `checklists/CH1-帳號準備清單.md` |
| **CH5** | 安裝前檢查清單 | 檢核表 | `checklists/CH5-安裝前檢查清單.md` |
| **CH5** | OpenClaw 設定範例（Gemini） | 設定檔 | `config-examples/openclaw.json` |
| **CH5** | OpenClaw 設定範例（Ollama） | 設定檔 | `config-examples/openclaw-ollama.json` |
| **CH5** | Codespaces package.json | 設定檔 | `config-examples/codespaces-package.json` |
| **CH5** | Codespaces 防休眠腳本 | 腳本 | `scripts/keep-alive.ps1` |
| **CH10** | 人格設定檢核表 | 檢核表 | `checklists/CH10-人格設定檢核表.md` |
| **CH10** | IDENTITY.md 範本（親切風） | 範本 | `workspace-templates/IDENTITY-親切風.md` |
| **CH10** | IDENTITY.md 範本（專業風） | 範本 | `workspace-templates/IDENTITY-專業風.md` |
| **CH10** | IDENTITY.md 範本（教學風） | 範本 | `workspace-templates/IDENTITY-教學風.md` |
| **CH10** | SOUL.md 範本（溫暖風） | 範本 | `workspace-templates/SOUL-溫暖風.md` |
| **CH10** | SOUL.md 範本（專業風） | 範本 | `workspace-templates/SOUL-專業風.md` |
| **CH10** | SOUL.md 範本（活潑風） | 範本 | `workspace-templates/SOUL-活潑風.md` |
| **CH10** | USER.md 範本 | 範本 | `workspace-templates/USER-範本.md` |
| **CH10** | AGENTS.md 範本 | 範本 | `workspace-templates/AGENTS-範本.md` |
| **CH10** | TOOLS.md 範本 | 範本 | `workspace-templates/TOOLS-範本.md` |
| **CH10** | 工作區備份腳本 | 腳本 | `scripts/backup-workspace.ps1` |
| **CH12** | Cloudflare 設定檢核表 | 檢核表 | `checklists/CH12-Cloudflare設定檢核表.md` |
| **CH12** | Cloudflare config.yml 範例 | 設定檔 | `config-examples/cloudflare-config.yml` |
| **CH14** | 多龍蝦 Cloudflare 設定範例 | 設定檔 | `config-examples/cloudflare-multi.yml` |
| **CH15** | 技能安裝檢核表 | 檢核表 | `checklists/CH15-技能安裝檢核表.md` |
| **CH15** | 完整技能清單（八大分類 60+） | 參考表 | `skills/skill-list.md` |
| **CH16** | HEARTBEAT 基本早安報告 | 範本 | `heartbeat-templates/basic-morning.md` |
| **CH17** | SKILL.md 基本範本 | 範本 | `skills/skill-templates/basic-template.md` |
| **CH17** | 出缺席管理技能完整範例 | 範本 | `skills/skill-templates/attendance.md` |
| **CH18** | Desktop Agent 安全規則範本 | 範本 | `security/desktop-agent-rules.md` |
| **CH19** | NODE.md 範本（家裡桌機） | 範本 | `node-templates/NODE-家裡桌機.md` |
| **CH19** | NODE.md 範本（辦公室筆電） | 範本 | `node-templates/NODE-辦公室筆電.md` |
| **CH19** | NODE.md 範本（雲端伺服器） | 範本 | `node-templates/NODE-雲端伺服器.md` |
| **CH21** | HEARTBEAT 全自動 AI 秘書 | 範本 | `heartbeat-templates/full-secretary.md` |
| **CH21** | HEARTBEAT 老師版全自動龍蝦 | 範本 | `heartbeat-templates/teacher-edition.md` |
| **CH21** | HEARTBEAT 系統維護排程 | 範本 | `heartbeat-templates/system-maintenance.md` |

---

## 依類型查找

### 檢核表（5 份）
供學生列印打勾使用，確保每個步驟不遺漏。

| 檔案 | 對應章節 | 說明 |
|------|---------|------|
| `checklists/CH1-帳號準備清單.md` | CH1 | 15 項帳號和工具確認 |
| `checklists/CH5-安裝前檢查清單.md` | CH5 | 系統需求 + 安裝方式選擇 + 驗證 |
| `checklists/CH10-人格設定檢核表.md` | CH10 | 五大檔案配置確認 |
| `checklists/CH12-Cloudflare設定檢核表.md` | CH12 | 隧道設定 + Webhook 更新 |
| `checklists/CH15-技能安裝檢核表.md` | CH15 | 技能安裝流程 + API Key 清單 |

### 工作區範本（9 份）
龍蝦人格五大檔案的範本，三種風格可選。

| 檔案 | 對應章節 | 說明 |
|------|---------|------|
| `workspace-templates/IDENTITY-親切風.md` | CH10 | 溫暖、像朋友一樣的個性 |
| `workspace-templates/IDENTITY-專業風.md` | CH10 | 精確、有條理的助理 |
| `workspace-templates/IDENTITY-教學風.md` | CH10 | 耐心、鼓勵的教學助手 |
| `workspace-templates/SOUL-溫暖風.md` | CH10 | 體貼的行為準則 |
| `workspace-templates/SOUL-專業風.md` | CH10 | 簡潔高效的行為準則 |
| `workspace-templates/SOUL-活潑風.md` | CH10 | 幽默有趣的行為準則 |
| `workspace-templates/USER-範本.md` | CH10 | 使用者資訊模板（填空） |
| `workspace-templates/AGENTS-範本.md` | CH10 | Agent 定義模板 |
| `workspace-templates/TOOLS-範本.md` | CH10 | 環境與工具設定模板（填空） |

### 排程範本（4 份）
HEARTBEAT.md 的各種應用場景範本。

| 檔案 | 對應章節 | 說明 |
|------|---------|------|
| `heartbeat-templates/basic-morning.md` | CH16 | 基本早安報告 + 下雨提醒 |
| `heartbeat-templates/full-secretary.md` | CH21 | 全自動 AI 秘書（早午晚 + 週報） |
| `heartbeat-templates/teacher-edition.md` | CH21 | 老師版（課表 + 出缺席 + Email） |
| `heartbeat-templates/system-maintenance.md` | CH21 | 磁碟檢查 + 備份 + 健康檢查 |

### 設定檔範例（5 份）
各種設定檔的實際範例，修改後即可使用。

| 檔案 | 對應章節 | 說明 |
|------|---------|------|
| `config-examples/openclaw.json` | CH5 | Gemini 版 OpenClaw 設定 |
| `config-examples/openclaw-ollama.json` | CH5 | Ollama 本地版設定 |
| `config-examples/cloudflare-config.yml` | CH12 | 單龍蝦 Tunnel 設定 |
| `config-examples/cloudflare-multi.yml` | CH14 | 雙龍蝦 Tunnel 設定 |
| `config-examples/codespaces-package.json` | CH5 | GitHub Codespaces 用 |

### 節點範本（3 份）
Nodes 多機協作的 NODE.md 範本。

| 檔案 | 對應章節 | 說明 |
|------|---------|------|
| `node-templates/NODE-家裡桌機.md` | CH19 | 有 GPU、有桌面操作能力 |
| `node-templates/NODE-辦公室筆電.md` | CH19 | 有 Office、有內網存取 |
| `node-templates/NODE-雲端伺服器.md` | CH19 | 24/7 在線、適合當 Primary |

### 技能相關（3 份）
Skills 的範本和清單。

| 檔案 | 對應章節 | 說明 |
|------|---------|------|
| `skills/skill-list.md` | CH15 | 完整技能清單（八大分類 60+） |
| `skills/skill-templates/basic-template.md` | CH17 | SKILL.md 基本骨架 |
| `skills/skill-templates/attendance.md` | CH17 | 出缺席管理完整範例 |

### 安全範本（1 份）

| 檔案 | 對應章節 | 說明 |
|------|---------|------|
| `security/desktop-agent-rules.md` | CH18 | Desktop Agent 安全邊界設定 |

### 腳本（2 份）

| 檔案 | 對應章節 | 說明 |
|------|---------|------|
| `scripts/keep-alive.ps1` | CH5/CH19 | Codespaces 防休眠 |
| `scripts/backup-workspace.ps1` | CH10 | 工作區設定檔備份 |

---

## 資料夾結構

```
resources/
├── README.md
├── checklists/              （5 份檢核表）
├── workspace-templates/     （9 份工作區範本）
├── heartbeat-templates/     （4 份排程範本）
├── config-examples/         （5 份設定檔範例）
├── node-templates/          （3 份節點範本）
├── skills/                  （3 份技能相關）
├── security/                （1 份安全範本）
└── scripts/                 （2 份腳本）
```

**合計：32 份資源檔案**
