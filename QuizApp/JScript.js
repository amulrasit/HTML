var count = 2;

$(document).ready(function () {

    $('#Next').click(function (event) {
        event.preventDefault();
        //        count++;
        if (count > 5) {
            $('#Submit').show();
        }
    });

});


var questions = ["Which tag makes the largest headline?",
"ISP is",
 "Gif is a ",
 "HTML is", "HTTP is a"];

var q1 = ["H1", "H2", "H3", "H4"];

var q2 = ["a company that provides access to the Internet.",
"the language of the Web.",
"common graphic format on the Web.",
"common questions and answers."];

var q3 = ["the language of the Web", "common graphic format on the Web.", "a company that provides access to the Internet.", "common questions and answers."];

var q4 = ["a company that provides access to the Internet.", "common questions and answers", "the language of the Web.", "common graphic format on the Web."];

var q5 = ["the transfer method used on the Web.", "file format used to transfer files from one word processor to another.",
        "a Web Address", "file format that retains format on the Web."];

var refQuestion = document.getElementById("referenceQuest").innerHTML;

var question = document.getElementById("Question").innerHTML;

function NextQuestion() {

    if (count <= 5) {

        document.getElementById("referenceQuest").innerHTML = count;

        if (count == 1) {
            radioDesign(q1);
        }
        else if (count == 2) {
            radioDesign(q2);
        }
        else if (count == 3) {
            radioDesign(q3);
        }
        else if (count == 4) {
            radioDesign(q4);
        }
        else if (count == 5) {
            radioDesign(q5);
        }

        document.getElementById("Question").innerHTML = questions[count-1];        

        count++;
    }
}

function radioDesign(qChoice) {
    document.getElementById("Label1").innerHTML = qChoice[0];
    document.getElementById("Label2").innerHTML = qChoice[1];
    document.getElementById("Label3").innerHTML = qChoice[2];
    document.getElementById("Label4").innerHTML = qChoice[3];
}