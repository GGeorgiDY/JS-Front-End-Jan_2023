// трябва да напишем задача, която показва времената в които идват всички автобуси и всичките спирки по дадено id, когато цъкнем бутона. Тоест за дадена спирка да ни се извадят всички автобуси.
// накрая информацията трябва да я сложим в един div 
// всичко което ни е highlighted трябва да го реплейснем 
// ако подадем невалидно bus id (спирка) ще ни каже "Error", който трябва да визуалзираме под формата на div
// валидните спирки са 1287, 1308, 1327 and 2334
// http://localhost:3030/jsonstore/bus/businfo/:busId ни е сървъра който го пробвахме.

function getInfo() {
    const stopIdInput = document.getElementById('stopId'); // където въвеждаме спирката
    const stopID = stopIdInput.value; // това е спирката която ще бъде въведена
    const stopNameContainer = document.getElementById('stopName'); // аутпута със спирката
    const bussesContainer = document.getElementById('buses'); // аутпута с автобусите за спирката

    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'; 
    bussesContainer.innerHTML = "" // преди всяко въвеждане на нов автобус се изтрива старата информация

    // сега трябва да си пуснем самата fetch заявка
    fetch(`${BASE_URL}${stopID}`, {method: 'GET'})
        .then((res) => res.json())
        .then((busInfo) => {
            const { name, buses } = busInfo;
            stopNameContainer.textContent = name;
            for (const busID in buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${busID} arrives in ${buses[busID]} minutes`;
                bussesContainer.appendChild(li);
            }
        })
        .catch((err) => {
            stopNameContainer.textContent = `Error`;
        })
}