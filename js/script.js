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



const navTogglerBtn = document.querySelector(".nav-toggler"),
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length,
    aside = document.querySelector(".sidebar");
navTogglerBtn.addEventListener("click", () => {

    asideSectionTogglerBtn();
})

const bodyPage = document.querySelector(".main-content");

bodyPage.addEventListener("click", () => {
    if (aside.classList.contains("open")) {
        asideSectionTogglerBtn();
    }
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


