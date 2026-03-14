# yolo-vision

## 技能名稱
yolo-vision

## 說明
使用 YOLO6 深度學習模型進行即時物件偵測。可以分析照片中的物件種類與數量、進行 Webcam 即時監控、以及開啟偵測視窗。支援 80 種常見物件（人、車、動物、家具、電子產品等）。

## 功能列表
- **照片物件偵測**：傳入照片，辨識所有物件並回報種類、數量、位置
- **物件計數**：數出照片中特定物件的數量（例如「有幾個人」）
- **物件分類**：列出照片中所有偵測到的物件類別
- **Webcam 監控**：持續監控攝影機，偵測到指定目標時自動警報

## 使用方式（使用者可能怎麼說）
- 「幫我看這張照片有什麼」
- 「這張照片裡有幾個人？」
- 「幫我辨識照片中的物品」
- 「分析這張圖片」
- 「開啟 Webcam 監控，有人經過就通知我」
- 「幫我數一下照片裡有幾隻狗」
- 「這張照片裡有哪些東西？」

## 執行方式

### 照片偵測
收到使用者的照片後，先將照片儲存為暫存檔，再執行：
```bash
python ~/.openclaw/workspace/skills/yolo-vision/detect.py <照片路徑>
```
讀取輸出的 JSON 結果，用口語化方式回報給使用者。
若有標註後的照片（output_image），也一併傳回。

### Webcam 監控
```bash
python ~/.openclaw/workspace/skills/yolo-vision/webcam_monitor.py --target person --interval 5
```
偵測到目標時會輸出 JSON 警報，將警報內容通知使用者。

### 可選參數
- `--model`：模型大小（yolo6n / yolo6s / yolo6m / yolo6l），預設 yolo6n（最快）

## 需要的設定
- Python 3.10 或以上
- `pip install ultralytics`（包含 YOLO6 和 OpenCV）
- 模型檔案會在首次執行時自動下載（約 6MB ~ 50MB）
