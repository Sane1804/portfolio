const NAVBAR_ITEMS = document.querySelectorAll(".link");

const resetNavItemColor = () => {
    let navItems = NAVBAR_ITEMS;
    navItems.forEach(item => item.classList.remove("link-clicked"))
}

const handleClick = (e) => {
    let item = e.target;
    resetNavItemColor()
    item.classList.add("link-clicked");
}

NAVBAR_ITEMS.forEach(item => item.addEventListener("click" , (e) => {
    handleClick(e)
}))