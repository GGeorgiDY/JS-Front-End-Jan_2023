const liElements = document.getElementsByTagName('li');
const thirdLi = liElements[2];
thirdLi.textContent += ' This is a DOM Manipulation' // за качаме някакъв допълнителен текст

//променяме всяко li в HTML кода, като добавяме 2 в края на li-то
for (const li of liElements) {
    li.textContent += ' 2'
}