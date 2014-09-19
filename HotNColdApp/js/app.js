
$(document).ready(function () {
//    var count = 0;
    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });


    
//    $('#guessButton').click(function () {
//        count++;
//        $('#count').html(count);
//        
//    });

});

var guessCorrect=0;

var secretNo = null;

var secretNumber = null;

function newGame() {
    localStorage.secretNo = Math.floor((Math.random() * 100) + 1);   
    
//    alert(localStorage.secretNo);
}
secretNo = secretNumber;
var guessNo=document.getElementById("guessList").value;
var clicks = 0;
function feedback() {
    
//        clicks += 1;
//        document.getElementById("count").innerHTML = clicks; 
    
    //  alert(localStorage.secretNo);
    if (localStorage.secretNo != null) {
        var secretNum = localStorage.secretNo;
    }
    else
        localStorage.secretNo = Math.floor((Math.random() * 100) + 1);

    var userNum = document.getElementById("userGuess").value;

        
    if (isNaN(userNum) || (userNum - Math.floor(userNum)) != 0) {
        alert("Must input numbers");        
        return false;
    }

    var diff = null;
    if (userNum > secretNum) {
        diff = userNum - secretNum;
    }
    else {
        diff = secretNum - userNum;
    }
    
    if (diff >= 50) {
        alert("ICE COLD");
    }

    else if ((diff >= 30) && (diff < 50)) {
        alert("COLD");
    }

    else if ((diff >= 20) && (diff < 30)) {
        alert("WARM");
    }

    else if ((diff >= 10) && (diff < 20)) {
        alert("HOT");
    }

    else if ((diff >= 1) && (diff < 10)) {
        alert("VERY HOT");
    }

    else if (diff == 0) {
    guessCorrect = 1;
    alert("You WON");
    }

    if(guessCorrect==0)
    {
        document.getElementById("guessList").value=guessNo+userNum;
    }
}


