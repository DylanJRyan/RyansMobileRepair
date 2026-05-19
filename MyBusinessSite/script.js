/* HEADER SHRINK */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shrink", window.scrollY > 80);
});

/* SMOOTH SCROLL */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* REVEAL ON SCROLL */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* HERO PARALLAX */
const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
    hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
});