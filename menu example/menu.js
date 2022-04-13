const menu = document.querySelector(".menu");
const contactMenu = document.querySelector(".contact__menu");
const menuItems = document.querySelectorAll(".menu__item");
const menuItem3 = document.querySelector(".menu__item3")
const menuItem4 = document.querySelector(".menu__item4")
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);
/*
menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)*/