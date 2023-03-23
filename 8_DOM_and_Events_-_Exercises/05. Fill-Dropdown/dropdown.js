// имаме две инпут полета, в които като въведем данни, тези данни трябва да отидав в едно drop down меню, а полетата автоматично да се изпразнят.
// NB! в HTML скелета автоматично ни се казва че като натиснем бутона "ADD", се изпълнява функцията addItem() 
// хубаво е да си припомниш какво правят select и option таговете в HTML - в един select можем да имаме много option-и


function addItem() {
    // селектираме drop down менюто
    const select = document.getElementById('menu');
    // селектираме си двата input-a
    const newItemTextInput = document.getElementById('newItemText');
    const newItemValueInput = document.getElementById('newItemValue');

    // искаме да си вземеме value-то на двете input полета, което потребителя ще подава в сайта
    const newItemTextValue = newItemTextInput.value;
    const newItemValueValue = newItemValueInput.value;

    // създаваме нов option текст елемент
    const option = document.createElement('option');
    option.textContent = newItemTextValue; // създаваме текст контента на option
    option.value = newItemValueValue; // създаваме value пропърти на option
    select.appendChild(option) // вече option ще се появи в drop down менюто, взимайки като име textContent-а

    // трябва да изтрием двете инпут полета
    newItemTextInput.value = '';
    newItemValueInput.value = '';
}