window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js', { scope: '/' })
      .then(reg => {

        reg.update();

      }).catch(err => console.log('SW registration FAIL:', err));
  }
});
