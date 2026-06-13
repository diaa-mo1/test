// ═══════════════════════════════════════════════
//  Noor Al-Tareeq — Shared Layout System
//  يُحقن في كل صفحة بـ <script src="/al-bayoumiyya/components/layout.js"></script>
// ═══════════════════════════════════════════════

(function () {
  const SITE_PAGES = [
    { id: 'home', label: 'الرئيسية', icon: 'home', href: '/al-bayoumiyya/index.html' },
    { id: 'awrad', label: 'الأوراد', icon: 'menu_book', href: '/al-bayoumiyya/awrad.html' },
    { id: 'audio', label: 'الصوتيات', icon: 'audiotrack', href: '/al-bayoumiyya/audio.html' },
    { id: 'videos', label: 'الفيديوهات', icon: 'videocam', href: '/al-bayoumiyya/videos.html' },
    { id: 'dalail', label: 'دلائل الخيرات', icon: 'auto_stories', href: '/al-bayoumiyya/dalail.html' },
  ];

  const currentPage = document.body.dataset.page || 'home';

  function iconHTML(name, filled) {
    const fillAttr = filled ? "font-variation-settings: 'FILL' 1;" : '';
    return `<span class="material-symbols-outlined" style="${fillAttr}">${name}</span>`;
  }

  function renderTopNav() {
    const container = document.getElementById('sidebar-container');
    if (!container) return;

    if (container.dataset.mode === 'admin') {
      renderAdminTopNav(container);
      return;
    }

    const links = SITE_PAGES.map(page => {
      const isActive = page.id === currentPage;
      const classes = isActive ? 'topnav-link topnav-active' : 'topnav-link';
      return `<a href="${page.href}" class="${classes}" aria-current="${isActive ? 'page' : 'false'}">${page.label}</a>`;
    }).join('');

    container.innerHTML = `
      <header class="topnav-container">
        <div class="topnav-inner">
          <div class="topnav-right">
            <a href="/al-bayoumiyya/index.html" class="topnav-title">الطريقة البيومية الأحمدية</a>
          </div>
          <nav class="topnav-center" aria-label="Main navigation">
            ${links}
          </nav>
          <div class="topnav-left">
            <a href="#" class="topnav-button">دخول</a>
            <div class="topnav-search">
              <span class="material-symbols-outlined">search</span>
              <input type="search" placeholder="بحث..." aria-label="بحث" />
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function renderAdminTopNav(container) {
    const links = SITE_PAGES.map(page => {
      const isActive = page.id === currentPage;
      const classes = isActive ? 'topnav-link topnav-active' : 'topnav-link';
      return `<a href="${page.href}" class="${classes}" aria-current="${isActive ? 'page' : 'false'}">${page.label}</a>`;
    }).join('');

    container.innerHTML = `
      <header class="topnav-container">
        <div class="topnav-inner">
          <div class="topnav-right">
            <a href="/al-bayoumiyya/index.html" class="topnav-title">الطريقة البيومية الأحمدية</a>
          </div>
          <nav class="topnav-center" aria-label="Main navigation">
            ${links}
          </nav>
          <div class="topnav-left">
            <a href="/al-bayoumiyya/admin/index.html" class="topnav-button">لوحة التحكم</a>
            <a href="/al-bayoumiyya/index.html" class="topnav-button">تسجيل الخروج</a>
          </div>
        </div>
      </header>
    `;
  }

  function renderMobileNav() {
    const container = document.getElementById('mobile-nav-container');
    if (!container) return;

    const items = SITE_PAGES.map(page => {
      const isActive = page.id === currentPage;
      const classes = isActive ? 'flex flex-col items-center text-secondary' : 'flex flex-col items-center text-on-surface-variant opacity-80';
      return `
        <a href="${page.href}" class="${classes} px-4 py-2">
          ${iconHTML(page.icon, isActive)}
          <span class="text-xs mt-1">${page.label}</span>
        </a>`;
    }).join('');

    container.innerHTML = `
      <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container border-t border-outline py-2 flex justify-around pb-safe">
        ${items}
      </nav>`;
  }

  function renderFooter() {
    const container = document.getElementById('footer-container');
    if (!container) return;
    container.innerHTML = `
      <footer class="w-full border-t border-outline bg-surface-container px-4 py-8">
        <div class="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div class="text-base font-semibold">الطريقة البيومية الأحمدية</div>
            <div class="mt-2 text-sm text-on-surface-variant">© السادة آل سلَّام</div>
          </div>
          <div class="flex flex-wrap gap-4 text-sm text-on-surface-variant">
            <a href="/al-bayoumiyya/index.html" class="hover:text-secondary">عن الطريقة</a>
            <a href="/al-bayoumiyya/index.html" class="hover:text-secondary">تواصل معنا</a>
            <a href="/al-bayoumiyya/index.html" class="hover:text-secondary">سياسة الخصوصية</a>
          </div>
        </div>
      </footer>`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderTopNav();
    renderMobileNav();
    renderFooter();
  });
})();
