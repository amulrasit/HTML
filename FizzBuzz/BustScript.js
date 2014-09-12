//var a = 3;


//function test() {
//    var x = document.getElementById("num").value;
//    alert(x);
//}

//document.write("FizzBuzz"+'</br></br>');
//for (a = 1; a < 100; a++) {
//    if(a%3==0 & a%5==0)
//        document.write(a + " is FizzBuzz </br>");
//    else if (a%3==0)
//        document.write(a + " is Fizz </br>");
//    else if (a % 5 == 0)
//        document.write(a + " is Buzz </br>");
//    else 
//        document.write(a +"</br>");
//}

var number = prompt("Pick a number to FizzBuzz up to!");

//function isNumeric(number)
//{
//if (isNaN(number)) 
//  {
//    alert("Must input numbers");
//    return false;
//  }

function bust() {

    if (isNaN(number) || (number - Math.floor(number)) != 0) 
  {
    alert("Must input numbers");
    return false;
  }

    var num = parseInt(number);

    for (i = 1; i <= num; i++) {
        if (i % 3 == 0 & i % 5 == 0) {
            document.write(i + " is FizzBuzz </br>");
        }
        else if (i % 3 === 0) {
            document.write(i + " is Fizz </br>");
        }
        else if (i % 5 === 0) {
            document.write(i + " is Buzz </br>");
        }
        else {
            document.write(i + "</br>");
        }
    }
}