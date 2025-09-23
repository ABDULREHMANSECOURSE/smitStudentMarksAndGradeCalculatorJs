var nav = document.getElementById('nav');
var menuIcon = document.getElementById('menuIcon');
var subjectMarkMain = document.getElementById('subjectMarkMain');
var subjectMark = document.getElementById('subjectMark');
var addSubject = document.getElementById('addSubject');
var button = document.getElementById('button');
var result = document.getElementById('result');
var resultSM = document.getElementById('resultSM');

function menuVisible() {
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}
menuIcon.onclick = menuVisible;

function subjectMarkAdder() {
    var resultCopy = resultSM.cloneNode(true);
    resultCopy.removeAttribute("id");

    // ✅ result box khali karo
    var resultSubject = resultCopy.querySelector("#resultSubject");
    var resultMarks = resultCopy.querySelector("#resultMarks");
    if (resultSubject) resultSubject.innerText = "";
    if (resultMarks) resultMarks.innerText = "";

    result.appendChild(resultCopy);

    var copy = subjectMark.cloneNode(true);
    copy.removeAttribute("id");

    // ✅ input clear
    var inputs = copy.querySelectorAll("input");
    inputs.forEach(input => input.value = "");

    subjectMarkMain.appendChild(copy);
}
addSubject.onclick = subjectMarkAdder;

function changeText() {
    var allSubjects = subjectMarkMain.querySelectorAll("input[id='subject']");
    var allMarks = subjectMarkMain.querySelectorAll("input[id='mark']");

    var allResultSubjects = result.querySelectorAll("#resultSubject");
    var allResultMarks = result.querySelectorAll("#resultMarks");

    for (var i = 0; i < allSubjects.length; i++) {
        allResultSubjects[i].innerText = allSubjects[i].value;
        allResultMarks[i].innerText = allMarks[i].value;
    }
}
button.onclick = changeText;
