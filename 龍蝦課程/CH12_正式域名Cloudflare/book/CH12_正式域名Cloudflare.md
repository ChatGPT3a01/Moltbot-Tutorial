# CH12 | 正式域名（Cloudflare Tunnel）

---

如果你從 CH5 一路走到這裡，有一件事應該已經讓你很煩了——**ngrok 的網址一直變**。

每次電腦重開機、每次 ngrok 重啟，你就得到 LINE Developers Console 去更新 Webhook URL。第一次覺得「好吧，學習嘛」，第二次覺得「有點煩」，第三次就想摔滑鼠了。更不用說如果你設了 Telegram 的 Webhook，那就要改兩個地方。

這一章要一勞永逸地解決這個問題。我們要用 **Cloudflare Tunnel** 給你的龍蝦一個**永久不變的正式網址**。從此以後，不管你重啟幾次電腦、關機多少天，龍蝦的網址都不會變，LINE 和 Telegram 的 Webhook 也不用再改。

> **本章學習目標**
>
> 1. 理解 ngrok 的限制和為什麼需要正式域名
> 2. 認識 Cloudflare Tunnel 的運作原理
> 3. 申請 Cloudflare 帳號並設定域名
> 4. 安裝和設定 Cloudflare Tunnel
> 5. 更新 LINE 和 Telegram 的 Webhook
> 6. 了解 HTTPS 和安全性的基本概念

---

## 12.1 為什麼要告別 ngrok

### 12.1.1 ngrok 的問題

ngrok 在學習階段非常好用——免費、安裝簡單、一行指令就能用。但長期使用有幾個讓人頭痛的問題：

| 問題 | 影響 |
|------|------|
| **網址每次重啟都會變** | 必須手動更新 LINE / Telegram 的 Webhook URL |
| **免費版有連線數限制** | 同時連線太多會被擋 |
| **免費版有流量限制** | 訊息量大時可能斷線 |
| **網址很醜** | `https://a1b2c3d4.ngrok-free.app` 很難記 |
| **ngrok 服務掛掉你也掛** | ngrok 是第三方服務，它出問題你的龍蝦就斷線 |
| **免費版會顯示警告頁面** | 第一次造訪會看到「Visit Site」的中間頁 |

### 12.1.2 正式域名的好處

用 Cloudflare Tunnel 搭配自己的域名：

| | ngrok（免費版） | Cloudflare Tunnel |
|---|----------------|-------------------|
| **網址** | 隨機字串，每次不同 | 你自己取的，永遠不變 |
| **費用** | 免費（有限制） | 免費（Tunnel 本身免費） |
| **穩定度** | 一般 | 高（Cloudflare 全球 CDN） |
| **HTTPS** | 有 | 有（自動） |
| **速度** | 會多一層延遲 | Cloudflare 全球節點加速 |
| **好記程度** | ❌ 亂碼網址 | ✅ lobster.你的域名.com |

唯一的「代價」是你需要有一個域名。好消息是，域名很便宜——有些 `.xyz` 或 `.top` 域名第一年只要 30-50 元台幣，甚至有些域名服務商有免費域名（後面會教）。

---

## 12.2 Cloudflare Tunnel 原理

### 12.2.1 隧道的概念

Cloudflare Tunnel（以前叫 Argo Tunnel）的概念很簡單：

```
LINE 伺服器
    ↓ 訊息傳到你的域名
Cloudflare 全球網路（幫你接收訊息）
    ↓ 透過「隧道」送到你的電腦
你的電腦上的龍蝦（port 18789）
```

你的電腦跑一個 Cloudflare 的小程式（叫 `cloudflared`），它會「打一條隧道」連到 Cloudflare 的伺服器。外面的人只看到你的域名和 Cloudflare，完全不知道你的電腦 IP 在哪裡。

這跟 ngrok 的原理很像，但 Cloudflare 有幾個關鍵優勢：

1. **你用自己的域名**——網址永遠不變
2. **Cloudflare 是全球最大的 CDN 之一**——穩定度和速度都更好
3. **Tunnel 功能完全免費**——你只需要付域名的錢
4. **自動 HTTPS**——Cloudflare 會自動幫你加密

### 12.2.2 你需要準備什麼

在開始之前，確認你有：

- ✅ 一個 Cloudflare 帳號（免費，這章會教你申請）
- ✅ 一個域名（便宜的就行，也可以用免費域名）
- ✅ 龍蝦已經在本機正常運行（CH5 安裝完成）

---

## 12.3 申請 Cloudflare 帳號與設定域名

### 12.3.1 取得域名

如果你還沒有域名，有幾種方式取得：

**方式一：直接在 Cloudflare 買（最簡單）**

Cloudflare 本身就有域名註冊服務，價格是「成本價」（沒有加價），而且直接跟 Cloudflare 整合，省去後面設定 DNS 的步驟。

**方式二：在其他域名商買，再轉到 Cloudflare 管理**

常見的域名商：
- **Namecheap**（https://www.namecheap.com）——便宜，`.xyz` 域名約 30-50 元/年
- **GoDaddy**（https://www.godaddy.com）——老牌，但續約價格較高
- **Google Domains**（已轉移到 Squarespace）

**域名怎麼選：**

| 域名後綴 | 大約價格（年） | 建議 |
|---------|-------------|------|
| `.com` | 300-400 元 | 最通用，但好名字都被註冊了 |
| `.xyz` | 30-60 元 | 便宜，學習用很適合 |
| `.top` | 30-50 元 | 便宜 |
| `.tw` | 600-800 元 | 台灣域名，較正式 |
| `.dev` | 350-450 元 | 開發者感，自帶 HTTPS |

學習用的話，買一個便宜的 `.xyz` 就夠了。例如 `mylobster.xyz`。

### 12.3.2 申請 Cloudflare 帳號

**【步驟 1】** 到 https://dash.cloudflare.com/sign-up，用 Email 註冊。

**【步驟 2】** 驗證 Email。

**【步驟 3】** 登入後，你會進入 Cloudflare 的 Dashboard。

### 12.3.3 把域名加入 Cloudflare

**如果你是在 Cloudflare 買的域名**，這步驟可以跳過，域名已經自動在 Cloudflare 裡了。

**如果你是在其他地方買的域名：**

**【步驟 1】** 在 Cloudflare Dashboard 點 **「Add a site」**（新增網站）。

**【步驟 2】** 輸入你的域名（例如 `mylobster.xyz`），點 **「Continue」**。

**【步驟 3】** 選擇方案——選 **「Free」**（免費方案），點 **「Continue」**。

**【步驟 4】** Cloudflare 會給你兩組 **Nameserver**（名稱伺服器），長得像：

```
ada.ns.cloudflare.com
zara.ns.cloudflare.com
```

**【步驟 5】** 到你買域名的網站（例如 Namecheap），找到域名的 **DNS 設定**或 **Nameserver 設定**，把原本的 Nameserver 改成 Cloudflare 給你的那兩組。

**【步驟 6】** 回到 Cloudflare，點 **「Done, check nameservers」**。

**【步驟 7】** 等待 DNS 生效。通常幾分鐘到幾小時不等。Cloudflare 會寄 Email 通知你域名已經啟用。

> 💡 **小提醒**：DNS 切換需要時間「傳播」到全球的 DNS 伺服器。有時候幾分鐘就好，有時候要等 24 小時。不用著急，等到 Cloudflare Dashboard 顯示域名狀態為「Active」就表示成功了。

---

## 12.4 安裝與設定 Cloudflare Tunnel

### 12.4.1 安裝 cloudflared

`cloudflared` 是 Cloudflare 的隧道客戶端程式。在你的電腦上安裝它：

**Windows：**

打開 PowerShell，用 winget 安裝：

```powershell
winget install Cloudflare.cloudflared
```

或者到 Cloudflare 的 GitHub 下載：
https://github.com/cloudflare/cloudflared/releases

下載 `cloudflared-windows-amd64.exe`，放到一個你記得的路徑（例如 `C:\Tools\`），然後把那個路徑加入系統的 PATH 環境變數。

安裝完後確認：

```powershell
cloudflared --version
```

看到版本號就表示安裝成功。

### 12.4.2 登入 Cloudflare

在終端機裡輸入：

```powershell
cloudflared tunnel login
```

它會自動打開瀏覽器，要你登入 Cloudflare 帳號，然後選擇要使用的域名。選好之後，瀏覽器會顯示「You have successfully logged in」，終端機裡也會顯示授權成功。

這一步會在你的電腦上存一個認證檔案（`cert.pem`），之後建立隧道時會用到。

### 12.4.3 建立隧道

**【步驟 1】** 建立一條新的隧道，給它取個名字：

```powershell
cloudflared tunnel create lobster
```

（`lobster` 是隧道的名字，你可以改成任何你喜歡的。）

成功後會顯示隧道的 UUID（一串像 `a1b2c3d4-5678-90ab-cdef-1234567890ab` 的字串），記下來等一下要用。

**【步驟 2】** 設定 DNS 指向。告訴 Cloudflare 你要用哪個子域名指向這條隧道：

```powershell
cloudflared tunnel route dns lobster lobster.你的域名.xyz
```

例如你的域名是 `mylobster.xyz`，想用 `bot.mylobster.xyz` 作為龍蝦的網址：

```powershell
cloudflared tunnel route dns lobster bot.mylobster.xyz
```

### 12.4.4 建立設定檔

在你的使用者目錄下建立 `cloudflared` 的設定檔：

**Windows 路徑：** `C:\Users\你的使用者名稱\.cloudflared\config.yml`

用文字編輯器建立 `config.yml`，內容如下：

```yaml
tunnel: 你的隧道UUID
credentials-file: C:\Users\你的使用者名稱\.cloudflared\你的隧道UUID.json

ingress:
  - hostname: bot.mylobster.xyz
    service: http://localhost:18789
  - service: http_status:404
```

逐行解釋：

| 設定項目 | 說明 |
|---------|------|
| `tunnel` | 你的隧道 UUID（步驟 1 拿到的那串字） |
| `credentials-file` | 認證檔案的路徑（建立隧道時自動產生的） |
| `hostname` | 你設定的域名（步驟 2 設的） |
| `service: http://localhost:18789` | 指向本機的 18789 埠（龍蝦 Gateway 的埠） |
| 最後一行 `http_status:404` | 其他所有請求回 404（安全考量） |

### 12.4.5 啟動隧道

```powershell
cloudflared tunnel run lobster
```

看到類似以下訊息就表示成功：

```
2026-03-07 INF Starting tunnel tunnelID=a1b2c3d4...
2026-03-07 INF Connection registered connIndex=0
2026-03-07 INF Connection registered connIndex=1
2026-03-07 INF Connection registered connIndex=2
2026-03-07 INF Connection registered connIndex=3
```

四條連線都註冊成功，隧道就通了！

### 12.4.6 測試隧道

打開瀏覽器，輸入你設定的域名：

```
https://bot.mylobster.xyz
```

如果龍蝦有在運行（`openclaw gateway start`），你應該會看到龍蝦的回應（或至少不是錯誤頁面）。

你也可以在終端機測試：

```powershell
curl https://bot.mylobster.xyz/health
```

有回應就表示隧道正常。

### 12.4.7 讓隧道開機自動啟動

每次手動跑 `cloudflared tunnel run` 很麻煩。你可以把它安裝成 Windows 服務，讓它開機自動啟動：

```powershell
cloudflared service install
```

這會把 `cloudflared` 註冊為 Windows 服務。之後每次電腦開機，隧道就會自動啟動，不用你手動操作。

確認服務狀態：

```powershell
cloudflared service status
```

> 💡 **小提醒**：安裝為服務後，如果你修改了 `config.yml`，需要重啟服務才會生效：
> ```powershell
> cloudflared service restart
> ```

---

## 12.5 更新 LINE / Telegram Webhook

隧道建好了，現在要告訴 LINE 和 Telegram：龍蝦的新地址在這裡。

### 12.5.1 更新 LINE Webhook

**【步驟 1】** 到 LINE Developers Console（https://developers.line.biz/）。

**【步驟 2】** 進入你的 Channel → **Messaging API** 分頁。

**【步驟 3】** 找到 **Webhook URL**，把舊的 ngrok 網址改成新的域名：

```
舊的：https://a1b2c3d4.ngrok-free.app/line/webhook
新的：https://bot.mylobster.xyz/line/webhook
```

**【步驟 4】** 按 **「Verify」** 驗證。看到 **「Success」** 就大功告成。

**【步驟 5】** 確認 **「Use webhook」** 是開啟的。

### 12.5.2 更新 Telegram Webhook

如果你有設定 Telegram Bot（CH7），也需要更新：

龍蝦的 Telegram 外掛通常會自動管理 Webhook。你只需要在龍蝦的設定裡更新 Webhook 網址。用 CLI 或 Dashboard 修改：

```powershell
openclaw config set telegram.webhookUrl https://bot.mylobster.xyz
```

然後重啟 Gateway：

```powershell
openclaw gateway restart
```

龍蝦會自動向 Telegram 註冊新的 Webhook URL。

### 12.5.3 驗證一切正常

在 LINE 上傳一句「你好」，在 Telegram 上也傳一句，確認龍蝦都能正常回覆。

如果可以，恭喜你——**從此以後你不需要再改 Webhook 了！** 不管電腦重開幾次、關機多少天，只要龍蝦和隧道有在跑，網址永遠不變。

---

## 12.6 HTTPS 與安全性

### 12.6.1 什麼是 HTTPS

你可能注意到龍蝦的網址是 `https://` 開頭，而不是 `http://`。那個 `s` 代表 **Secure**（安全），表示你的瀏覽器和伺服器之間的通訊是**加密**的。

簡單來說：

- **HTTP**——訊息是「明信片」，中間的人都看得到內容
- **HTTPS**——訊息是「密封的信」，只有寄件人和收件人看得到

LINE 和 Telegram 都**要求** Webhook URL 必須是 HTTPS。這也是為什麼你不能直接用 `http://localhost:18789` 當 Webhook——它既不是 HTTPS，外面的人也連不進來。

### 12.6.2 Cloudflare 自動幫你搞定 HTTPS

好消息：**你什麼都不用做。** Cloudflare 會自動幫你的域名申請和管理 SSL 憑證（就是讓 HTTPS 運作的東西）。你只要把域名加入 Cloudflare，它就會自動啟用 HTTPS。

這比 ngrok 還方便——ngrok 也有 HTTPS，但如果你想用自己的域名加 HTTPS，就需要付費方案。Cloudflare 的 HTTPS 是免費的。

### 12.6.3 安全性注意事項

用了 Cloudflare Tunnel 之後，你的安全性其實比用 ngrok 還好：

1. **你的電腦 IP 被隱藏了**——外面的人只看到 Cloudflare 的 IP，不知道你的電腦在哪裡
2. **Cloudflare 有 DDoS 防護**——如果有人惡意攻擊你的域名，Cloudflare 會幫你擋
3. **所有流量都加密**——從 LINE 到 Cloudflare 是加密的，從 Cloudflare 到你的電腦也是加密的
4. **config.yml 裡有隧道 UUID**——只有知道 UUID 的人才能操控你的隧道

不過還是有幾件事要注意：

- **不要把 `.cloudflared` 資料夾裡的檔案分享出去**——那裡有你的認證檔案和隧道金鑰
- **域名到期要記得續約**——域名到期了，網址就失效了
- **Cloudflare 帳號要設強密碼和兩步驟驗證**——這個帳號控制你的域名和隧道

---

## 12.7 常見問題

**Q1：Cloudflare Tunnel 真的免費嗎？**

Tunnel 本身完全免費，沒有流量限制、沒有連線數限制。你唯一需要花錢的是域名（最便宜的約 30 元/年）。如果你已經有域名，那就是零成本。

**Q2：我可以同時保留 ngrok 嗎？**

可以。ngrok 和 Cloudflare Tunnel 可以同時運行，不會衝突。但你的 LINE / Telegram Webhook 只能指向一個網址，所以建議切換到 Cloudflare 之後就不用 ngrok 了。如果哪天 Cloudflare 出問題，再臨時切回 ngrok 當備用。

**Q3：cloudflared tunnel run 顯示「connection failed」**

幾個可能的原因：
- 龍蝦 Gateway 沒有在跑——先 `openclaw gateway start`
- `config.yml` 裡的 `service` 埠號不對——確認是 `http://localhost:18789`
- 隧道 UUID 打錯了——對照 `cloudflared tunnel list` 的輸出
- 防火牆擋住了——Windows 防火牆可能擋了 cloudflared 的連線，允許它通過

**Q4：域名到期了會怎樣？**

龍蝦的 Webhook 會失效，LINE 和 Telegram 傳的訊息龍蝦收不到。域名到期前 Cloudflare 和域名商都會寄提醒 Email，記得續約就好。建議設定自動續約。

**Q5：我可以用免費域名嗎？**

有些服務提供免費的子域名（例如 Freenom 曾經提供免費的 `.tk`、`.ml` 域名），但這些免費域名的穩定度和信譽都比較差，有時會被回收。如果只是學習用，可以試試看；如果是正式使用，建議花個幾十元買一個便宜的域名。

**Q6：我用的是雲端安裝（GitHub Codespaces / Zeabur），需要設定 Cloudflare 嗎？**

不需要。雲端方案本身就有固定的網址。Cloudflare Tunnel 是給「在自己電腦上跑龍蝦」的人用的。如果你用 Codespaces 或 Zeabur，這一章可以跳過。

---

## 12.8 小結與展望

這一章幫你解決了從 CH5 以來一直困擾你的問題——ngrok 網址每次都會變。現在你有了：

- **Cloudflare 帳號**——全球最大的 CDN 和安全服務
- **自己的域名**——好記、好看、永遠不變
- **Cloudflare Tunnel**——安全的隧道連接，開機自動啟動
- **自動 HTTPS**——加密通訊，LINE 和 Telegram 都認可
- **一次設定永久有效**——再也不用改 Webhook URL

你的龍蝦現在有了一個正式的「門牌號碼」。它住在 LINE 和 Telegram 上、有自己的個性（CH10）、有漂亮的選單（CH11）、還有一個永久不變的網址（本章）。

但 LINE 和 Telegram 只是龍蝦的兩個「家」而已——OpenClaw 支援超過 22 種通道。在下一章 CH13，我們要帶你認識更多通道：**WhatsApp、Discord、Slack** 等等。如果你有朋友用不同的通訊軟體，龍蝦都能去住。
