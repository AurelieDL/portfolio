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

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


/* =================== Test active section =================== */

// const nav = document.querySelector(".nav"),
//     navList = nav.nav.querySelectorAll("li"),
//     totalNavList = navList.length,
//     allSection = document.querySelectorAll(".section"),
//     totalSection = allSection.length;
// for (let i = 0; i < totalNavList; i++) {
//     const a = navList[i].querySelector("a");
//     a.addEventListener("click", function () {
//         for (let j = 0; j < totalNavList; j++) {

//             navList[j].querySelector("a").classList.remove("active");
//         }
//         this.classList.add("active")
//         showSection(this);
//     })
// }

// function showSection(element) {
//     for (let i = 0; i < totalSection; i++) {
//         allSection[i].classList.remove("active");
//     }
//     const target = element.length("href").split("#")[1];
//     document.querySelector("#" = target).classList.add("active")
// }
