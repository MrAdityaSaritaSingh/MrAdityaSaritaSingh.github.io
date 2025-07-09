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
