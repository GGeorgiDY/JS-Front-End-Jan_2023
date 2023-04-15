window.addEventListener('load', groceryList);

function groceryList() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'
    const productInput = document.getElementById('product')
    const countInput = document.getElementById('count')
    const priceInput = document.getElementById('price')

    const tbody = document.getElementById('tbody')

    const addProductButton = document.getElementById('add-product')
    const updateProductButton = document.getElementById('update-product')
    updateProductButton.disabled = true
    const loadAllProductsButton = document.getElementById('load-product')

    // create event for the 'load all products' button
    loadAllProductsButton.addEventListener('click', loadAllProductsButtonSolver)
    function loadAllProductsButtonSolver(e) {
        e.preventDefault()

        // зачиствам output Полето
        tbody.textContent = ''

        fetch(BASE_URL, {method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
                for (info in data) {
                    // create new HTML elements
                    let tr = document.createElement('tr')

                    let productInfo = document.createElement('td')
                    productInfo.classList.add("name")
                    productInfo.textContent = `${data[info].product}`

                    let countInfo = document.createElement('td')
                    countInfo.classList.add("count-product")
                    countInfo.textContent = `${data[info].count}`

                    let priceInfo = document.createElement('td')
                    priceInfo.classList.add("product-price")
                    priceInfo.textContent = `${data[info].price}`

                    let td = document.createElement('td')
                    td.classList.add("btn")

                    let updateButton = document.createElement('button')
                    updateButton.classList.add('update')
                    updateButton.textContent = 'Update'
                    updateButton.id = data[info]._id

                    let deleteButton = document.createElement('button')
                    deleteButton.classList.add('delete')
                    deleteButton.textContent = 'Delete'
                    deleteButton.id = data[info]._id

                    // append the new HTML elements to the DOM tree
                    tbody.appendChild(tr)
                    tr.appendChild(productInfo)
                    tr.appendChild(countInfo)
                    tr.appendChild(priceInfo)
                    tr.appendChild(td)
                    td.appendChild(updateButton)
                    td.appendChild(deleteButton)

                    // add events to the twe created buttons
                    updateButton.addEventListener('click', updateButtonSolver)
                    deleteButton.addEventListener('click', deleteButtonSolver)
                }
            })
            .catch((err) => console.error(err));
    }

    // create event for the 'add product' button
    addProductButton.addEventListener('click', addProductButtonSolver)
    function addProductButtonSolver(e) {
        e.preventDefault()

        product = productInput.value
        count = countInput.value
        price = priceInput.value

        const HTTPheaders = {
            method: 'POST',
            body: JSON.stringify({product: product, count: count, price: price
            })
        }

        fetch(BASE_URL, HTTPheaders)
            .then((res) => res.json())
            .then(() => loadAllProductsButtonSolver(e))
            .catch((err) => console.error(err));
    }

    // create event for the 'delete' button
    function deleteButtonSolver(e) {
        e.preventDefault()

        let id = e.currentTarget.id
        fetch(`${BASE_URL}${id}`, {method: 'delete'})
            .then(() => loadAllProductsButtonSolver(e))
            .catch((err) => console.error(err));
    }

    // create event for the 'update' button
    function updateButtonSolver(e) {
        e.preventDefault()

        updateProductButton.disabled = false
        addProductButton.disabled = true
        const id = e.currentTarget.id

        let [product, count, price] = Array.from(e.currentTarget.parentElement.parentElement.children)
        productInput.value = product.textContent
        countInput.value = count.textContent
        priceInput.value = price.textContent

        // e.currentTarget.parentElement.parentElement.remove()

        // create event for the 'update product' button
        updateProductButton.addEventListener('click', updateProductButtonSolver)
        function updateProductButtonSolver(e) {
            e.preventDefault()

            const HTTPheaders = {
                method: 'PATCH',
                body: JSON.stringify({product: productInput.value, count: countInput.value, price: priceInput.value})
            }
    
            fetch(`${BASE_URL}${id}`, HTTPheaders)
                .then(() => loadAllProductsButtonSolver(e))
                .catch((err) => console.error(err));
            
            productInput.value = ''
            countInput.value = ''
            priceInput.value = ''
            updateProductButton.disabled = true
            addProductButton.disabled = false
        }
    }
}