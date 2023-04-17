window.addEventListener("load", solve);

function solve() {
  const titleInput = document.getElementById('post-title')
  const categoryInput = document.getElementById('post-category')
  const contentInput = document.getElementById('post-content')

  const reviewList = document.getElementById('review-list')
  const publishList = document.getElementById('published-list')
  const clearButton = document.getElementById('clear-btn')

  const publishButton = document.getElementById('publish-btn')

  publishButton.addEventListener('click', publishButtonSolver)
  function publishButtonSolver(e) {
    e.preventDefault()

    title = titleInput.value;
    category = categoryInput.value;
    content = contentInput.value;

    if (title === '' || category === '' || content === '') {
      alert('You need to fill all inputs.');
      return;
    }

    // create new html elements
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
    editButton.textContent = `Edit`

    let approveButton = document.createElement('button')
    approveButton.classList.add('action-btn')
    approveButton.classList.add('approve')
    approveButton.textContent = `Approve`

    // append the new html elements to the DOM tree
    reviewList.appendChild(li)
    li.appendChild(article)
    li.appendChild(editButton)
    li.appendChild(approveButton)
    article.appendChild(titleInfo)
    article.appendChild(categoryInfo)
    article.appendChild(contentInfo)

    // clear all input fields in the Sprint Plannig section
    titleInput.value = ''
    categoryInput.value = ''
    contentInput.value = ''

    // add event to editButton
    editButton.addEventListener('click', editButtonSolver)
    function editButtonSolver(e) {
      e.preventDefault()

      // add info to the input fields
      titleInput.value = title
      categoryInput.value = category
      contentInput.value = content

      // delete record
      li.remove()
    }

    // add event to approveButton
    approveButton.addEventListener('click', approveButtonSolver)
    function approveButtonSolver(e) {
      e.preventDefault()

      // add fields to the publish
      publishList.appendChild(li)

      // remove buttons
      editButton.remove()
      approveButton.remove()

      // add event to clearButton
      clearButton.addEventListener('click', clearButtonSolver)
      function clearButtonSolver(e) {
        e.preventDefault()

        li.remove()
      }
    }
  }
}
