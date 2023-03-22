function extractText() {
    // TODO
    // трябва да селектираме данните от ul таг-а и след натискане на бутона тяхния text content да влязe в полето за писане

    // взимаме ги
    const liElements = Array.from(document.querySelectorAll('#items > li'))

    // сега тази информация трябва да я вкараме в text area-та при натискане на бутона Extract Text
    const result = document.getElementById('result');

    liElements
        .forEach((li) => {
            result.textContent += li.textContent + "\n";
        })
}