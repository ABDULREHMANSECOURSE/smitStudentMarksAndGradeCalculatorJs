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

var addSubject = document.getElementById('addSubject')
var button = document.getElementById('button');

var result = document.getElementById('result')
var resultSM = document.getElementById('resultSM')

function subjectMarkAdder() {
    var resultCopy = resultSM.cloneNode(true)
    resultCopy.removeAttribute("id")

    var resultSubject = resultCopy.querySelector("#resultSubject")
    var resultMarks = resultCopy.querySelector("#resultMarks")
    if (resultSubject) resultSubject.innerText = ""
    if (resultMarks) resultMarks.innerText = ""

    result.appendChild(resultCopy)

    var copy = subjectMark.cloneNode(true);
    copy.removeAttribute("id");

    var inputs = copy.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    subjectMarkMain.appendChild(copy);
}

addSubject.onclick = subjectMarkAdder;


// ✅ Check Result -> saare inputs padho aur result boxes me likho
function changeText() {
    var allSubjects = subjectMarkMain.querySelectorAll("input[id='subject']");
    var allMarks = subjectMarkMain.querySelectorAll("input[id='mark']");

    var allResultSubjects = result.querySelectorAll("div #resultSubject");
    var allResultMarks = result.querySelectorAll("div #resultMarks");

    var total = 0;
    var status = "Pass ✅";

    for (var i = 0; i < allSubjects.length; i++) {
        allResultSubjects[i].innerText = allSubjects[i].value;
        allResultMarks[i].innerText = allMarks[i].value;

        var val = parseInt(allMarks[i].value) || 0;
        total += val;

        if (val < 33) {
            status = "Fail ❌";
        }
    }

    var maxMarks = allMarks.length * 100;
    var percentage = (total / maxMarks) * 100;

    // ✅ Naya result info add karo
    document.getElementById("totalMarks").innerText = "Total: " + total + "/" + maxMarks;
    document.getElementById("percentage").innerText = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById("status").innerText = "Status: " + status;
}

button.onclick = changeText;
