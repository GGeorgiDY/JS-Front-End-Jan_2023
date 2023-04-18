// TODO:
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')

    const loadBoardButton = document.getElementById('load-board-btn')
    const createTaskButton = document.getElementById('create-task-btn')

    const todoSectionUl = document.getElementsByClassName('task-list')[0]
    const inProgressSectionUl = document.getElementsByClassName('task-list')[1]
    const codeReviewSectionUl = document.getElementsByClassName('task-list')[2]
    const doneSectionUl = document.getElementsByClassName('task-list')[3]

    loadBoardButton.addEventListener('click', loadBoardButtonSolver)
    function loadBoardButtonSolver(e) {
        e.preventDefault()

        // clear fields
        todoSectionUl.textContent = ''
        inProgressSectionUl.textContent = ''
        codeReviewSectionUl.textContent = ''
        doneSectionUl.textContent = ''

        fetch(BASE_URL, {method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
                for (info in data) {

                    if (data[info].status === 'ToDo') {
                        // create new HTML elements
                        let li = document.createElement('li')
                        li.classList.add('task')
    
                        let titleInfo = document.createElement('h3')
                        titleInfo.textContent = data[info].title

                        let descriptionInfo = document.createElement('p')
                        descriptionInfo.textContent = data[info].description

                        let moveInProgressButton = document.createElement('button')
                        moveInProgressButton.textContent = 'Move to In Progress'
                        moveInProgressButton.id = data[info]._id

                        // appernd HTML elements to the DOM tree
                        todoSectionUl.appendChild(li)
                        li.appendChild(titleInfo)
                        li.appendChild(descriptionInfo)
                        li.appendChild(moveInProgressButton)

                        // add event to the button
                        moveInProgressButton.addEventListener('click', moveInProgressButtonSolver)
                        function moveInProgressButtonSolver(e) {
                            e.preventDefault()
                            
                            let currentUl = e.currentTarget.parentNode
                            let title = currentUl.childNodes[0].textContent
                            let description = currentUl.childNodes[1].textContent
                            let status = 'In Progress'
                            let id = e.currentTarget.id

                            const HTTPheaders = {
                                method: 'PATCH',
                                body: JSON.stringify({'title': title, 'description': description, 'status': status})
                            }

                            fetch(`${BASE_URL}${id}`, HTTPheaders)
                                .then(() => loadBoardButtonSolver(e))
                                .catch((err) => console.error(err));
                        }
                    }

                    else if (data[info].status === 'In Progress') {
                        // create new HTML elements
                        let li = document.createElement('li')
                        li.classList.add('task')
    
                        let titleInfo = document.createElement('h3')
                        titleInfo.textContent = data[info].title

                        let descriptionInfo = document.createElement('p')
                        descriptionInfo.textContent = data[info].description

                        let moveToCodeReviewButton = document.createElement('button')
                        moveToCodeReviewButton.textContent = 'Move to Code Review'
                        moveToCodeReviewButton.id = data[info]._id

                        // appernd HTML elements to the DOM tree
                        inProgressSectionUl.appendChild(li)
                        li.appendChild(titleInfo)
                        li.appendChild(descriptionInfo)
                        li.appendChild(moveToCodeReviewButton)

                        // add event to the button
                        moveToCodeReviewButton.addEventListener('click', moveToCodeReviewButtonSolver)
                        function moveToCodeReviewButtonSolver(e) {
                            e.preventDefault()
                            
                            let currentUl = e.currentTarget.parentNode
                            let title = currentUl.childNodes[0].textContent
                            let description = currentUl.childNodes[1].textContent
                            console.log(title)
                            let status = 'Code Review'
                            let id = e.currentTarget.id

                            const HTTPheaders = {
                                method: 'PATCH',
                                body: JSON.stringify({'title': title, 'description': description, 'status': status})
                            }

                            fetch(`${BASE_URL}${id}`, HTTPheaders)
                                .then(() => loadBoardButtonSolver(e))
                                .catch((err) => console.error(err));
                        }
                    }

                    else if (data[info].status === 'Code Review') {
                        // create new HTML elements
                        let li = document.createElement('li')
                        li.classList.add('task')
    
                        let titleInfo = document.createElement('h3')
                        titleInfo.textContent = data[info].title

                        let descriptionInfo = document.createElement('p')
                        descriptionInfo.textContent = data[info].description

                        let moveToDoneButton = document.createElement('button')
                        moveToDoneButton.textContent = 'Move to Done'
                        moveToDoneButton.id = data[info]._id

                        // appernd HTML elements to the DOM tree
                        codeReviewSectionUl.appendChild(li)
                        li.appendChild(titleInfo)
                        li.appendChild(descriptionInfo)
                        li.appendChild(moveToDoneButton)

                        // add event to the button
                        moveToDoneButton.addEventListener('click', moveToDoneButtonSolver)
                        function moveToDoneButtonSolver(e) {
                            e.preventDefault()
                            
                            let currentUl = e.currentTarget.parentNode
                            let title = currentUl.childNodes[0].textContent
                            let description = currentUl.childNodes[1].textContent
                            let status = 'Done'
                            let id = e.currentTarget.id

                            const HTTPheaders = {
                                method: 'PATCH',
                                body: JSON.stringify({'title': title, 'description': description, 'status': status})
                            }

                            fetch(`${BASE_URL}${id}`, HTTPheaders)
                                .then(() => loadBoardButtonSolver(e))
                                .catch((err) => console.error(err));
                        }
                    }

                    else if (data[info].status === 'Done') {
                        // create new HTML elements
                        let li = document.createElement('li')
                        li.classList.add('task')
    
                        let titleInfo = document.createElement('h3')
                        titleInfo.textContent = data[info].title

                        let descriptionInfo = document.createElement('p')
                        descriptionInfo.textContent = data[info].description

                        let closeButton = document.createElement('button')
                        closeButton.textContent = 'Close'
                        closeButton.id = data[info]._id

                        // appernd HTML elements to the DOM tree
                        doneSectionUl.appendChild(li)
                        li.appendChild(titleInfo)
                        li.appendChild(descriptionInfo)
                        li.appendChild(closeButton)

                        // add event to the button
                        closeButton.addEventListener('click', closeButtonSolver)
                        function closeButtonSolver(e) {
                            e.preventDefault()

                            let id = e.currentTarget.id
                            fetch(`${BASE_URL}${id}`, {method: 'delete'})
                                .then(() => loadBoardButtonSolver(e))
                                .catch((err) => console.error(err));
                        }
                    }
                }
            })
            .catch((err) => console.error(err));
    }

    createTaskButton.addEventListener('click', createTaskButtonSolver)
    function createTaskButtonSolver(e) {
        e.preventDefault()

        // get input values
        let title = titleInput.value;
        let description = descriptionInput.value;
        let status = 'ToDo';

        const HTTPheaders = {
            method: 'POST',
            body: JSON.stringify({'title': title, 'description': description, 'status': status})
        }

        fetch(BASE_URL, HTTPheaders)
            .then((res) => res.json())
            .then(() => loadBoardButtonSolver(e))
            .catch((err) => console.error(err));
        
        // clear input fields
        titleInput.value = ''
        descriptionInput.value = ''
    }
}

attachEvents();