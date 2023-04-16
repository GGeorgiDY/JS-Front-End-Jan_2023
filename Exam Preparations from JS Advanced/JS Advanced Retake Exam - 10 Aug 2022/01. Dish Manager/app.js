window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name')
  const lastNameInput = document.getElementById('last-name')
  const ageInput = document.getElementById('age')
  const genderInput = document.getElementById('genderSelect')
  const dishDescriptionInput = document.getElementById('task')

  const submitButton = document.getElementById('form-btn')
  const clearButton = document.getElementById('clear-btn')

  const inProgressSection = document.getElementById('in-progress')
  const counterMessage = document.getElementById('progress-count')
  let counter = 0

  const finishedCookingSection = document.getElementById('finished')

  // attach event to submitButton
  submitButton.addEventListener('click', submitButtonSolver)
  function submitButtonSolver(e) {
    e.preventDefault()

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let gender = genderInput.value;
    let dishDescription = dishDescriptionInput.value;

    // check all input fields
    if (firstName === '' || lastName === '' || age === '' || dishDescription === '') {
      alert('You need to fill all inputs.');
      return;
    }

    // create new HTML elements
    let newLi = document.createElement('li')
    newLi.classList.add('each-line')

    let newarticle = document.createElement('article')

    let nameInfo = document.createElement('h4')
    nameInfo.textContent = `${firstName} ${lastName}`

    let genderAndAgeInfo = document.createElement('p')
    genderAndAgeInfo.textContent = `${gender}, ${age}`

    let dishDescriptionInfo = document.createElement('p')
    dishDescriptionInfo.textContent = `Dish description: ${dishDescription}`

    let editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.classList.add('edit-btn')

    let markAsCompleteButton = document.createElement('button')
    markAsCompleteButton.textContent = 'Mark as complete'
    markAsCompleteButton.classList.add('complete-btn')

    // attach new elements to the DOM tree
    inProgressSection.appendChild(newLi)
    newLi.appendChild(newarticle)
    newLi.appendChild(editButton)
    newLi.appendChild(markAsCompleteButton)
    newarticle.appendChild(nameInfo)
    newarticle.appendChild(genderAndAgeInfo)
    newarticle.appendChild(dishDescriptionInfo)

    // clear all input fields
    firstNameInput.value = ''
    lastNameInput.value = ''
    ageInput.value = ''
    // genderInput.value = ''
    dishDescriptionInput.value = ''

    // add points to counterMessage
    counter += 1
    counterMessage.textContent = counter

    // add event to Edit button
    editButton.addEventListener('click', editButtonSolver)
    function editButtonSolver(e) {
      e.preventDefault()

      // load all info to the input fields
      firstNameInput.value = firstName
      lastNameInput.value = lastName
      ageInput.value = age
      // genderInput.value = gender
      dishDescriptionInput.value = dishDescription

      // remove the record from In progress section
      newLi.remove()

      // decrease counterMessage by 1
      counter -= 1
      // counterMessage.textContent = `Dishes still in progress: ${counter}`
      counterMessage.textContent = counter
    }

    // add event to markAsCompleteButton button
    markAsCompleteButton.addEventListener('click', markAsCompleteButtonSolver)
    function markAsCompleteButtonSolver(e) {
      e.preventDefault()

      // append the newLi to the finishedCookingSection and remove it from inProgressSection
      finishedCookingSection.appendChild(newLi)

      // decrease counterMessage by 1
      counter -= 1
      counterMessage.textContent = counter

      // remove the 'Edit' button and the “Mark as complete” button
      editButton.remove()
      markAsCompleteButton.remove()

      // add event to clearButton Button
      clearButton.addEventListener('click', clearButtonSolver)
      function clearButtonSolver(e) {
        e.preventDefault()

        newLi.remove()
      }
    }
  }
}
