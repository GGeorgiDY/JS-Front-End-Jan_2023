// function sumNumbers(firstNum, secondNum) {
//     let totalSum = 0;
//     let lst = [];
//     for (let i = firstNum; i <= secondNum; i++) {
//         lst.push(i);
//         totalSum += i;
//     }

//     console.log(lst.join(' '));
//     console.log(`Sum: ${totalSum}`);
// }

function sumNumbers(firstNum, secondNum) {
    let totalSum = 0;
    let output = '';
    for (let i = firstNum; i <= secondNum; i++) {
        output += i + ' '
        totalSum += i;
    }

    console.log(output.trim()); // trim - маха speca-a накрая 
    console.log(`Sum: ${totalSum}`);
}

sumNumbers(5, 10);
sumNumbers(0, 26);