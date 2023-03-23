function subtract() {
    const divResult = document.getElementById('result');
    const fNumber = document.getElementById('firstNumber').value;
    const sNumber = document.getElementById('secondNumber').value;

    // const result = Number(fNumber) - Number(sNumber)
    const result = document.createElement('p')
    result.textContent = Number(fNumber) - Number(sNumber)
    divResult.appendChild(result)
}