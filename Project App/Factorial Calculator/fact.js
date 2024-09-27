        function calc() {
            let fact = 1, i, a = document.querySelector("#data").value;
            for (i = a; i > 0; i--) {
                fact = fact * i;
            }
            document.querySelector("#res").innerText = `The Factorial of ${a} is ${fact}`;
        }
    