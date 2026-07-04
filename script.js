/* ==========================================================================
   Yuvaraj Singh Mattu — personal identity site
   Vanilla JS: i18n (EN/JP), mobile nav, scroll reveal, vCard download,
   portrait motion (desktop only). No dependencies.
   ========================================================================== */
(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------------
     Translation dictionary
     ------------------------------------------------------------------ */
  var translations = {
    en: {
      'misc.skip': 'Skip to content',
      'misc.newTab': '(opens in a new tab)',

      'nav.homeAria': 'Yuvaraj Singh Mattu — top of page',
      'nav.navAria': 'Main navigation',
      'nav.menuAria': 'Menu',
      'nav.linkedinAria': 'Yuvaraj Singh Mattu on LinkedIn (opens in a new tab)',
      'nav.about': 'About',
      'nav.work': 'Work',
      'nav.exploring': 'Exploring',
      'nav.connect': 'Connect',

      'lang.groupAria': 'Language selection',
      'lang.enAria': 'Switch to English',
      'lang.jaAria': 'Switch to Japanese',

      'hero.eyebrow': 'ISSE Student · Developer · Product Builder',
      'hero.title': 'I turn real-world problems into clear digital products.',
      'hero.lead': 'I’m Yuvaraj Singh Mattu, an Information Systems Science and Engineering student at Ritsumeikan University in Osaka. I build bilingual websites for real clients and explore AI products, world models and adaptive interfaces.',
      'hero.location': 'Osaka, Japan',
      'hero.availability': 'Open to connect · Hackathon 2026',
      'hero.btnLinkedin': 'Connect on LinkedIn',
      'hero.btnWork': 'Explore My Work',
      'hero.portraitAlt': 'Portrait of Yuvaraj Singh Mattu',

      'contact.save': 'Save Contact',
      'contact.saved': 'Contact Saved ✓',
      'contact.savedAnnounce': 'Contact card downloaded.',

      'rl.team': 'Currently building at c0mpiled-12',
      'rl.desc': 'RoundLab is a cross-genre competitive-gaming decision lab built around Dynamic Software Interfaces. It turns a specific match moment into a situation-specific workspace where players can test alternatives, understand consequences and receive a targeted practice drill.',
      'rl.roleLabel': 'My role',
      'rl.role': 'Product Lead · Scope Controller · Demo & Pitch',
      'rl.status': 'Hackathon Build · In Progress',

      'about.eyebrow': 'About',
      'about.heading': 'Building from real experience.',
      'about.body': 'I’m an Information Systems Science and Engineering student at Ritsumeikan University in Osaka. I have designed and delivered bilingual websites for local businesses in Japan, and I’m now moving toward AI products and software that responds to real-world context. I enjoy turning unclear problems into practical things people can actually use.',
      'about.fact1': 'Based in Osaka',
      'about.fact2': 'Ritsumeikan University',
      'about.fact3': '2 paid client websites',
      'about.fact4': 'Building with AI',

      'work.eyebrow': 'Work',
      'work.heading': 'Selected work',
      'work.sub': 'Real projects, delivered for real people—and the direction I’m building toward next.',
      'work.viewLive': 'View Live Site',
      'work.rl.cat': 'AI Product · Hackathon Build',
      'work.rl.desc': 'A system that compiles competitive-game situations into custom decision and practice interfaces.',
      'work.rl.status': 'In Progress',
      'work.purnima.cat': 'Paid Client Project · Bilingual',
      'work.purnima.desc': 'Designed and delivered a bilingual website for a local Indian–Nepali restaurant in Osaka, including menu navigation, ordering access, location information and responsive mobile presentation.',
      'work.dilkhus.cat': 'Paid Client Project · Japanese-first',
      'work.dilkhus.desc': 'Created a mobile-friendly website for a local food-court restaurant, with bilingual content, visual menu presentation, business information and map access.',
      'work.more': 'More experiments',
      'work.kissa.cat': 'Independent Concept Project',
      'work.kissa.desc': 'A self-initiated café website concept focused on atmosphere, editorial presentation and responsive visual design.',

      'ex.eyebrow': 'Exploring',
      'ex.heading': 'What I’m exploring',
      'ex.1.title': 'World Models & Real-World AI',
      'ex.1.body': 'Exploring systems that can understand environments, anticipate change and interact meaningfully with the physical world.',
      'ex.2.title': 'Dynamic Software Interfaces',
      'ex.2.body': 'Interfaces that reorganize themselves around the user’s current situation, objective and constraints instead of forcing every problem into one fixed screen.',
      'ex.3.title': 'Human-Centred AI Products',
      'ex.3.body': 'AI products where technology supports judgment and action without removing the person from the decision.',

      'connect.eyebrow': 'Connect',
      'connect.heading': 'Let’s continue the conversation.',
      'connect.body': 'I’m interested in meeting developers, founders, product builders and teams working on meaningful technology.',

      'footer.line': 'Yuvaraj Singh Mattu · Osaka, Japan · 2026'
    },

    ja: {
      'misc.skip': '本文へスキップ',
      'misc.newTab': '（新しいタブで開きます）',

      'nav.homeAria': 'Yuvaraj Singh Mattu — ページの先頭へ',
      'nav.navAria': 'メインナビゲーション',
      'nav.menuAria': 'メニュー',
      'nav.linkedinAria': 'Yuvaraj Singh MattuのLinkedIn（新しいタブで開きます）',
      'nav.about': '自己紹介',
      'nav.work': '制作実績',
      'nav.exploring': '探求分野',
      'nav.connect': 'つながる',

      'lang.groupAria': '言語切り替え',
      'lang.enAria': '英語に切り替える',
      'lang.jaAria': '日本語に切り替える',

      'hero.eyebrow': '情報システム科学工学 · デベロッパー · プロダクトビルダー',
      'hero.title': '現実世界の課題を、明確で使えるデジタルプロダクトへ。',
      'hero.lead': '立命館大学で情報システム科学工学を学ぶ、Yuvaraj Singh Mattuです。大阪を拠点に、実際のクライアント向けの日英対応ウェブサイトを制作しながら、AIプロダクト、ワールドモデル、状況に適応するインターフェースを探求しています。',
      'hero.location': '大阪・日本',
      'hero.availability': 'つながり歓迎 · ハッカソン2026',
      'hero.btnLinkedin': 'LinkedInでつながる',
      'hero.btnWork': '制作実績を見る',
      'hero.portraitAlt': 'Yuvaraj Singh Mattuのポートレート',

      'contact.save': '連絡先を保存',
      'contact.saved': '保存しました ✓',
      'contact.savedAnnounce': '連絡先カードをダウンロードしました。',

      'rl.team': 'c0mpiled-12で開発中',
      'rl.desc': 'RoundLabは、Dynamic Software Interfacesを中心に設計された、複数ジャンル対応の競技ゲーム向け意思決定ラボです。試合中の具体的な場面から、その状況専用のワークスペースを生成し、別の選択肢、結果、練習ドリルを検証できるようにします。',
      'rl.roleLabel': '担当',
      'rl.role': 'プロダクトリード · スコープ管理 · デモ・ピッチ担当',
      'rl.status': 'ハッカソン開発 · 進行中',

      'about.eyebrow': '自己紹介',
      'about.heading': '実際の経験から、次のプロダクトへ。',
      'about.body': '大阪の立命館大学で情報システム科学工学を学んでいます。日本の地域ビジネス向けに日英対応のウェブサイトを設計・納品してきました。現在は、現実世界の状況に応じて変化するAIプロダクトやソフトウェアに取り組んでいます。曖昧な課題を、実際に使える形へ落とし込むことが好きです。',
      'about.fact1': '大阪を拠点に活動',
      'about.fact2': '立命館大学',
      'about.fact3': '有料クライアントサイト2件',
      'about.fact4': 'AIを活用した開発',

      'work.eyebrow': '制作実績',
      'work.heading': '主な制作実績',
      'work.sub': '実際の人のために納品したプロジェクトと、次に進もうとしている方向。',
      'work.viewLive': '公開サイトを見る',
      'work.rl.cat': 'AIプロダクト · ハッカソン開発',
      'work.rl.desc': '競技ゲームの場面から、その状況専用の意思決定・練習インターフェースを生成するシステム。',
      'work.rl.status': '開発中',
      'work.purnima.cat': '有料クライアント案件 · 日英対応',
      'work.purnima.desc': '大阪のインド・ネパール料理店向けに、メニュー、オンライン注文、店舗情報、モバイル対応を含む日英対応ウェブサイトを設計・納品しました。',
      'work.dilkhus.cat': '有料クライアント案件 · 日本語中心',
      'work.dilkhus.desc': 'フードコート内の地域レストラン向けに、日英コンテンツ、見やすいメニュー、店舗情報、地図アクセスを備えたモバイル対応サイトを制作しました。',
      'work.more': 'その他の実験',
      'work.kissa.cat': '個人コンセプトプロジェクト',
      'work.kissa.desc': '雰囲気、エディトリアルな見せ方、レスポンシブデザインを重視して制作した自主的なカフェサイトのコンセプトです。',

      'ex.eyebrow': '探求分野',
      'ex.heading': '現在探求していること',
      'ex.1.title': 'ワールドモデルと実世界AI',
      'ex.1.body': '環境を理解し、変化を予測し、現実世界と意味のある形で関わるシステムに関心があります。',
      'ex.2.title': 'ダイナミック・ソフトウェア・インターフェース',
      'ex.2.body': 'すべての課題を固定画面に押し込むのではなく、利用者の状況、目的、制約に応じて構成が変化するインターフェースを探求しています。',
      'ex.3.title': '人間中心のAIプロダクト',
      'ex.3.body': '人を意思決定から外すのではなく、判断と行動を支援する人間中心のAIプロダクトを目指しています。',

      'connect.eyebrow': 'つながる',
      'connect.heading': 'この会話を、次につなげましょう。',
      'connect.body': '意味のあるテクノロジーに取り組むデベロッパー、創業者、プロダクトビルダー、チームの方々とつながりたいと考えています。',

      'footer.line': 'Yuvaraj Singh Mattu · 大阪・日本 · 2026'
    }
  };

  /* ------------------------------------------------------------------
     Language system
     ------------------------------------------------------------------ */
  var LANG_KEY = 'ysm-lang';
  var currentLang = 'en';
  var announcer = document.getElementById('sr-announcer');

  function safeGetLang() {
    try {
      var stored = window.localStorage.getItem(LANG_KEY);
      return (stored === 'ja' || stored === 'en') ? stored : null;
    } catch (e) {
      return null;
    }
  }

  function safeSetLang(lang) {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (e) { /* private mode — ignore */ }
  }

  function translatePage(lang) {
    var dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });

    document.documentElement.setAttribute('lang', lang === 'ja' ? 'ja' : 'en');

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    currentLang = lang;
  }

  function setLanguage(lang, options) {
    options = options || {};
    if (lang === currentLang && !options.force) return;

    var apply = function () {
      translatePage(lang);
      safeSetLang(lang);
      if (options.announce && announcer) {
        announcer.textContent = lang === 'ja'
          ? '表示言語を日本語に切り替えました。'
          : 'Language switched to English.';
      }
    };

    if (options.instant || prefersReducedMotion.matches) {
      apply();
      return;
    }

    // Brief cross-fade of main content
    document.body.classList.add('lang-fading');
    window.setTimeout(function () {
      apply();
      document.body.classList.remove('lang-fading');
    }, 180);
  }

  // First load: stored preference wins, otherwise English.
  var initialLang = safeGetLang() || 'en';
  if (initialLang !== 'en') {
    setLanguage(initialLang, { instant: true, force: true });
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'), { announce: true });
    });
  });

  /* ------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------ */
  var header = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.getElementById('site-nav');

  function closeNav() {
    if (!header.classList.contains('nav-open')) return;
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    header.classList.add('nav-open');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      header.classList.contains('nav-open') ? closeNav() : openNav();
    });

    siteNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeNav();
      }
    });

    document.addEventListener('click', function (e) {
      if (header.classList.contains('nav-open') && !header.contains(e.target)) {
        closeNav();
      }
    });
  }

  /* ------------------------------------------------------------------
     Scroll reveal (IntersectionObserver)
     ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll('[data-reveal]');

  function showAll() {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ------------------------------------------------------------------
     Active navigation state
     ------------------------------------------------------------------ */
  var navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && navLinks.length) {
    var sectionMap = {};
    navLinks.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) sectionMap[id] = link;
    });

    var activeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = sectionMap[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.removeAttribute('aria-current'); });
          link.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    Object.keys(sectionMap).forEach(function (id) {
      activeObserver.observe(document.getElementById(id));
    });
  }

  /* ------------------------------------------------------------------
     Portrait motion — desktop pointers only
     ------------------------------------------------------------------ */
  var portraitFrame = document.querySelector('.portrait-frame');
  var hero = document.querySelector('.hero');
  var finePointer = window.matchMedia('(pointer: fine)');

  if (portraitFrame && hero && finePointer.matches && !prefersReducedMotion.matches) {
    var rafId = null;
    var targetX = 0;
    var targetY = 0;

    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 8;

      if (rafId === null) {
        rafId = window.requestAnimationFrame(function () {
          portraitFrame.style.setProperty('--tilt-x', targetX.toFixed(1) + 'px');
          portraitFrame.style.setProperty('--tilt-y', targetY.toFixed(1) + 'px');
          rafId = null;
        });
      }
    });

    hero.addEventListener('mouseleave', function () {
      portraitFrame.style.setProperty('--tilt-x', '0px');
      portraitFrame.style.setProperty('--tilt-y', '0px');
    });
  }

  /* ------------------------------------------------------------------
     vCard download (no email / phone — none exist)
     ------------------------------------------------------------------ */
  function buildVCard() {
    var lines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Mattu;Yuvaraj Singh;;;',
      'FN:Yuvaraj Singh Mattu',
      'TITLE:ISSE Student\\, Developer and Product Builder',
      'ADR;TYPE=WORK:;;;Osaka;;;Japan',
      'URL:https://yuviro09.github.io/portfolio/',
      'URL;TYPE=LinkedIn:https://www.linkedin.com/in/yuvaraj-singh-mattu-41aa75316/',
      'URL;TYPE=GitHub:https://github.com/Yuviro09',
      'X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/yuvaraj-singh-mattu-41aa75316/',
      'X-SOCIALPROFILE;TYPE=github:https://github.com/Yuviro09',
      'NOTE:Information Systems Science and Engineering student at Ritsumeikan University\\, Osaka. Builds bilingual websites for real clients and explores AI products and dynamic software interfaces.',
      'END:VCARD'
    ];
    return lines.join('\r\n');
  }

  function downloadVCard(button) {
    var blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'yuvaraj-singh-mattu.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 4000);

    // Visual + screen-reader confirmation
    var label = button.querySelector('.save-label');
    var dict = translations[currentLang];
    if (label) {
      button.classList.add('is-saved');
      label.textContent = dict['contact.saved'];
      window.setTimeout(function () {
        button.classList.remove('is-saved');
        // Re-read current language in case it changed while confirming
        label.textContent = translations[currentLang]['contact.save'];
      }, 2400);
    }
    if (announcer) {
      announcer.textContent = dict['contact.savedAnnounce'];
    }
  }

  document.querySelectorAll('.js-save-contact').forEach(function (btn) {
    btn.addEventListener('click', function () {
      downloadVCard(btn);
    });
  });

})();
