# CH7 | Telegram 對話教學

---

上一章你已經在 LINE 上和龍蝦聊得很開心了。現在讓我們認識龍蝦的另一個好朋友：**Telegram**。

你可能會想：「我已經有 LINE 了，為什麼還要多用一個 Telegram？」這是個好問題。答案不是「要取代 LINE」，而是「多一個管道，多一份彈性」。就像你手機裡同時有 LINE 和 Facebook Messenger，不同的朋友習慣用不同的 App。龍蝦也是一樣，它可以同時守在 LINE 和 Telegram 裡面，不管你從哪個 App 傳訊息，龍蝦都能收到、都能回覆。

而且 Telegram 在「玩機器人」這件事情上，有一些 LINE 做不到的好用功能。這一章就帶你從零開始設定 Telegram，然後實際體驗這些獨特的好處。

> **本章學習目標**
>
> 1. 了解 Telegram 和 LINE 在機器人功能上的差異
> 2. 用 BotFather 在一分鐘內建立 Telegram 機器人
> 3. 將 Telegram 連接到 OpenClaw，讓龍蝦同時支援 LINE 和 Telegram
> 4. 熟悉 Telegram 獨有的 Bot 功能（指令選單、群組、Inline 模式）

---

## 7.1 Telegram 有什麼不一樣？

在開始動手之前，先來看看 Telegram 和 LINE 在機器人這件事上的差異。這不是要比誰好誰壞——兩個平台各有優勢，了解差異才能知道什麼時候該用哪一個。

| 比較項目 | Telegram | LINE |
|---------|----------|------|
| 建立 Bot 要多久 | 1 分鐘（和 BotFather 聊三句話） | 15-20 分鐘（開發者帳號 + Channel 設定） |
| 需要開發者帳號嗎 | 不需要 | 需要（LINE Developers） |
| 需要填表單嗎 | 不需要 | 需要（而且欄位不少） |
| 自動回覆衝突 | 不會發生 | 需要手動關閉（CH5 教過） |
| 指令選單 | 內建（按 `/` 自動列出所有指令） | 需要額外設定 Rich Menu |
| 群組中使用 Bot | 簡單（直接 `@` 呼叫機器人） | 需要邀請加入 + 額外設定 |
| 傳送檔案限制 | 最大 2GB | 最大 200MB |
| Webhook 設定 | 自動（外掛幫你搞定） | 手動（要去 Developers Console 填 URL） |
| 台灣用戶數 | 較少 | 極多（幾乎人人有） |

簡單來說：**LINE 是你服務別人的主力平台**（因為台灣人都用 LINE），**Telegram 是你自己測試和開發的最佳遊樂場**（設定快、限制少、功能多）。兩個都學起來，是最理想的組合。

---

## 7.2 安裝 Telegram

如果你還沒安裝 Telegram，先來把它裝好。Telegram 支援幾乎所有平台：

- **手機版**：在 App Store（iPhone）或 Google Play（Android）搜尋「Telegram」下載
- **電腦版**：https://desktop.telegram.org/
- **網頁版**（不想裝軟體的話）：https://web.telegram.org/

建議同時在手機和電腦上都安裝。手機用來日常和龍蝦聊天，電腦用來設定和測試——畢竟在電腦上打指令比較方便。

第一次使用 Telegram 需要用手機號碼註冊。註冊過程很快，不到一分鐘就好了。

---

## 7.3 用 BotFather 建立機器人

BotFather 是 Telegram 官方的「機器人管理機器人」——對，你沒看錯，它本身也是一個機器人。你透過和 BotFather 聊天來建立和管理你的機器人。整個過程就像在餐廳點餐：你跟服務生說你要什麼，服務生幫你準備好。

### 7.3.1 找到 BotFather

**【步驟 1】** 打開 Telegram，在上方的搜尋欄輸入 `@BotFather`。

你會看到一個有**藍色勾勾認證**的帳號，頭像是一個戴皇冠的機器人圖案。點進去。

![找到 BotFather](../截圖/ch7_botfather.png)

> ⚠️ **注意**：一定要認準藍色勾勾！Telegram 上有很多冒牌的 BotFather。如果你加錯了帳號，Bot Token 可能會被盜用，別人就能控制你的機器人。

**【步驟 2】** 點擊畫面底部的 **「START」** 按鈕開始對話。BotFather 會回覆一段歡迎訊息和可用的指令列表。

### 7.3.2 建立你的機器人

**【步驟 3】** 輸入 `/newbot` 指令，然後按 Enter 送出。

BotFather 回覆：「Alright, a new bot. How are we going to call it? Please choose a name for your bot.」

**【步驟 4】** 輸入你的機器人**顯示名稱**。這是別人在聊天列表裡會看到的名字，可以用中文，例如：

```
龍蝦小助手
```

**【步驟 5】** BotFather 接著問：「Good. Now let's choose a username for your bot.」

這裡要輸入一個**英文使用者名稱**，有兩個規則：

- 必須以 `bot` 結尾
- 只能用英文字母、數字和底線

例如：

```
my_lobster_ai_bot
```

如果你想的名字被別人用了，BotFather 會告訴你，換一個就好。取名小技巧：加入你的名字或獨特的字串，比較不容易重複。

**【步驟 6】** 名字確認後，BotFather 會回覆一段恭喜訊息，裡面包含你的 **Bot Token**：

```
7123456789:AAHxxx-xxxxxxxxxxxxxxxxxxxxxxxxxx
```

這串 Token 就是你機器人的「鑰匙」。**請立刻複製下來，存到你的帳號清單裡**。

![BotFather 回覆 Token](../截圖/ch7_bot_token.png)

> ⚠️ **安全提醒**：Bot Token 就像你家的鑰匙，任何拿到它的人都能控制你的機器人——包括讀取訊息、傳送訊息、甚至刪除機器人。絕對不要貼在公開的地方（GitHub、部落格、社群貼文）。如果不小心洩漏了，趕快回到 BotFather 輸入 `/revoke` 重新產生一組新的 Token，舊的就會失效。

整個過程就是這樣——三句對話，不到一分鐘。跟 LINE 那個要申請開發者帳號、建 Provider、建 Channel、填一堆表單的流程比起來，簡直是另一個世界。

### 7.3.3 設定機器人資訊（選用）

建完機器人之後，你還可以透過 BotFather 設定一些額外資訊。這些都是選用的，不影響功能，但能讓你的機器人看起來更專業：

| BotFather 指令 | 用途 |
|----------------|------|
| `/setdescription` | 設定機器人的簡介（別人搜尋到你的 Bot 時會看到） |
| `/setabouttext` | 設定「關於」頁面的文字 |
| `/setuserpic` | 上傳機器人的大頭照 |
| `/setcommands` | 設定指令選單（讓使用者按 `/` 就能看到所有可用指令） |

---

## 7.4 將 Telegram 連接到 OpenClaw

有了 Bot Token，接下來要把它告訴龍蝦，讓龍蝦知道「有一個 Telegram 機器人要連過來」。

### 7.4.1 安裝 Telegram 外掛

和 LINE 一樣，Telegram 也是以外掛的形式和 OpenClaw 連接的。打開 PowerShell（地端安裝）或終端機（Codespaces / Zeabur），輸入：

```powershell
openclaw plugins install @openclaw/telegram
```

### 7.4.2 設定 Bot Token

```powershell
openclaw config set channels.telegram.botToken "你的Bot Token"
```

把引號裡面的文字換成剛才從 BotFather 拿到的那串 Token。

就這樣。沒錯，**就這兩個指令**。

你可能會覺得奇怪：「LINE 不是要設定 Channel ID、Channel Secret、Channel Access Token 三個東西嗎？怎麼 Telegram 只要一個？」原因是 Telegram 的架構比較簡潔——一個 Bot Token 裡面就包含了所有驗證資訊，不像 LINE 把它拆成三個不同的值。

### 7.4.3 重啟 Gateway

設定完成後，重啟龍蝦讓新的設定生效：

```powershell
openclaw gateway restart
```

### 7.4.4 Webhook 自動設定

這裡有一個很貼心的地方：Telegram 外掛在啟動時會**自動**幫你設定好 Webhook。你不需要像 LINE 那樣手動去 Developers Console 填 Webhook URL。

外掛會偵測你目前的對外網址（不管是 ngrok、Cloudflare Tunnel 還是 Codespaces 的公開 URL），然後透過 Telegram Bot API 自動註冊 Webhook。這又省了一個步驟。

> 💡 **但如果自動設定失敗怎麼辦？** 通常是因為龍蝦的對外網址還沒準備好（例如 ngrok 還沒啟動）。確認 ngrok 正在運行之後，再重啟一次 Gateway 就好。

---

## 7.5 第一次 Telegram 對話

### 7.5.1 找到你的機器人

**【步驟 1】** 在 Telegram 的搜尋欄輸入你的機器人 username（例如 `@my_lobster_ai_bot`），找到它並點進去。

**【步驟 2】** 點擊畫面底部的 **「START」** 按鈕。

### 7.5.2 完成配對

**【步驟 3】** 和 LINE 一樣，第一次對話時龍蝦會回覆一組**配對碼**（Pairing Code）。複製那組代碼，回到終端機輸入：

```powershell
openclaw pairing approve telegram 你的配對碼
```

注意這裡是 `telegram`，不是 `line`。

**【步驟 4】** 回到 Telegram，再傳一次訊息。這次龍蝦就會正常回覆你了。

![Telegram 首次對話成功](../截圖/ch7_first_chat.png)

### 7.5.3 試試各種對話

你在 CH6 學到的所有 LINE 對話方式——文字聊天、任務型對話、角色扮演、多輪修改——在 Telegram 上全部都能用。龍蝦是同一隻龍蝦，只是換了一個窗口和你聊天。

試著在 Telegram 上傳幾則訊息：

```
你好，我從 Telegram 找你
```

```
幫我列出五個台北的必去景點
```

```
把上面的清單翻成英文
```

你會發現龍蝦的回覆和在 LINE 上一樣流暢自然。

---

## 7.6 Telegram 獨有的好用功能

設定好了之後，讓我們來認識幾個 Telegram 才有的好用功能。這些是 LINE Bot 做不到（或做起來很麻煩）的。

### 7.6.1 斜線指令選單

在 Telegram 的聊天輸入框裡打一個 **`/`**，你會看到一個指令選單從底部彈出來。這是 Telegram Bot 的招牌功能——所有可用的指令一目了然，不用背，點一下就能執行。

常見的指令包括：

| 指令 | 功能 |
|------|------|
| `/start` | 開始（或重新開始）對話 |
| `/help` | 查看可用指令和使用說明 |
| `/status` | 查看龍蝦的運行狀態 |
| `/clear` | 清除目前的對話記錄 |

在 LINE 上，要達到類似的效果需要額外設定 Rich Menu（圖文選單），而且設定過程比較複雜。Telegram 的斜線指令是內建的，不需要任何額外設定。

### 7.6.2 在群組中使用龍蝦

Telegram 允許你把機器人加入群組，讓群組裡的人都能跟龍蝦互動。這在團隊協作或朋友群組中非常好用。

**把龍蝦加入群組：**

**【步驟 1】** 打開你想加入龍蝦的 Telegram 群組。

**【步驟 2】** 點群組名稱進入設定，選 **「Add Members」**。

**【步驟 3】** 搜尋你的機器人 username（例如 `@my_lobster_ai_bot`），加入群組。

**在群組中跟龍蝦說話：**

加入群組後，你需要用 `@` 來呼叫龍蝦，這樣它才知道這則訊息是在跟它說話：

```
@my_lobster_ai_bot 明天台北天氣如何？
```

群組裡的其他人也可以用同樣的方式呼叫龍蝦。每個人和龍蝦的對話是獨立的，龍蝦不會搞混。

> ⚠️ **隱私模式注意事項**：Telegram Bot 預設開啟了「隱私模式」（Privacy Mode），這表示在群組中，機器人**只能看到直接 `@` 它的訊息**和 `/` 指令，看不到其他普通對話。這是一個好的隱私保護設計。
>
> 如果你希望龍蝦能看到群組裡的所有訊息（不用每次都 `@`），可以到 BotFather 輸入 `/setprivacy`，選擇你的機器人，然後選 **Disable**。但請謹慎使用這個功能——龍蝦會看到群組裡的每一則訊息，這可能會讓其他群組成員感到不舒服。

### 7.6.3 Inline 模式

Inline 模式是 Telegram Bot 一個很酷的功能：你不需要進入和龍蝦的聊天室，就能在**任何聊天視窗**中使用龍蝦。

在任何聊天室的輸入框裡輸入 `@你的機器人名稱`，然後接上問題：

```
@my_lobster_ai_bot 翻譯：我想訂位
```

Telegram 會在輸入框上方顯示龍蝦的回覆，你可以直接選擇回覆結果插入聊天——這表示你可以在跟朋友聊天的時候，即時呼叫龍蝦幫忙翻譯或回答問題，完全不用切換視窗。

> 💡 **Inline 模式需要額外啟用**：到 BotFather 輸入 `/setinline`，設定一段提示文字（例如「輸入問題讓龍蝦幫你回答」），Inline 模式就會啟用。

### 7.6.4 傳送大型檔案

LINE 的檔案大小限制是 200MB，但 Telegram 的限制高達 **2GB**。如果你需要傳一些比較大的檔案讓龍蝦處理（比如大型 PDF、影片、資料集），用 Telegram 比較方便。

---

## 7.7 LINE 和 Telegram 同時使用

到這裡，你的龍蝦同時連接了 LINE 和 Telegram 兩個平台。這帶來了一些有趣的特性：

### 7.7.1 跨平台記憶

龍蝦的記憶是**跨頻道共享**的。你在 LINE 告訴龍蝦的事情，它在 Telegram 也記得：

```
（在 LINE 上）
你：記住我下禮拜三要開會

（在 Telegram 上）
你：我下禮拜有什麼行程？
龍蝦：你之前提到下禮拜三要開會。
```

### 7.7.2 使用者分別管理

每個平台的配對是獨立的。你在 LINE 上配對的帳號和在 Telegram 上配對的帳號，龍蝦會視為不同的使用者（除非你特別設定）。

### 7.7.3 選擇最佳使用場景

有了兩個平台之後，你可以根據情境選擇最方便的那個：

| 情境 | 推薦用 |
|------|--------|
| 在外面用手機快速問問題 | LINE（台灣人都有，隨手就開） |
| 在電腦前工作時使用 | Telegram（電腦版體驗更好） |
| 需要傳大檔案 | Telegram（上限 2GB） |
| 想在群組中使用 | Telegram（群組 Bot 功能更完善） |
| 要分享給朋友或同事用 | LINE（對方不用額外安裝 App） |

---

## 7.8 常見問題

**Q1：Telegram Bot 建好了，但龍蝦不回覆**

請依序檢查以下幾點：
- Bot Token 有沒有正確設定：`openclaw config set channels.telegram.botToken "你的token"`
- Gateway 有沒有重啟：`openclaw gateway restart`
- 如果你是地端安裝，ngrok 有沒有在運行
- 有沒有完成配對流程（第一次要拿到配對碼然後 approve）

**Q2：在群組裡 `@` 龍蝦但它沒反應**

確認機器人有被正確加入群組。有時候 Telegram 的群組管理員設定可能會限制新成員（包括 Bot）的權限。請確認群組設定中允許 Bot 接收訊息。

**Q3：BotFather 說我的 username 已經被使用了**

Telegram 的 Bot username 是全球唯一的。換一個更獨特的名字就好，建議加入你自己的名字或獨特字串，例如 `aliang_lobster_2026_bot`。

**Q4：我能不能建多個 Telegram Bot 連到同一隻龍蝦？**

可以，但通常沒有這個必要。一隻龍蝦連一個 Telegram Bot 就夠了。如果你想讓不同的 Bot 有不同的人設，那就需要跑多隻龍蝦（CH12 多重分身會教到）。

**Q5：Telegram 和 LINE 會互相干擾嗎？**

不會。兩個頻道是完全獨立運作的。龍蝦收到 LINE 訊息就用 LINE 回覆，收到 Telegram 訊息就用 Telegram 回覆，不會搞混。

---

## 7.9 小結與展望

這一章你成功把龍蝦帶到了 Telegram 平台。從用 BotFather 一分鐘建立機器人、到安裝外掛連接 OpenClaw、再到體驗 Telegram 獨有的斜線指令、群組功能和 Inline 模式。現在你的龍蝦同時住在 LINE 和 Telegram 裡，不管你在哪個 App 都能找到它。

到目前為止，你和龍蝦的互動都是「傳文字、收文字」。但龍蝦其實還有一雙眼睛——在下一章 CH8，我們要解鎖龍蝦的**視覺能力**。你可以傳照片讓龍蝦辨識內容、分析截圖、翻譯路標，甚至讓龍蝦「自拍」回傳照片給你。這些功能在 LINE 和 Telegram 上都能使用，準備好被驚豔了嗎？
