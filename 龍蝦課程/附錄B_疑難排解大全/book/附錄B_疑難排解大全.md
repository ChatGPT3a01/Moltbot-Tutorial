# 附錄 B | 疑難排解大全

---

本附錄整理了安裝和使用龍蝦過程中可能遇到的各種問題，按照主題分類。遇到問題時先來這裡找找答案。

---

## B.1 安裝問題

### B.1.1 Node.js 相關

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| `node` 不是可辨識的指令 | Node.js 沒裝好或 PATH 沒設定 | 重新安裝 Node.js，安裝時勾選「Add to PATH」 |
| Node.js 版本太舊 | OpenClaw 需要 22+ | `winget install OpenJS.NodeJS.LTS` 安裝最新版 |
| npm install 失敗，出現權限錯誤 | 沒有管理員權限 | 用「以系統管理員身分執行」開啟 PowerShell |
| npm install 超級慢 | 預設 npm registry 在國外 | `npm config set registry https://registry.npmmirror.com` |

### B.1.2 OpenClaw 安裝

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| `openclaw` 不是可辨識的指令 | 全域安裝失敗 | 確認 `npm install -g openclaw` 成功，重開終端機 |
| 安裝時出現 `EACCES` 錯誤 | npm 全域目錄權限問題 | Windows：用管理員權限。Mac/Linux：`sudo npm install -g openclaw` |
| 安裝到一半斷線 | 網路不穩 | 重新執行 `npm install -g openclaw` |
| `openclaw doctor` 顯示版本不符 | OpenClaw 版本太舊 | `npm update -g openclaw` |

### B.1.3 自動安裝程式

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| go.bat 無法執行 | PowerShell 執行原則限制 | 右鍵 go.bat → 以系統管理員身分執行 |
| 安裝程式要求輸入密碼 | 正常流程 | 輸入課程提供的安裝密碼 |
| 安裝卡在某個步驟不動 | 網路下載中或卡住 | 等 2-3 分鐘。如果超過 5 分鐘沒動，按 Ctrl+C 中斷後重跑 |
| 安裝完但 Gateway 沒啟動 | 設定檔可能有問題 | 手動執行 `openclaw doctor` 看哪裡出錯 |

---

## B.2 Gateway 問題

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| Gateway 啟動後立刻停止 | 設定檔錯誤 | 執行 `openclaw doctor` 檢查。常見原因：API Key 格式錯、JSON 語法錯 |
| Port 18789 被佔用 | 另一個 Gateway 或程式在用 | `openclaw gateway stop` 先停掉，或用 `--port` 換一個 Port |
| Gateway 啟動但 LINE 收不到回覆 | Webhook 沒設好 | 檢查 LINE Developer Console 的 Webhook URL 是否正確 |
| Gateway 跑一陣子就當機 | 記憶體不足 | 重啟 Gateway。如果經常發生，考慮增加記憶體或用雲端方案 |
| 重啟後技能失效 | 技能檔案被刪除或損壞 | `openclaw skills list` 檢查，重新安裝失效的技能 |

---

## B.3 LINE 問題

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| LINE Bot 不回覆 | 多種可能 | 依序檢查：Gateway 有沒有在跑 → ngrok/Tunnel 有沒有在跑 → Webhook URL 對不對 → API Key 有沒有設錯 |
| LINE 回覆「400 Bad Request」 | Channel Secret 或 Access Token 錯誤 | 到 LINE Developer Console 重新複製，貼到 openclaw.json |
| LINE 回覆延遲很久（超過 10 秒） | AI 模型回應慢或網路慢 | 嘗試換用較快的模型（Gemini 3 Flash），或檢查網路 |
| 配對碼無法通過 | 配對碼過期 | 重新傳送配對訊息取得新碼，在 3 分鐘內完成配對 |
| Rich Menu 設定後沒顯示 | 沒有發布或沒有設為預設 | 到 LINE Official Account Manager → Rich Menu → 確認已發布 |
| 群組裡龍蝦不回覆 | Bot 沒被加入群組，或群組權限未開 | 確認 Bot 的「Allow bot to join groups」已開啟 |
| 推播訊息收不到 | 免費額度用完 | 到 LINE Official Account Manager 查看本月推播剩餘量 |

---

## B.4 Telegram 問題

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| Telegram Bot 不回覆 | Webhook 沒設好 | 確認外掛已安裝、Token 正確、Gateway 已重啟 |
| 出現「401 Unauthorized」 | Bot Token 錯誤 | 到 BotFather 重新取得 Token |
| 群組裡 Bot 不回覆 | 沒開啟 Privacy Mode 的例外 | 到 BotFather → /setprivacy → Disable |
| Bot 回覆很慢 | Telegram API 在部分地區較慢 | 正常現象，或使用 Cloudflare Tunnel 減少延遲 |

---

## B.5 ngrok 問題

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| ngrok 網址每次都不一樣 | 免費版的限制 | 升級付費版，或改用 Cloudflare Tunnel（CH12） |
| ngrok 斷線後 LINE 不回覆 | 新網址沒更新到 LINE Webhook | 到 LINE Developer Console 更新 Webhook URL |
| ngrok 顯示「ERR_NGROK_108」 | 免費帳號同時只能一條通道 | 停掉其他的 ngrok 連線，或升級帳號 |
| ngrok 連線成功但 LINE 沒反應 | 本地 Gateway 沒在跑 | 先確認 `openclaw gateway status` 是 running |

---

## B.6 Cloudflare Tunnel 問題

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| `cloudflared tunnel login` 打不開瀏覽器 | 終端機沒有瀏覽器存取權 | 手動複製終端機顯示的 URL，貼到瀏覽器開啟 |
| 隧道建立了但網頁打不開 | DNS 還沒生效 | 等 5-10 分鐘讓 DNS 傳播。用 `nslookup 你的域名` 確認 |
| config.yml 語法錯誤 | YAML 縮排不對 | YAML 用空格縮排（不是 Tab），每層 2 個空格 |
| 開機自動啟動失效 | 服務沒裝好 | 重新執行 `cloudflared service install`，確認用管理員權限 |
| 連線不穩定、時斷時連 | 網路品質問題 | 確認家裡網路穩定。Cloudflare 本身很少斷，通常是本地網路問題 |

---

## B.7 AI 模型問題

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| 龍蝦回覆「API Key 無效」 | API Key 過期或打錯 | 到對應平台重新取得 API Key |
| 龍蝦回覆很慢 | 模型太大或 API 負載高 | 換用較小的模型（Gemini 3 Flash），或不同時段再試 |
| 「429 Too Many Requests」 | API 呼叫超出速率限制 | 等一分鐘再試。如果經常出現，升級 API 方案 |
| 「402 Payment Required」 | API 免費額度用完 | 儲值或換用其他免費模型（Ollama 本地模型） |
| Ollama 模型回覆品質差 | 本地模型能力有限 | 嘗試更大的模型（如 llama-3.3-70b），或改用雲端 API |
| 龍蝦回覆內容不正確 | AI 的幻覺問題 | 這是 AI 的通病。關鍵資訊請自行核實 |

---

## B.8 技能（Skills）問題

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| 安裝技能後龍蝦不用 | 沒重啟 Gateway | `openclaw gateway restart` |
| 技能需要 API Key 但不知道在哪設 | 設定位置不明確 | 看技能的 SKILL.md 裡「需要的設定」章節，設到 TOOLS.md |
| 天氣技能回報錯誤城市 | TOOLS.md 沒設預設城市 | 在 TOOLS.md 加上 `預設城市: 台北` |
| 技能互相衝突 | 多個技能功能重疊 | 停用不需要的那個：`openclaw skills disable <name>` |
| 自己寫的技能龍蝦不理解 | SKILL.md 寫得不夠清楚 | 參考 CH17 的範例，把「執行方式」寫得更詳細 |

---

## B.9 Desktop Agent 問題

| 問題 | 原因 | 解決方法 |
|------|------|---------|
| Playwright 安裝失敗 | 網路問題或權限不足 | 用管理員權限重新執行 `npx playwright install chromium` |
| 瀏覽器操控逾時 | 網頁載入太慢 | 確認網路連線正常，或增加逾時時間 |
| 檔案操作被拒絕 | 檔案被其他程式鎖定 | 關閉使用中的程式，再讓龍蝦操作 |
| 截圖功能沒反應 | screenshot 技能沒安裝 | `clawdhub install screenshot` |

---

## B.10 通用排查流程

遇到任何問題時，按以下步驟排查：

```
步驟 1：執行 openclaw doctor
        → 看有沒有紅色的 ✗ 項目

步驟 2：檢查 Gateway 狀態
        → openclaw gateway status
        → 是 running 嗎？

步驟 3：檢查網路通道
        → ngrok 或 Cloudflare Tunnel 有沒有在跑？
        → 瀏覽器打開 Webhook URL 有沒有回應？

步驟 4：檢查日誌
        → Dashboard 裡的 Logs 頁面
        → 或 ~/.openclaw/logs/ 資料夾裡的日誌檔

步驟 5：重啟
        → openclaw gateway restart
        → 很多問題重啟就好了

步驟 6：求助
        → OpenClaw Discord 社群
        → GitHub Issues
        → 阿亮老師的 Gemini Gem 解惑小幫手
```

---

## B.11 錯誤訊息對照表

| 錯誤訊息 | 意思 | 解決方法 |
|---------|------|---------|
| `ECONNREFUSED` | 連線被拒絕 | 目標服務沒在跑。確認 Gateway/ngrok 已啟動 |
| `EADDRINUSE` | Port 被佔用 | 換一個 Port，或停掉佔用的程式 |
| `ENOTFOUND` | 找不到域名 | 檢查 URL 有沒有打錯、DNS 有沒有生效 |
| `ETIMEDOUT` | 連線逾時 | 網路問題。確認網路連線正常 |
| `ENOENT` | 檔案不存在 | 檔案路徑錯誤。確認路徑和檔名 |
| `EPERM` | 權限不足 | 用管理員權限執行 |
| `ERR_MODULE_NOT_FOUND` | 模組找不到 | 重新安裝：`npm install -g openclaw` |
| `Invalid API Key` | API Key 無效 | 重新取得 API Key 並更新設定 |
| `Rate limit exceeded` | 超出速率限制 | 等一下再試，或升級 API 方案 |
| `Webhook validation failed` | Webhook 驗證失敗 | 確認 Channel Secret 正確 |
