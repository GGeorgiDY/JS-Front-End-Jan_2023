// function sumOfDigits(num) {
//     let result = 0;
//     num = String(num);
//     let lst = num.split('');

//     for (const n of lst) {
//         result += Number(n);
//     }
//     console.log(result);
// }


// function sumOfDigits(num) {
//     let result = 0;
//     let numberAsString = num.toString();

//     for (const n of numberAsString) {
//         result += Number(n);
//     }
//     console.log(result);
// }


// function sumOfDigits(num) {
//     let result = 0;
//     while (num > 0) {
//         let lastDigit = num % 10;
//         result += lastDigit;
//         num = Math.floor(num / 10);
//     }
//     console.log(result);
// }


function sumOfDigits(num) {
    let result = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        result += lastDigit;
        num = Math.trunk(num / 10); // изрязва всичко след десеттичната запетая
    }
    console.log(result);
}

sumOfDigits(245678);
sumOfDigits(97561);
sumOfDigits(543);