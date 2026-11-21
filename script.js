document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. Mobile Hamburger Drawer Controls
     ------------------------------------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const closeDrawer = document.getElementById('closeDrawer');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle?.addEventListener('click', openMobileMenu);
  closeDrawer?.addEventListener('click', closeMobileMenu);
  drawerBackdrop?.addEventListener('click', closeMobileMenu);

  // Close drawer automatically if user resizes up to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileDrawer.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  /* ------------------------------------------------------------------------
     2. Collapsible Search Bar Toggle
     ------------------------------------------------------------------------ */
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');

  searchToggle?.addEventListener('click', () => {
    const isHidden = searchBar.hasAttribute('hidden');
    if (isHidden) {
      searchBar.removeAttribute('hidden');
      searchBar.querySelector('input')?.focus();
    } else {
      searchBar.setAttribute('hidden', '');
    }
  });

  /* ------------------------------------------------------------------------
     3. Accessible Desktop Dropdown Toggle (Keyboard & Click Support)
     ------------------------------------------------------------------------ */
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = trigger.closest('.has-dropdown');
      const isOpen = parent.classList.contains('open');

      document.querySelectorAll('.has-dropdown').forEach((item) => {
        item.classList.remove('open');
        item.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        parent.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.has-dropdown').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
    });
  });
});