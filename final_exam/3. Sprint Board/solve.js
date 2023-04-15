// TODO:
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')

    const toDoSection = document.getElementById('todo-section')
    const inProgressSection = document.getElementById('in-progress-section')
    const codeReviewSection = document.getElementById('code-review-section')
    const doneSection = document.getElementById('done-section')
    const taskUl = document.getElementsByClassName('task-list')

    const loadBoardButton = document.getElementById('load-board-btn')
    const createTaskButton = document.getElementById('create-task-btn')

    // attach event to 'Load Board' button
    loadBoardButton.addEventListener('click', loadBoardButtonSolver)
    function loadBoardButtonSolver(e) {
        e.preventDefault()

        // зачиствам output секциите
        for (a in taskUl) {
            taskUl[a].textContent = ''
        }

        fetch(BASE_URL, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            for (info in data) {
                // create new HTML elements
                let li = document.createElement('li')

                let titleInfo = document.createElement('h3')
                titleInfo.textContent = data[info].title

                let descriptionInfo = document.createElement('p')
                descriptionInfo.textContent = data[info].description

                let statusnButton = document.createElement('button')
                statusnButton.textContent = data[info].status
                statusnButton.id = data[info]._id

                // append the new HTML elements to the DOM tree
                if (statusnButton.textContent === 'ToDo') {
                    taskUl[0].appendChild(li)
                    li.appendChild(titleInfo)
                    li.appendChild(descriptionInfo)
                    li.appendChild(statusnButton)

                    statusnButton.textContent = 'Move to In Progress'

                    // add events to the twe created buttons
                    statusnButton.addEventListener('click', statusnButton1)
                }

                else if (statusnButton.textContent === 'In Progress') {
                    taskUl[1].appendChild(li)
                    li.appendChild(titleInfo)
                    li.appendChild(descriptionInfo)
                    li.appendChild(statusnButton)

                    statusnButton.textContent = 'Move to Code Review'

                    // add events to the twe created buttons
                    statusnButton.addEventListener('click', statusnButton2)
                }

                else if (statusnButton.textContent === 'Code Review') {
                    taskUl[2].appendChild(li)
                    li.appendChild(titleInfo)
                    li.appendChild(descriptionInfo)
                    li.appendChild(statusnButton)

                    statusnButton.textContent = 'Move to Done'

                    // add events to the twe created buttons
                    statusnButton.addEventListener('click', statusnButton3)
                }

                else if (statusnButton.textContent === 'Done') {
                    taskUl[3].appendChild(li)
                    li.appendChild(titleInfo)
                    li.appendChild(descriptionInfo)
                    li.appendChild(statusnButton)

                    statusnButton.textContent = 'Close'

                    // add events to the twe created buttons
                    statusnButton.addEventListener('click', closeTaskSolver)
                }
            }
        })
        .catch((err) => console.error(err));
    }

    // attach event to 'Add Task' button
    createTaskButton.addEventListener('click', createTaskButtonSolver)
    function createTaskButtonSolver(e) {
        e.preventDefault()

        let title = titleInput.value;
        let description = descriptionInput.value;
        let status = 'ToDo'

        const HTTPheaders = {
            method: 'POST',
            body: JSON.stringify({title: title, description: description, status: status})
        }

        fetch(BASE_URL, HTTPheaders)
            .then((res) => res.json())
            .then(() => loadBoardButtonSolver(e))
            .catch((err) => console.error(err));
        
        titleInput.value = ''
        descriptionInput.value = ''
    }

    function statusnButton1(e) {
        e.preventDefault()

        const id = e.currentTarget.id

        let [title, description, status] = Array.from(e.currentTarget.parentElement.children)
        status.textContent = 'In Progress'

        const HTTPheaders = {
            method: 'PATCH',
            body: JSON.stringify({title: title.textContent, description: description.textContent, status: status.textContent})
        }

        fetch(`${BASE_URL}${id}`, HTTPheaders)
            .then(() => loadBoardButtonSolver(e))
            .catch((err) => console.error(err));
    }

    function statusnButton2(e) {
        e.preventDefault()

        const id = e.currentTarget.id

        let [title, description, status] = Array.from(e.currentTarget.parentElement.children)
        status.textContent = 'Code Review'

        const HTTPheaders = {
            method: 'PATCH',
            body: JSON.stringify({title: title.textContent, description: description.textContent, status: status.textContent})
        }

        fetch(`${BASE_URL}${id}`, HTTPheaders)
            .then(() => loadBoardButtonSolver(e))
            .catch((err) => console.error(err));
    }
    
    function statusnButton3(e) {
        e.preventDefault()

        const id = e.currentTarget.id

        let [title, description, status] = Array.from(e.currentTarget.parentElement.children)
        status.textContent = 'Done'

        const HTTPheaders = {
            method: 'PATCH',
            body: JSON.stringify({title: title.textContent, description: description.textContent, status: status.textContent})
        }

        fetch(`${BASE_URL}${id}`, HTTPheaders)
            .then(() => loadBoardButtonSolver(e))
            .catch((err) => console.error(err));
    }

    function closeTaskSolver(e) {
        e.preventDefault()

        const id = e.currentTarget.id

        fetch(`${BASE_URL}${id}`, {method: 'delete'})
        .then(() => loadBoardButtonSolver(e))
        .catch((err) => console.error(err));
    }

}

attachEvents();