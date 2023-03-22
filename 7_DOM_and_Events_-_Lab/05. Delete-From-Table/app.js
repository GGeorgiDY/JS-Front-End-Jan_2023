function deleteByEmail() {
    const result = document.getElementById('result');

    // взимаме input-a, чиито име е email
    const input = document.querySelector('input[name=email]');
    // взимаме ст-ста, която подаваме в input-a в сайта
    let emailValue = input.value;

    // взимаме всички четни td-та
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let foundElement = evenTds.find((td) => td.textContent === emailValue); // или  ще ни върне елемента или notdefined
    
    // ако е намерило елемента
    if (foundElement) {
        result.textContent = "Deleted.";
        // трябва да изтрием парент елемента
        foundElement.parentElement.remove()
    } // ако не е намерило елемента
    else {
        result.textContent = "Not found.";
    }
}