/* ═══════════════════════════════════════════════
   龍蝦 AI 安裝大表 — script.js
   sidebar-web 模板互動邏輯
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── DOM refs ── */
  const body      = document.body;
  const lock      = document.getElementById('siteLock');
  const lockInput = document.getElementById('siteLockInput');
  const lockMsg   = document.getElementById('siteLockMsg');
  const navList   = document.getElementById('navList');
  const contentEl = document.getElementById('contentInner');
  const menuBtn   = document.getElementById('menuToggle');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('overlay');
  const resizer   = document.getElementById('sidebarResizer');
  const settingsBtn  = document.getElementById('settingsBtn');
  const settingsPanel = document.getElementById('settingsPanel');
  const settingsClose = document.getElementById('settingsClose');
  const backTopBtn = document.getElementById('backTopBtn');
  const contentArea = document.getElementById('contentArea');
  const fullscreenBtn = document.getElementById('fullscreenBtn');

  /* ── State ── */
  let currentUnit = null;
  let units = [];
  const STORAGE_FONT = 'lobster-font-size';
  const STORAGE_SIDEBAR = 'lobster-sidebar-width';
  const STORAGE_THEME = 'lobster-theme';
  const themeOptions = document.getElementById('themeOptions');

  /* ═══════════════════════════════════════════
     Password / Session
     ═══════════════════════════════════════════ */
  function finishUnlock(role) {
    if (!lock) return;
    lock.classList.add('is-hidden');
    body.classList.remove('is-locked');
    body.dataset.accessRole = role || 'viewer';
  }

  async function checkSession() {
    try {
      const r = await fetch('/.netlify/functions/session', { credentials: 'include' });
      if (!r.ok) return;
      const d = await r.json();
      if (d && d.ok) finishUnlock(d.role);
    } catch (_) { /* offline or no netlify */ }
  }

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const buf = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function submitPassword() {
    if (!lockInput || !lockMsg) return;
    const pw = lockInput.value.trim();
    if (!pw) { lockMsg.textContent = '請先輸入密碼'; lockInput.focus(); return; }
    lockMsg.textContent = '驗證中...';
    try {
      const r = await fetch('/.netlify/functions/unlock', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'include', body: JSON.stringify({ password: pw })
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || !d.ok) { lockMsg.textContent = d.error || '密碼錯誤'; return; }
      lockMsg.textContent = ''; lockInput.value = '';
      finishUnlock(d.role);
    } catch (_) {
      // Fallback: local SHA-256 check (for file:// protocol)
      const hash = await sha256(pw);
      const HASHES = {
        '1931504a943dda025061db3b951af5833cbef639e7c46c912ca8c2ddfcb995a0': 'viewer',
        '3ee7f6541f8186b90ad66c06d6e5bf89ca81c3c16c07b48800d751ac21adcd23': 'admin'
      };
      if (HASHES[hash]) { finishUnlock(HASHES[hash]); lockMsg.textContent = ''; lockInput.value = ''; }
      else { lockMsg.textContent = '密碼錯誤'; }
    }
  }

  if (lockInput) {
    lockInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') submitPassword(); });
    lockInput.focus();
  }
  document.getElementById('siteLockBtn')?.addEventListener('click', submitPassword);
  checkSession();

  /* ═══════════════════════════════════════════
     SVG Icons map
     ═══════════════════════════════════════════ */
  const ICONS = {
    doc:     '<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5"/><path d="M8 12h8M8 16h8M8 20h5"/></svg>',
    windows: '<svg viewBox="0 0 24 24"><path d="M3 5.5 11 4v7H3v-5.5Zm10-1.7L21 2v9h-8V3.8ZM3 13h8v7L3 18.5V13Zm10 0h8v9l-8-1.8V13Z"/></svg>',
    apple:   '<svg viewBox="0 0 24 24"><path d="M15.4 3.2c-.7.8-1.1 1.8-1 2.8 1 0 2.1-.5 2.7-1.3.7-.8 1.1-1.8 1-2.7-1 .1-2 .6-2.7 1.2Z"/><path d="M17.8 12.5c0-2.3 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.2-2.8.8-3.6.8-.8 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.3-1.7 2.9-.4 7.1 1.2 9.4.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.3-.9-2.3-3.6Z"/></svg>',
    ubuntu:  '<svg viewBox="0 0 24 24"><path d="M12 4.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 3.6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/><path d="M12 8.6a7 7 0 0 1 5.7 2.9m.3 1.7A7 7 0 0 1 12 19.8m-6-6.6A7 7 0 0 1 12 8.6"/></svg>',
    wrench:  '<svg viewBox="0 0 24 24"><path d="m14.7 6.3 3 3M12 9l6.7-6.7 3 3L15 12.1"/><path d="M14 7 7 14l-1 4 4-1 7-7"/><path d="M4 20h16"/></svg>',
    nemo:    '<svg viewBox="0 0 24 24"><path d="M7 12c0-3.9 2.7-6.5 6-6.5 2.2 0 4.2 1.1 5.2 3.1"/><path d="M7 12c-1.7 0-3 1.6-3 3.4 0 1.9 1.4 3.6 3.5 3.6H14"/><path d="M14 19c0-2.4 1.5-4 3.6-4 1.6 0 2.9 1 3.4 2.5"/><circle cx="17.8" cy="10.2" r="1.2"/><circle cx="19.5" cy="18" r="1.1"/></svg>',
    puzzle:  '<svg viewBox="0 0 24 24"><path d="M8.5 4A2.5 2.5 0 1 1 11 6.5V9h2.5a2.5 2.5 0 1 1 0 5H11v2.5A2.5 2.5 0 1 1 6 19v-5H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4V4.5A.5.5 0 0 1 8.5 4Z"/></svg>',
    palette: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.4-1.01-.23-.26-.38-.6-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.96-4.04-9-9-9Z"/><circle cx="6.5" cy="11.5" r="1.2"/><circle cx="9.5" cy="7.5" r="1.2"/><circle cx="14.5" cy="7.5" r="1.2"/><circle cx="17.5" cy="11.5" r="1.2"/></svg>',
    book:    '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8M8 11h6"/></svg>',
    claude:  '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c.8 1.2 2 2 3.5 2s2.7-.8 3.5-2"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/></svg>',
  };

  /* ═══════════════════════════════════════════
     Build sidebar nav
     ═══════════════════════════════════════════ */
  function buildNav() {
    if (!navList || typeof SITE_DATA === 'undefined') return;
    units = SITE_DATA.units;
    navList.innerHTML = '';
    units.forEach(function (u) {
      var btn = document.createElement('button');
      btn.className = 'nav-item';
      btn.dataset.id = u.id;
      btn.innerHTML = (ICONS[u.icon] || '') + '<span>' + u.shortTitle + '</span>';
      btn.addEventListener('click', function () { navigateTo(u.id); });
      navList.appendChild(btn);
    });
  }

  /* ═══════════════════════════════════════════
     Markdown rendering
     ═══════════════════════════════════════════ */
  function renderMarkdown(md) {
    if (typeof marked === 'undefined') return md;
    // Configure marked
    marked.setOptions({
      highlight: function (code, lang) {
        if (typeof hljs !== 'undefined' && lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        if (typeof hljs !== 'undefined') {
          return hljs.highlightAuto(code).value;
        }
        return code;
      },
      breaks: true,
      gfm: true,
    });
    return marked.parse(md);
  }

  /* ═══════════════════════════════════════════
     Skill Cards builder
     ═══════════════════════════════════════════ */
  function buildSkillCards() {
    var cards = [
      { icon: '🛡️', cat: '技能管理與安全', desc: '建議最先裝，用來找技能和檢查安全', items: [
        { badge: 'badge-safety', tag: '安全', name: 'Skill Vetter', cn: '安全檢查員', desc: '安裝新技能前先過這一關，幫你檢查技能安不安全、有沒有可疑行為。', cmd: 'npx clawhub@latest install skill-vetter', url: 'https://clawhub.ai/nutstrut/skill-vetter-v2' },
        { badge: 'badge-search', tag: '搜尋', name: 'Find Skill', cn: '找尋技能的技能', desc: '只知道需求、不知道要裝哪個？它幫你從 500+ 技能中縮小範圍。', cmd: 'npx clawhub@latest install find-skills', url: 'https://clawhub.ai/guohongbin-git/skill-finder-cn' },
      ]},
      { icon: '🌐', cat: '聯網搜尋與資訊查詢', desc: '補「查即時資料」的能力', items: [
        { badge: 'badge-web', tag: '聯網', name: 'Tavily Search', cn: '上網爬找', desc: '查最新新聞、股價、天氣、即時資料。需先去 Tavily 官網申請 API Key。', cmd: 'npx clawhub@latest install tavily-search', url: 'https://clawhub.ai/jacky1n7/openclaw-tavily-search' },
        { badge: 'badge-web', tag: '天氣', name: 'Weather', cn: '天氣查詢', desc: '查天氣、行程前判斷天候。通常免 API Key，裝完就能用。', cmd: 'npx clawhub@latest install weather', url: 'https://clawhub.ai/steipete/weather' },
        { badge: 'badge-tool', tag: '摘要', name: 'Summarize', cn: '製作摘要', desc: '長文、網頁、逐字稿，先丟給它整理重點，後面工作都輕鬆很多。', cmd: 'npx clawhub@latest install summarize', url: 'https://clawhub.ai/steipete/summarize' },
      ]},
      { icon: '📄', cat: '文件與試算表處理', desc: '碰到 Office 文件、表格、講義、公文時用', items: [
        { badge: 'badge-doc', tag: '試算表', name: 'Excel XLSX', cn: 'Excel / CSV 處理', desc: '處理 XLSX、CSV、TSV 表格資料，能保住格式和公式。適合成績表、統計表。', cmd: 'npx clawhub@latest install excel-xlsx', url: 'https://clawhub.ai/ivangdavila/excel-xlsx' },
        { badge: 'badge-doc', tag: '文件', name: 'Word DOCX', cn: 'Word / DOCX 處理', desc: '處理 Word / DOCX，保住樣式、表格、版面和追蹤修訂。適合公文、講義。', cmd: 'npx clawhub@latest install word-docx', url: 'https://clawhub.ai/ivangdavila/word-docx' },
        { badge: 'badge-doc', tag: '分析', name: 'Data Analysis', cn: '資料分析與圖表', desc: '把數字變成結論。整理指標、畫圖表、做報表、看趨勢。', cmd: 'npx clawhub@latest install data-analysis', url: 'https://clawhub.ai/ivangdavila/data-analysis' },
      ]},
      { icon: '📧', cat: '通訊與語音', desc: '做通知、逐字稿、錄音整理、郵件工作流', items: [
        { badge: 'badge-comm', tag: '郵件', name: 'IMAP SMTP Email', cn: 'Email 收發', desc: '讓龍蝦收信、查信、寄信，也能帶附件。適合通知信、收件匣整理。', cmd: 'npx clawhub@latest install imap-smtp-email', url: 'https://clawhub.ai/gzlicanyi/imap-smtp-email' },
        { badge: 'badge-comm', tag: '語音', name: 'OpenAI Whisper', cn: '語音轉文字', desc: '把語音或音檔轉成文字。逐字稿、語音轉文字、錄音整理。', cmd: 'npx clawhub@latest install openai-whisper-api', url: 'https://clawhub.ai/steipete/openai-whisper-api' },
      ]},
      { icon: '🤖', cat: '瀏覽器操作與自動化', desc: '卡在網站後台、登入流程、報名頁、送件頁時用', items: [
        { badge: 'badge-auto', tag: '自動化', name: 'Agent Browser', cn: '自行操作網路', desc: '讓龍蝦能開網站、點按鈕、填表單、抓取頁面內容，像會看畫面的操作助手。', cmd: 'npx clawhub@latest install agent-browser-clawdbot', url: 'https://clawhub.ai/matrixy/agent-browser-clawdbot' },
      ]},
      { icon: '🔗', cat: '外部服務與平台串接', desc: '牽涉到第三方平台、雲端服務時用', items: [
        { badge: 'badge-service', tag: 'API', name: 'API Gateway', cn: 'API 與外部服務串接', desc: '幫龍蝦往外接 Google、GitHub、Notion、Slack 等平台服務。', cmd: 'npx clawhub@latest install api-gateway', url: 'https://clawhub.ai/byungkyu/api-gateway' },
        { badge: 'badge-service', tag: 'Google', name: 'GOG', cn: 'Google 全家桶', desc: 'Gmail、Google 日曆、Drive、Docs 整合。注意常卡在 OAuth 授權設定。', cmd: 'npx clawhub@latest install gog', url: 'https://clawhub.ai/steipete/gog' },
        { badge: 'badge-service', tag: 'MCP', name: 'MCP Integration', cn: 'MCP 外部工具串接', desc: '透過 MCP 協定連接外部工具與資料源，讓龍蝦能使用法規資料庫、API、天氣服務等更多外掛。', cmd: 'npx clawhub@latest install openclaw-mcp-plugin', url: 'https://clawhub.ai/lunarpulse/openclaw-mcp-plugin' },
      ]},
      { icon: '🎨', cat: '圖片生成', desc: '出圖、改圖、做視覺素材', items: [
        { badge: 'badge-image', tag: '圖片', name: 'Nano Banana Pro', cn: '生成與改圖', desc: '圖片生成和改圖，適合海報、插圖、素材圖，也能做 image-to-image。', cmd: 'npx clawhub@latest install nano-banana-pro', url: 'https://clawhub.ai/steipete/nano-banana-pro' },
      ]},
      { icon: '🧠', cat: '自我學習與進化', desc: '讓龍蝦後面越做越穩、越用越聰明', items: [
        { badge: 'badge-evolve', tag: '進化', name: 'Self-Evolving', cn: '自我進化', desc: '讓龍蝦自己反省、修正錯誤、把經驗記下來，越用越聰明、越做越穩。', cmd: 'npx clawhub@latest install evolver', url: 'https://clawhub.ai/autogame-17/evolver' },
        { badge: 'badge-evolve', tag: '反省', name: 'Self-Improving', cn: '自我反省修正', desc: '自己反省、自己修正、慢慢把經驗記下來。常常糾正它就值得裝。', cmd: 'npx clawhub@latest install self-improving', url: 'https://clawhub.ai/ivangdavila/self-improving' },
        { badge: 'badge-evolve', tag: '學習', name: 'Self-Improving Agent', cn: '學習紀錄', desc: '幫龍蝦做學習紀錄，把錯誤、修正、需求慢慢記下來。', cmd: 'npx clawhub@latest install self-improving-agent', url: 'https://clawhub.ai/pskoett/self-improving-agent' },
        { badge: 'badge-evolve', tag: '主動', name: 'Proactive Agent', cn: '主動規劃', desc: '讓龍蝦主動規劃、主動提醒、主動往下接，不再只等你一句做一句。', cmd: 'npx clawhub@latest install proactive-agent', url: 'https://clawhub.ai/halthelobster/proactive-agent' },
      ]},
      { icon: '💻', cat: '開發工具', desc: '做前端、後端、腳本、自動化流程時用', items: [
        { badge: 'badge-dev', tag: '開發', name: 'Coding Agent', cn: '開發助手', desc: '改網站、修程式、整理專案、跑開發流程。給「要做專案的人」用的。', cmd: 'npx clawhub@latest install coding-agent', url: 'https://clawhub.ai/steipete/coding-agent' },
      ]},
    ];
    var allCmds = [];
    var h = '<div class="skill-cards-section">';
    cards.forEach(function (c) {
      h += '<div class="skill-category-header"><span class="skill-category-icon">' + c.icon + '</span><span>' + c.cat + '</span></div>';
      if (c.desc) h += '<p class="skill-category-desc">' + c.desc + '</p>';
      h += '<div class="skill-card-grid">';
      c.items.forEach(function (s) {
        h += '<div class="skill-card">';
        h += '<div class="skill-card-badge ' + s.badge + '">' + s.tag + '</div>';
        h += '<h4 class="skill-card-name">' + s.name + '</h4>';
        h += '<p class="skill-card-cn">' + s.cn + '</p>';
        h += '<p class="skill-card-desc">' + s.desc + '</p>';
        if (s.cmd) {
          h += '<div class="skill-card-install"><code>' + s.cmd + '</code></div>';
          allCmds.push(s.cmd);
        } else {
          h += '<div class="skill-card-note">進階功能，詳見 ClawHub 或官方文件</div>';
        }
        if (s.url) {
          h += '<a href="' + s.url + '" target="_blank" rel="noopener" class="skill-card-link">前往 ClawHub →</a>';
        }
        h += '</div>';
      });
      h += '</div>';
    });
    // One-click install
    h += '<div class="skill-oneclick-box">';
    h += '<h3>一鍵安裝全部常用技能</h3>';
    h += '<p>如果要一次裝完上面有安裝指令的技能，直接貼這一整段：</p>';
    h += '<pre><code class="language-bash">' + allCmds.join('\n') + '</code></pre>';
    h += '</div>';
    h += '</div>';
    return h;
  }

  /* ═══════════════════════════════════════════
     Navigate to unit
     ═══════════════════════════════════════════ */
  function navigateTo(id) {
    var unit = units.find(function (u) { return u.id === id; });
    if (!unit) return;
    currentUnit = id;

    // Render content
    var html = '<h1>' + escapeHtml(unit.title) + '</h1>' + renderMarkdown(unit.content);
    // Append footer card
    html += buildSectionFooter();
    contentEl.innerHTML = html;

    // Inject skill cards: replace old text list with unified card grid
    if (id === 'skill') {
      var startH2 = null, endH2 = null;
      contentEl.querySelectorAll('h2').forEach(function (h2) {
        var txt = h2.textContent;
        if (!startH2 && txt.indexOf('推薦 SKILL 分類總覽') !== -1) startH2 = h2;
        if (!endH2 && txt.indexOf('搜尋技巧') !== -1) endH2 = h2;
      });
      if (startH2 && endH2) {
        // Remove everything from startH2 to endH2 (exclusive)
        var el = startH2;
        while (el && el !== endH2) {
          var next = el.nextSibling;
          el.parentNode.removeChild(el);
          el = next;
        }
        // Insert unified card section before endH2
        var wrapper = document.createElement('div');
        wrapper.innerHTML = '<h2 style="border-bottom:2px solid var(--color-primary-soft);padding-bottom:0.3rem;">推薦 SKILL 分類總覽</h2>' +
          '<p>以下把所有常用技能按用途分成 9 大類，整理成卡片。<br>點擊安裝指令可直接複製，有 ClawHub 連結的可以看更多資訊。</p>' +
          buildSkillCards();
        endH2.parentNode.insertBefore(wrapper, endH2);
      }
    }

    // Highlight active nav
    navList.querySelectorAll('.nav-item').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.id === id);
    });

    // Add code copy buttons
    addCopyButtons();

    // Scroll content to top
    if (contentArea) contentArea.scrollTop = 0;

    // Close mobile sidebar
    closeMobileSidebar();

    // Update URL hash
    history.replaceState(null, '', '#' + id);
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ═══════════════════════════════════════════
     Section footer
     ═══════════════════════════════════════════ */
  function buildSectionFooter() {
    return [
      '<div class="section-footer">',
      '  <div class="footer-goto-box">',
      '    <p class="footer-goto-label">完成安裝後，前往龍蝦主站</p>',
      '    <a class="footer-goto-btn" href="https://hermes-lobster.netlify.app/" target="_blank" rel="noopener">',
      '      🦞 前往 HermesAgent 主站 →',
      '    </a>',
      '  </div>',
      '  <div class="footer-author">',
      '    <div>',
      '      <div class="footer-kicker">AUTHOR</div>',
      '      <h3>曾慶良 主任（阿亮老師）</h3>',
      '      <p>新興科技推廣中心主任｜教育部學科中心研究教師</p>',
      '      <p>2025 SETEAM 講師認證・2024 教育部 AI 講師認證</p>',
      '    </div>',
      '    <div class="footer-media"><img src="作者資訊.png" alt="阿亮老師"></div>',
      '  </div>',
      '  <div class="footer-links">',
      '    <a class="footer-link" href="https://www.youtube.com/@Liang-yt02" target="_blank" rel="noopener">YouTube</a>',
      '    <a class="footer-link" href="https://www.facebook.com/groups/2754139931432955" target="_blank" rel="noopener">3A 社群</a>',
      '    <a class="footer-link" href="mailto:3a01chatgpt@gmail.com">Email</a>',
      '  </div>',
      '  <div class="footer-license">',
      '    <div class="footer-license-title">授權聲明</div>',
      '    <p>本教材僅供教學與個人學習使用，未經授權不得轉載或商業使用。</p>',
      '    <div class="footer-license-row">',
      '      <span class="footer-license-copy">&copy; 2026 曾慶良（阿亮老師）</span>',
      '      <a href="#" class="footer-top-link" onclick="document.getElementById(\'contentArea\').scrollTop=0;return false;">回到頂部</a>',
      '    </div>',
      '  </div>',
      '</div>',
    ].join('\n');
  }

  /* ═══════════════════════════════════════════
     Code copy buttons
     ═══════════════════════════════════════════ */
  function addCopyButtons() {
    if (!contentEl) return;
    contentEl.querySelectorAll('pre').forEach(function (pre) {
      if (pre.querySelector('.code-copy-btn')) return;
      var btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = '複製';
      btn.addEventListener('click', function () {
        var code = pre.querySelector('code');
        var text = code ? code.textContent : pre.textContent;
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = '已複製!';
          btn.classList.add('is-copied');
          setTimeout(function () { btn.textContent = '複製'; btn.classList.remove('is-copied'); }, 1800);
        });
      });
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
    // Skill card install: click-to-copy
    contentEl.querySelectorAll('.skill-card-install').forEach(function (el) {
      if (el.dataset.copyBound) return;
      el.dataset.copyBound = '1';
      el.title = '點擊複製安裝指令';
      el.addEventListener('click', function () {
        var text = el.textContent.trim();
        navigator.clipboard.writeText(text).then(function () {
          el.classList.add('copied');
          setTimeout(function () { el.classList.remove('copied'); }, 1500);
        });
      });
    });
  }

  /* ═══════════════════════════════════════════
     Mobile sidebar
     ═══════════════════════════════════════════ */
  function openMobileSidebar() {
    if (sidebar) sidebar.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
  }
  function closeMobileSidebar() {
    if (sidebar) sidebar.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
  }
  if (menuBtn) menuBtn.addEventListener('click', function () {
    sidebar.classList.contains('is-open') ? closeMobileSidebar() : openMobileSidebar();
  });
  if (overlay) overlay.addEventListener('click', closeMobileSidebar);

  /* ═══════════════════════════════════════════
     Sidebar resize (desktop)
     ═══════════════════════════════════════════ */
  if (resizer) {
    var minW = 200, maxW = 500;

    function applySidebarWidth(w) {
      w = Math.max(minW, Math.min(maxW, w));
      document.documentElement.style.setProperty('--sidebar-w', w + 'px');
      resizer.style.left = (w - 4) + 'px';
    }

    resizer.addEventListener('mousedown', function (e) {
      e.preventDefault();
      body.classList.add('is-resizing');
      var startX = e.clientX;
      var startW = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-w'));

      function onMove(ev) { applySidebarWidth(startW + ev.clientX - startX); }
      function onUp() {
        body.classList.remove('is-resizing');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        localStorage.setItem(STORAGE_SIDEBAR, getComputedStyle(document.documentElement).getPropertyValue('--sidebar-w').replace('px', ''));
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });

    // Restore saved width
    var savedW = localStorage.getItem(STORAGE_SIDEBAR);
    if (savedW) applySidebarWidth(parseInt(savedW, 10));
  }

  /* ═══════════════════════════════════════════
     Settings panel
     ═══════════════════════════════════════════ */
  if (settingsBtn) settingsBtn.addEventListener('click', function () {
    settingsPanel.classList.add('is-open');
  });
  if (settingsClose) settingsClose.addEventListener('click', function () {
    settingsPanel.classList.remove('is-open');
  });
  if (settingsPanel) settingsPanel.addEventListener('click', function (e) {
    if (e.target === settingsPanel) settingsPanel.classList.remove('is-open');
  });

  // Font size buttons
  document.querySelectorAll('.font-size-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var size = btn.dataset.size;
      body.classList.remove('font-medium', 'font-large', 'font-xlarge');
      body.classList.add('font-' + size);
      document.querySelectorAll('.font-size-btn').forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      localStorage.setItem(STORAGE_FONT, size);
    });
  });

  // Restore saved font size
  var savedFont = localStorage.getItem(STORAGE_FONT);
  if (savedFont) {
    body.classList.remove('font-medium', 'font-large', 'font-xlarge');
    body.classList.add('font-' + savedFont);
    document.querySelectorAll('.font-size-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.size === savedFont);
    });
  }

  // Theme switching
  function setTheme(theme) {
    body.classList.remove('theme-ocean', 'theme-forest', 'theme-sakura');
    if (theme && theme !== 'lobster') body.classList.add('theme-' + theme);
    if (themeOptions) {
      themeOptions.querySelectorAll('.theme-card').forEach(function (c) {
        c.classList.toggle('is-active', c.dataset.theme === theme);
      });
    }
  }

  if (themeOptions) {
    themeOptions.addEventListener('click', function (e) {
      var card = e.target.closest('.theme-card');
      if (!card) return;
      var theme = card.dataset.theme;
      setTheme(theme);
      localStorage.setItem(STORAGE_THEME, theme);
    });
  }

  var savedTheme = localStorage.getItem(STORAGE_THEME);
  if (savedTheme) setTheme(savedTheme);

  /* ═══════════════════════════════════════════
     Back to top
     ═══════════════════════════════════════════ */
  if (contentArea && backTopBtn) {
    contentArea.addEventListener('scroll', function () {
      backTopBtn.classList.toggle('is-visible', contentArea.scrollTop > 400);
    });
    backTopBtn.addEventListener('click', function () {
      contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ═══════════════════════════════════════════
     Fullscreen
     ═══════════════════════════════════════════ */
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function () {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(function () {});
      } else {
        document.exitFullscreen();
      }
    });
    document.addEventListener('fullscreenchange', function () {
      var isFs = !!document.fullscreenElement;
      fullscreenBtn.querySelector('.btn-label').textContent = isFs ? '結束全螢幕' : '全螢幕';
    });
  }

  /* ═══════════════════════════════════════════
     Keyboard navigation
     ═══════════════════════════════════════════ */
  document.addEventListener('keydown', function (e) {
    if (body.classList.contains('is-locked')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      var idx = units.findIndex(function (u) { return u.id === currentUnit; });
      if (idx === -1) return;
      var next = e.key === 'ArrowLeft' ? idx - 1 : idx + 1;
      if (next >= 0 && next < units.length) navigateTo(units[next].id);
    }
  });

  /* ═══════════════════════════════════════════
     Init
     ═══════════════════════════════════════════ */
  function init() {
    buildNav();

    // Show intro or hash unit
    var hash = location.hash.replace('#', '');
    var target = units.find(function (u) { return u.id === hash; });
    if (target) {
      navigateTo(target.id);
    } else if (units.length > 0) {
      // Show intro page
      showIntro();
    }
  }

  function showIntro() {
    if (typeof SITE_DATA === 'undefined') return;
    var intro = SITE_DATA.intro;
    var html = renderMarkdown(intro.content);
    // Add "choose your system" prompt
    html += '<div style="text-align:center;margin:2rem 0 1rem;">';
    html += '<p style="color:var(--color-muted);font-size:1.05rem;">選擇左邊的章節開始閱讀，或直接點下方：</p>';
    html += '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:12px;">';
    units.forEach(function (u) {
      html += '<button class="nav-item" style="display:inline-flex;border-radius:var(--radius-pill);padding:10px 18px;background:linear-gradient(135deg,#B54F1D,#D9752E);color:#FFF8F2;border:1px solid #9F4618;border-left:0;font-size:0.92rem;" onclick="document.querySelector(\'[data-id=' + u.id + ']\').click()">';
      html += (ICONS[u.icon] || '') + '<span>' + u.shortTitle + '</span></button>';
    });
    html += '</div></div>';
    html += buildSectionFooter();
    contentEl.innerHTML = html;
    addCopyButtons();

    // Deactivate all nav items
    navList.querySelectorAll('.nav-item').forEach(function (btn) { btn.classList.remove('is-active'); });
    currentUnit = null;
  }

  init();
})();
