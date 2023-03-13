function sumDigits(num) {
    numAsArr = String(num).split('')
    sumOfEvenNumbers = 0;
    sumOfOddNumbers = 0;

    let i = 0;
    while (i < numAsArr.length) {
        if (numAsArr[i] % 2 === 0) {
            sumOfEvenNumbers += Number(numAsArr[i])
        }
        else {
            sumOfOddNumbers += Number(numAsArr[i])
        }
        i++;
    }
    
    console.log(`Odd sum = ${sumOfOddNumbers}, Even sum = ${sumOfEvenNumbers}`);
}

sumDigits(1000435);
sumDigits(3495892137259234);