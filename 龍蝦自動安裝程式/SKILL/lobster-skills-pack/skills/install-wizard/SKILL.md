---
name: install-wizard
description: 為側邊欄教學網站加入互動式安裝精靈：步驟引導、進度條、勾選清單、Gemini AI 即時問答。只需提供步驟資料，自動產生 wizard.js + HTML + CSS。
---

# Install Wizard（互動式安裝精靈）

為任何「側邊欄教學網站」加入一個互動式的步驟引導安裝精靈，讓使用者像跑安裝程式一樣，一步一步完成所有操作。

## 你可以做到的事

### 1. 加入安裝精靈到現有教學網站
對龍蝦說：「幫這個教學網站加上安裝精靈」
- 自動在側邊欄加入醒目入口按鈕
- 產生全頁精靈面板（進度條 + 步驟內容 + 完成清單）
- 進度用 localStorage 記憶，關掉再開會記住做到哪

### 2. AI 即時問答助教
對龍蝦說：「安裝精靈要有 AI 問答功能」
- 每一步附聊天小視窗，使用者遇到問題直接問
- 接 Gemini 2.5 Flash API（免費額度大）
- AI 自動帶入該步驟的上下文，回答精準
- API Key 由使用者在設定面板填入，存 localStorage（不寫死在原始碼）

### 3. 自訂步驟內容
對龍蝦說：「安裝精靈要有這些步驟：1. ... 2. ... 3. ...」
- 可以自訂任意數量的步驟
- 每步包含：標題、教學內容（HTML）、完成清單、AI 上下文

## 使用範例

```
你：幫我的 Ollama 教學網站加上安裝精靈，步驟是：
    1. 安裝 Ollama
    2. 下載 AI 模型
    3. 安裝 Python
    4. 安裝 Open WebUI
    5. 啟動聊天室

龍蝦：
好的！我幫你加上了安裝精靈。
- 側邊欄新增「阿亮老師安裝精靈」入口按鈕
- 5 個步驟都有完成清單和 AI 問答
- 進度自動儲存在瀏覽器
- 請在設定面板填入 Gemini API Key 啟用 AI 助教
```

```
你：我有一個 Docker 教學網站，幫我加安裝精靈，
    步驟：安裝 Docker → 拉取映像 → 啟動容器 → 存取服務

龍蝦：
搞定！精靈已加入，四個步驟都有對應的指令教學和 AI 問答。
```

## 技術架構

### 檔案結構

精靈由三個部分組成，嵌入到現有的側邊欄教學網站：

```
教學網站/
├── index.html     ← 加入：精靈入口按鈕 + 精靈面板 HTML + API Key 設定
├── style.css      ← 加入：精靈樣式（入口按鈕、面板、進度條、聊天區）
├── wizard.js      ← 新增：精靈互動邏輯（步驟導航、AI 問答、進度儲存）
├── script.js      ← 不動（原有網站邏輯）
└── data/units.js  ← 不動（原有教學內容）
```

### wizard.js 核心結構

```javascript
var WIZARD_STEPS = [
  {
    id: 'step1',           // 唯一 ID
    title: '安裝 XXX',      // 步驟標題
    shortTitle: 'XXX',     // 進度條上的短標題
    icon: '1',             // 圓點上的數字/圖示
    checklist: [           // 完成清單
      { text: '下載安裝檔', done: false },
      { text: '執行安裝', done: false },
      { text: '驗證成功', done: false }
    ],
    instructions: '<h2>...</h2><p>...</p>',  // HTML 教學內容
    context: '...'         // AI 問答的上下文背景（不顯示給使用者）
  },
  // ...更多步驟
];
```

### 功能清單

| 功能 | 說明 |
|------|------|
| 步驟引導 | 上一步 / 下一步按鈕，可自由跳步 |
| 進度條 | 視覺化顯示目前在第幾步 |
| 完成清單 | 每步有可勾選的待辦事項 |
| 進度記憶 | localStorage 儲存，下次回來接著做 |
| AI 問答 | 每步附聊天視窗，接 Gemini Flash |
| 上下文注入 | AI 自動知道使用者在做哪一步 |
| 全頁面板 | 居中彈出，背景模糊，ESC 關閉 |
| RWD | 手機也能用 |
| 主題適配 | 自動跟隨教學網站的配色主題 |

### Gemini API 設定

- 模型：`gemini-2.5-flash`
- API Key 存放：使用者在設定面板填入 → `localStorage('gemini-api-key')`
- 端點：`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`
- 免費額度：每分鐘 15 次、每日 1500 次（教學網站完全夠用）

## 搭配建議

- 搭配 `sidebar-web` 技能：先建側邊欄教學網站，再加安裝精靈
- 搭配 `html-to-png` 技能：截圖安裝精靈畫面當教材
- 搭配 `password-gate` 技能：加密碼保護後再套精靈

## 成品你會得到什麼

| 輸入 | 成品 | 用途 |
|------|------|------|
| 步驟列表 | 互動式安裝精靈面板 | 引導使用者完成安裝 |
| Gemini API Key | AI 即時問答助教 | 使用者遇問題可直接問 AI |
| 教學網站 | 加強版教學網站 | 從「閱讀」變成「跟著做」|

## 適用場景

- 軟體安裝教學（Ollama、Docker、Node.js、Python...）
- 環境建置教學（開發環境、雲端部署...）
- 硬體設定教學（路由器、NAS、Raspberry Pi...）
- 任何需要「步驟引導」的教學情境

## 模板檔案

`templates/` 目錄下有完整的參考實作：
- `wizard-template.js`：精靈 JS 模板（含步驟資料結構）
- `wizard-template.css`：精靈 CSS 模板
- `wizard-template.html`：精靈 HTML 片段模板
