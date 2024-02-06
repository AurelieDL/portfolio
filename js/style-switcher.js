/* Toggler style switcher */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("clic", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})