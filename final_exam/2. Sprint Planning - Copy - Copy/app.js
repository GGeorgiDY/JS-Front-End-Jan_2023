window.addEventListener('load', solve);

function solve() {
    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')
    const labelInput = document.getElementById('label')
    const pointsInput = document.getElementById('points')
    const assigneeInput = document.getElementById('assignee')

    const tasksSection = document.getElementById('tasks-section')
    const totalSprintPoints = document.getElementById('total-sprint-points')
    let totalPoints = 0
    let currentPoints = 0

    const createTaskButton = document.getElementById('create-task-btn')
    const deleteTaskButton = document.getElementById('delete-task-btn')

    deleteTaskButton.disabled = true
    let counter = 0

    createTaskButton.addEventListener('click', createTaskButtonSolver)
    function createTaskButtonSolver(e) {
        e.preventDefault()

        let title = titleInput.value; 
        let description = descriptionInput.value; 
        let label = labelInput.value; 
        let points = pointsInput.value; 
        let assignee = assigneeInput.value;
        
        // check if all inputs are valid
        if (title === "" || description === "" || label === "" || points === "" || assignee === "") {
            alert('You need to fill all inputs.');
            return;
        }

        // creating the elements
        let article = document.createElement('article')
        counter += 1
        article.id = `task-${counter}`
        article.classList.add('task-card')

        let labelInfo = document.createElement('div')
        labelInfo.classList.add('task-card-label')
        if (label === 'Feature') {
            labelInfo.innerHTML = `Feature <i>&#8865<i/>`
            labelInfo.classList.add('feature')
        }
        else if (label === 'Low Priority Bug') {
            labelInfo.innerHTML = `Low Priority Bug <i>&#9737<i/>`
            labelInfo.classList.add('low-priority')
        }
        else if (label === 'High Priority Bug') {
            labelInfo.innerHTML = `High Priority Bug <i>&#9888<i/>`
            labelInfo.classList.add('high-priority')
        }

        let titleInfo = document.createElement('h3')
        titleInfo.textContent = title
        titleInfo.classList.add('task-card-title')

        let descriptionInfo = document.createElement('p')
        descriptionInfo.textContent = description
        descriptionInfo.classList.add('task-card-description')

        let pointsInfo = document.createElement('div')
        pointsInfo.textContent = `Estimated at ${points} pts`
        pointsInfo.classList.add('task-card-points')

        let assigneeInfo = document.createElement('div')
        assigneeInfo.textContent = `Assigned to: ${assignee}`
        assigneeInfo.classList.add('task-card-assignee')
        
        let div = document.createElement('div')
        div.classList.add('task-card-actions')

        let deleteButton = document.createElement('button')
        deleteButton.textContent = `Delete`

        // append elements
        tasksSection.appendChild(article)
        article.appendChild(labelInfo)
        article.appendChild(titleInfo)
        article.appendChild(descriptionInfo)
        article.appendChild(pointsInfo)
        article.appendChild(assigneeInfo)
        article.appendChild(div)
        div.appendChild(deleteButton)

        // clear initial input fields
        titleInput.value = ""
        descriptionInput.value = ""
        labelInput.value = ""
        pointsInput.value = ""
        assigneeInput.value = ""

        // change totalSprintPoints
        totalPoints += Number(points)
        totalSprintPoints.textContent = `Total Points ${totalPoints}pts`

        // add event to deleteButton
        deleteButton.addEventListener('click', deleteButtonSolver)
        function deleteButtonSolver(e) {
            e.preventDefault()

            // add info to the input fields
            titleInput.value = title
            descriptionInput.value = description
            labelInput.value = label
            pointsInput.value = points
            assigneeInput.value = assignee

            // disable input fields
            titleInput.disabled = true
            descriptionInput.disabled = true
            labelInput.disabled = true
            pointsInput.disabled = true
            assigneeInput.disabled = true

            // enable Delete Task button
            deleteTaskButton.disabled = false

            // disable Create Task button
            createTaskButton.disabled = true

            let currentTask = e.currentTarget.parentElement.parentElement

            // add event to deleteButton
            deleteTaskButton.addEventListener('click', deleteTaskButtonSolver)
            function deleteTaskButtonSolver(e) {
                e.preventDefault()

                // delete article
                currentTask.remove()

                // update current points
                currentPoints = pointsInput.value

                // clear all of the input fields
                titleInput.value = ''
                descriptionInput.value = ''
                labelInput.value = ''
                pointsInput.value = ''
                assigneeInput.value = ''

                // enable input fields
                titleInput.disabled = false
                descriptionInput.disabled = false
                labelInput.disabled = false
                pointsInput.disabled = false
                assigneeInput.disabled = false

                // disable Delete Task button
                deleteTaskButton.disabled = true

                // enable Create Task Button
                createTaskButton.disabled = false

                // change totalSprintPoints
                totalPoints -= Number(currentPoints)
                totalSprintPoints.textContent = `Total Points ${totalPoints}pts`
            }
        }
    }
}