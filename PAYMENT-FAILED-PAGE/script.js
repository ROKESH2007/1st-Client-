document.addEventListener('DOMContentLoaded', () => {
  /* Mobile Hamburger Drawer */
  const menuToggle = document.getElementById('menuToggle');
  const closeDrawer = document.getElementById('closeDrawer');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawerMenu() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle?.addEventListener('click', openDrawer);
  closeDrawer?.addEventListener('click', closeDrawerMenu);
  drawerBackdrop?.addEventListener('click', closeDrawerMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileDrawer.classList.contains('open')) {
      closeDrawerMenu();
    }
  });

  /* Search Toggle */
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');

  searchToggle?.addEventListener('click', () => {
    if (searchBar.hasAttribute('hidden')) {
      searchBar.removeAttribute('hidden');
      searchBar.querySelector('input')?.focus();
    } else {
      searchBar.setAttribute('hidden', '');
    }
  });

  /* Desktop Dropdowns */
  document.querySelectorAll('.dropdown-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = trigger.closest('.has-dropdown');
      const isOpen = parent.classList.contains('open');

      document.querySelectorAll('.has-dropdown').forEach((el) => {
        el.classList.remove('open');
        el.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        parent.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.has-dropdown').forEach((el) => {
      el.classList.remove('open');
      el.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
    });
  });

  /* Payment Action Feedback */
  const retryBtn = document.getElementById('retryBtn');
  const methodBtn = document.getElementById('methodBtn');
  const statusMsg = document.getElementById('statusMsg');

  retryBtn?.addEventListener('click', () => {
    statusMsg.textContent = 'Retrying payment for Order #HVE-89201...';
  });

  methodBtn?.addEventListener('click', () => {
    statusMsg.textContent = 'Opening payment method options (UPI, Card, Net Banking)...';
  });
});