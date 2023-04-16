window.addEventListener('load', solve);

function solve() {
    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')
    const labelInput = document.getElementById('label')
    const estimatedPointsInput = document.getElementById('points')
    const assigneeInput = document.getElementById('assignee')

    const createTaskButton = document.getElementById('create-task-btn')
    const deleteTaskButton = document.getElementById('delete-task-btn')

    const tasksSection = document.getElementById('tasks-section')
    let totalSprintPoints = document.getElementById('total-sprint-points')
    let totalPoints = 0
    let counter = 0

    const taskId = document.createElement('task-id')

    deleteTaskButton.disabled = true

    createTaskButton.addEventListener('click', createTaskButtonSolver)
    function createTaskButtonSolver(e) {

        function deleteButtonSolver(e) {
            e.preventDefault()

            // load all info to the input fields
            titleInput.value = title
            descriptionInput.value = description
            labelInput.value = label
            estimatedPointsInput.value = estimatedPoints
            assigneeInput.value = assignee

            // enable 'Delete Task' button
            deleteTaskButton.disabled = false

            // disable 'Create Task' button
            createTaskButton.disabled = true

            // disable all input fields
            titleInput.disabled = true;
            descriptionInput.disabled = true;
            labelInput.disabled = true;
            estimatedPointsInput.disabled = true;
            assigneeInput.disabled = true;

            // add event to 'Delete Task' button
            deleteTaskButton.addEventListener('click', deleteTaskButtonSolver)
            function deleteTaskButtonSolver(e) {
                e.preventDefault()

                // subtract the points from the 'totalSprintPoints'
                totalPoints -= Number(estimatedPoints)
                totalSprintPoints.textContent = `Total Points ${totalPoints}pts`
                
                // delete elements from DOM tree
                article.remove()

                // clear all inputs fields
                titleInput.value = ''
                descriptionInput.value = ''
                labelInput.value = ''
                estimatedPointsInput.value = ''
                assigneeInput.value = ''

                // disable all input fields
                titleInput.disabled = false;
                descriptionInput.disabled = false;
                labelInput.disabled = false;
                estimatedPointsInput.disabled = false;
                assigneeInput.disabled = false;

                // enable 'Create Task' button
                createTaskButton.disabled = false

                // disable 'Delete Task' button
                deleteTaskButton.disabled = true
            }
        }


        // task
        e.preventDefault()

        let title = titleInput.value;
        let description = descriptionInput.value;
        let label = labelInput.value;
        let estimatedPoints = estimatedPointsInput.value;
        let assignee = assigneeInput.value;


        // check all input fields
        if (title === '' || description === '' || label === '' || estimatedPoints === '' || assignee === '') {
            alert('You need to fill all inputs.');
            return;
        }

        // create new HTML elements
        counter  += 1

        let article = document.createElement('article')
        article.classList.add('task-card')
        article.id = `task-${counter}`

        let labelInfo = document.createElement('div')
        labelInfo.classList.add('task-card-label')

        let titleInfo = document.createElement('h3')
        titleInfo.textContent = title
        titleInfo.classList.add('task-card-title')

        let descriptionInfo = document.createElement('p')
        descriptionInfo.textContent = description
        descriptionInfo.classList.add('task-card-description')

        let pointsInfo = document.createElement('div')
        pointsInfo.textContent = `Estimated at ${estimatedPoints} pts`
        pointsInfo.classList.add('task-card-points')

        let assigneeInfo = document.createElement('div')
        assigneeInfo.textContent = `Assigned to: ${assignee}`
        assigneeInfo.classList.add('task-card-assignee')

        let div = document.createElement('div')
        div.classList.add('task-card-actions')

        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'

        // add second class to labelInfo and add icons
        if (label === 'Feature') {
            labelInfo.classList.add(`feature`)
            labelInfo.innerHTML = `Feature <i>&#8865<i/>`
        }

        else if (label === 'Low Priority Bug') {
            labelInfo.classList.add(`low-priority`)
            labelInfo.innerHTML = `Low Priority Bug <i>&#9737<i/>`
        }

        else if (label === 'High Priority Bug') {
            labelInfo.classList.add(`high-priority`)
            labelInfo.innerHTML = `High Priority Bug <i>&#9888<i/>`
        }

        // attach new elements to the DOM tree
        tasksSection.appendChild(article)
        article.appendChild(labelInfo)
        article.appendChild(titleInfo)
        article.appendChild(descriptionInfo)
        article.appendChild(pointsInfo)
        article.appendChild(assigneeInfo)
        article.appendChild(div)
        div.appendChild(deleteButton)

        // clear all input fields
        titleInput.value = ''
        descriptionInput.value = ''
        labelInput.value = ''
        estimatedPointsInput.value = ''
        assigneeInput.value = ''

        // add points to totalSprintPoints
        totalPoints += Number(estimatedPoints)
        totalSprintPoints.textContent = `Total Points ${totalPoints}pts`
        
        // add event to 'Delete' button
        deleteButton.addEventListener('click', deleteButtonSolver)

    }
}