// // TODO
// function attachEvents() {
//   const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
//   const titleInput = document.getElementById('title');
//   const addButton = document.getElementById('add-button');
//   const loadButton = document.getElementById('load-button');

//   const toDoList = document.getElementById('todo-list');

//   addButton.addEventListener('click', addButtonSolver);
//   loadButton.addEventListener('click', loadButtonSolver);

//   function loadButtonSolver(e) {
//     e.preventDefault()

//     fetch(BASE_URL, {method: 'GET'})
//         .then((res) => res.json())
//         .then((data) => {
//             for (key in data) {
//                 // toDoList.textContent = ''

//                 // create html elements
//                 let li = document.createElement('li')
                
//                 let span = document.createElement('span')
//                 span.textContent = data[key].name

//                 let removeButton = document.createElement('button')
//                 removeButton.textContent = 'Remove'
//                 removeButton.id = data[key]._id

//                 let editButton = document.createElement('button')
//                 editButton.textContent = 'Edit'
//                 editButton.id = data[key]._id

//                 // attach new elements to the DOM tree
//                 toDoList.appendChild(li)
//                 li.appendChild(span)
//                 li.appendChild(removeButton)
//                 li.appendChild(editButton)

//                 removeButton.addEventListener('click', removeButtonSolver)
//                 editButton.addEventListener('click', editButtonSolver)
//             }
//         })
//         .catch((err) => console.error(err));
//   }

//   function addButtonSolver(e) {
//     e.preventDefault()

//     const httpHeaders = {
//         method: 'POST',
//         body: JSON.stringify({name: titleInput.value})
//     }
//     fetch(BASE_URL, httpHeaders)
//         .then(() => loadButtonSolver()) // по условие се изисква да пуснем GET заявка като горната и за това викаме горната функция
//         .catch((err) => console.error(err));

//     // изчистваме си input полето
//     titleInput.value = ''
//   }

//   // remove button event
//   function removeButtonSolver(e) {
//     e.preventDefault()

//     let id = e.currentTarget.id // вземаме id-тo на бутона

//     fetch(`${BASE_URL}${id}`, {method: 'delete'})
//         .then(() => loadButtonSolver())
//         .catch((err) => console.error(err));
//   }

//   // edit button event
//   function editButtonSolver(e) {
//     const li = e.currentTarget.parentNode
//     const [span, removeBtn, editBtn] = Array.from(e.currentTarget.parentNode.children)
//     const taskText = span.textContent

//     let newInput = document.createElement('input')
//     newInput.value = taskText

//     let submitBtn = document.createElement('button')
//     submitBtn.textContent = 'Submit'
//     submitBtn.id = removeBtn.id

//     li.textContent = '';
//     li.append(newInput, removeBtn, submitBtn);

//     // submit button event
//     submitBtn.addEventListener('click', submitBtnSolver)

    // function submitBtnSolver(e) {
    //     let id = e.currentTarget.id
    //     let newTaskText = e.currentTarget.parentElement.firstChild.value

    //     const httpHeaders = {
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             name: newTaskText
    //         })
    //     }

    //     fetch(`${BASE_URL}${id}`, httpHeaders)
    //         .then(() => loadButtonSolver())
    //         .catch((err) => console.error(err));
    // }
//   }
// }

// attachEvents();


// TODO
function attachEvents() {
    BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const titleInput = document.getElementById('title')
    const toDoList = document.getElementById('todo-list')

    const addButton = document.getElementById('add-button')
    const loadAllButton = document.getElementById('load-button')

    // add event to Load All Button
    loadAllButton.addEventListener('click', loadAllButtonSolver)
    function loadAllButtonSolver(e) {
        e.preventDefault()

        // изчистваме ToDo List полето
        toDoList.textContent = ''

        fetch(BASE_URL, {method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
                for (info in data) {

                    // create HTML elements
                    let li = document.createElement('li')

                    let span = document.createElement('span')
                    span.textContent = `${data[info].name}`

                    let removeButton = document.createElement('button')
                    removeButton.textContent = 'Remove'
                    removeButton.id = data[info]._id

                    let editButton = document.createElement('button')
                    editButton.textContent = 'Edit'
                    editButton.id = data[info]._id

                    // attach HTML elements to the DOM tree
                    toDoList.appendChild(li)
                    li.appendChild(span)
                    li.appendChild(removeButton)
                    li.appendChild(editButton)

                    // add events to the buttons
                    removeButton.addEventListener('click', removeButtonSolver)
                    editButton.addEventListener('click', editButtonSolver)
                }
            })
            .catch((err) => console.error(err));
    }

    // add event to Add Button
    addButton.addEventListener('click', addButtonSolver)
    function addButtonSolver(e) {
        e.preventDefault()

        let title = titleInput.value;

        const HTTPheaders = {
            method: 'POST',
            body: JSON.stringify({name: title})
        }

        fetch(BASE_URL, HTTPheaders)
            .then((res) => res.json())
            .then(() => loadAllButtonSolver(e))
            .catch((err) => console.error(err));
    }

    function removeButtonSolver(e) {
        e.preventDefault()

        let id = e.currentTarget.id
        fetch(`${BASE_URL}${id}`, {method: 'delete'})
            .then(() => loadAllButtonSolver(e))
            .catch((err) => console.error(err));
    }

    function editButtonSolver(e) {
        e.preventDefault()

        let currentLi = e.currentTarget.parentElement
        let fieldInfo = e.currentTarget.parentElement.firstChild.textContent
        let [span, removeBtn, editBtn] = Array.from(e.currentTarget.parentElement.children)

        // creating input element
        let inputField = document.createElement('input')
        inputField.value = fieldInfo

        // creating submit button
        let submitButton = document.createElement('button')
        submitButton.textContent = "Submit"
        submitButton.id = removeBtn.id

        // removing everything from the 
        e.currentTarget.parentElement.textContent = ''

        // append the new elements into the currentLi element
        currentLi.appendChild(inputField)
        currentLi.appendChild(removeBtn)
        currentLi.appendChild(submitButton)

        // submit button event
        submitButton.addEventListener('click', submitButtonSolver)
        function submitButtonSolver(e) {

            let newInputText = e.currentTarget.parentElement.firstChild.value
            let id = e.currentTarget.id

            const HTTPheaders = {
                method: 'PATCH',
                body: JSON.stringify({name: newInputText})
            }
    
            fetch(`${BASE_URL}${id}`, HTTPheaders)
                .then(() => loadAllButtonSolver(e))
                .catch((err) => console.error(err));
        }
    }
  }
  
  attachEvents();