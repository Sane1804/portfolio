const ABOUT_SECTION = document.querySelector("#about")
const ARROW_UP = document.querySelector(".arrow-up");


const changeOpacity = (strNumber) => {
    let number = Number(strNumber)
    if (number > 260) {
        ARROW_UP.style.opacity = 0;
    } else {
        ARROW_UP.style.opacity = 1;
    }
}

window.addEventListener("scroll", () => {
    const cordinates = ABOUT_SECTION.getBoundingClientRect();
    let y = cordinates.y
    changeOpacity(y.toFixed(0))
})