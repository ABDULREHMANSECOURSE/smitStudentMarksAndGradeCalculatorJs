var nav = document.getElementById('nav')
var menuIcon = document.getElementById('menuIcon')


function menuVisible(){
    if (nav.style.display === "flex") {
        nav.style.display = "none"
    } else {
        nav.style.display = "flex"
    }
}

menuIcon.onclick = menuVisible