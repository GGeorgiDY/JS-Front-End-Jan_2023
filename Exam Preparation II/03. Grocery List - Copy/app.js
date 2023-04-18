window.addEventListener('load', groceryList);

function groceryList() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'

    const productInput = document.getElementById('product')
    const countInput = document.getElementById('count')
    const priceInput = document.getElementById('price')

    const tbodySection = document.getElementById('tbody')
    let currentID = 0

    const addProductButton = document.getElementById('add-product')
    const updateProductButton = document.getElementById('update-product')
    const loadProductButton = document.getElementById('load-product')

    updateProductButton.disabled = true

    loadProductButton.addEventListener('click', loadProductButtonSolver)
    function loadProductButtonSolver(e) {
        e.preventDefault()

        // clear input fields
        tbodySection.textContent = ''

        // disable updateProductButton
        // updateProductButton.disabled = true

        fetch(BASE_URL, {method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
                for (info in data) {
                    // create HTML elements
                    let tr = document.createElement('tr')

                    let nameInfo = document.createElement('td')
                    nameInfo.classList.add('name')
                    nameInfo.textContent = data[info].product

                    let countInfo = document.createElement('td')
                    countInfo.classList.add('count-product')
                    countInfo.textContent = data[info].count
                    
                    let priceInfo = document.createElement('td')
                    priceInfo.classList.add('product-price')
                    priceInfo.textContent = data[info].price

                    let td = document.createElement('td')
                    td.classList.add('btn')

                    let updateButton = document.createElement('button')
                    updateButton.classList.add('update')
                    updateButton.textContent = 'Update'
                    updateButton.id = data[info]._id

                    let deleteButton = document.createElement('button')
                    deleteButton.classList.add('delete')
                    deleteButton.textContent = 'Delete'
                    deleteButton.id = data[info]._id

                    // append elements to DOM tree
                    tbodySection.appendChild(tr)
                    tr.appendChild(nameInfo)
                    tr.appendChild(countInfo)
                    tr.appendChild(priceInfo)
                    tr.appendChild(td)
                    td.appendChild(updateButton)
                    td.appendChild(deleteButton)

                    // create events to the Delete Button
                    deleteButton.addEventListener('click', deleteButtonSolver)
                    function deleteButtonSolver(e) {
                        e.preventDefault()

                        let id = e.currentTarget.id
                        fetch(`${BASE_URL}${id}`, {method: 'delete'})
                            .then(() => loadProductButtonSolver(e))
                            .catch((err) => console.error(err));
                    }

                    // create events to the Update Button
                    updateButton.addEventListener('click', updateButtonSolver)
                    function updateButtonSolver(e) {
                        e.preventDefault()

                        // get the needed values
                        let currentTr = e.currentTarget.parentNode.parentNode
                        let currentProduct = currentTr.childNodes[0].textContent
                        let currentCount = currentTr.childNodes[1].textContent
                        let currentPrice = currentTr.childNodes[2].textContent

                        // put the values into the input fields
                        productInput.value = currentProduct
                        countInput.value = currentCount
                        priceInput.value = currentPrice

                        // get the ID of the Update Button
                        currentID = e.currentTarget.id

                        // delete DOM elements
                        e.currentTarget.parentNode.parentNode.remove()

                        // enable updateProductButton
                        updateProductButton.disabled = false

                        // create events to the Update Product Button
                        updateProductButton.addEventListener('click', updateProductButtonSolver)
                        function updateProductButtonSolver(e) {
                            e.preventDefault()

                            const HTTPheaders = {
                                method: 'PATCH',
                                body: JSON.stringify({'product': productInput.value, 'count': countInput.value, 'price': priceInput.value})
                            }

                            fetch(`${BASE_URL}${currentID}`, HTTPheaders)
                                .then(() => loadProductButtonSolver(e))
                                .catch((err) => console.error(err));

                            // clear the values into the input fields
                            productInput.value = ''
                            countInput.value = ''
                            priceInput.value = ''
                        }
                    }
                }
            })
    }

    addProductButton.addEventListener('click', addProductButtonSolver)
    function addProductButtonSolver(e) {
        e.preventDefault()

        // get the values of the input fields
        let product = productInput.value;
        let count = countInput.value;
        let price = priceInput.value;

        const HTTPheaders = {
            method: 'POST',
            body: JSON.stringify({'product': product, 'count': count, 'price': price})
        }

        fetch(BASE_URL, HTTPheaders)
            .then((res) => res.json())
            .then(() => loadProductButtonSolver(e))
            .catch((err) => console.error(err));

        // clear input fields
        productInput.value = ''
        countInput.value = ''
        priceInput.value = ''
    }
}