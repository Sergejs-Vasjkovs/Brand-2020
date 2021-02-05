var buttonMenu = document.querySelector(".button-menu");
var menu = document.querySelector(".menu__drop-down");
var closeMenu = document.querySelector(".drop-down__close-button");

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


// Search button

var buttonSearch = document.querySelector(".button-search");
var search = document.querySelector(".button-search__input");

buttonSearch.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (search.classList.contains("button-search__input--show")) {
        search.classList.remove("button-search__input--show");
    } else {
        search.classList.add("button-search__input--show");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (search.classList.contains("button-search__input--show")) {
            evt.preventDefault();
            search.classList.remove("button-search__input--show");
        }
    }
});

