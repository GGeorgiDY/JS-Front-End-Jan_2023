window.addEventListener("load", solve);

function solve() {
  const makeInput = document.getElementById('make')
  const modelInput = document.getElementById('model')
  const yearInput = document.getElementById('year')
  const fuelInput = document.getElementById('fuel')
  const originalCostInput = document.getElementById('original-cost')
  const sellingPriceInput = document.getElementById('selling-price')

  const tableBody = document.getElementById('table-body')

  const publishButton = document.getElementById('publish')
  const carsList = document.getElementById('cars-list')
  let totalProfitInfo = document.getElementById('profit')
  let totalProfit = 0

  publishButton.addEventListener('click', publishButtonSolver)
  function publishButtonSolver(e) {
    e.preventDefault()

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    let fuel = fuelInput.value;
    let originalCost = originalCostInput.value;
    let sellingPrice = sellingPriceInput.value;

    if (make === '' || model === '' || year === '' || fuel === '' || originalCost === '' || sellingPrice === '' || Number(originalCost > Number(sellingPrice))) {
      alert('You need to fill all inputs.');
      return;
    }

    // create new html elements
    let tr = document.createElement('tr')
    tr.classList.add('row')

    let makeInfo = document.createElement('td')
    makeInfo.textContent = make

    let modelInfo = document.createElement('td')
    modelInfo.textContent = model

    let yearInfo = document.createElement('td')
    yearInfo.textContent = year

    let fuelInfo = document.createElement('td')
    fuelInfo.textContent = fuel

    let originalCostInfo = document.createElement('td')
    originalCostInfo.textContent = originalCost

    let sellingPriceInfo = document.createElement('td')
    sellingPriceInfo.textContent = sellingPrice

    let td = document.createElement('td')

    let editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.classList.add('action-btn')
    editButton.classList.add('edit')

    let sellButton = document.createElement('button')
    sellButton.textContent = 'Sell'
    sellButton.classList.add('action-btn')
    sellButton.classList.add('sell')

    // append the new html elements to the DOM tree
    tableBody.appendChild(tr)
    tr.appendChild(makeInfo)
    tr.appendChild(modelInfo)
    tr.appendChild(yearInfo)
    tr.appendChild(fuelInfo)
    tr.appendChild(originalCostInfo)
    tr.appendChild(sellingPriceInfo)
    tr.appendChild(td)
    td.appendChild(editButton)
    td.appendChild(sellButton)

    // clear all input fields
    makeInput.value = ''
    modelInput.value = ''
    yearInput.value = ''
    fuelInput.value = ''
    originalCostInput.value = ''
    sellingPriceInput.value = ''

    // add event to EditButton Button
    editButton.addEventListener('click', editButtonSolver)
    function editButtonSolver(e) {
      e.preventDefault()

      // fill all input fields
      makeInput.value = make
      modelInput.value = model
      yearInput.value = year
      fuelInput.value = fuel
      originalCostInput.value = originalCost
      sellingPriceInput.value = sellingPrice

      // remove info from tableBody
      tr.remove()
    }

    // add event to sell Button
    sellButton.addEventListener('click', sellButtonSolver)
    function sellButtonSolver(e) {
      e.preventDefault()

      // create new html elements
      const newLi = document.createElement('li')
      newLi.classList.add('each-list')

      const makeAndModelInfo = document.createElement('span')
      makeAndModelInfo.textContent = `${make} ${model}`
      
      const productionYear = document.createElement('span')
      productionYear.textContent = year

      const diffPrice = document.createElement('span')
      let diff = Number(sellingPrice) - Number(originalCost)
      diffPrice.textContent = `${diff}`

    // append the new html elements to the DOM tree
      carsList.appendChild(newLi)
      newLi.appendChild(makeAndModelInfo)
      newLi.appendChild(productionYear)
      newLi.appendChild(diffPrice)

      // remove info from tableBody
      tr.remove()

      // updating total profit
      totalProfit += diff
      totalProfitInfo.textContent = `${totalProfit.toFixed(2)}`
    }
  }
}
