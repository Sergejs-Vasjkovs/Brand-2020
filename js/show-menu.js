var buttonMenu = document.querySelector(".button-menu");
var menu = document.querySelector(".menu-modal");
var closeMenu = document.querySelector(".modal-close");

buttonMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (menu.classList.contains("menu-modal--show")) {
        menu.classList.remove("menu-modal--show");
    } else {
        menu.classList.add("menu-modal--show");
    }
});

closeMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.remove("menu-modal--show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (menu.classList.contains("menu-modal--show")) {
            evt.preventDefault();
            menu.classList.remove("menu-modal--show");
        }
    }
});



