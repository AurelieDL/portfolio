/* =================== Typing animation =================== */
var typed = new Typed(".typing", {
    strings: ["", "développeuse web", "créative", "passionnée", "curieuse"],
    typeSpeed: 100,
    Backspeed: 100,
    loop: true,
    startDelay: 500,
})

/* =================== Scroll sections active link =================== */
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");
// allSection = document.querySelectorAll(".section");
// totalSection = allSection.length;
// add an event listner listening for scroll
window.addEventListener("scroll", navHighlighter)

function navHighlighter() {
    //get current scroll position
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")

        }
    })
}

