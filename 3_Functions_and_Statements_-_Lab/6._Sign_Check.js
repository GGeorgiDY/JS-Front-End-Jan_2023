function signCheck(...numbers) {
    // return numbers // това е за другия пример
    let result = numbers
        .filter((num) => num < 0) // филтрира на базата критерия всички отрицателни числа
        .length % 2 === 0 ? 'Positive': 'Negative' // ако отрицателните са четни върни Positive иначе Negative
    console.log(result)
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);

// console.log(signCheck(5, 12, -15)); //това е за другия пример
// console.log(signCheck(-6, -12, 14)); //това е за другия пример
// console.log(signCheck(-1, -2, -3)); //това е за другия пример