// имаме някаква текст ериа в която ще се подава даден текст. 
// Трябва да вземем всяко изречение от подадения текст и да ги направим на параграфи, като в един параграф може да имаме максимум 3 изречения. 
// за целта ще спитнем целия текст по точка. След това да тримнем спейсовете в края и началото. След това трябва да взимаме от масива всяка тройка елементи (изречения), докато не масива не свърши и да закачаме тези изречения в параграфи. 
// Тези параграфи трябва да ни се показват в сайта. Това е автоматично направено в HTML кода.

function solve() {
  const output = document.getElementById('output');

  const textArea = document.getElementById('input');
  const sentances = textArea.value.split(".");
  sentances.pop();

  while (sentances.length > 0) {
    let paragraphSentences = sentances.splice(0, 3) // изтрий ми първите три елемента от масива и ми ги върни в друг масив
      .map((p) => p.trimStart()) // махаме излишните начални спейсове за всяко изречение
    
    const newParagraph = document.createElement('p')
    newParagraph.textContent = paragraphSentences.join(". ") + '.' // слагаме точка и на последното изречение
    output.appendChild(newParagraph)
  }
}