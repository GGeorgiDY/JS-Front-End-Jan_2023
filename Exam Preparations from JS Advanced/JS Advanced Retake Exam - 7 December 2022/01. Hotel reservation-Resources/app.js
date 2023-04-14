window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const dateInInput = document.getElementById('date-in');
    const dateOutInput = document.getElementById('date-out');
    const numberOfGuestsInput = document.getElementById('people-count');

    const nextButton = document.getElementById('next-btn');

    const infoList = document.getElementsByClassName('info-list')[0];
    const confirmList = document.getElementsByClassName('confirm-list')[0];
    const verification = document.getElementById('verification')

    nextButton.addEventListener('click', nextButtonSolver)
    function nextButtonSolver(e) {
        e.preventDefault()

        // get value of inputs
        firstName = firstNameInput.value;
        lastName = lastNameInput.value;
        dateIn = dateInInput.value;
        dateOut = dateOutInput.value;
        numberOfGuests = numberOfGuestsInput.value;

        // check for empty strings in inputs
        if (firstName === '' || lastName === '' || dateIn === '' || dateOut === '' || numberOfGuests === '' || numberOfGuests <= 0 || dateOut <= dateIn) {
            alert('You need to fill all inputs.');
            return;
        }

        // create new html elements
        let newLi = document.createElement('li')
        newLi.classList.add('reservation-content')

        let newArticle = document.createElement('article')

        let nameInfo = document.createElement('h3')
        nameInfo.textContent = `Name: ${firstName} ${lastName}`

        let dateInInfo = document.createElement('p')
        dateInInfo.textContent = `From date: ${dateIn}`

        let dateOutInfo = document.createElement('p')
        dateOutInfo.textContent = `To date: ${dateOut}`

        let numberOfGuestsInfo = document.createElement('p')
        numberOfGuestsInfo.textContent = `For ${numberOfGuests} people`

        let editButton = document.createElement('button')
        editButton.classList.add('edit-btn')
        editButton.textContent = 'Edit'

        let continueButton = document.createElement('button')
        continueButton.classList.add('continue-btn')
        continueButton.textContent = 'Continue'

        // append html elements to DOM tree
        infoList.appendChild(newLi)
        newLi.appendChild(newArticle)
        newLi.appendChild(editButton)
        newLi.appendChild(continueButton)
        newArticle.appendChild(nameInfo)
        newArticle.appendChild(dateInInfo)
        newArticle.appendChild(dateOutInfo)
        newArticle.appendChild(numberOfGuestsInfo)

        // clear input fields
        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        numberOfGuestsInput.value = '';

        // disable "Next step" button
        nextButton.disabled = true

        // enable "Edit" and "Coontinue" buttons
        editButton.disabled = false
        continueButton.disabled = false

        // edit button event
        editButton.addEventListener('click', editButtonSolver)
        function editButtonSolver(e) {
            // e.preventDefault()
            
            // load the information in the inputs
            firstNameInput.value = firstName
            lastNameInput.value = lastName
            dateInInput.value = dateIn
            dateOutInput.value = dateOut
            numberOfGuestsInput.value = numberOfGuests

            // enable next button
            nextButton.disabled = false

            // delete all information on the reservation info
            newLi.remove()
        }
        
        // continue button event
        continueButton.addEventListener('click', continueButtonSolver)
        function continueButtonSolver(e) {
            // e.preventDefault()
            
            // transfer the information to the confirm reservation list & remove it from the reservation info list
            confirmList.appendChild(newLi)

            // delete edit and continue buttons
            editButton.remove()
            continueButton.remove()

            // add confirm and cancel buttons
            let confirmButton = document.createElement('button')
            confirmButton.classList.add('confirm-btn')
            confirmButton.textContent = 'Confirm'

            let cancelButton = document.createElement('button')
            cancelButton.classList.add('cancel-btn')
            cancelButton.textContent = 'Cancel'

            // append the confirm and cancel buttons to the DOM tree
            newLi.appendChild(confirmButton)
            newLi.appendChild(cancelButton)

            // confirm button event
            confirmButton.addEventListener('click', confirmButtonSolver)
            function confirmButtonSolver(e) {
                // e.preventDefault()

                // delete info from confirm reservation section
                newLi.remove()
    
                // enable next button
                nextButton.disabled = false
    
                // update verification
                verification.setAttribute('class', 'reservation-confirmed')
                verification.textContent = 'Confirmed.'
            }

            // cancel button event
            cancelButton.addEventListener('click', cancelButtonSolver)
            function cancelButtonSolver(e) {
                // e.preventDefault()

                // delete info from confirm reservation section
                newLi.remove()
    
                // enable next button
                nextButton.disabled = false
    
                // update verification
                verification.setAttribute('class', 'reservation-cancelled')
                verification.textContent = 'Cancelled.'
            }
        }
    }
}