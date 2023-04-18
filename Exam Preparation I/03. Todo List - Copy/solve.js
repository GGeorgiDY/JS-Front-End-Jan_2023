function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    const titleInput = document.getElementById('title')

    const todoList = document.getElementById('todo-list')

    const addButton = document.getElementById('add-button')
    const loadButton = document.getElementById('load-button')

    loadButton.addEventListener('click', loadButtonSolver)
    function loadButtonSolver(e) {
        e.preventDefault()

        // зачистваме output field-a
        todoList.textContent = ''

        fetch(BASE_URL, {method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
                for (info in data) {
                    // create new HTML elements
                    let li = document.createElement('li')

                    let titleInfo = document.createElement('span')
                    titleInfo.textContent = data[info].name
                    
                    let removeButton = document.createElement('button')
                    removeButton.textContent = 'Remove'
                    removeButton.id = data[info]._id

                    let editButton = document.createElement('button')
                    editButton.textContent = 'Edit'
                    editButton.id = data[info]._id
                    
                    // appernd HTML elements to the DOM tree
                    todoList.appendChild(li)
                    li.appendChild(titleInfo)
                    li.appendChild(removeButton)
                    li.appendChild(editButton)

                    // add events to the buttons
                    editButton.addEventListener('click', editButtonSolver)
                    function editButtonSolver(e) {
                        e.preventDefault()
                            
                        let currentLi = e.currentTarget.parentNode
                        let title = currentLi.childNodes[0].textContent
                        let removeBtn = currentLi.childNodes[1]

                        // create input el and submit button
                        let input = document.createElement('input')
                        input.value = title

                        let submitBtn = document.createElement('button')
                        submitBtn.textContent = 'Submit'
                        submitBtn.id = removeBtn.id

                        // delete el from DOM tree
                        currentLi.textContent = ''

                        // attach new el to the DOM tree
                        currentLi.appendChild(input)
                        currentLi.appendChild(removeBtn)
                        currentLi.appendChild(submitBtn)

                        // add event to the submitBtn
                        submitBtn.addEventListener('click', submitBtnSolver)
                        function submitBtnSolver(e) {
                            e.preventDefault()

                            let newli = e.currentTarget.parentNode
                            let newValue = newli.childNodes[0].value
                            console.log(newValue)

                            let id = e.currentTarget.id

                            const HTTPheaders = {
                                method: 'PATCH',
                                body: JSON.stringify({'name': newValue})
                            }
    
                            fetch(`${BASE_URL}${id}`, HTTPheaders)
                                .then(() => loadButtonSolver(e))
                                .catch((err) => console.error(err));
                        }
                    }

                    removeButton.addEventListener('click', removeButtonSolver)
                    function removeButtonSolver(e) {
                        e.preventDefault()

                        let id = e.currentTarget.id
                        fetch(`${BASE_URL}${id}`, {method: 'delete'})
                            .then(() => loadButtonSolver(e))
                            .catch((err) => console.error(err));
                    }
                }
            })
            .catch((err) => console.error(err));
    }

    addButton.addEventListener('click', addButtonSolver)
    function addButtonSolver(e) {
        e.preventDefault()

        let title  = titleInput.value;

        const HTTPheaders = {
            method: 'POST',
            body: JSON.stringify({'name': title})
        }

        fetch(BASE_URL, HTTPheaders)
            .then((res) => res.json())
            .then(() => loadButtonSolver(e))
            .catch((err) => console.error(err));
        
        // clear input fields
        titleInput.value = ''
    }
  }
  
attachEvents();