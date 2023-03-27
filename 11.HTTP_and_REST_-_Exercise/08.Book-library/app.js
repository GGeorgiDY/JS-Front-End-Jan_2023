// трябва да вземем всички книги през сървъра от JSON-a. Ще трябва да направим цялостно CRUD приложение. Имаме един бутон с който  ще зареждаме всички книги. Ще ги зареждаме в teble row-ове с table definition-и. 
// Като създаваме книга, ще трябва да пращаме JSON със автора и заглавието
// Ъпдейтването на книгите става през бутона "Edin". Като ъпдейтваме книга, ще трябва да променим фомичката която имаме отдолу. Заглавието на формичката трябва да стане "Edit FORM" а бутона отдолу трябва да стане "Save". Съответно ще трябва да променим заглавието и името на автора на книгата. В този случай  ще изпратим "PUT" заявка, като трябва да кажем към коя книга я пращаме тази заявка. 
// Като изтриеме книга през бутона "Delete" ще трябва да вземеме всички  книги.  
// http://localhost:3030/jsonstore/collections/books/

// function attachEvents() {
//   // създаваме си тези променливи с цел да пази някаква инфорамция за книгите
//   let allbooks = {}; // част 3
//   let editBookId = null; // част 3
//   const formHeader = document.querySelector('#form > h3') // част 3

//   const loadBooks = document.getElementById('loadBooks')
//   const booksContainer = document.querySelector('body > table > tbody')
//   const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/'

//   // ЧАСТ 1 - правим показването на книгите от API-то
//   loadBooks.addEventListener('click', loadAllBooksHandler)
//   function loadAllBooksHandler() {
//     booksContainer.innerHTML = '' // чистим контейнера

//     fetch(BASE_URL, {method: 'GET'})
//       .then((booksData) => booksData.json())
//       .then((booksData) => {
//         allbooks = booksData; // част 3
//         for (const bookId in booksData) {
//           const { author, title } = booksData[bookId]

//           // създаваме си структурата на таблицата за съответната книга
//           const tr = document.createElement('tr');
//           const titleColumn = document.createElement('td');
//           const authorColumn = document.createElement('td');
//           const buttonsColumn = document.createElement('td');
//           const editBtn = document.createElement('button');
//           const deleteBtn = document.createElement('button');

//           // добавяме съдържание на елементите
//           titleColumn.textContent = title;
//           authorColumn.textContent = author;
//           editBtn.textContent = 'Edit';
//           deleteBtn.textContent = 'Delete';
//           deleteBtn.id = bookId;

//           // правим си анонимна функция която да прави събитие когато натиснем бутона "Edit". Това го правим с анонимна функция защото не искаме да закачаме към Edit бутона някакво id. ППЦ можем да го направим, но както е така с анонимната функция, имаме достъп до всичко което е тук горе (визирам променливите и данните). // част 3
//           editBtn.addEventListener('click', () => {
//             editBookId = bookId;
//             formHeader.textContent = 'Edit FORM';
//             submitBtn.textContent = 'Save';
//             titleInput.value = title;
//             authorInput.value = author;
//           })

//           // ЧАСТ 4
//           deleteBtn.addEventListener('click', deleteBookHandler)

//           // сега прикачваме създадените елементи един в друг
//           booksContainer.appendChild(tr)
//           tr.appendChild(titleColumn);
//           tr.appendChild(authorColumn);
//           tr.appendChild(buttonsColumn);
//           buttonsColumn.appendChild(editBtn);
//           buttonsColumn.appendChild(deleteBtn);
//         }
//       })
//   }

//   // ЧАСТ 2 - правим създаването на книгите
//   const submitBtn = document.querySelector('#form > button')
//   const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'))

//   submitBtn.addEventListener('click', createBookHandler)
//   function createBookHandler(e) {
//     const title = titleInput.value;
//     const author = authorInput.value;

//     const httpHeaders = {
//       method: 'POST',
//       body: JSON.stringify({ title, author })
//     }

//     let url = BASE_URL

//     // част 3
//     if (formHeader.textContent === 'Edit FORM') {
//       httpHeaders.method = 'PUT'
//       url += editBookId
//     }

//     fetch(url, httpHeaders)
//       .then((res) => res.json())
//       .then(() => {
//         loadAllBooksHandler()

//         // част 3
//         if (formHeader.textContent === "Edit FORM") {
//           formHeader.textContent = 'FORM'
//           submitBtn.textContent = "Submit"
//         }

//         titleInput.value = '';
//         authorInput.value = '';
//       })
//       .catch((err) => {
//         console.error(err)
//       })
//   }

//   // ЧАСТ 3 - правим едитването на книгите
//   // тук като цъкнем на Edit за съответната книга, информацията за тази книга трябва да се дисплейне долу в input полетата. Отделно трябва да променим името на бутона и името на формата.

//   // ЧАСТ 4 - създаваме изтриването на книгите
//   function deleteBookHandler(e) {
//     const id = e.currentTarget.id
//     const httpHeaders = {
//       method: "DELETE"
//     }
//     fetch(BASE_URL + id, httpHeaders);
//     loadAllBooksHandler();
//   }
// }

// attachEvents();

function attachEvents() {
  const bookContainer = document.querySelector("table > tbody");
  const BASE_URL = "http://localhost:3030/jsonstore/collections/books/";
  const loadBooks = document.getElementById("loadBooks");
  const createBook = document.querySelector("#form > button");
  const formTitle = document.querySelector("#form > h3");
  const submitBtn = document.querySelector("#form > button");
  const inputs = Array.from(document.querySelectorAll("#form > input"));
  let editBookId = "";

  loadBooks.addEventListener("click", loadAllBooksHandler);
  createBook.addEventListener("click", createBookHandler);

  async function loadAllBooksHandler() {
    bookContainer.innerHTML = "";

    const booksRes = await fetch(BASE_URL, { method: "GET" });
    const booksData = await booksRes.json();
    for (const bookId in booksData) {
      const { author, title } = booksData[bookId];
      const tableRow = document.createElement("tr");
      const titleColumn = document.createElement("td");
      const authorColumn = document.createElement("td");
      const buttonsColumn = document.createElement("td");
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.id = bookId;
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.id = bookId;
      buttonsColumn.appendChild(editBtn);
      buttonsColumn.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", deleteBookHandler);
      editBtn.addEventListener("click", editBookHandler);

      function editBookHandler() {
        editBookId = this.id;
        formTitle.textContent = "Edit FORM";
        submitBtn.textContent = "Save";

        inputs[0].value = title;
        inputs[1].value = author;
      }

      titleColumn.textContent = title;
      authorColumn.textContent = author;
      tableRow.appendChild(titleColumn);
      tableRow.appendChild(authorColumn);
      tableRow.appendChild(buttonsColumn);
      bookContainer.appendChild(tableRow);
    }
  }

  function createBookHandler() {
    let url = BASE_URL;
    const title = inputs[0].value;
    const author = inputs[1].value;
    const headerHTML = {
      method: "POST",
      body: JSON.stringify({ author, title }),
    };

    if (formTitle.textContent === "Edit FORM") {
      headerHTML.method = "PUT";
      url = BASE_URL + editBookId;
    }

    fetch(url, headerHTML)
      .then((res) => res.json())
      .then(loadAllBooksHandler)
      .catch((err) => console.error(err));
      
    inputs.forEach((input) => (input.value = ""));

    if (formTitle.textContent === "Edit FORM") {
      formTitle.textContent = 'FORM';
      submitBtn.textContent = 'Submit';
      url = BASE_URL;
    }
    
  }

  function deleteBookHandler(event) {
    const bookId = event.target.id;

    fetch(`${BASE_URL}${bookId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(loadAllBooksHandler)
      .catch((err) => console.error(err));
  }
}

attachEvents();