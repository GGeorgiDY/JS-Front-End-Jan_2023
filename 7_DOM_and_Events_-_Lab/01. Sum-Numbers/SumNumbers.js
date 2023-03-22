function calc() {
    // TODO: sum = num1 + num2
    const firstInput = document.getElementById('num1');
    // console.log(typeof firstInput.value); // връша string
    const secondInput = document.getElementById('num2');
    // console.log(typeof secondInput.value); // връща стринг

    // понеже ги връща като стринг ние правим нови променливи които да ги правят Number
    let firstNum = Number(firstInput.value);
    let secondNum = Number(secondInput.value);

    const sumInput = document.getElementById('sum')
    let sum = firstNum + secondNum;
    // прикачваме на sumInput променливата sum
    sumInput.value = sum;
}
