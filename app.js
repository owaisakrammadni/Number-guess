var num1 = [];
var num2 = [];
function check() {
    num1.push(document.getElementById("num1").value)
    num2.push(document.getElementById("num1").value)
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num1").innerHTML = num2;
    // console.log(num1)
    // console.log(num2)
    compNum1 = num1 - "9999";
    compNum2 = num2 - "9999";
    compNum1 = -compNum1;
    compNum2 = -compNum2;
    document.getElementById("compNum1").innerHTML = "computer 1st name :" + compNum2;
    document.getElementById("compNum2").innerHTML = "computer 2st name :" + compNum2;
    result = (+compNum1 + +compNum2 + +num1 + +num2)
    document.getElementById("result").innerHTML = "result:" + result
    return false;




}
