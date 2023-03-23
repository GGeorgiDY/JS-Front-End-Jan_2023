// получаваме масив от стрингове и за всеки един стринг трябва да създадем един нов div и в него да създадем параграф. В този параграф, неговия текс да е това което ни се подава от масива. Всеки параграф трябва да е първоначално скрит и когато настъпи click събитие (което е закачено за div-a!!!!) и когато кликнем този div, да покажем скрития параграф. Накрая ние трябва да закачим всеки един div който сме направили към някакъв елемент с id - content.  

function create(words) {
   const content =  document.getElementById('content');

   // създаваме си "div" обект и "p" обект
   for (const word of words) {
      const newDiv = document.createElement('div');
      const newParagraph = document.createElement('p');
      // слагаме текста в параграфа
      newParagraph.textContent = word;
      // правиме параграфа да е display: hidden за да бъде първоначално текста в параграфа, скрит
      newParagraph.style.display = 'none';

      newDiv.appendChild(newParagraph); // закачаме newParagraph към newDiv
      content.appendChild(newDiv)

      // правя събитие, когато се натисне div-a, да се показва текста на параграфа
      newDiv.addEventListener('click', displayBlock)
      function displayBlock(event) {
         newParagraph.style.display = 'block'
      }
   }
}