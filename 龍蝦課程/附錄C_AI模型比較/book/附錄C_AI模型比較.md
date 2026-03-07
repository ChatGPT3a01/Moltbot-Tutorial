# 附錄 C | AI 模型比較與選擇指南

---

這份附錄的目標只有一個：**幫你快速選對模型，不再被型號和價格搞混**。

先記住一句話：

> 先用便宜且穩定的模型跑通流程，再升級高階模型做高難度任務。

---

## C.1 先看這張總表（新手版）

| 你現在的需求 | 建議模型 | 理由 |
|---|---|---|
| 剛開始學、想先跑起來 | Gemini Flash（或同級快速模型） | 速度快、成本低、容錯高 |
| 日常工作助理（寫文案、整理資料） | GPT / Claude Sonnet（主流中階） | 品質與成本平衡 |
| 複雜推理、長文深度分析 | GPT 高階 / Claude Opus | 品質高，但成本也高 |
| 重視隱私、不想資料上雲 | Ollama 本地模型 | 資料留在自己電腦 |

---

## C.2 四大平台怎麼選

| 平台 | 適合誰 | 優點 | 需要注意 |
|---|---|---|---|
| Google Gemini | 新手、預算敏感 | 速度快、入門友善 | 不同模型額度和速率限制不同 |
| OpenAI | 追求通用品質 | 文件完整、生態成熟 | 多數情境需先設定付費 |
| Anthropic | 重視長文品質、穩定推理 | 寫作與推理表現好 | 高階模型成本較高 |
| Ollama（本地） | 重視隱私、可用較強硬體 | 離線可用、長期成本低 | 需顯卡與本機資源 |

---

## C.3 新手最穩的起手式

1. 先用 `Gemini Flash`（或同級快速模型）跑完整流程。  
2. 若覺得品質不夠，再切到 `GPT` 或 `Claude Sonnet`。  
3. 只有在「真的需要」時，才使用高階模型（如 Opus 或 Pro 級）。

這樣做的好處：
- 成本可控
- 降低設定複雜度
- 你可以先把心力放在流程設計，而不是一直換模型

---

## C.4 OpenClaw 常見模型設定範例

```powershell
# 查看目前模型
openclaw config get llm.provider
openclaw config get llm.model

# Google
openclaw config set llm.provider google
openclaw config set llm.model gemini-2.5-flash

# OpenAI
openclaw config set llm.provider openai
openclaw config set llm.model <你的 OpenAI 模型名稱>

# Anthropic
openclaw config set llm.provider anthropic
openclaw config set llm.model <你的 Claude 模型名稱>

# Ollama
openclaw config set llm.provider ollama
openclaw config set llm.model qwen3:14b

# 套用設定
openclaw gateway restart
```

> 若你的環境顯示的模型名稱略有不同（例如 `gpt-*`、`claude-*`），請以你平台帳號中實際可選名稱為準。

---

## C.5 Ollama 本地模型選擇（實用版）

### 建議起手模型

| 模型級別 | 推薦用途 | 典型體驗 |
|---|---|---|
| 7B~14B | 日常對話、基礎助理 | 速度快、硬體需求低 |
| 30B~32B | 中文品質、較複雜任務 | 品質提升、顯存需求高 |
| 70B+ | 深度任務 | 品質高，但速度與硬體成本高 |

### 安裝流程

```powershell
winget install Ollama.Ollama
ollama pull qwen3:14b
ollama list
```

### 實務提醒

- 顯卡不足時，先用小模型，不要硬上大模型。
- 本地模型適合「資料敏感」或「長期固定流程」。
- 若你主要需求是通訊 Bot 回覆速度，雲端快模型通常更順。

---

## C.6 圖片理解（Vision）怎麼挑

如果你主要在做「看圖回覆」：

1. 先確認你選的模型支援 Vision。  
2. 用同一張測試圖比較三件事：  
   - 是否看得懂重點（不是只描述表面）  
   - 回覆速度是否可接受  
   - 成本是否能長期負擔

> 教學現場常見錯誤：模型很強但太慢，學生會誤以為系統壞掉。

---

## C.7 常見選錯情境與修正

### 情境 1：回覆太慢
- 問題：一開始就用高階模型。  
- 修正：先換到 Flash / Mini / Sonnet 級，穩定後再升級。

### 情境 2：費用超預期
- 問題：把高階模型當預設。  
- 修正：日常任務用快模型，高階模型只給特定任務。

### 情境 3：本地模型效果不好
- 問題：硬體不足卻硬跑大模型。  
- 修正：降模型尺寸，或改走雲端模型。

---

## C.8 一句話結論

- **新手：先快、先穩、先省。**  
- **熟手：依任務分流模型，不要一把梭。**  
- **高階：品質與成本永遠是交換，不存在全都要。**

你只要把這三句記住，模型選擇基本就不會走偏。


