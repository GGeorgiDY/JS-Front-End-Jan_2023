// имаме някаква tekst area и това което се подава вътре е някакъв JSON
// този JSON трябва да се парсне с JSON.parse и от там нататък да се добавят редове към една таблица. 
// след като сме добавили вече елементите в таблицата, трябва да се натисне "Buy" бутона. 
// като се натисне, това ще вземе всички редове, които са маркирани с чекбокс и на тях да им извадим имената, общата цена и средната ст-ст на Decoration factor-a им. Тази информация трябва да се покаже отдолу. 

function solve() {
  // взимам си двете text areas от файла
  const [generateTextarea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  // взимаме си двата бутона от файла
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
  // взимаме си tdoby-то където ще наливаме информацията
  const tbody = document.querySelector('#exercise > div > div > div > div > table > tbody');


  // закачаме си click събитие при което ще взема JSON файла и ще го обработя
  generateBtn.addEventListener('click', generateHandler)
  function generateHandler() {
    const data = JSON.parse(generateTextarea.value) // преобразува JSON-a в обект

    for (const {img, name, price, decFactor} of data) {
      const tableRow = createElement('tr', '', tbody);

      const firstColumnTd = createElement('td', '', tableRow);
      // createElement('име', 'content', 'parentNode', 'id', 'class', {atributes})
      const htmlImg = createElement('img', '', firstColumnTd, '', '', {src: img});

      const secondColumnTd = createElement('td', '', tableRow);
      const htmlName = createElement('p', name, secondColumnTd);

      const thirdColumnTd = createElement('td', '', tableRow);
      const htmlPrice = createElement('p', price, thirdColumnTd);

      const fourthColumnTd = createElement('td', '', tableRow);
      const htmlDecFactor = createElement('p', decFactor, fourthColumnTd);
  
      const fifthColumnTd = createElement('td', '', tableRow);
      const htmlCheckBox = createElement('input', '', fifthColumnTd, '', '', {type: 'checkbox'})
    }
  }


  // закачаме си click събитие при което ще принтира output-a във втория чекбокс
  buyBtn.addEventListener('click', buyHandler)
  let boughtItems = [];
  let totalPrice = 0
  let totalDecFactor = 0

  function buyHandler() {
    const allCheckedInputs = Array.from(document.querySelectorAll('tbody tr input:checked'))
    for (const input of allCheckedInputs) {
      const tableRow = input.parentElement.parentElement;

      const [firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children);
      let item = secondColumn.children[0].textContent;
      boughtItems.push(item);

      let currentPrice = thirdColumn.children[0].textContent;
      totalPrice += Number(currentPrice)

      let currentDecFactor = fourthColumn.children[0].textContent
      totalDecFactor += Number(currentDecFactor)
    }

    // принтираме аутпут-а
    buyTextArea.value += `Bought Furniture: ${boughtItems.join(', ')}\n`;
    buyTextArea.value += `Total price: ${totalPrice}\n`
    buyTextArea.value += `Average decoration factor: ${totalDecFactor / allCheckedInputs.length}`
  }
}

// тази функция ще създава DOM елементи и ще ги връща
function createElement(type, content, parentNode, id, classes, attributes) {
  const htmlElement = document.createElement(type);

  // ще използваме textContent, защото нямаме input
  // идва като стринг
  if (content && type !== 'input') {
    htmlElement.textContent = content; 
  }

  // ще използваме value, защото input-a има value
  // идва като стринг
  if (content && type === 'input') {
    htmlElement.value = content; 
  }

  // идва като стринг
  if (id) {
    htmlElement.id = id
  }

  // долното идва като лист пълен със стрингове
  if (classes) {
    htmlElement.classList.add(...classes)
  }

  if (parentNode) {
    parentNode.appendChild(htmlElement)
  }

  // ще идва като обект а.к.а речник
  if (attributes) {
    for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key])
    }
  }

  return htmlElement;
}