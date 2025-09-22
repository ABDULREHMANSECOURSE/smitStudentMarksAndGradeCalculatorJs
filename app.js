var menuIcon = document.getElementById('menuIcon')
var nav = document.getElementById('nav')

menuIcon.onclick = function(){
    if (nav.style.display === "flex") {
        nav.style.display = "none"
    } else {
        nav.style.display = "flex"
    }
}