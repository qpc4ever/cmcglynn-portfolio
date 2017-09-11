
        function numFac() {
            var i, num, fact;
            fact = 1;
            num = Number(document.getElementById("testNumber").value);

            for (i = 1; i <= num; i++) {
            fact = fact * i;
        }
            document.getElementById("total").innerHTML = fact;
        }