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

var subjectMarkMain = document.getElementById('subjectMarkMain')

var subjectMark = document.getElementById('subjectMark')

var subject = document.getElementById('subject');
var mark = document.getElementById('mark')


var addSubject = document.getElementById('addSubject')
var button = document.getElementById('button');

var result = document.getElementById('result')

var resultSM = document.getElementById('resultSM')

var resultSubject = document.getElementById('resultSubject');
var resultMarks = document.getElementById('resultMarks')


function subjectMarkAdder() {
    var resultCopy = resultSM.cloneNode(true)
    resultCopy.removeAttribute("id")
    result.appendChild(resultCopy)

    var copy = subjectMark.cloneNode(true);
    copy.removeAttribute("id");
    subjectMarkMain.appendChild(copy);
}

addSubject.onclick = subjectMarkAdder;




function changeText() {
    resultSubject.innerText = subject.value;
    resultMarks.innerText = mark.value
}

button.onclick = changeText;