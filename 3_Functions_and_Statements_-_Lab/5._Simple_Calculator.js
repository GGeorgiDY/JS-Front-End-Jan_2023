function simpleCalculator(n1, n2, operator) {
    const multiply = (n1, n2) => n1 * n2
    const divide = (n1, n2) => n1 / n2
    const sum = (n1, n2) => n1 + n2
    const subtract = (n1, n2) => n1 - n2
    const operationMap = { // като речник
        add: sum,
        subtract: subtract,
        divide: divide,
        multiply: multiply
    }

    console.log(operationMap[operator](n1, n2)) // като речник имаме ключ и ст-ст

    // if (operator == 'multiply') {
    //     console.log(multiply(n1, n2))
    // }

    // else if (operator == 'divide') {
    //     console.log(divide(n1, n2))
    // }

    // else if (operator == 'add') {
    //     console.log(sum(n1, n2))
    // }

    // else if (operator == 'subtract') {
    //     console.log(subtract(n1, n2))
    // }
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');