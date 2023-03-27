// function attachEvents() {

// 	const URL = 'http://localhost:3030/jsonstore/collections/students';

// 	const firstName = document.querySelector('input[name="firstName"]');
// 	const lastName = document.querySelector('input[name="lastName"]');
// 	const facultyNumber = document.querySelector('input[name="facultyNumber"]');
// 	const grade = document.querySelector('input[name="grade"]');
// 	const submitBtn = document.getElementById('submit');
// 	const table = document.querySelector('#results tbody');

//   // ЧАСТ 1 - правим така че при рефрешване на страницата, да се появят всички данни
// 	function displayStudents(data) {
// 		table.innerHTML = '';
// 		Object.values(data).forEach(student => {
// 			table.innerHTML += `
// 				<tr>
//           <td>${student.firstName}</td>
//           <td>${student.lastName}</td>
//           <td>${student.facultyNumber}</td>
//           <td>${student.grade}</td>
//         </tr>
// 			`
// 		});
// 	}

// 	function getData() {
// 		fetch(URL)
// 		.then(response => response.json())
// 		.then(data => displayStudents(data))
// 		.catch(error => console.log(error))
// 	}

//   document.addEventListener('DOMContentLoaded', getData)
	

//   // ЧАСТ 2 - правим така че да можем да добавяме нов студент
// 	function addStudent() {
// 		if (firstName.value && lastName.value && facultyNumber.value && grade.value) {
// 			fetch(URL, {
// 				method: "POST",
// 				body: JSON.stringify({
// 					"firstName": firstName.value,
// 					"lastName": lastName.value,
// 					"facultyNumber": facultyNumber.value,
// 					"grade": grade.value,
// 				}),
// 				// headers: {
// 				// 	"Content-type": "application/json; charset=UTF-8"
// 				// }
// 			})
// 			.then(getData)
// 			.catch((error) => console.log(error))
// 			firstName.value = '';
// 			lastName.value = '';
// 			facultyNumber.value = '';
// 			grade.value = '';
// 		}
		
// 	}

// 	submitBtn.addEventListener('click', addStudent);
	
// }

// attachEvents();



function attachEvents() {
  const BASE_URL ='http://localhost:3030/jsonstore/collections/students'
  const tbody = document.querySelector('table > tbody');

  window.addEventListener('load', loadStudents);
  function loadStudents(){
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      Object.values(data).forEach(({ firstName, lastName, facultyNumber, grade }) => {
        let tr = document.createElement('tr');

        let firstNameTH = document.createElement('th');
        firstNameTH.textContent = firstName;
        tr.appendChild(firstNameTH);

        let lastNameTH = document.createElement('th');
        lastNameTH.textContent = lastName;
        tr.appendChild(lastNameTH);

        let facultyNumberTH = document.createElement('th');
        facultyNumberTH.textContent = facultyNumber;
        tr.appendChild(facultyNumberTH);

        let gradeTH = document.createElement('th');
        gradeTH.textContent = grade;
        tr.appendChild(gradeTH);

        tbody.appendChild(tr);
      });
    })
    .catch((err) => console.log(err));
  }


  const button  = document.getElementById('submit');
  button.addEventListener('click', submitStudentHandler);
  function submitStudentHandler(){

    const firstName = document.getElementsByName('firstName')[0];
    let firstNameValue = firstName.value;
    const lastName = document.getElementsByName('lastName')[0];
    let lastNameValue = lastName.value;
    const facultyNumber = document.getElementsByName('facultyNumber')[0];
    let facultyNumberValue = facultyNumber.value;
    const grade = document.getElementsByName('grade')[0];
    let gradeValue = grade.value;

    if (!firstNameValue){
      alert("Please enter your first name");
      return;
    }
    if (!lastNameValue){
      alert("Please enter your last name");
      return;
    }
    if (!facultyNumberValue){
      alert("Please enter your faculty number");
      return;
    }
    if (!gradeValue || isNaN(gradeValue) ){
      alert("Please enter a valid grade");
      return;
    }

    let obj = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      facultyNumber: facultyNumberValue,
      grade: gradeValue
    }

    const HTTPheaders = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    }
    
    fetch(BASE_URL,HTTPheaders)
      .then(res=>res.json())
      .then(data=>{
        firstName.value='';
        lastName.value='';
        facultyNumber.value = '';
        grade.value='';

        let tr = document.createElement('tr');

        let firstNameTH = document.createElement('th');
        firstNameTH.textContent = data.firstName;
        tr.appendChild(firstNameTH);

        let lastNameTH = document.createElement('th');
        lastNameTH.textContent = data.lastName;
        tr.appendChild(lastNameTH);

        let facultyNumberTH = document.createElement('th');
        facultyNumberTH.textContent = data.facultyNumber;
        tr.appendChild(facultyNumberTH);

        let gradeTH = document.createElement('th');
        gradeTH.textContent = data.grade;
        tr.appendChild(gradeTH);
        tbody.appendChild(tr);
      })
      .catch(err=>console.log(err));
  }

}

attachEvents();