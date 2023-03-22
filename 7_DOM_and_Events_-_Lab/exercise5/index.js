// const liItems = Array.from(document.getElementsByTagName('li'));
// const paragraph = document.createElement('p'); // създаваме го само в паметта
// const firstLi = liItems[0];
// paragraph.textContent = 'This is a new paragraph' // добавяме му някакъв текс
// firstLi.append(paragraph) // закачаме за DOM дървото


const liItems = Array.from(document.getElementsByTagName('li'));

// за всеки li елемент в страницата мога да му закача нов параграф
liItems
    .forEach((li) => {
        const paragraph = document.createElement('p'); // създаваме го само в паметта
        const h1 = document.createElement('h1');
        h1.textContent = 'This is a header';
        paragraph.textContent = 'This is a new paragraph' // добавяме му някакъв текс
        li.appendChild(paragraph);
        li.replaceChild(h1, paragraph);
        li.removeChild(h1);
    })

