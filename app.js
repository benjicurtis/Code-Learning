// Code - Learn Tech & Coding (Pure JavaScript)
(function() {
  const LESSONS = window.LESSONS || {};
  const LESSON_CONFIG = window.LESSON_CONFIG || {};

  const MODES = {
    hacker: { name: 'Hacker', icon: '', desc: 'Read how others approach security – no coding' },
    gameDesign: { name: 'Game Design', icon: '', desc: 'Read how others design games – no coding' },
    languages: { name: 'Languages', icon: '', desc: 'JavaScript, CSS, Python, HTML' },
    learn: { name: 'Learn', icon: '', desc: 'Read-only lessons – understand concepts step by step' },
    freeCode: { name: 'Free Code', icon: '', desc: 'Write and download code in any language' }
  };
  const CLASS_MODE_ONLY = ['hacker', 'gameDesign']; // these modes only show when class mode is on
  const CLASS_MODE_PATHS = ['gameDesign', 'hacker', 'classes']; // these Learn paths only show when class mode is on

  function isClassMode() {
    return localStorage.getItem('code_class_mode') === 'true';
  }
  function setClassMode(on) {
    localStorage.setItem('code_class_mode', on ? 'true' : 'false');
  }

  function getInfoPaths() {
    let paths = window.INFO_PATHS;
    if (!paths || Object.keys(paths).length === 0) {
      paths = {
        understandingComputers: {
          name: 'Understanding Computers',
          icon: '',
          desc: 'Learn how computers work',
          lessons: [
            { id: 1, num: 1, title: 'What is a Computer?', content: 'A computer takes **input**, **processes** it, and produces **output**. The four main parts: input (keyboard, mouse), processing (CPU), storage (RAM, disk), output (screen, speakers).' },
            { id: 2, num: 2, title: 'Hardware vs Software', content: '**Hardware** is physical parts you can touch. **Software** is programs that tell hardware what to do. Hardware without software is like a body without a brain.' },
            { id: 3, num: 3, title: 'The CPU', content: 'The **CPU** (Central Processing Unit) is the brain. It runs instructions millions of times per second. More cores = more tasks at once.' }
          ]
        },
        howTheInternetWorks: {
          name: 'How the Internet Works',
          icon: '',
          desc: 'Understand the internet',
          lessons: [
            { id: 1, num: 1, title: 'What is the Internet?', content: 'The **internet** is a global network of connected computers. No single company owns it.' },
            { id: 2, num: 2, title: 'Servers and Clients', content: 'A **server** stores and sends data. A **client** (your device) requests and displays it.' },
            { id: 3, num: 3, title: 'IP Addresses', content: 'Every device has an **IP address** – a unique identifier like 192.168.1.1 – so data knows where to go.' }
          ]
        },
        programmingBasics: {
          name: 'Programming Basics',
          icon: '',
          desc: 'Core concepts before you code',
          lessons: [
            { id: 1, num: 1, title: 'What is Programming?', content: '**Programming** is giving a computer step-by-step instructions. You write code; the computer runs it.' },
            { id: 2, num: 2, title: 'Variables', content: 'A **variable** is a named container for data. Like a labeled box that holds a value you can use later.' },
            { id: 3, num: 3, title: 'Functions', content: 'A **function** is reusable code. Give it a name, define what it does, then call it whenever needed.' }
          ]
        }
      };
      window.INFO_PATHS = paths;
    }
    return paths;
  }

  const LANGUAGES = ['javascript', 'css', 'python', 'html'];
  const TRACK_NAMES = {
    javascript: 'JavaScript', css: 'CSS', python: 'Python', html: 'HTML',
    hacker: 'Hacker', gameDesign: 'Game Design'
  };

  let state = {
    view: 'welcome',
    mode: null,
    language: null,
    lessonId: null,
    completed: JSON.parse(localStorage.getItem('code_completed') || '{}'),
    pyodide: null
  };

  function saveProgress() {
    localStorage.setItem('code_completed', JSON.stringify(state.completed));
  }

  function completeLesson(key, id) {
    if (!state.completed[key]) state.completed[key] = [];
    if (!state.completed[key].includes(id)) {
      state.completed[key].push(id);
      saveProgress();
    }
  }

  function isCompleted(key, id) {
    return state.completed[key] && state.completed[key].includes(id);
  }

  function render() {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = '';

    if (state.view === 'welcome') {
      app.appendChild(renderWelcome());
    } else if (state.view === 'languageSelect') {
      app.appendChild(renderLanguageSelect());
    } else if (state.view === 'freeCodeSelect') {
      app.appendChild(renderFreeCodeLangSelect());
    } else if (state.view === 'freeCode') {
      app.appendChild(renderFreeCode());
    } else if (state.view === 'infoPathSelect') {
      app.appendChild(renderInfoPathSelect());
    } else if (state.view === 'infoLessons') {
      app.appendChild(renderInfoLessons());
    } else if (state.view === 'infoLesson') {
      app.appendChild(renderInfoLesson());
    } else if (state.view === 'lessons') {
      app.appendChild(renderLessonLayout());
    } else if (state.view === 'lesson') {
      app.appendChild(renderLessonView());
    }
  }

  function renderWelcome() {
    const classMode = isClassMode();
    const modesToShow = Object.entries(MODES).filter(([key]) => 
      !CLASS_MODE_ONLY.includes(key) || classMode
    );
    const el = document.createElement('div');
    el.className = 'welcome';
    el.innerHTML = `
      <h1>Code</h1>
      <p>Learn tech and coding in basic steps. Choose a track to begin your journey.</p>
      <div class="mode-grid">
        ${modesToShow.map(([key, m]) => `
          <div class="mode-card" data-mode="${key}">
            <h3>${m.icon} ${m.name}</h3>
            <p>${m.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
    el.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => selectMode(card.dataset.mode));
    });
    return el;
  }

  function selectMode(mode) {
    state.mode = mode;
    if (mode === 'languages') {
      state.view = 'languageSelect';
    } else if (mode === 'freeCode') {
      state.view = 'freeCodeSelect';
    } else if (mode === 'learn') {
      state.view = 'infoPathSelect';
    } else if (mode === 'hacker' || mode === 'gameDesign') {
      state.infoPath = mode;
      state.view = 'infoLessons';
    } else {
      state.language = mode;
      state.view = 'lessons';
    }
    render();
  }

  function renderLanguageSelect() {
    const el = document.createElement('div');
    el.className = 'welcome';
    el.innerHTML = `
      <h1>Choose a Language</h1>
      <p>Select a language to start learning. 500 lessons each.</p>
      <div class="mode-grid">
        ${LANGUAGES.map(lang => `
          <div class="mode-card" data-lang="${lang}">
            <h3>${LESSON_CONFIG[lang].icon} ${TRACK_NAMES[lang]}</h3>
            <p>${getLessonCount(lang)} lessons available</p>
          </div>
        `).join('')}
      </div>
      <button class="btn btn-secondary" style="margin-top:2rem" data-back>← Back</button>
    `;
    el.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        state.language = card.dataset.lang;
        state.view = 'lessons';
        render();
      });
    });
    el.querySelector('[data-back]').addEventListener('click', () => {
      state.view = 'welcome';
      state.mode = null;
      render();
    });
    return el;
  }

  const FREE_CODE_DEFAULTS = {
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>',
    css: '/* Your styles */\nbody {\n  margin: 0;\n  font-family: sans-serif;\n}\n\nh1 {\n  color: #58a6ff;\n}',
    javascript: '// Your JavaScript\nconsole.log("Hello, World!");',
    python: '# Your Python code\nprint("Hello, World!")'
  };

  function resetFreeCodeToDefault(lang) {
    const def = FREE_CODE_DEFAULTS[lang];
    if (def) {
      state.freeCodeContent = def;
      localStorage.removeItem('code_freeCode_' + lang);
    }
  }

  const FILE_EXTENSIONS = { html: 'html', css: 'css', javascript: 'js', python: 'py' };

  function renderFreeCodeLangSelect() {
    const el = document.createElement('div');
    el.className = 'welcome';
    el.innerHTML = `
      <h1>Free Code</h1>
      <p>Choose a language. Write your code and download it as a file.</p>
      <div class="mode-grid">
        ${LANGUAGES.map(lang => `
          <div class="mode-card" data-lang="${lang}">
            <h3>${LESSON_CONFIG[lang] ? LESSON_CONFIG[lang].icon + ' ' : ''}${TRACK_NAMES[lang]}</h3>
            <p>Download as .${FILE_EXTENSIONS[lang]} file</p>
          </div>
        `).join('')}
      </div>
      <button class="btn btn-secondary" style="margin-top:2rem" data-back>← Back</button>
    `;
    el.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        state.language = card.dataset.lang;
        state.view = 'freeCode';
        state.freeCodeContent = localStorage.getItem('code_freeCode_' + state.language) || FREE_CODE_DEFAULTS[state.language];
        render();
      });
    });
    el.querySelector('[data-back]').addEventListener('click', () => {
      state.view = 'welcome';
      state.mode = null;
      render();
    });
    return el;
  }

  function renderFreeCode() {
    const lang = state.language;
    const content = state.freeCodeContent || FREE_CODE_DEFAULTS[lang] || '';
    const ext = FILE_EXTENSIONS[lang] || 'txt';

    const el = document.createElement('div');
    el.className = 'layout';
    el.innerHTML = `
      <aside class="sidebar">
        <div class="logo">Code</div>
        <div class="nav-section">
          <div class="nav-title">Free Code</div>
          <button class="nav-btn active">${TRACK_NAMES[lang]} (.${ext})</button>
        </div>
        <div class="nav-section">
          <button class="nav-btn" data-back>← Back</button>
        </div>
      </aside>
      <main class="main">
        <h1>Free Code – ${TRACK_NAMES[lang]}</h1>
        <p style="color:var(--text-dim);margin-bottom:1.5rem">Write your code below. Click Run to test, or Download to save as a file.</p>
        <textarea id="free-code-editor" placeholder="Write your code here..."></textarea>
        <div style="display:flex;gap:1rem;margin-top:1rem;flex-wrap:wrap">
          <button class="btn btn-primary" id="free-run">Run Code</button>
          <button class="btn btn-primary" id="free-download">Download</button>
          <button class="btn btn-secondary" id="free-reset">Reset to default</button>
        </div>
        <div class="output" id="free-output"></div>
      </main>
    `;

    const textarea = el.querySelector('#free-code-editor');
    textarea.value = content;
    textarea.addEventListener('input', () => {
      state.freeCodeContent = textarea.value;
      localStorage.setItem('code_freeCode_' + lang, textarea.value);
    });

    el.querySelector('[data-back]').addEventListener('click', () => {
      state.view = 'freeCodeSelect';
      state.language = null;
      render();
    });

    el.querySelector('#free-run').addEventListener('click', () => {
      runCode(textarea.value, lang === 'hacker' || lang === 'gameDesign' ? 'javascript' : lang, el.querySelector('#free-output'));
    });

    el.querySelector('#free-download').addEventListener('click', () => {
      const code = textarea.value;
      const blob = new Blob([code], { type: lang === 'html' ? 'text/html' : 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'code.' + ext;
      a.click();
      URL.revokeObjectURL(a.href);
    });

    el.querySelector('#free-reset').addEventListener('click', () => {
      resetFreeCodeToDefault(lang);
      textarea.value = state.freeCodeContent;
      el.querySelector('#free-output').textContent = '';
    });

    return el;
  }

  function renderInfoPathSelect() {
    const infoPaths = getInfoPaths();
    const classMode = isClassMode();
    const paths = Object.entries(infoPaths).filter(([key]) =>
      !CLASS_MODE_PATHS.includes(key) || classMode
    );
    const el = document.createElement('div');
    el.className = 'welcome';
    el.innerHTML = `
      <h1>Learn</h1>
      <p>Read-only lessons. No coding – just learn concepts one by one.</p>
      <div class="mode-grid">
        ${paths.map(([key, p]) => `
          <div class="mode-card" data-path="${key}">
            <h3>${p.icon} ${p.name}</h3>
            <p>${p.desc} • ${(p.lessons || []).length} lessons</p>
          </div>
        `).join('')}
      </div>
      <button class="btn btn-secondary" style="margin-top:2rem" data-back>← Back</button>
    `;
    el.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        state.infoPath = card.dataset.path;
        state.view = 'infoLessons';
        render();
      });
    });
    el.querySelector('[data-back]').addEventListener('click', () => {
      state.view = 'welcome';
      state.mode = null;
      render();
    });
    return el;
  }

  function renderInfoLessons() {
    const path = getInfoPaths()[state.infoPath];
    if (!path) { state.view = 'infoPathSelect'; render(); return document.createElement('div'); }
    const lessons = path.lessons;
    const completedCount = (state.completed['info_' + state.infoPath] || []).length;
    const progress = lessons.length ? (completedCount / lessons.length) * 100 : 0;

    const el = document.createElement('div');
    el.className = 'layout';
    el.innerHTML = `
      <aside class="sidebar">
        <div class="logo">Code</div>
        <div class="nav-section">
          <div class="nav-title">Learn</div>
          <button class="nav-btn active">${path.icon} ${path.name}</button>
        </div>
        <div class="nav-section">
          <div class="nav-title">Progress</div>
          <div>${completedCount} / ${lessons.length} completed</div>
          <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
        </div>
        <div class="nav-section">
          <button class="nav-btn" data-back>← Back</button>
        </div>
      </aside>
      <main class="main">
        <h1>${path.icon} ${path.name}</h1>
        <p style="color:var(--text-dim);margin-bottom:1.5rem">Read each lesson. Click to open. No code to type – just learn.</p>
        <div class="lesson-list" id="info-lesson-list"></div>
      </main>
    `;

    const list = el.querySelector('#info-lesson-list');
    lessons.forEach(lesson => {
      const key = 'info_' + state.infoPath;
      const card = document.createElement('div');
      card.className = 'lesson-card' + (isCompleted(key, lesson.id) ? ' completed' : '');
      card.innerHTML = `
        <div class="lesson-num">Lesson ${lesson.num}</div>
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-preview">${lesson.content.slice(0, 80)}...</div>
      `;
      card.addEventListener('click', () => {
        state.lessonId = lesson.id;
        state.view = 'infoLesson';
        render();
      });
      list.appendChild(card);
    });

    el.querySelector('[data-back]').addEventListener('click', () => {
      if (state.mode === 'hacker' || state.mode === 'gameDesign') {
        state.view = 'welcome';
        state.mode = null;
        state.infoPath = null;
      } else {
        state.view = 'infoPathSelect';
        state.infoPath = null;
      }
      render();
    });
    return el;
  }

  function renderInfoLesson() {
    const path = getInfoPaths()[state.infoPath];
    if (!path) { state.view = 'infoPathSelect'; render(); return document.createElement('div'); }
    const lessons = path.lessons;
    const lesson = lessons.find(l => l.id === state.lessonId) || lessons[0];
    const idx = lessons.findIndex(l => l.id === state.lessonId);
    const prev = idx > 0 ? lessons[idx - 1] : null;
    const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;
    const key = 'info_' + state.infoPath;

    const el = document.createElement('div');
    el.className = 'layout';
    el.innerHTML = `
      <aside class="sidebar">
        <div class="logo">Code</div>
        <div class="nav-section">
          <button class="nav-btn" data-back>← Back to lessons</button>
        </div>
      </aside>
      <main class="main">
        <div class="lesson-view">
          <h1>${lesson.title}</h1>
          <div class="content">${formatContent(lesson.content)}</div>
          <div class="lesson-nav">
            ${prev ? `<button class="btn btn-secondary" data-prev>← Lesson ${prev.num}</button>` : ''}
            <button class="btn btn-primary" data-complete>Mark Complete</button>
            ${next ? `<button class="btn btn-secondary" data-next>Lesson ${next.num} →</button>` : ''}
          </div>
        </div>
      </main>
    `;

    el.querySelector('[data-back]').addEventListener('click', () => {
      state.view = 'infoLessons';
      state.lessonId = null;
      render();
    });
    if (prev) el.querySelector('[data-prev]').addEventListener('click', () => { state.lessonId = prev.id; render(); });
    if (next) el.querySelector('[data-next]').addEventListener('click', () => { state.lessonId = next.id; render(); });
    el.querySelector('[data-complete]').addEventListener('click', () => {
      completeLesson(key, lesson.id);
      if (next) { state.lessonId = next.id; render(); } else { state.view = 'infoLessons'; state.lessonId = null; render(); }
    });

    return el;
  }

  function getLessonCount(key) {
    return (LESSONS[key] || []).length;
  }

  function renderLessonLayout() {
    const key = state.language;
    const lessons = LESSONS[key] || [];
    const completedCount = (state.completed[key] || []).length;
    const progress = lessons.length ? (completedCount / lessons.length) * 100 : 0;

    const el = document.createElement('div');
    el.className = 'layout';
    el.innerHTML = `
      <aside class="sidebar">
        <div class="logo">Code</div>
        <div class="nav-section">
          <div class="nav-title">Track</div>
          <button class="nav-btn ${state.mode === 'languages' ? '' : 'active'}">${state.mode === 'languages' ? LESSON_CONFIG[key].icon + ' ' + TRACK_NAMES[key] : MODES[state.mode].icon + ' ' + MODES[state.mode].name}</button>
        </div>
        <div class="nav-section">
          <div class="nav-title">Progress</div>
          <div>${completedCount} / ${lessons.length} completed</div>
          <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
        </div>
        <div class="nav-section">
          <div class="nav-title">Actions</div>
          <button class="nav-btn" data-back>← Back to menu</button>
        </div>
      </aside>
      <main class="main">
        <h1>${LESSON_CONFIG[key].icon} ${TRACK_NAMES[key]} – 500 Lessons</h1>
        <p style="color:var(--text-dim);margin-bottom:1.5rem">Click a lesson to view content and practice code.</p>
        <div class="lesson-list" id="lesson-list"></div>
      </main>
    `;

    const list = el.querySelector('#lesson-list');
    lessons.forEach(lesson => {
      const card = document.createElement('div');
      card.className = 'lesson-card' + (isCompleted(key, lesson.id) ? ' completed' : '');
      card.innerHTML = `
        <div class="lesson-num">Lesson ${lesson.num}</div>
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-preview">${lesson.content.slice(0, 100)}...</div>
      `;
      card.addEventListener('click', () => {
        state.lessonId = lesson.id;
        state.view = 'lesson';
        render();
      });
      list.appendChild(card);
    });

    el.querySelector('[data-back]').addEventListener('click', () => {
      state.view = state.mode === 'languages' ? 'languageSelect' : 'welcome';
      state.language = null;
      state.mode = state.view === 'welcome' ? null : state.mode;
      render();
    });
    return el;
  }

  function renderLessonView() {
    const key = state.language;
    const lessons = LESSONS[key] || [];
    const lesson = lessons.find(l => l.id === state.lessonId) || lessons[0];
    const idx = lessons.findIndex(l => l.id === state.lessonId);
    const prev = idx > 0 ? lessons[idx - 1] : null;
    const next = idx < lessons.length - 1 && idx >= 0 ? lessons[idx + 1] : null;

    const el = document.createElement('div');
    el.className = 'layout';
    el.innerHTML = `
      <aside class="sidebar">
        <div class="logo">Code</div>
        <div class="nav-section">
          <button class="nav-btn" data-back>← Back to lessons</button>
        </div>
      </aside>
      <main class="main">
        <div class="lesson-view">
          <h1>${lesson.title}</h1>
          <div class="content">${formatContent(lesson.content)}</div>
          <div class="instructions-box">
            <h3>Instructions – What to do</h3>
            <ol class="instructions-list">
              ${(lesson.instructions || []).map((step, i) => `<li>${escapeHtml(step)}</li>`).join('')}
            </ol>
          </div>
          <h3 style="margin:1.5rem 0 0.5rem">Similar examples</h3>
          <p style="color:var(--text-dim);margin-bottom:1rem;font-size:0.9rem">Study these examples. Copy one into the editor and modify it.</p>
          ${(lesson.codeExamples || [lesson.codeExample]).map((ex, i) => `
            <div class="example-block">
              <span class="example-label">Example ${i + 1}</span>
              <pre><code>${escapeHtml(ex)}</code></pre>
            </div>
          `).join('')}
          <div class="code-practice">
            <h3 style="margin-bottom:0.5rem">Practice – Your turn</h3>
            <p style="color:var(--text-dim);margin-bottom:0.5rem">${lesson.practicePrompt}</p>
            <p style="font-size:0.8rem;color:var(--text-dim);margin-bottom:0.5rem">Run ${TRACK_NAMES[key]} code below. ${key === 'python' ? '(First run loads Python ~5s)' : ''}</p>
            <textarea id="practice-code" placeholder="Write your code here...">${escapeHtml(lesson.codeExample)}</textarea>
            <button class="btn btn-primary" style="margin-top:0.75rem" id="run-code">Run Code</button>
            <div class="output" id="output"></div>
          </div>
          <div class="validation-msg" id="validation-msg"></div>
          <div class="lesson-nav">
            ${prev ? `<button class="btn btn-secondary" data-prev>← Lesson ${prev.num}</button>` : ''}
            <button class="btn btn-primary" data-complete>Mark Complete</button>
            ${next ? `<button class="btn btn-secondary" data-next>Lesson ${next.num} →</button>` : ''}
          </div>
        </div>
      </main>
    `;

    el.querySelector('[data-back]').addEventListener('click', () => {
      state.view = 'lessons';
      state.lessonId = null;
      render();
    });
    if (prev) el.querySelector('[data-prev]').addEventListener('click', () => { state.lessonId = prev.id; render(); });
    if (next) el.querySelector('[data-next]').addEventListener('click', () => { state.lessonId = next.id; render(); });
    el.querySelector('[data-complete]').addEventListener('click', () => {
      const code = (el.querySelector('#practice-code') || {}).value || '';
      const msgEl = el.querySelector('#validation-msg');
      const keywords = lesson.validationKeywords || [];
      const codeTrimmed = code.trim();
      const codeLower = codeTrimmed.toLowerCase();
      const hasCode = codeTrimmed.length > 0;
      const hasMatch = keywords.length === 0 ? hasCode : keywords.some(kw => codeLower.includes(kw.toLowerCase()));
      if (!hasCode) {
        if (msgEl) { msgEl.textContent = 'Write some code before marking complete.'; msgEl.className = 'validation-msg error'; }
        return;
      }
      if (!hasMatch) {
        if (msgEl) {
          msgEl.textContent = 'Your code must relate to this lesson. Include something from the examples (e.g. ' + (keywords[0] || 'relevant syntax') + ').';
          msgEl.className = 'validation-msg error';
        }
        return;
      }
      if (msgEl) { msgEl.textContent = ''; msgEl.className = 'validation-msg'; }
      completeLesson(key, lesson.id);
      if (next) { state.lessonId = next.id; render(); } else { state.view = 'lessons'; state.lessonId = null; render(); }
    });

    const textarea = el.querySelector('#practice-code');
    const outputEl = el.querySelector('#output');
    el.querySelector('#run-code').addEventListener('click', () => runCode(textarea.value, key, outputEl));

    return el;
  }

  async function runCode(code, lang, outputEl) {
    outputEl.innerHTML = '';
    outputEl.classList.remove('error');

    try {
      if (lang === 'hacker' || lang === 'gameDesign') {
        lang = 'javascript';
      }
      if (lang === 'javascript') {
        const lines = [];
        const origLog = console.log;
        console.log = (...a) => lines.push(a.map(String).join(' '));
        try {
          const fn = new Function(code);
          const ret = fn();
          if (ret !== undefined) lines.push(String(ret));
        } finally {
          console.log = origLog;
        }
        outputEl.textContent = lines.length ? lines.join('\n') : 'Executed (no output)';
      } else if (lang === 'html') {
        const iframe = document.createElement('iframe');
        iframe.sandbox = 'allow-scripts';
        iframe.style.cssText = 'width:100%;height:250px;border:1px solid var(--border);border-radius:8px;margin-top:0.5rem;background:#fff';
        outputEl.appendChild(iframe);
        const doc = iframe.contentDocument;
        doc.open();
        doc.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>' + code + '</body></html>');
        doc.close();
      } else if (lang === 'css') {
        const wrap = document.createElement('div');
        wrap.innerHTML = '<div class="css-preview"><p>Preview</p></div>';
        const style = document.createElement('style');
        style.textContent = code;
        wrap.insertBefore(style, wrap.firstChild);
        outputEl.appendChild(wrap);
      } else if (lang === 'python') {
        outputEl.textContent = 'Loading Python runtime...';
        if (!state.pyodide) {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/pyodide.js';
          document.head.appendChild(s);
          await new Promise(r => { s.onload = r; });
          state.pyodide = await window.loadPyodide();
        }
        outputEl.textContent = 'Running...';
        state.pyodide.runPython('import sys; from io import StringIO; _buf = StringIO(); sys.stdout = _buf');
        try {
          state.pyodide.runPython(code);
        } catch (e) {
          outputEl.textContent = 'Error: ' + e.message;
          outputEl.classList.add('error');
          return;
        }
        const out = state.pyodide.runPython('_buf.getvalue()');
        outputEl.textContent = out || 'Executed (no print output)';
      }
    } catch (err) {
      outputEl.textContent = 'Error: ' + err.message;
      outputEl.classList.add('error');
    }
  }

  function formatContent(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')
      .replace(/^/, '<p>')
      .replace(/$/, '</p>');
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  document.addEventListener('DOMContentLoaded', () => {
    setClassMode(true);
    render();
  });

  if (document.readyState !== 'loading') {
    setClassMode(true);
    render();
  }
})();
