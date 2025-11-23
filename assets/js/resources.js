  const modal = document.getElementById('leadModal');
  const resourceInput = document.getElementById('resourceEntry');
  const leadForm = document.getElementById('leadForm');
  let currentDownloadUrl = '';

  function openModal(resourceName, url) {
    // Store the download URL for later
    currentDownloadUrl = url;

    // Set the resource name in the hidden form field (for the Google Form)
    // If you haven't set up the entry ID yet, this won't do anything, which is fine for testing.
    if (resourceInput) resourceInput.value = resourceName;
    
    // Also set the hidden input that we actually use in handleSubmit
    const hiddenResourceInput = document.getElementById('resource-name');
    if (hiddenResourceInput) hiddenResourceInput.value = resourceName;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    // leadForm might be null if the ID is different, checking lead-magnet-form instead
    const form = document.getElementById('lead-magnet-form');
    if (form) form.reset();
  }

  // Close modal if clicking outside content
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('lead-magnet-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;

    // Get values
    const roleInput = document.getElementById('role');
    const resourceName = document.getElementById('resource-name').value;
    const originalRole = roleInput.value;

    // Append resource name to role for the "Reason" field in Google Forms
    // This allows tracking which resource was downloaded without a dedicated field
    roleInput.value = `${originalRole} (Downloaded: ${resourceName})`;

    submitBtn.innerText = 'Processing...';
    submitBtn.disabled = true;

    // Submit the form
    form.submit();

    // Reset role input to original value (in case user stays on page)
    setTimeout(() => {
      roleInput.value = originalRole;
    }, 100);

    // Show success and trigger download
    setTimeout(() => {
      closeModal();
      alert("Thanks! Your download has started.");

      // Trigger download
      const link = document.createElement('a');
      link.href = currentDownloadUrl;
      link.download = currentDownloadUrl.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form
      form.reset();
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
    }, 1000); // Wait a bit for the form submission to likely complete
  }

  // Deep Linking Logic
  function copyLink(id) {
    const url = new URL(window.location.href);
    url.searchParams.set('id', id);
    navigator.clipboard.writeText(url.toString()).then(() => {
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  // Check for ID in URL on load
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resourceId = urlParams.get('id');

    if (resourceId && typeof resourcesData !== 'undefined' && resourcesData[resourceId]) {
      const resource = resourcesData[resourceId];
      openModal(resource.title, resource.url);
    }

    // Move modal to body to ensure it's on top of everything (fixes z-index issues)
    const modal = document.getElementById('leadModal');
    if (modal) {
      document.body.appendChild(modal);
    }
  });
