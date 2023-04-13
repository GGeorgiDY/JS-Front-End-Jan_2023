window.addEventListener('load', solve);

function solve() {
    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const addButton = document.getElementById('add-btn');

    // let songsContainer = document.querySelector('#all-hits > div');
    const songsContainer = document.getElementsByClassName('all-hits-container')[0];
    // let savedSongsContainer = document.querySelector('#saved-hits > div');
    const savedSongsContainer = document.getElementsByClassName('saved-container')[0];
    // let likesContainer = document.querySelector('#total-likes > div > p');
    const likesContainer = document.querySelector('.likes > p');

    addButton.addEventListener('click', addSong)
    function addSong(event) {
        // правим така че след като сме добавили данните те да не изчезват отсамосебе си
        event.preventDefault();

        // правим проверка дали всички полета са въведени с данни
        if (genreInput.value === "" || nameInput.value === "" || authorInput.value === "" || dateInput.value === "") {
            alert('You need to fill all inputs.');
            return;
        }
        
        // creating the new elements
        let divContainer = document.createElement('div')
        divContainer.classList.add('hits-info')

        let img = document.createElement('img')
        img.src = './static/img/img.png';

        let genre = document.createElement('h2')
        genre.textContent = `Genre: ${genreInput.value}`
        
        let name = document.createElement('h2')
        name.textContent = `Name: ${nameInput.value}`
        
        let author = document.createElement('h2')
        author.textContent = `Author: ${authorInput.value}`
        
        let date = document.createElement('h3')
        date.textContent = `Date: ${dateInput.value}`

        // creating buttons
        let saveButton = document.createElement('button')
        saveButton.classList.add('save-btn')
        saveButton.textContent = `Save song`
        saveButton.addEventListener('click', saveSong)

        let likeButton = document.createElement('button')
        likeButton.classList.add('like-btn')
        likeButton.textContent = `Like song`
        likeButton.addEventListener('click', likeSong)

        let deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-btn')
        deleteButton.textContent = `Delete`
        deleteButton.addEventListener('click', deleteSong)

        // append the new elements to the DOM tree
        songsContainer.appendChild(divContainer)
        divContainer.appendChild(img)
        divContainer.appendChild(genre)
        divContainer.appendChild(name)
        divContainer.appendChild(author)
        divContainer.appendChild(date)
        divContainer.appendChild(saveButton)
        divContainer.appendChild(likeButton)
        divContainer.appendChild(deleteButton)

        // delete info from input container
        genreInput.textContent = ''
        nameInput.textContent = ''
        authorInput.textContent = ''
        dateInput.textContent = ''
    }

    function saveSong(event) {
        event.preventDefault();
        // console.log(e.currentTarget) 
        // <button class="save-btn">Save song</button>

        // console.log(e.currentTarget.parentNode) 
        // <div class="hits-info">
        // <h2>Genre: asd</h2>
        // <h2>Name: asd</h2>
        // <h2>Genre: asd</h2>
        // <h3>Genre: 11.11.2011</h3>
        // <button class="save-btn">Save song</button>
        // <button class="like-btn">Like song</button>
        // <button class="delete-btn">Delete</button></div>

        // console.log(Array.from(e.currentTarget.parentNode.children))
        // [h2, h2, h2, h3, button.save-bth, button.like-bth, button.delete-bth]


        // създаваме си нов елемент
        let newDiv = document.createElement('div')
        newDiv.classList.add('hits-info')

        // append-ваме новия елемент към контейнер
        savedSongsContainer.appendChild(newDiv)

        // добавяме в елемента всички елементи от предишния контейнер заедно с бутона delete
        let info = Array.from(event.currentTarget.parentNode.children)
        for (const element of info) {
            if (element.textContent !== 'Save song' && element.textContent !== 'Like song') {
                newDiv.appendChild(element)
            }
        }

        // изтриваме от предишния контейнер информацията за тази песен
        event.currentTarget.parentNode.remove()
    }

    function likeSong(event) {
        event.preventDefault();
        console.log(likesContainer) // <p>Total Likes: 0</p>
        console.log(likesContainer.textContent) // Total Likes: 0
        
        let totalLikes = Number(likesContainer.textContent.split(": ")[1])
        totalLikes += 1

        likesContainer.textContent = `Total Likes: ${totalLikes}`

        // правим бутона за лайкове неактивен, за да не може да лайкваме една песен повече от веднъж
        event.currentTarget.disabled = true;
    }

    function deleteSong(event) {
        event.preventDefault();
        event.currentTarget.parentNode.remove()
    }
}
