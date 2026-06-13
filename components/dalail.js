// Dalail reader interaction module
(function () {
  const STORAGE_KEY = 'nooraltareeq_dalail_font_size';
  const dropdown = document.getElementById('dalail-hizb-dropdown');
  const titleEl = document.getElementById('dalail-hizb-title');
  const textEl = document.getElementById('dalail-hizb-text');
  const prevBtn = document.getElementById('dalail-prev-btn');
  const nextBtn = document.getElementById('dalail-next-btn');
  const increaseBtn = document.getElementById('text_increase');
  const decreaseBtn = document.getElementById('text_decrease');
  const listenBtn = document.getElementById('dalail-listen-btn');

  let items = [];
  let currentIndex = 0;
  let fontSize = 18;

  function loadItems() {
    fetch('/al-bayoumiyya/data/dalail.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data) && data.length) {
          items = data;
        } else {
          items = getDefaultItems();
        }
      })
      .catch(() => {
        items = getDefaultItems();
      })
      .finally(() => {
        renderDropdown();
        renderCurrentItem();
      });
  }

  function getDefaultItems() {
    return [
      {
        title: 'الحزب الأول',
        content: '<p>اللهم صلِّ على سيدنا محمد وعلى آله وصحبه وسلم. هذا الحزب مبارك للبدء في اليوم بنور الذكر.</p><p>اللهم اجعله سبباً لهداية ومغفرة وسكينة في القلب.</p>'
      },
      {
        title: 'الحزب الثاني',
        content: '<p>اللهم صلِّ على محمد وآل محمد كما صليت على إبراهيم وعلى آل إبراهيم. هذا الحزب يجدد العهد بالمصطفى ﷺ وينير القلب بذكره.</p><p>اللهم اجعلنا من المحبين والمداومين عليه.</p>'
      }
    ];
  }

  function renderDropdown() {
    if (!dropdown || !items.length) return;
    dropdown.innerHTML = items
      .map((item, index) => `<option value="${index}">${item.title}</option>`)
      .join('');
    dropdown.value = currentIndex;
  }

  function renderCurrentItem() {
    if (!items.length) return;
    const item = items[currentIndex];
    if (!item) return;

    if (titleEl) titleEl.textContent = item.title;
    if (textEl) textEl.innerHTML = item.content;
    if (dropdown) dropdown.value = currentIndex;
    updateNavigation();
    updateTextSize();
  }

  function updateNavigation() {
    if (prevBtn) prevBtn.disabled = currentIndex <= 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= items.length - 1;
  }

  function updateTextSize() {
    if (!textEl) return;
    textEl.style.fontSize = `${fontSize}px`;
    localStorage.setItem(STORAGE_KEY, fontSize);
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-50 rounded-full border border-secondary/20 bg-surface-container px-6 py-3 text-sm text-on-surface shadow-lg';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  function bindEvents() {
    if (dropdown) {
      dropdown.addEventListener('change', () => {
        currentIndex = Number(dropdown.value) || 0;
        renderCurrentItem();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentIndex <= 0) return;
        currentIndex -= 1;
        renderCurrentItem();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentIndex >= items.length - 1) return;
        currentIndex += 1;
        renderCurrentItem();
      });
    }

    if (increaseBtn) {
      increaseBtn.addEventListener('click', () => {
        fontSize = Math.min(26, fontSize + 2);
        updateTextSize();
      });
    }

    if (decreaseBtn) {
      decreaseBtn.addEventListener('click', () => {
        fontSize = Math.max(16, fontSize - 2);
        updateTextSize();
      });
    }

    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        const item = items[currentIndex];
        if (!item) return;
        showToast(`تشغيل قراءة ${item.title}`);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      const storedSize = Number(localStorage.getItem(STORAGE_KEY));
      if (storedSize && !Number.isNaN(storedSize)) {
        fontSize = storedSize;
      }
    } catch (_) {
      fontSize = 18;
    }
    bindEvents();
    loadItems();
  });
})();
