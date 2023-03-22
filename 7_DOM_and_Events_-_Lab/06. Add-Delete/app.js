function addItem() {
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    newLi.textContent = input.value; // взимаме ст-ст на input
    ulContainer.appendChild(newLi) // добавяме новосъздаденото li към страницата
    input.value = '' // чистя си input полето;

    const newAnchor = document.createElement('a'); // създаваме си нов anchor
    newAnchor.textContent = '[Delete]'; // добавяме му текст [Delete]
    newAnchor.setAttribute('href', '#') // по условие искат да създадем href
    // newAnchor.href = '#'; // може и така горния ред
    newLi.appendChild(newAnchor) // добавяме anchora към страницата
    newAnchor.addEventListener('click', deleteHandler) // добавяме еввнт при кликане върху новия anchor, да се изпълни функцията по-долу


    function deleteHandler(e) {
        // трябва да изтрием целия li елемент
        // за целта първо трябва да го вземем, като вземаме парента на anchor, който е li
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }
}