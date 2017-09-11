
        function fizzBuzz() {
            var firstNumber = Number(document.getElementById("testNumber2").value);
            var secondNumber = Number(document.getElementById("testNumber3").value);
            var result2 = "";
            for (var i = 1; i <= 100; i++) {

                if (i % firstNumber == 0 && i % secondNumber == 0) {
            result2 += " fizz buzz ";
        }
                else if (i % firstNumber == 0) {
            result2 += " fizz ";
        }
                else if (i % secondNumber == 0) {
            result2 += " buzz ";
        }

                else {
            result2 += i + " ";
        }
            }
                document.getElementById("result2").innerHTML = result2;
            
        }