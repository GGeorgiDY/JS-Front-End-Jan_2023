// има един Load бутон, който като се кликне, ще трябва да пратим GET заявка, която ще бъде направена към нашия сървър (REST API-то 'http://localhost:3030/jsonstore/phonebook/') и дефакто ще трябва да листваме телефонни номера. Ще ги листваме в "ul" с id="phonebook" под формата на "<person>:<phone>"
// за всеки един такъв person, трябва да имаме Delete бутон, който при натискане да изпраща DELETE заявка към нашия сървър и да го изтрие. Ще получим отговор под формата на обект със следния формат: {<key>:{person:<person>, phone:<phone>}, <key2>:{person:<person2>, phone:<phone2>,…}, където key-a ще го вземем от сървъра, а person и phone са актуалните данни. 
// когато Create бутона се натисне, ще трябва да направим POST заявка към сървъра и да създадем нов обект, който да има име и телефонен номер. 
// всеки път като създаваме телефонен номер трябва да трием input-ите, като трябва да изпратим заявка, която да рефрешне страницата ни. Дефакто като създадем нещо пращаме нова заявка за да го вземем.  

function attachEvents() {
    const phoneBookContainer = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/'

    loadBtn.addEventListener('click', loadPhoneBookHandler);
    function loadPhoneBookHandler(e) {
        fetch(BASE_URL,  {method: 'GET'})
            .then((res) => res.json())
            .then((phodeBookData) => {
                // ще е хубаво при повторно повикване на функцията да изтрием всичко "li-та", за да не се стакват
                phoneBookContainer.innerHTML = ''

                const phoneBookRes = Object.values(phodeBookData) // обръщаме ги на речник
                for (const { phone, person, _id } of phoneBookRes) {
                    const li = document.createElement('li')
                    li.innerHTML = `${person}: ${phone}` // можем да използваме и textContent
                    phoneBookContainer.appendChild(li)

                    const button = document.createElement('button')
                    button.textContent = 'Delete'
                    li.appendChild(button)

                    button.setAttribute('id', _id) // може и долния ред
                    // button.id = _id //това взема онези id-та "_id": "d749a819-1e41-4c65-9ce2-7b429c4ebd0d", които имаме в JSON файла в API-то. За всеки бутон, ще вземе ще се създаде id, което да е това _id за съответния телефонен номер
                    button.addEventListener('click', deletePhoneBookRecord) // ще повика функцията от по-долу
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }


    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');

    createBtn.addEventListener('click', createPhoneBookHandler)
    function createPhoneBookHandler(e) {
        const person = personInput.value;
        const phone = phoneInput.value;
        
        // като втори аргумент във fetch-a е хубаво да подадем и HTTP Head-арите, които да пращаме. Тези хеадъри (данни) които ще пращаме ще ги пращаме под фомрата на body. Това body не мога да го пратя като обект, защото то трябва да е JSON string. За това използваме JSON.stringify()
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }
        // сега ще изпратим заявка до сървъра че искаме да създадем някакво entity
        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            // след като сме добавили новия телефонен номер, ние по условие трябва да визуализираме горе новия номер. Сиреч ще си извикаме горната функция "loadPhoneBookHandler", все едно е натиснат горния бутон. 
            .then(() => {
                loadPhoneBookHandler();
                // ще трябва и да си изчистя инпут полетата
                personInput.value = "";
                phoneInput.value = "";
            })
            .catch((err) => {
                console.erroe(err);
            })
    }

    function deletePhoneBookRecord(e) {
        const id = e.currentTarget.id // тук currentTarget е самия бутон. Същото е const id = this.id
        const httpHeaders = {
            method: 'DELETE'
        }
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json())
            //след като сме го изтрили, правим нова заявка да заредим самия телефонен указател
            .then((res) => {
                loadPhoneBookHandler();
            })
            .catch((err) => {
                console.error(err)
            })
    }
}

attachEvents();