---
name: google-drive
description: 透過 rclone 操作 Google Drive 雲端硬碟——上傳、下載、列出、搜尋、修改、刪除、分享檔案。
---

# Google Drive（雲端硬碟管理）

目標：讓使用者透過 LINE/Telegram 等聊天訊息，直接操作 Google Drive 上的檔案和資料夾。使用 rclone 作為底層工具，不需要自建 Google Cloud 專案。

## 功能

1. 列出雲端資料夾和檔案
2. 上傳本地檔案到 Google Drive
3. 從 Google Drive 下載檔案到本地
4. 搜尋雲端裡的檔案
5. 讀取雲端文字檔的內容
6. 修改雲端檔案（下載→修改→回傳）
7. 建立、刪除、移動、重新命名資料夾和檔案
8. 取得檔案的分享連結
9. 查看雲端容量和檔案大小統計

## 使用方式

使用者可能會這樣說：
- 「列出我 Google Drive 的檔案」
- 「我的雲端硬碟有什麼資料夾？」
- 「上傳 /tmp/report.pdf 到雲端的『專案』資料夾」
- 「從雲端下載『作業』資料夾裡所有 docx 檔」
- 「搜尋雲端裡有沒有叫『會議紀錄』的檔案」
- 「讀取雲端上 notes/TODO.md 的內容」
- 「在雲端建立一個叫『2026 上學期』的資料夾」
- 「把雲端的『舊資料夾』改名為『歸檔』」
- 「刪掉雲端的 temp 資料夾」
- 「給我這個檔案的分享連結」
- 「我的雲端還有多少空間？」

## 前置需求

### 1. rclone 必須已安裝

龍蝦運行的電腦上需要有 rclone。檢查方式：

```bash
# 方法 1：系統已安裝
rclone version

# 方法 2：檢查暫存位置
ls /tmp/rclone_extracted/*/rclone.exe 2>/dev/null || ls /tmp/rclone_extracted/*/rclone 2>/dev/null
```

如果沒有安裝：

```bash
# Windows
curl -L -o /tmp/rclone.zip "https://downloads.rclone.org/rclone-current-windows-amd64.zip"
unzip -o /tmp/rclone.zip -d /tmp/rclone_extracted

# Linux（Codespaces / 雲端主機）
curl -L -o /tmp/rclone.zip "https://downloads.rclone.org/rclone-current-linux-amd64.zip"
unzip -o /tmp/rclone.zip -d /tmp/rclone_extracted

# macOS
curl -L -o /tmp/rclone.zip "https://downloads.rclone.org/rclone-current-osx-amd64.zip"
unzip -o /tmp/rclone.zip -d /tmp/rclone_extracted
```

### 2. Google 帳號已授權（僅需做一次）

```bash
# 找到 rclone 路徑
RCLONE=$(command -v rclone || find /tmp/rclone_extracted -name "rclone*" -type f 2>/dev/null | head -1)

# 檢查是否已認證
$RCLONE listremotes 2>/dev/null | grep -q "gdrive:"
```

如果尚未認證：

```bash
# Step 1：啟動認證（開啟瀏覽器讓使用者登入 Google）
$RCLONE authorize "drive"
# → 使用者在瀏覽器登入 Google 帳號並授權
# → rclone 輸出一段 JSON token

# Step 2：建立設定（將 <TOKEN> 替換為 Step 1 輸出的 JSON）
$RCLONE config create gdrive drive token '<TOKEN>' config_refresh_token false config_change_team_drive false --non-interactive
```

## 執行方式

**重要**：所有操作前，先確定 rclone 路徑：
```bash
RCLONE=$(command -v rclone || find /tmp/rclone_extracted -name "rclone*" -type f 2>/dev/null | head -1)
```

### 列出檔案和資料夾

1. 判斷使用者要看哪個資料夾（預設為根目錄）
2. 執行列出指令：
   ```bash
   # 列出資料夾
   $RCLONE lsd "gdrive:路徑/"

   # 列出檔案（含大小）
   $RCLONE lsl "gdrive:路徑/"

   # 如果使用者提供的是 Google Drive 連結
   # 從 URL 擷取 folder ID：https://drive.google.com/drive/folders/XXXXX
   $RCLONE lsd gdrive: --drive-root-folder-id "XXXXX"
   ```
3. 整理成易讀清單回覆使用者

### 上傳檔案

1. 確認本地檔案路徑存在
2. 確認目標雲端資料夾
3. 執行上傳：
   ```bash
   # 上傳單一檔案
   $RCLONE copy "/local/path/file.pdf" "gdrive:目標資料夾/" --progress

   # 上傳整個資料夾
   $RCLONE copy "/local/path/folder/" "gdrive:目標/" --progress --transfers 4

   # 上傳到指定資料夾 ID
   $RCLONE copy "/local/path/" gdrive: --drive-root-folder-id "FOLDER_ID" --progress

   # 排除特定檔案
   $RCLONE copy "/local/" "gdrive:目標/" --exclude "node_modules/**" --exclude ".git/**" --progress
   ```
4. 回覆上傳結果（成功/失敗、檔案數量）

### 下載檔案

1. 確認雲端路徑或資料夾 ID
2. 決定下載到本地哪裡（預設 `/tmp/gdrive-download/`）
3. 執行下載：
   ```bash
   # 下載檔案
   $RCLONE copy "gdrive:路徑/file.pdf" "/tmp/gdrive-download/" --progress

   # 下載整個資料夾
   $RCLONE copy "gdrive:資料夾/" "/tmp/gdrive-download/" --progress

   # 只下載特定類型
   $RCLONE copy "gdrive:資料夾/" "/tmp/gdrive-download/" --include "*.docx" --progress
   ```
4. 回覆下載結果和檔案位置

### 搜尋檔案

1. 從使用者訊息提取搜尋關鍵字
2. 執行搜尋：
   ```bash
   # 搜尋檔名
   $RCLONE ls gdrive: --include "*關鍵字*" --max-depth 5

   # 搜尋特定類型
   $RCLONE ls gdrive: --include "*.pdf" --max-depth 3

   # 在特定資料夾下搜尋
   $RCLONE ls "gdrive:資料夾/" --include "*關鍵字*"
   ```
3. 整理搜尋結果回覆

### 讀取雲端檔案內容

1. 確認檔案路徑
2. 使用 `rclone cat` 直接串流讀取：
   ```bash
   # 讀取文字檔
   $RCLONE cat "gdrive:路徑/file.md"

   # 讀取 CSV
   $RCLONE cat "gdrive:路徑/data.csv"

   # Google Docs 轉為文字
   $RCLONE cat "gdrive:文件名稱" --drive-export-formats txt
   ```
3. 回覆檔案內容（如果太長則摘要）

### 修改雲端檔案

1. 下載到暫存目錄：
   ```bash
   $RCLONE copy "gdrive:路徑/file.txt" "/tmp/gdrive-edit/"
   ```
2. 在本地修改檔案
3. 覆蓋回傳：
   ```bash
   $RCLONE copyto "/tmp/gdrive-edit/file.txt" "gdrive:路徑/file.txt"
   ```
4. 回覆修改完成

### 建立資料夾

```bash
$RCLONE mkdir "gdrive:新資料夾名稱"
# 巢狀：
$RCLONE mkdir "gdrive:父/子/孫"
```

### 移動與重新命名

```bash
# 重新命名檔案
$RCLONE moveto "gdrive:路徑/舊名.docx" "gdrive:路徑/新名.docx"

# 移動檔案到其他資料夾
$RCLONE moveto "gdrive:舊路徑/file.docx" "gdrive:新路徑/file.docx"

# 移動整個資料夾
$RCLONE move "gdrive:舊名/" "gdrive:新名/" --progress
```

### 刪除

**重要：刪除前一定要跟使用者確認！**

```bash
# 刪除單一檔案
$RCLONE deletefile "gdrive:路徑/file.docx"

# 刪除整個資料夾
$RCLONE purge "gdrive:資料夾/"

# 安全預覽（先看會刪什麼）
$RCLONE delete "gdrive:資料夾/" --dry-run
```

### 分享連結

```bash
$RCLONE link "gdrive:路徑/file.docx"
$RCLONE link "gdrive:資料夾/"
```

### 查看容量和統計

```bash
# 雲端總容量
$RCLONE about gdrive:

# 資料夾大小統計
$RCLONE size "gdrive:資料夾/"
```

## 從 Google Drive 連結擷取 ID

使用者如果貼了 Google Drive 連結，擷取 ID 的規則：

| URL 格式 | 擷取方式 |
|---------|---------|
| `https://drive.google.com/drive/folders/XXXXX` | ID = `XXXXX` |
| `https://drive.google.com/drive/folders/XXXXX?usp=sharing` | ID = `XXXXX`（忽略 ?usp=） |
| `https://drive.google.com/file/d/XXXXX/view` | ID = `XXXXX` |

取得 ID 後用 `--drive-root-folder-id "XXXXX"` 參數操作。

## 安全原則

- **刪除操作一律先確認**：收到「刪除」「移除」「清空」等指令時，先列出將被刪除的檔案，確認後才執行
- **覆蓋前先備份**：修改雲端檔案前，先問使用者要不要備份舊版本
- **不要讀取敏感檔案的內容**：如果檔名包含「密碼」「credentials」「secret」「token」等字眼，不要用 `cat` 讀取內容
- **大量操作先預覽**：使用 `--dry-run` 讓使用者確認

## 回覆風格

- 列出檔案時用清單格式，包含檔名和大小
- 操作成功時簡短回覆（「已上傳 3 個檔案到『專案』資料夾」）
- 操作失敗時說明原因和建議的解決方法
- 搜尋結果為空時，建議使用者換個關鍵字或檢查路徑
