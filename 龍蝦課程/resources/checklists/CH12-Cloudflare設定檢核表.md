# CH12 Cloudflare Tunnel 設定檢核表

從 ngrok 轉換到 Cloudflare Tunnel 時，依此表逐項確認。

---

## 事前準備

| # | 項目 | 完成 | 備註 |
|---|------|------|------|
| 1 | Cloudflare 帳號已註冊 | ☐ | dash.cloudflare.com |
| 2 | 域名已取得 | ☐ | 域名：________________ |
| 3 | Nameserver 已指向 Cloudflare | ☐ | 等 DNS 生效（5-30 分鐘） |

## 安裝與設定

| # | 項目 | 完成 |
|---|------|------|
| 4 | cloudflared 已安裝 | ☐ |
| 5 | `cloudflared tunnel login` 成功 | ☐ |
| 6 | 隧道已建立 | ☐ |
| 7 | DNS 已指向隧道 | ☐ |
| 8 | config.yml 已建立 | ☐ |
| 9 | `cloudflared tunnel run` 測試成功 | ☐ |
| 10 | 開機自動啟動已設定 | ☐ |

## Webhook 更新

| # | 項目 | 完成 |
|---|------|------|
| 11 | LINE Webhook URL 已更新 | ☐ |
| 12 | LINE Webhook Verify 成功（綠色 Success） | ☐ |
| 13 | Telegram Webhook 已更新（如有用） | ☐ |
| 14 | LINE 傳訊測試正常 | ☐ |

## 清理

| # | 項目 | 完成 |
|---|------|------|
| 15 | ngrok 可以停用了 | ☐ |
