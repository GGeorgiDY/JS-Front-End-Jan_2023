// function sum(n1, n2, n3) {

//     function subtract(sumOfTwoNumbers, n3) {
//         return sumOfTwoNumbers - n3
//     }

//     let sumOfTwoNumbers = n1 + n2
//     result = subtract(sumOfTwoNumbers, n3) 
//     console.log(result)
// }

// sum(23, 6, 10)


function calculations(n1, n2, n3) {
    const sum = (a, b) => a + b;
    const subtract = (mySum, c) => mySum - c;

    return subtract(sum(n1, n2), n3)
}

console.log(calculations(23, 6, 10))