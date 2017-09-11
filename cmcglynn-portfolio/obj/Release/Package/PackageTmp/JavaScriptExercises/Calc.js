function numCal() {
    var firstNumber = Number(document.getElementById("test2").value);
    var secondNumber = Number(document.getElementById("test3").value);
    var thirdNumber = Number(document.getElementById("test4").value);
    var fourthNumber = Number(document.getElementById("test5").value);
    var fifthNumber = Number(document.getElementById("test6").value);
    var sixthNumber = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber;
    document.getElementById("Result5").innerHTML = sixthNumber;
    var seventhNumber = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber / 5;
    document.getElementById("Result").innerHTML = seventhNumber;
    var eighthNumber = firstNumber * secondNumber * thirdNumber * fourthNumber * fifthNumber;
    document.getElementById("Result2").innerHTML = eighthNumber;
    //end of math

    document.getElementById("Result3").innerHTML = Math.max(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
    document.getElementById("Result4").innerHTML = Math.min(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
    // end of largest and smallest numbers
}