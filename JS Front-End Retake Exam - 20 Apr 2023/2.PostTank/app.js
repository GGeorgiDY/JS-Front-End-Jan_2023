window.addEventListener("load", solve);

function solve() {
  const titleInput = document.getElementById('task-title')
  const categoryInput = document.getElementById('task-category')
  const contentInput = document.getElementById('task-content')

  const reviewList = document.getElementById('review-list')
  const publishedList = document.getElementById('published-list')

  const publishButton = document.getElementById('publish-btn')

  publishButton.addEventListener('click', publishButtonSolver)
  function publishButtonSolver(e) {
    e.preventDefault()

    let title = titleInput.value; 
    let category = categoryInput.value; 
    let content = contentInput.value;

    // check if all inputs are valid
    if (title === "" || category === "" || content === "") {
        alert('You need to fill all inputs.');
        return;
    }

    // creating the elements
    let li = document.createElement('li')
    li.classList.add('rpost')

    let article = document.createElement('article')

    let titleInfo = document.createElement('h4')
    titleInfo.textContent = title

    let categoryInfo = document.createElement('p')
    categoryInfo.textContent = `Category: ${category}`

    let contentInfo = document.createElement('p')
    contentInfo.textContent = `Content: ${content}`

    let editButton = document.createElement('button')
    editButton.classList.add('action-btn')
    editButton.classList.add('edit')
    editButton.textContent = 'Edit'

    let postButton = document.createElement('button')
    postButton.classList.add('action-btn')
    postButton.classList.add('post')
    postButton.textContent = 'Post'

    // append elements
    reviewList.appendChild(li)
    li.appendChild(article)
    li.appendChild(editButton)
    li.appendChild(postButton)
    article.appendChild(titleInfo)
    article.appendChild(categoryInfo)
    article.appendChild(contentInfo)

    // clear input fields
    titleInput.value = ''
    categoryInput.value = ''
    contentInput.value = ''

    // add event to the Edit button
    editButton.addEventListener('click', editButtonSolver)
    function editButtonSolver(e) {
        e.preventDefault()

        // fill input fields
        titleInput.value = title
        categoryInput.value = category
        contentInput.value = content

        let currentTask = e.currentTarget.parentElement
        currentTask.remove()
    }

    // add event to the Post button
    postButton.addEventListener('click', postButtonSolver)
    function postButtonSolver(e) {
        e.preventDefault()

        let currentTask = e.currentTarget.parentElement
        publishedList.appendChild(currentTask)

        editButton.remove()
        postButton.remove()
    }
  }
}