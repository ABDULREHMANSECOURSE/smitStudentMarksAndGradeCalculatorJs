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


var subject = document.getElementById('subject');
var mark = document.getElementById('mark')


var button = document.getElementById('button');


var resultSubject = document.getElementById('resultSubject');
var resultMarks = document.getElementById('resultMarks')


function changeText() {
    resultSubject.innerText = subject.value;
    resultMarks.innerText = mark.value
}

button.onclick = changeText;