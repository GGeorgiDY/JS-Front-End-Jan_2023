const liElements = document.getElementsByTagName('li');
const textInput = document.getElementById('text-input');
textInput.value = "Change Value" // така променяме value-то в HTML-a
console.log(textInput.value)

// така добавяме нов параграф за всяко li
// for (const li of liElements) {
//     li.innerHTML += '<p>Custom Paragraph</p>'
// }

// променяме цвета на всяко li да е червен
for (const li of liElements) {
    li.style.backgroundColor = 'red'
}