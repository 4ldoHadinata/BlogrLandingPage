function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menu_icon_img = document.querySelector('#menu-icon-img');
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menu_icon_img.src = "./images/icon-hamburger.svg";
    } else {
        menu.style.display = "block";
        menu_icon_img.src = "./images/icon-close.svg";
    }
}