function addItem() {
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    newLi.textContent = input.value; // взимаме ст-ст на input
    ulContainer.appendChild(newLi)
    input.value = '' // чистя си input полето;
}