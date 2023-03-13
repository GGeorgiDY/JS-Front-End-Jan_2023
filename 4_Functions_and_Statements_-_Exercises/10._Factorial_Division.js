function factorialDivision(n1, n2) {

    function factorial(n) {
        let result = 1
        for (let i = 1; i <= n; i++) {
            result *= i
        }
        return result
    }

    n1Factorial = factorial(n1);
    n2Factorial = factorial(n2);

    console.log((n1Factorial / n2Factorial).toFixed(2))
}

factorialDivision(5, 2);
factorialDivision(6, 2);