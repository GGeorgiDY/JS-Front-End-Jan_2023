// имаме таблица и като напишем в input полето долу дадено име, трябва да ни се подчертае всеки ред който съдържа въведеното в input полето име. NB! това което пишем е case sensitive
// когато натиснем бутона "SEARCH" трябва да проверим всички редове, без първия дали съдържат дадения string. 
// ако някой от редовете съдържа дадения string, трябва да закачим class select (който прави жълто на този ред). 
// след всяко натискане на бутона SEARCH трябва да зачистим инпут полето и да премахнем всички селектирани класове от предишния сърч (ако има такива)

function solve() {
   const searchInput = document.getElementById('searchField'); 
   document.querySelector('#searchBtn').addEventListener('click', onClick); // натиска се бутона и се изпълнява събитието

   function onClick() {
      const searchedWord = searchInput.value // вземаме търсената дума в search box-a
      const tableRows = Array.from(document.querySelectorAll('body > table > tbody > tr'));
      for (const row of tableRows) {
         let trimmedTextContent = row.textContent.trim(); // махаме излишни space-ове

         // тук проверяваме ако реда преди е бил жълт, да се премахне това жълто от реда
         if (row.classList.contains('select')) {
            row.classList.remove('select');
         } 

         // това е ако искахме да бъде case insensitive
         // if (trimmedTextContent.toLowerCase().includes(searchedWord.toLowerCase())) {
         //    row.classList.add('select');
         // }

         // тук проверяваме дали реда с тримнатите думи съдържа думата въведена в search box-a
         if (trimmedTextContent.includes(searchedWord)) {
            row.classList.add('select');
         }
      }

      searchInput.value = '';
   }
}