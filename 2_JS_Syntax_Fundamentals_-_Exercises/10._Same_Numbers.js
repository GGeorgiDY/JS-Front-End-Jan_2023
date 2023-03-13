function sameNumbers(number) {
    number = String(number);
    let lst = number.split('');
    let firstNum = number[0];
    let bool = true;
    let total = 0;

    for (const i in lst) {
        total += Number(lst[i]);
        if (firstNum !== lst[i]) {
            bool = false;
        }
    }

    if (bool) {
        console.log(`true`)
    }
    else {
        console.log(`false`)
    }

    console.log(total)
}


// function sameNumbers(number) {
//     let sum = 0;
//     let condition = true;
//     let firstNumber = Number(number.toString()[0]);

//     while (number) {
//         let currentNumber = number % 10;
//         if (firstNumber !== currentNumber) {
//             condition = false;
//         }
//         sum += currentNumber;
//         number = ~~(number / 10);
//     }

//     console.log(condition);
//     console.log(sum);
// }

sameNumbers(2222222);
sameNumbers(1234);