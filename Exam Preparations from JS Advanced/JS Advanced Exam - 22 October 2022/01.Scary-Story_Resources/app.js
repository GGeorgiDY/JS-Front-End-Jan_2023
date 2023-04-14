window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitleInput = document.getElementById('story-title');
  const genreInput = document.getElementById('genre');
  const storyInput = document.getElementById('story');
  const publishButton = document.getElementById('form-btn');

  const previewList = document.getElementById('preview-list')
  const main = document.getElementById('main')

  publishButton.addEventListener('click', publishButtonSolver)
  function publishButtonSolver(e) {
    e.preventDefault()

    // get value of inputs
    firstName = firstNameInput.value;
    lastName = lastNameInput.value;
    age = ageInput.value;
    storyTitle = storyTitleInput.value;
    genre = genreInput.value;
    story = storyInput.value;

    // check for empty strings in inputs
    if (firstName === '' || lastName === '' || age === '' || storyTitle === '' || genre === '' || story === '') {
      alert('You need to fill all inputs.');
      return;
    }

    // create new html elements
    let listItem = document.createElement('li')
    listItem.classList.add('story-info')

    let article = document.createElement('article')

    let nameInfo = document.createElement('h4')
    nameInfo.textContent = `Name: ${firstName} ${lastName}`

    let ageInfo = document.createElement('p')
    ageInfo.textContent = `Age: ${age}`

    let storyTitleInfo = document.createElement('p')
    storyTitleInfo.textContent = `Title: ${storyTitle}`

    let genreInfo = document.createElement('p')
    genreInfo.textContent = `Genre: ${genre}`

    let storyInfo = document.createElement('p')
    storyInfo.textContent = `${story}`

    let saveButton = document.createElement('button')
    saveButton.setAttribute('class', 'save-btn')
    saveButton.textContent = 'Save Story'

    let editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit-btn')
    editButton.textContent = 'Edit Story'

    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete-btn')
    deleteButton.textContent = 'Delete Story'

    // append html elements to DOM tree
    previewList.appendChild(listItem)
    listItem.appendChild(article)
    listItem.appendChild(saveButton)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)
    article.appendChild(nameInfo)
    article.appendChild(ageInfo)
    article.appendChild(storyTitleInfo)
    article.appendChild(genreInfo)
    article.appendChild(storyInfo)

    // clear input fields
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    genreInput.value = '';
    storyInput.value = '';

    // disable "Next step" button
    publishButton.disabled = true

    // enable other three buttons
    saveButton.disabled = false
    editButton.disabled = false
    deleteButton.disabled = false

    // edit button event
    editButton.addEventListener('click', editButtonSolver)
    function editButtonSolver(e) {
        e.preventDefault()

        // load the information in the inputs
        firstNameInput.value = firstName
        lastNameInput.value = lastName
        ageInput.value = age
        storyTitleInput.value = storyTitle
        genreInput.value = genre
        storyInput.value = story

        // enable next button
        publishButton.disabled = false

        // delete all information on the reservation info
        listItem.remove()
    }

    // delete button event
    deleteButton.addEventListener('click', deleteButtonSolver)
    function deleteButtonSolver(e) {
        e.preventDefault()

        // delete the list item from the preview list
        listItem.remove()

        // enable publish button
        publishButton.disabled = false
    }
  }
}
