// 3D tilt effect for project cards
// Applies to .project-card > .card-3d
document.querySelectorAll(".project-card").forEach((card) => {
    const card3d = card.querySelector(".card-3d");
    if (!card3d) return;
    card.addEventListener("mousemove", (e) => {
        const rect = card3d.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
        const rotateY = ((x - centerX) / centerX) * 8;
        card3d.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });
    card.addEventListener("mouseleave", () => {
        card3d.style.transform = "";
    });
});

// Typing effect
function typeText(element, text, speed = 60, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    element.textContent = "";
    type();
}

// Fade-in effect for hero section
function fadeInOnLoad(selector) {
    document.querySelectorAll(selector).forEach((el) => {
        // Add a small delay before adding the visible class to start the animation
        setTimeout(() => {
            el.classList.add("visible");
        }, 200);
    });
}

// Scroll-triggered fade-in animation
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll(".scroll-fade-in");
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: "0px 0px -50px 0px", // Start animation a little before it's fully in view
        }
    );

    animatedElements.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
    // Fade-in hero text and image
    fadeInOnLoad(".hero-text, .hero-image");

    // Typing effect for role, delayed to sync with fade-in
    /*
    setTimeout(() => {
        const roleEl = document.getElementById("hero-role");
        const descEl = document.getElementById("hero-desc");
        const roleText = roleEl ? roleEl.getAttribute("data-text") : null;
        const descText = descEl ? descEl.getAttribute("data-text") : null;

        if (roleEl && roleText) {
            typeText(roleEl, roleText, 20, () => {
                if (descEl && descText) {
                    typeText(descEl, descText, 10);
                }
            });
        }
    }, 500); // Start typing 500ms after page load
    */

    // Add zoom effect to hero image on hover
    const heroImg = document.querySelector(".hero-image");
    if (heroImg) {
        heroImg.style.transition =
            "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
        heroImg.addEventListener("mouseenter", () => {
            heroImg.style.transform = "scale(1.12)";
        });
        heroImg.addEventListener("mouseleave", () => {
            heroImg.style.transform = "scale(1)";
        });
    }

    // Setup scroll animations
    setupScrollAnimations();

    // Curator Modal Logic
    const modal = document.getElementById("curatorModal");

    if (modal) {
      const closeButton = modal.querySelector(".close-button");
      const cancelButton = modal.querySelector(".cancel-button");

      const showModal = () => {
        modal.style.display = "flex"; // Use flex to align center
      };

      const hideModal = () => {
        modal.style.display = "none";
      };

      // Show the modal a moment after the page loads to ensure everything is ready
      // setTimeout(showModal, 500);

      // Event listeners to close the modal
      if (closeButton) {
        closeButton.addEventListener("click", hideModal);
      }
      if (cancelButton) {
        cancelButton.addEventListener("click", hideModal);
      }

      // Close modal if user clicks on the background overlay
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          hideModal();
        }
      });
    }
});
