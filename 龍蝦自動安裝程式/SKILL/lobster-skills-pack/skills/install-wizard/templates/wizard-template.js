/**
 * 安裝精靈模板 — wizard-template.js
 * 複製此檔案為 wizard.js，修改 WIZARD_STEPS 的內容即可使用。
 *
 * TODO 清單：
 * 1. 修改 WIZARD_STEPS 裡的步驟數量和內容
 * 2. 修改 AI_ASSISTANT_NAME（AI 助教名稱）
 * 3. 修改 SYSTEM_PROMPT_PREFIX（AI 的角色設定）
 */

(function () {
  'use strict';

  // ============================================================
  // TODO: 自訂設定
  // ============================================================
  var AI_ASSISTANT_NAME = 'AI 助教';  // TODO: 改成你的助教名稱
  var SYSTEM_PROMPT_PREFIX =           // TODO: 改成你的 AI 角色設定
    '你是一位友善、耐心的繁體中文技術助教。' +
    '你正在幫助使用者完成軟體安裝。';

  // ============================================================
  // TODO: 修改步驟資料
  // ============================================================
  var WIZARD_STEPS = [
    {
      id: 'step1',
      title: '步驟一標題',
      shortTitle: '短標題',
      icon: '1',
      checklist: [
        { text: '第一個待辦事項', done: false },
        { text: '第二個待辦事項', done: false },
        { text: '第三個待辦事項', done: false }
      ],
      instructions:
        '<h2>步驟一：標題</h2>' +
        '<p>說明文字...</p>' +
        '<h3>操作步驟</h3>' +
        '<ol>' +
        '<li>第一步</li>' +
        '<li>第二步</li>' +
        '</ol>' +
        '<h3>驗證</h3>' +
        '<pre><code>驗證指令</code></pre>',
      context: '使用者正在進行步驟一。這裡填寫 AI 回答問題時需要知道的背景資訊。'
    },
    {
      id: 'step2',
      title: '步驟二標題',
      shortTitle: '短標題',
      icon: '2',
      checklist: [
        { text: '待辦事項...', done: false }
      ],
      instructions: '<h2>步驟二：標題</h2><p>...</p>',
      context: '步驟二的背景資訊...'
    }
    // TODO: 加入更多步驟...
  ];

  // ============================================================
  // 以下為精靈核心邏輯，一般不需要修改
  // ============================================================

  // --- DOM ---
  var wizardOverlay = document.getElementById('wizardOverlay');
  var wizardClose = document.getElementById('wizardClose');
  var wizardEntryBtn = document.getElementById('wizardEntryBtn');
  var wizardProgressBar = document.getElementById('wizardProgressBar');
  var wizardProgressSteps = document.getElementById('wizardProgressSteps');
  var wizardStepContent = document.getElementById('wizardStepContent');
  var wizardChat = document.getElementById('wizardChat');
  var wizardChatHeader = document.querySelector('.wizard-chat-header');
  var wizardChatMessages = document.getElementById('wizardChatMessages');
  var wizardChatInput = document.getElementById('wizardChatInput');
  var wizardChatSend = document.getElementById('wizardChatSend');
  var wizardApiKeyHint = document.getElementById('wizardApiKeyHint');
  var wizardPrev = document.getElementById('wizardPrev');
  var wizardNext = document.getElementById('wizardNext');
  var wizardNextLabel = document.getElementById('wizardNextLabel');
  var wizardStepIndicator = document.getElementById('wizardStepIndicator');
  var geminiApiKeyInput = document.getElementById('geminiApiKeyInput');
  var geminiApiKeySave = document.getElementById('geminiApiKeySave');

  // --- State ---
  var currentStep = 0;
  var STORAGE_KEY_WIZARD = 'wizard-progress';
  var STORAGE_KEY_APIKEY = 'gemini-api-key';
  var chatHistories = {};
  var isSending = false;

  // --- Init ---
  function init() {
    restoreProgress();
    buildProgressDots();
    renderStep();
    bindEvents();
    restoreApiKey();
  }

  // --- Progress Persistence ---
  function saveProgress() {
    var data = {
      currentStep: currentStep,
      steps: WIZARD_STEPS.map(function (s) {
        return s.checklist.map(function (c) { return c.done; });
      })
    };
    localStorage.setItem(STORAGE_KEY_WIZARD, JSON.stringify(data));
  }

  function restoreProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY_WIZARD);
      if (!raw) return;
      var data = JSON.parse(raw);
      if (typeof data.currentStep === 'number') {
        currentStep = Math.min(data.currentStep, WIZARD_STEPS.length - 1);
      }
      if (Array.isArray(data.steps)) {
        data.steps.forEach(function (checks, si) {
          if (WIZARD_STEPS[si] && Array.isArray(checks)) {
            checks.forEach(function (val, ci) {
              if (WIZARD_STEPS[si].checklist[ci]) {
                WIZARD_STEPS[si].checklist[ci].done = !!val;
              }
            });
          }
        });
      }
    } catch (e) { /* ignore */ }
  }

  // --- API Key ---
  function getApiKey() { return localStorage.getItem(STORAGE_KEY_APIKEY) || ''; }

  function restoreApiKey() {
    var key = getApiKey();
    if (key && geminiApiKeyInput) geminiApiKeyInput.value = key;
    updateApiKeyHint();
  }

  function updateApiKeyHint() {
    var hasKey = !!getApiKey();
    if (wizardApiKeyHint) wizardApiKeyHint.classList.toggle('show', !hasKey);
    if (wizardChatInput) {
      wizardChatInput.disabled = !hasKey;
      wizardChatInput.placeholder = hasKey ? '輸入你的問題...' : '請先在設定中填入 API Key';
    }
    if (wizardChatSend) wizardChatSend.disabled = !hasKey;
  }

  // --- Progress Dots ---
  function buildProgressDots() {
    wizardProgressSteps.innerHTML = '';
    WIZARD_STEPS.forEach(function (step, i) {
      var dot = document.createElement('div');
      dot.className = 'wizard-progress-dot';
      dot.innerHTML = '<div class="dot-circle">' + step.icon + '</div>' +
        '<div class="dot-label">' + step.shortTitle + '</div>';
      dot.addEventListener('click', function () { goToStep(i); });
      wizardProgressSteps.appendChild(dot);
    });
  }

  function updateProgressDots() {
    var dots = wizardProgressSteps.querySelectorAll('.wizard-progress-dot');
    dots.forEach(function (dot, i) {
      dot.classList.remove('active', 'done');
      if (i === currentStep) {
        dot.classList.add('active');
      } else if (isStepDone(i)) {
        dot.classList.add('done');
        dot.querySelector('.dot-circle').innerHTML = '&#10003;';
      } else {
        dot.querySelector('.dot-circle').textContent = WIZARD_STEPS[i].icon;
      }
    });
    wizardProgressBar.style.width = ((currentStep) / (WIZARD_STEPS.length - 1)) * 100 + '%';
  }

  function isStepDone(index) {
    return WIZARD_STEPS[index].checklist.every(function (c) { return c.done; });
  }

  // --- Render Step ---
  function renderStep() {
    var step = WIZARD_STEPS[currentStep];
    var html = step.instructions;
    html += '<h3>完成清單</h3><ul class="step-checklist">';
    step.checklist.forEach(function (item, ci) {
      html += '<li class="' + (item.done ? 'checked' : '') + '" data-ci="' + ci + '">';
      html += '<span class="check-icon">' + (item.done ? '&#10003;' : '') + '</span>';
      html += '<span>' + item.text + '</span></li>';
    });
    html += '</ul>';
    wizardStepContent.innerHTML = html;

    wizardStepContent.querySelectorAll('.step-checklist li').forEach(function (li) {
      li.addEventListener('click', function () {
        var ci = parseInt(li.getAttribute('data-ci'), 10);
        step.checklist[ci].done = !step.checklist[ci].done;
        renderStep();
        saveProgress();
      });
    });

    updateProgressDots();
    updateButtons();
    loadChatHistory();
    wizardStepContent.scrollTop = 0;
  }

  function updateButtons() {
    wizardPrev.disabled = (currentStep === 0);
    var isLast = (currentStep === WIZARD_STEPS.length - 1);
    wizardNextLabel.textContent = isLast ? '全部完成！' : '完成，下一步';
    wizardStepIndicator.textContent = 'Step ' + (currentStep + 1) + ' / ' + WIZARD_STEPS.length;
  }

  // --- Navigation ---
  function goToStep(index) {
    if (index < 0 || index >= WIZARD_STEPS.length) return;
    saveChatHistory();
    currentStep = index;
    saveProgress();
    renderStep();
  }

  function nextStep() {
    if (currentStep < WIZARD_STEPS.length - 1) goToStep(currentStep + 1);
    else showComplete();
  }

  function prevStep() {
    if (currentStep > 0) goToStep(currentStep - 1);
  }

  function showComplete() {
    wizardStepContent.innerHTML =
      '<div class="wizard-success-card">' +
      '<div class="success-icon">&#127881;</div>' +
      '<h2>恭喜！全部完成！</h2>' +
      '<p>所有安裝步驟已經完成。</p>' +
      '</div>';
    wizardPrev.disabled = true;
    wizardNext.disabled = true;
    updateProgressDots();
  }

  // --- Open / Close ---
  function openWizard() {
    wizardOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateApiKeyHint();
  }

  function closeWizard() {
    wizardOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- Chat ---
  function saveChatHistory() {
    chatHistories[WIZARD_STEPS[currentStep].id] = wizardChatMessages.innerHTML;
  }

  function loadChatHistory() {
    var step = WIZARD_STEPS[currentStep];
    if (chatHistories[step.id]) {
      wizardChatMessages.innerHTML = chatHistories[step.id];
    } else {
      wizardChatMessages.innerHTML =
        '<div class="chat-msg chat-ai"><div class="chat-bubble">你好！我是' +
        AI_ASSISTANT_NAME + '。你正在進行「' + step.title +
        '」，有任何問題都可以問我喔！</div></div>';
    }
    scrollChatToBottom();
  }

  function scrollChatToBottom() {
    wizardChatMessages.scrollTop = wizardChatMessages.scrollHeight;
  }

  function appendMessage(role, text) {
    var div = document.createElement('div');
    div.className = 'chat-msg chat-' + role;
    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = text;
    div.appendChild(bubble);
    wizardChatMessages.appendChild(div);
    scrollChatToBottom();
    return bubble;
  }

  function sendMessage() {
    var apiKey = getApiKey();
    if (!apiKey || isSending) return;
    var question = wizardChatInput.value.trim();
    if (!question) return;

    wizardChatInput.value = '';
    appendMessage('user', escapeHtml(question));

    var typingBubble = appendMessage('ai', '');
    typingBubble.classList.add('typing');
    typingBubble.textContent = '思考中';

    isSending = true;
    wizardChatSend.disabled = true;

    var step = WIZARD_STEPS[currentStep];
    var systemPrompt = SYSTEM_PROMPT_PREFIX +
      '目前使用者在進行的步驟是：「' + step.title + '」。' +
      '步驟背景：' + step.context + '\n\n' +
      '回答規則：1. 只用繁體中文 2. 簡短清楚好懂 3. 指令用程式碼格式 4. 鼓勵使用者';

    callGemini(apiKey, systemPrompt, question, function (reply) {
      typingBubble.classList.remove('typing');
      typingBubble.innerHTML = formatReply(reply);
      isSending = false;
      wizardChatSend.disabled = false;
      saveChatHistory();
      scrollChatToBottom();
    }, function (err) {
      typingBubble.classList.remove('typing');
      typingBubble.textContent = '回覆失敗：' + err;
      isSending = false;
      wizardChatSend.disabled = false;
    });
  }

  function callGemini(apiKey, systemPrompt, userMessage, onSuccess, onError) {
    var url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + apiKey;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 600 }
      })
    })
      .then(function (res) {
        if (!res.ok) return res.text().then(function (t) { throw new Error(res.status); });
        return res.json();
      })
      .then(function (data) {
        try { onSuccess(data.candidates[0].content.parts[0].text); }
        catch (e) { onSuccess('（回覆格式異常，請重試）'); }
      })
      .catch(function (err) { onError(err.message || '未知錯誤'); });
  }

  function formatReply(text) {
    return text
      .replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // --- Events ---
  function bindEvents() {
    if (wizardEntryBtn) wizardEntryBtn.addEventListener('click', openWizard);
    if (wizardClose) wizardClose.addEventListener('click', closeWizard);
    if (wizardOverlay) wizardOverlay.addEventListener('click', function (e) {
      if (e.target === wizardOverlay) closeWizard();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wizardOverlay.classList.contains('open')) closeWizard();
    });
    wizardPrev.addEventListener('click', prevStep);
    wizardNext.addEventListener('click', nextStep);
    if (wizardChatHeader) wizardChatHeader.addEventListener('click', function () {
      wizardChat.classList.toggle('expanded');
    });
    wizardChatSend.addEventListener('click', sendMessage);
    wizardChatInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
    if (geminiApiKeySave) geminiApiKeySave.addEventListener('click', function () {
      var key = geminiApiKeyInput.value.trim();
      if (key) localStorage.setItem(STORAGE_KEY_APIKEY, key);
      else localStorage.removeItem(STORAGE_KEY_APIKEY);
      updateApiKeyHint();
      geminiApiKeySave.textContent = key ? '已儲存！' : '已清除';
      setTimeout(function () { geminiApiKeySave.textContent = '儲存'; }, 2000);
    });
  }

  // --- Start ---
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
