document.addEventListener('DOMContentLoaded', () => {
  const common_cookie_popup_selectors = [
    '.cookie-banner',
    '.cookie-popup',
    '.cookie-notice',
    '.cookie-consent',
    '.gdpr-banner',
    '.gdpr-popup',
    '.gdpr-notice',
    '.gdpr-consent'
  ];

  function removeCookiePopups() {
    common_cookie_popup_selectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          element.remove();
        });
      } catch (error) {
        console.error('Error removing cookie pop-up:', error);
      }
    });
  }

  removeCookiePopups();
});