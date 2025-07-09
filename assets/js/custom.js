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
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
        setTimeout(() => {
            el.style.transition = "opacity 0.8s, transform 0.8s";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, 200);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Typing effect for role
    const roleEl = document.getElementById("hero-role");
    const descEl = document.getElementById("hero-desc");
    descEl.textContent = "";
    if (roleEl) {
        typeText(roleEl, "Product Manager | Software Engineer", 20, () => {
            if (descEl) {
                typeText(
                    descEl,
                    "Building products with user-centric design and a focus on impact.",
                    10
                );
            }
        });
    }
    // Fade-in hero text and image
    fadeInOnLoad(".hero-text, .hero-image");
});
