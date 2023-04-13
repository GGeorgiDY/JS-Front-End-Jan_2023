window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitleInput = document.getElementById('story-title');
  const genreInput = document.getElementById('genre');
  const yourStoryInput = document.getElementById('story');
  const publishButton = document.getElementById('form-btn');

  const previewContainer = document.getElementById('preview-list');

  let inputsInfo = {
    'firstNameInput': null,
    'lastNameInput': null,
    'ageInput': null,
    'storyTitleInput': null,
    'genreInput': null,
    'yourStoryInput': null
  }

  publishButton.addEventListener('click', publishHandler)

  function publishHandler(e) {
    e.preventDefault()

    function editButtonHandler(e) {
      e.preventDefault();
  
      // правим така че всяка от инфррмациите в инпут полетата да се появи в тях
      firstNameInput.value = inputsInfo['firstNameInput'];
      lastNameInput.value = inputsInfo['lastNameInput'];
      ageInput.value = inputsInfo['ageInput'];
      storyTitleInput.value = inputsInfo['storyTitleInput'];
      genreInput.value = inputsInfo['genreInput'];
      yourStoryInput.value = inputsInfo['yourStoryInput'];
  
      // деактивираме бутоните в publish полето
      saveButton.disabled = true;
      editButton.disabled = true;
      deleteButton.disabled = true;

      // активиране на Publish бутона
      publishButton.disabled = false;

      // премахване на информацията от preview полето за съответния филм
      e.currentTarget.parentNode.remove()
    }
    
    function saveButtonHandler(e) {
      e.preventDefault();

      // изтривам всичко под таг-а с id = main
      const mainField = document.getElementById('main')
      // mainField.childNodes.remove()
      while (mainField.firstChild) {
        mainField.removeChild(mainField.lastChild)
      }

      // създавам си нова променлива която за качам на таг-а с id = main
      const finalMessage = document.createElement('h1')
      finalMessage.textContent = "Your scary story is saved!"
      mainField.appendChild(finalMessage)
    }

    function deleteButtonHandler(e) {
      e.preventDefault();

      // премахване на информацията от preview полето за съответния филм
      e.currentTarget.parentNode.remove()

      // активиране на Publish бутона
      publishButton.disabled = false;
    }

    // get the value for every input field
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let storyTitle = storyTitleInput.value;
    let genre = genreInput.value;
    let yourStory = yourStoryInput.value;

    inputsInfo = {
      'firstNameInput': firstNameInput.value,
      'lastNameInput': lastNameInput.value,
      'ageInput': ageInput.value,
      'storyTitleInput': storyTitleInput.value,
      'genreInput': genreInput.value,
      'yourStoryInput': yourStoryInput.value
    }

    // check if all inputs are valid
    if (firstName === "" || lastName === "" || age === "" || storyTitle === "" || genre === "" || yourStory === "") {
      alert('You need to fill all inputs.');
      return;
    }

    // creating the elements
    let liInfo = document.createElement('li')
    liInfo.classList.add('story-info')

    let storyInfo = document.createElement('article')
    
    let nameInfo = document.createElement('h4')
    nameInfo.textContent = `Name: ${firstName} ${lastName}`

    let ageInfo = document.createElement('p')
    ageInfo.textContent = `Age: ${age}`

    let titleInfo = document.createElement('p')
    titleInfo.textContent = `Title: ${storyTitle}`

    let genreInfo = document.createElement('p')
    genreInfo.textContent = `Genre: ${genre}`

    let yourStoryInfo = document.createElement('p')
    yourStoryInfo.textContent = `${yourStory}`

    const saveButton = document.createElement('button')
    saveButton.textContent = "Save Story"
    saveButton.classList.add("save-btn")
    saveButton.addEventListener('click', saveButtonHandler)

    const editButton = document.createElement('button')
    editButton.textContent = "Edit Story"
    editButton.classList.add("edit-btn")
    editButton.addEventListener('click', editButtonHandler)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete Story"
    deleteButton.classList.add("delete-btn")
    deleteButton.addEventListener('click', deleteButtonHandler)

    // append elements
    previewContainer.appendChild(liInfo);
    liInfo.appendChild(storyInfo);
    storyInfo.appendChild(nameInfo);
    storyInfo.appendChild(ageInfo);
    storyInfo.appendChild(titleInfo);
    storyInfo.appendChild(genreInfo);
    storyInfo.appendChild(yourStoryInfo);

    liInfo.appendChild(saveButton);
    liInfo.appendChild(editButton);
    liInfo.appendChild(deleteButton);

    // clear initial input fields
    firstNameInput.value = ""
    lastNameInput.value = ""
    ageInput.value = ""
    storyTitleInput.value = ""
    genreInput.value = ""
    yourStoryInput.value = ""

    // disable publish button
    publishButton.disabled = true
  }
}
