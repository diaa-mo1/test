// Filter module for awrad and audio listing pages
(function () {
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  if (!filterButtons.length) return;

  const cards = Array.from(document.querySelectorAll('[data-category]'));
  if (!cards.length) return;

  function setActiveButton(activeButton) {
    filterButtons.forEach(button => {
      button.classList.toggle('topnav-active', button === activeButton);
      button.setAttribute('aria-pressed', button === activeButton ? 'true' : 'false');
    });
  }

  function applyFilter(filterValue) {
    cards.forEach(card => {
      const category = card.dataset.category || '';
      const matches = filterValue === 'كل' || category === filterValue;
      card.style.display = matches ? '' : 'none';
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.dataset.filter;
      if (!filterValue) return;
      setActiveButton(button);
      applyFilter(filterValue);
    });
  });

  // Initialize default filter state
  const defaultButton = filterButtons.find(button => button.dataset.filter === 'كل') || filterButtons[0];
  if (defaultButton) {
    setActiveButton(defaultButton);
    applyFilter(defaultButton.dataset.filter || 'كل');
  }
})();
