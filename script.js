(function () {
  'use strict';

  /* ---------- Translations ---------- */
  var translations = {
    en: {
      'nav-work': 'Work',
      'nav-pricing': 'Pricing',
      'nav-about': 'About',
      'nav-contact': 'Contact',
      'hero-tagline': 'I build fast, modern websites for businesses — delivered in 72 hours',
      'hero-trust-1': '\u2713 72-hour delivery',
      'hero-trust-2': '\u2713 Mobile-first design',
      'hero-trust-3': '\u2713 2 sites in portfolio',
      'hero-intro': "I'm a university student in Osaka building landing pages for businesses. Fast turnaround. Clean code. Affordable pricing.",
      'btn-see-work': 'See My Work',
      'btn-lets-talk': "Let's Talk",
      'section-what-i-do': 'What I Do',
      'service-landing-title': 'Landing Pages',
      'service-landing-desc': 'High-converting single-page sites designed to grab attention and drive action. Optimized for speed and mobile from the ground up.',
      'service-business-title': 'Business Sites',
      'service-business-desc': 'Clean, professional multi-section websites that establish credibility. Perfect for caf\u00e9s, agencies, and local businesses.',
      'service-delivery-title': 'Fast Delivery',
      'service-delivery-desc': 'Most projects shipped within 72 hours. No bloated templates \u2014 hand-coded, tested, and ready to go live quickly.',
      'section-portfolio': 'Portfolio',
      'project-cafe-desc': 'Landing page for a modern caf\u00e9 \u2014 warm aesthetic, mobile-first, animated sections',
      'project-nexus-desc': 'Dark-mode SaaS landing page \u2014 premium design, scroll animations',
      'live-site': 'Live Site \u2197',
      'section-pricing': 'Pricing',
      'tier-basic': 'Basic',
      'tier-standard': 'Standard',
      'tier-custom': 'Custom',
      'price-contact': 'Contact',
      'basic-feature-1': '1-page landing page',
      'basic-feature-2': '72-hour delivery',
      'standard-feature-1': 'Multi-section site',
      'standard-feature-2': 'Mobile responsive',
      'custom-feature-1': 'Custom requirements',
      'custom-feature-2': 'Quote on request',
      'pricing-trust': "No hidden fees. Pay only after you're satisfied with the design direction.",
      'section-about': 'About',
      'about-text': "I'm an international student at Ritsumeikan University in Osaka, and I've been passionate about building on the web ever since I wrote my first line of HTML. What started as a curiosity turned into a skill I use to help local businesses get online quickly with sites that actually look good and perform well. I keep things lean, communicate clearly, and ship fast.",
      'section-contact': 'Contact',
      'contact-lead': 'Got a project in mind? I reply within 24 hours.',
      'contact-email': 'yuvinomattu@gmail.com',
      'contact-instagram': 'Instagram',
      'contact-line': 'Line',
      'footer-tagline': 'I build fast, modern websites for businesses \u2014 delivered in 72 hours',
      'floating-cta': "\uD83D\uDCAC Let's Work"
    },
    jp: {
      'nav-work': '\u5b9f\u7e3e',
      'nav-pricing': '\u6599\u91d1',
      'nav-about': '\u81ea\u5df1\u7d39\u4ecb',
      'nav-contact': '\u304a\u554f\u3044\u5408\u308f\u305b',
      'hero-tagline': '\u30d3\u30b8\u30cd\u30b9\u5411\u3051\u306b\u9ad8\u901f\u3067\u30e2\u30c0\u30f3\u306a\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u5236\u4f5c\u3057\u307e\u3059 \u2014 \u6700\u77ed72\u6642\u9593\u3067\u7d0d\u54c1',
      'hero-trust-1': '\u2713 72\u6642\u9593\u7d0d\u54c1',
      'hero-trust-2': '\u2713 \u30e2\u30d0\u30a4\u30eb\u30d5\u30a1\u30fc\u30b9\u30c8\u8a2d\u8a08',
      'hero-trust-3': '\u2713 2\u3064\u306e\u5236\u4f5c\u5b9f\u7e3e',
      'hero-intro': '\u5927\u962a\u306e\u5927\u5b66\u751f\u3067\u3059\u3002\u4f01\u696d\u5411\u3051\u306e\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u3092\u5236\u4f5c\u3057\u3066\u3044\u307e\u3059\u3002\u30b9\u30d4\u30fc\u30c7\u30a3\u306a\u7d0d\u54c1\u3002\u30af\u30ea\u30fc\u30f3\u306a\u30b3\u30fc\u30c9\u3002\u30ea\u30fc\u30ba\u30ca\u30d6\u30eb\u306a\u4fa1\u683c\u3002',
      'btn-see-work': '\u5b9f\u7e3e\u3092\u898b\u308b',
      'btn-lets-talk': '\u76f8\u8ac7\u3059\u308b',
      'section-what-i-do': '\u3067\u304d\u308b\u3053\u3068',
      'service-landing-title': '\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8',
      'service-landing-desc': '\u6ce8\u76ee\u3092\u96c6\u3081\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4fc3\u3059\u3001\u9ad8\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5358\u4e00\u30da\u30fc\u30b8\u30b5\u30a4\u30c8\u3002\u30b9\u30d4\u30fc\u30c9\u3068\u30e2\u30d0\u30a4\u30eb\u5bfe\u5fdc\u3092\u6700\u512a\u5148\u306b\u8a2d\u8a08\u3057\u307e\u3059\u3002',
      'service-business-title': '\u30d3\u30b8\u30cd\u30b9\u30b5\u30a4\u30c8',
      'service-business-desc': '\u4fe1\u983c\u611f\u3092\u7bc9\u304f\u305f\u3081\u306e\u30af\u30ea\u30fc\u30f3\u3067\u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb\u306a\u30de\u30eb\u30c1\u30bb\u30af\u30b7\u30e7\u30f3\u30b5\u30a4\u30c8\u3002\u30ab\u30d5\u30a7\u3001\u4ee3\u7406\u5e97\u3001\u5730\u5143\u4f01\u696d\u306b\u6700\u9069\u3067\u3059\u3002',
      'service-delivery-title': '\u9ad8\u901f\u7d0d\u54c1',
      'service-delivery-desc': '\u307b\u307c\u3093\u3069\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u309272\u6642\u9593\u4ee5\u5185\u306b\u7d0d\u54c1\u3002\u80a5\u5927\u5316\u3057\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u4f7f\u308f\u305a\u3001\u624b\u66f8\u304d\u306e\u30b3\u30fc\u30c9\u3067\u30c6\u30b9\u30c8\u6e08\u307f\u3001\u3059\u3050\u306b\u516c\u958b\u53ef\u80fd\u3067\u3059\u3002',
      'section-portfolio': '\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa',
      'project-cafe-desc': '\u30e2\u30c0\u30f3\u306a\u30ab\u30d5\u30a7\u306e\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8 \u2014 \u6e29\u304b\u307f\u306e\u3042\u308b\u30c7\u30b6\u30a4\u30f3\u3001\u30e2\u30d0\u30a4\u30eb\u30d5\u30a1\u30fc\u30b9\u30c8\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30bb\u30af\u30b7\u30e7\u30f3',
      'project-nexus-desc': '\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u306eSaaS\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8 \u2014 \u30d7\u30ec\u30df\u30a2\u30e0\u30c7\u30b6\u30a4\u30f3\u3001\u30b9\u30af\u30ed\u30fc\u30eb\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3',
      'live-site': '\u30b5\u30a4\u30c8\u3092\u898b\u308b \u2197',
      'section-pricing': '\u6599\u91d1',
      'tier-basic': '\u30d9\u30fc\u30b7\u30c3\u30af',
      'tier-standard': '\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9',
      'tier-custom': '\u30ab\u30b9\u30bf\u30e0',
      'price-contact': '\u304a\u554f\u3044\u5408\u308f\u305b',
      'basic-feature-1': '1\u30da\u30fc\u30b8\u306e\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8',
      'basic-feature-2': '72\u6642\u9593\u7d0d\u54c1',
      'standard-feature-1': '\u30de\u30eb\u30c1\u30bb\u30af\u30b7\u30e7\u30f3\u30b5\u30a4\u30c8',
      'standard-feature-2': '\u30e2\u30d0\u30a4\u30eb\u5bfe\u5fdc',
      'custom-feature-1': '\u30ab\u30b9\u30bf\u30e0\u8981\u4ef6',
      'custom-feature-2': '\u898b\u7a4d\u3082\u308a\u4f9d\u983c',
      'pricing-trust': '\u8ffd\u52a0\u6599\u91d1\u306a\u3057\u3002\u30c7\u30b6\u30a4\u30f3\u65b9\u5411\u6027\u306b\u3054\u6e80\u8db3\u3044\u305f\u3060\u3044\u3066\u304b\u3089\u304a\u652f\u6255\u3044\u304f\u3060\u3055\u3044\u3002',
      'section-about': '\u81ea\u5df1\u7d39\u4ecb',
      'about-text': '\u7acb\u547d\u9928\u5927\u5b66\u306b\u901a\u3046\u7559\u5b66\u751f\u3067\u3001\u521d\u3081\u3066HTML\u3092\u66f8\u3044\u305f\u6642\u304b\u3089\u30a6\u30a7\u30d6\u5236\u4f5c\u306b\u306e\u3081\u308a\u8fbc\u307f\u307e\u3057\u305f\u3002\u597d\u5947\u5fc3\u304b\u3089\u59cb\u307e\u3063\u305f\u3082\u306e\u304c\u3001\u5730\u5143\u4f01\u696d\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u5316\u3092\u30b9\u30d4\u30fc\u30c7\u30a3\u306b\u652f\u63f4\u3059\u308b\u30b9\u30ad\u30eb\u306b\u6210\u9577\u3057\u307e\u3057\u305f\u3002\u898b\u305f\u76ee\u304c\u3088\u304f\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3082\u512a\u308c\u305f\u30b5\u30a4\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u7121\u99c4\u3092\u7701\u304d\u3001\u660e\u78ba\u306b\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3057\u3001\u8fc5\u901f\u306b\u7d0d\u54c1\u3057\u307e\u3059\u3002',
      'section-contact': '\u304a\u554f\u3044\u5408\u308f\u305b',
      'contact-lead': '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u3054\u76f8\u8ac7\u306f\u3053\u3061\u3089\u304b\u3089\u300224\u6642\u9593\u4ee5\u5185\u306b\u8fd4\u4fe1\u3057\u307e\u3059\u3002',
      'contact-email': 'yuvinomattu@gmail.com',
      'contact-instagram': 'Instagram',
      'contact-line': 'Line',
      'footer-tagline': '\u30d3\u30b8\u30cd\u30b9\u5411\u3051\u306b\u9ad8\u901f\u3067\u30e2\u30c0\u30f3\u306a\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u5236\u4f5c\u3057\u307e\u3059 \u2014 \u6700\u77ed72\u6642\u9593\u3067\u7d0d\u54c1',
      'floating-cta': '\uD83D\uDCAC \u76f8\u8ac7\u3059\u308b'
    }
  };

  var currentLang = localStorage.getItem('yuviro-lang') || 'en';

  function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('yuviro-lang', lang);

    document.documentElement.setAttribute('lang', lang === 'jp' ? 'ja' : 'en');

    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    var toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = lang === 'en' ? 'JP' : 'EN';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    switchLanguage(currentLang);

    var toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        var nextLang = currentLang === 'en' ? 'jp' : 'en';
        switchLanguage(nextLang);
      });
    }

    /* ---------- Currency Toggle ---------- */
    var savedCurrency = localStorage.getItem('yuviro-currency') || 'jpy';
    var currencyButtons = document.querySelectorAll('.currency-toggle-btn');
    var priceElements = document.querySelectorAll('.pricing-price[data-jpy]');

    function switchCurrency(currency) {
      var target = currency.toLowerCase();
      var attr = 'data-' + target;

      priceElements.forEach(function (el) {
        el.classList.add('is-changing');
        window.setTimeout(function () {
          el.textContent = el.getAttribute(attr) || el.textContent;
          el.classList.remove('is-changing');
        }, 200);
      });

      currencyButtons.forEach(function (btn) {
        var isActive = btn.getAttribute('data-currency') === target;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });

      localStorage.setItem('yuviro-currency', target);
    }

    currencyButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var currency = btn.getAttribute('data-currency');
        if (currency) {
          switchCurrency(currency);
        }
      });
    });

    switchCurrency(savedCurrency);
  });

  /* ---------- Mobile Navigation ---------- */
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  var mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMenu() {
    var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('is-open');
  }

  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', toggleMenu);
    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ---------- Smooth Scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- Close mobile menu on Escape key ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeMenu();
    }
  });

  /* ---------- Floating CTA visibility after scroll ---------- */
  var floatingCta = document.querySelector('.floating-cta');
  if (floatingCta) {
    function toggleFloatingCta() {
      if (window.scrollY > 200) {
        floatingCta.classList.add('is-visible');
      } else {
        floatingCta.classList.remove('is-visible');
      }
    }
    window.addEventListener('scroll', toggleFloatingCta, { passive: true });
    toggleFloatingCta();
  }
})();
