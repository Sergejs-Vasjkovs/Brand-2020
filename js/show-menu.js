var buttonMenu = document.querySelector(".button-menu");
var menu = document.querySelector(".menu__drop-down");
var closeMenu = document.querySelector(".close-button");
var darkFIlter = document.querySelector(".page-brand");

buttonMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!document.body.classList.contains(darkFIlter)) {
        if (menu.classList.contains("menu-modal--show")) {
            menu.classList.remove("menu-modal--show");
            darkFIlter.classList.remove("page-brand--dark-mode");
        } else {
            menu.classList.add("menu-modal--show");
            darkFIlter.classList.add("page-brand--dark-mode");
        }
    } else {
        if (menu.classList.contains("menu-modal--show")) {
            menu.classList.remove("menu-modal--show");
        } else {
            menu.classList.add("menu-modal--show");
        }
    }
});

closeMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.remove("menu-modal--show");
    darkFIlter.classList.remove("page-brand--dark-mode");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (menu.classList.contains("menu-modal--show")) {
            evt.preventDefault();
            menu.classList.remove("menu-modal--show");
            darkFIlter.classList.remove("page-brand--dark-mode");
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


// Filters
//trends
var buttonTrends = document.getElementById("trends");
var trend = document.getElementById("trends--list");

buttonTrends.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (trend.classList.contains("filter__list--show")) {
        trend.classList.remove("filter__list--show");
    } else {
        trend.classList.add("filter__list--show");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (trend.classList.contains("filter__list--show")) {
            evt.preventDefault();
            trend.classList.remove("filter__list--show");
        }
    }
});

window.addEventListener("mouseup", function (evt) {
    if (document.getElementById("trends--list").contains(evt.target)) {
    } else {
        if (trend.classList.contains("filter__list--show")) {
            trend.classList.remove("filter__list--show");
        }
    }
});

//size
var buttonFilter = document.getElementById("size");
var filter = document.getElementById("size--list");

buttonFilter.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (filter.classList.contains("filter__list--show")) {
        filter.classList.remove("filter__list--show");
    } else {
        filter.classList.add("filter__list--show");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (filter.classList.contains("filter__list--show")) {
            evt.preventDefault();
            filter.classList.remove("filter__list--show");
        }
    }
});

window.addEventListener("mouseup", function (evt) {
    if (document.getElementById("size--list").contains(evt.target)) {
    } else {
        if (filter.classList.contains("filter__list--show")) {
            filter.classList.remove("filter__list--show");
        }
    }
});

//price
var buttonPrice = document.getElementById("price");
var price = document.getElementById("price--list");

buttonPrice.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (price.classList.contains("filter__list--show")) {
        price.classList.remove("filter__list--show");
    } else {
        price.classList.add("filter__list--show");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (price.classList.contains("filter__list--show")) {
            evt.preventDefault();
            price.classList.remove("filter__list--show");
        }
    }
});

window.addEventListener("mouseup", function (evt) {
    if (document.getElementById("price--list").contains(evt.target)) {
    } else {
        if (price.classList.contains("filter__list--show")) {
            price.classList.remove("filter__list--show");
        }
    }
});


