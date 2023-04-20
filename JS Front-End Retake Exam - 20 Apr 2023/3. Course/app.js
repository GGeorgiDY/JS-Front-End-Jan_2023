function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const titleInput = document.getElementById('course-name')
    const typeInput = document.getElementById('course-type')
    const descriptionInput = document.getElementById('description')
    const teacherNameInput = document.getElementById('teacher-name')

    const divList = document.getElementById('list')

    const addCourseButton = document.getElementById('add-course')
    const editCourseButton = document.getElementById('edit-course')
    const loadCourseButton = document.getElementById('load-course')

    loadCourseButton.addEventListener('click', loadCourseButtonSolver)
    function loadCourseButtonSolver(e) {
        e.preventDefault()

        // disable editCourse Button
        editCourseButton.disabled = true

        // clear fields
        divList.textContent = ''

        fetch(BASE_URL, {method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
                for (info in data) {
                    // create new HTML elements
                    let newDiv = document.createElement('div')
                    newDiv.classList.add('container')

                    let titleInfo = document.createElement('h2')
                    titleInfo.textContent = data[info].title

                    let teacherInfo = document.createElement('h3')
                    teacherInfo.textContent = data[info].teacher

                    let typeInfo = document.createElement('h3')
                    typeInfo.textContent = data[info].type

                    let descriptionInfo = document.createElement('h4')
                    descriptionInfo.textContent = data[info].description

                    let editButton = document.createElement('button')
                    editButton.textContent = 'Edit Course'
                    editButton.classList.add('edit-btn')
                    editButton.id = data[info]._id

                    let finishButton = document.createElement('button')
                    finishButton.textContent = 'Finish Course'
                    finishButton.classList.add('finish-btn')
                    finishButton.id = data[info]._id

                    // append the elements to the DOM tree
                    divList.appendChild(newDiv)
                    newDiv.appendChild(titleInfo)
                    newDiv.appendChild(teacherInfo)
                    newDiv.appendChild(typeInfo)
                    newDiv.appendChild(descriptionInfo)
                    newDiv.appendChild(editButton)
                    newDiv.appendChild(finishButton)

                    // add event to the finish Button
                    finishButton.addEventListener('click', finishButtonSolver)
                    function finishButtonSolver(e) {
                        e.preventDefault()

                        let id = e.currentTarget.id
                        fetch(`${BASE_URL}${id}`, {method: 'delete'})
                            .then(() => loadCourseButtonSolver(e))
                            .catch((err) => console.error(err));
                    }

                    // add event to the editButton Button
                    editButton.addEventListener('click', editButtonSolver)
                    function editButtonSolver(e) {
                        e.preventDefault()

                        let currentUl = e.currentTarget.parentNode
                        let title = currentUl.childNodes[0].textContent
                        let teacher = currentUl.childNodes[1].textContent
                        let type = currentUl.childNodes[2].textContent
                        let description = currentUl.childNodes[3].textContent

                        // put the values into the input fields
                        titleInput.value = title
                        teacherNameInput.value = teacher
                        typeInput.value = type
                        descriptionInput.value = description

                        // get the ID of the Update Button
                        let id = e.currentTarget.id

                        // remove the element from the DOM tree
                        currentUl.remove()

                        // enable edit course button
                        editCourseButton.disabled = false

                        // disable add course button
                        addCourseButton.disabled = true

                        // add event to the edit course button
                        editCourseButton.addEventListener('click', editCourseButtonSolver)
                        function editCourseButtonSolver(e) {
                            const HTTPheaders = {
                                method: 'PUT',
                                body: JSON.stringify({'title': titleInput.value, 'type': typeInput.value, 'description': descriptionInput.value, 'teacher': teacherNameInput.value})
                            }
    
                            fetch(`${BASE_URL}${id}`, HTTPheaders)
                                .then(() => loadCourseButtonSolver(e))
                                .catch((err) => console.error(err));
                        }
                    }
                }
            })
            .catch((err) => console.error(err));
    }

    addCourseButton.addEventListener('click', addCourseButtonSolver)
    function addCourseButtonSolver(e) {
        e.preventDefault()

        // get input values
        let title = titleInput.value;
        let type = typeInput.value;
        let description = descriptionInput.value;
        let teacherName = teacherNameInput.value;

        const HTTPheaders = {
            method: 'POST',
            body: JSON.stringify({'title': title, 'type': type, 'description': description, 'teacher': teacherName})
        }

        fetch(BASE_URL, HTTPheaders)
            .then((res) => res.json())
            .then(() => loadCourseButtonSolver(e))
            .catch((err) => console.error(err));

        // clear input fields
        titleInput.value = ''
        typeInput.value = ''
        descriptionInput.value = ''
        teacherNameInput.value = ''
    }
}

attachEvents();