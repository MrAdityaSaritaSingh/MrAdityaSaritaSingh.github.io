/**
 * Enhanced Responsive Embed Controls
 * Handles fullscreen toggle for Google Drive embeds
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find all embed wrappers on the page
  const embedWrappers = document.querySelectorAll('[id^="embed-wrapper-"]');
  
  embedWrappers.forEach(wrapper => {
    const fileId = wrapper.id.replace('embed-wrapper-', '');
    const fullscreenBtn = document.getElementById(`fullscreen-toggle-${fileId}`);
    
    if (!fullscreenBtn) return;

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        wrapper.requestFullscreen().catch(err => {
          console.error('Fullscreen failed:', err);
        });
      } else {
        document.exitFullscreen();
      }
    }

    // Button listener
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Fullscreen change handler
    document.addEventListener('fullscreenchange', () => {
      const icon = fullscreenBtn.querySelector('i');
      if (document.fullscreenElement === wrapper) {
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');
        wrapper.classList.add('embed-wrapper--fullscreen');
      } else if (!document.fullscreenElement) {
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
        wrapper.classList.remove('embed-wrapper--fullscreen');
      }
    });
  });

  // Global keyboard shortcut for fullscreen (F key)
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    if (e.key === 'f' || e.key === 'F') {
      const firstWrapper = document.querySelector('[id^="embed-wrapper-"]');
      if (firstWrapper) {
        e.preventDefault();
        const fileId = firstWrapper.id.replace('embed-wrapper-', '');
        const btn = document.getElementById(`fullscreen-toggle-${fileId}`);
        if (btn) btn.click();
      }
    }
  });
});
