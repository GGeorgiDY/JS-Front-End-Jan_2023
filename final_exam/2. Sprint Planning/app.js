window.addEventListener('load', solve);

function solve() {
    let counter = 0
    let totalPoints = document.getElementById('total-sprint-points')
    let totalPointsAll = 0
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const labelInput = document.getElementById('label');
    const estimationPointsInput = document.getElementById('points');
    const assigneeInput = document.getElementById('assignee');
    const createTaskButton = document.getElementById('create-task-btn');
    const deleteTaskButton = document.getElementById('delete-task-btn');

    deleteTaskButton.disabled = true;

    const newSprintTaskSection = document.getElementById('tasks-section')

    createTaskButton.addEventListener('click', createTask)
    function createTask(e) {
        e.preventDefault()
        
        function loadConfirmDelete(e) {
            e.preventDefault()

            const asd = e.currentTarget.parentNode.parentNode

            titleInput.textContent = title
            descriptionInput.textContent = description
            // labelInput.textContent = label
            estimationPointsInput.textContent = points
            assigneeInput.textContent = assignee

            titleInput.disabled = true;
            descriptionInput.disabled = true;
            labelInput.disabled = true;
            estimationPointsInput.disabled = true;
            assigneeInput.disabled = true;

            deleteTaskButton.disabled = false;
            createTaskButton.disabled = true;

            deleteTaskButton.addEventListener('click', deleteTask)
            function deleteTask(e) {
                e.preventDefault()
    
                totalPointsAll -= Number(points)
                totalPoints.textContent = `Total Points ${totalPointsAll}pts`
    
                asd.remove()
    
                // clear all input fields in the Sprint Plannig section
                titleInput.value = ''
                descriptionInput.value = ''
                // labelInput.value = ''
                estimationPointsInput.value = ''
                assigneeInput.value = ''
    
                // enable all the fields
                titleInput.disabled = false;
                descriptionInput.disabled = false;
                labelInput.disabled = false;
                estimationPointsInput.disabled = false;
                assigneeInput.disabled = false;
    
                createTaskButton.disabled = false
                deleteTaskButton.disabled = true
            }
        }


        let title = titleInput.value; 
        let description = descriptionInput.value; 
        let label = labelInput.value; 
        let points = estimationPointsInput.value; 
        let assignee = assigneeInput.value; 

        if (title === '' || description === '' || label === '' || points === '' || assignee === '') {
            alert('You need to fill all inputs.');
            return;
        }

        // create new html elements
        const newArticle = document.createElement('article')
        newArticle.classList.add('task-card')
        counter += 1
        newArticle.setAttribute('id', `task-${counter}`)

        const newDiv = document.createElement('div');
        newDiv.classList.add('task-card-label');
        if (label === 'Feature') {
            newDiv.classList.add('feature');
            newDiv.innerHTML = `Feature <i>&#8865<i/>`
        }
        else if (label === 'Low Priority Bug') {
            newDiv.classList.add('low-priority');
            newDiv.innerHTML = `Low Priority Bug <i>&#9737<i/>`
        }
        else if (label === 'High Priority Bug') {
            newDiv.classList.add('high-priority');
            newDiv.innerHTML = `High Priority Bug <i>&#9888<i/>`
        }

        const titleInfo = document.createElement('h3');
        titleInfo.classList.add('task-card-title')
        titleInfo.textContent = `${title}`

        const descriptionInfo = document.createElement('p');
        descriptionInfo.classList.add('task-card-description')
        descriptionInfo.textContent = `${description}`

        const pointsInfo = document.createElement('div');
        pointsInfo.classList.add('task-card-points')
        pointsInfo.textContent = `Estimated at ${points} pts`

        const assigneeInfo = document.createElement('div');
        assigneeInfo.classList.add('task-card-assignee')
        assigneeInfo.textContent = `Assigned to: ${assignee}`

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('task-card-actions')

        const buttonInfo = document.createElement('button')
        buttonInfo.textContent = 'Delete'

        // append the new html elements to the DOM tree
        newSprintTaskSection.appendChild(newArticle);
        newArticle.appendChild(newDiv);
        newArticle.appendChild(titleInfo);
        newArticle.appendChild(descriptionInfo);
        newArticle.appendChild(pointsInfo);
        newArticle.appendChild(assigneeInfo);
        newArticle.appendChild(actionsDiv);
        actionsDiv.appendChild(buttonInfo);

        // add points to total points
        totalPointsAll += Number(points)
        totalPoints.textContent = `Total Points ${totalPointsAll}pts`

        // clear all input fields in the Sprint Plannig section
        titleInput.value = ''
        descriptionInput.value = ''
        // labelInput.value = ''
        estimationPointsInput.value = ''
        assigneeInput.value = ''

        buttonInfo.addEventListener('click', loadConfirmDelete)
    }
}