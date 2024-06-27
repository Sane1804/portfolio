const ABOUT_SECTION = document.querySelector("#about")
const ARROW_UP = document.querySelector(".arrow-up");
const CV_BTN = document.querySelector(".cv-button")




CV_BTN.addEventListener("click", (e) => {
    downloadCv(e.target)
})


const changeArrowUpOpacity = (strNumber) => {
    let yCordinates = Number(strNumber)
    if (yCordinates > 260) {
        ARROW_UP.style.opacity = 0;
    } else {
        ARROW_UP.style.opacity = 1;x
    }
}

window.addEventListener("scroll", () => {
    const cordinates = ABOUT_SECTION.getBoundingClientRect();
    let y = cordinates.y
    changeArrowUpOpacity(y.toFixed(0))
})