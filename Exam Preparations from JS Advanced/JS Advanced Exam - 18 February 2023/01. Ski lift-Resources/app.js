window.addEventListener('load', solve);

function solve() {
   const firstNameInput = document.getElementById('first-name');
   const lastNameInput = document.getElementById('last-name');
   const numberOfPeopleInput = document.getElementById('people-count');
   const fromDateInput = document.getElementById('from-date');
   const daysInput = document.getElementById('days-count');
   const nextStepButton = document.getElementById('next-btn');

   const ticketInfoList = document.getElementsByClassName('ticket-info-list')[0];
   const confirmTicketList = document.querySelector('.confirm-ticket');
   const mainElement = document.getElementById('main')

    nextStepButton.addEventListener('click', nextStepSolver)
    function nextStepSolver(e) {
        e.preventDefault()

        // get value of inputs
        firstName = firstNameInput.value; 
        lastName = lastNameInput.value; 
        numberOfPeople = numberOfPeopleInput.value; 
        fromDate = fromDateInput.value; 
        days = daysInput.value; 
        
        // check for empty strings in inputs
        if (firstName === '' || lastName === '' || numberOfPeople === '' || fromDate === '' || days === '') {
            alert('You need to fill all inputs.');
            return;
        }

        // create new html elements
        let newLi = document.createElement('li');
        newLi.classList.add('ticket')

        let newArticle = document.createElement('article');

        let nameinfo = document.createElement('h3');
        nameinfo.textContent = `Name: ${firstName} ${lastName}`
        
        let dateInfo = document.createElement('p');
        dateInfo.textContent = `From Date: ${fromDate}`
        
        let numberOfDaysInfo = document.createElement('p');
        numberOfDaysInfo.textContent = `For ${days} days`
        
        let numberOfPeopleInfo = document.createElement('p');
        numberOfPeopleInfo.textContent = `For ${numberOfPeople} people`

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn')
        editButton.textContent = 'Edit'

        let continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn')
        continueButton.textContent = 'Continue'

        // append html elements to DOM tree
        ticketInfoList.appendChild(newLi);
        newLi.appendChild(newArticle);
        newLi.appendChild(editButton);
        newLi.appendChild(continueButton);
        newArticle.appendChild(nameinfo);
        newArticle.appendChild(dateInfo);
        newArticle.appendChild(numberOfDaysInfo);
        newArticle.appendChild(numberOfPeopleInfo);

        // clear input fields
        firstNameInput.value = '';
        lastNameInput.value = '';
        numberOfPeopleInput.value = '';
        fromDateInput.value = '';
        daysInput.value = '';

        // disable "Next step" button
        nextStepButton.disabled = true

        // enable "Edit" and "Continue" buttons
        editButton.disabled = false
        continueButton.disabled = false

        // edit button event
        editButton.addEventListener('click', editButtonSolver)
        function editButtonSolver(e) {
            e.preventDefault()

            // clear input fields
            firstNameInput.value = nameinfo.textContent.split(' ')[1];
            lastNameInput.value = nameinfo.textContent.split(' ')[2];
            numberOfPeopleInput.value = numberOfPeopleInfo.textContent.split(' ')[1];
            fromDateInput.value = dateInfo.textContent.split(' ')[2];
            daysInput.value = numberOfDaysInfo.textContent.split(' ')[1];

            // remove all current info from Ticket Preview section
            e.currentTarget.parentNode.parentNode.remove()

            // enable next step button
            nextStepButton.disabled = false
        }

        // continue button event
        continueButton.addEventListener('click', continueButtonSolver)
        function continueButtonSolver(e) {
            e.preventDefault()

            // add all info to confirm ticket section
            confirmTicketList.appendChild(newLi);

            // remove all current info from Ticket Preview section
            // e.currentTarget.parentNode.parentNode.remove()
            // не го махам защото е преместен самия li елемент и ако го изтрия ще се изтрие от 3тата секция

            // премахвам двата бутона
            editButton.remove()
            continueButton.remove()

            // добавям нови два бутона
            confirmButton = document.createElement('button')
            confirmButton.classList.add('confirm-btn')
            confirmButton.textContent = 'Confirm'

            cancelButton = document.createElement('button')
            cancelButton.classList.add('cancel-btn')
            cancelButton.textContent = 'Cancel'

            // append-ваме двата нови бутона
            newLi.appendChild(confirmButton);
            newLi.appendChild(cancelButton);

            // cancel button event
            cancelButton.addEventListener('click', cancelButtonSolver)
            function cancelButtonSolver(e) {
                e.preventDefault()

                e.currentTarget.parentNode.parentNode.remove()

                nextStepButton.disabled = false
            }

            // confirm button event
            confirmButton.addEventListener('click', confirmButtonSolver)
            function confirmButtonSolver(e) {
                e.preventDefault()

                mainElement.remove()

                // create new elements
                let newH1 = document.createElement('h1')
                newH1.setAttribute('id', 'thank-you')
                newH1.textContent = "Thank you, have a nice day!" 

                let newButton = document.createElement('button')
                newButton.setAttribute('id', 'back-btn')
                newButton.textContent = "Back" 

                // append elements
                document.body.appendChild(newH1);
                document.body.appendChild(newButton);


                // back button event
                newButton.addEventListener('click', backButtonSolver)
                function backButtonSolver(e) {
                    location.reload()
                }
            }
        }
    }
}


    
    
