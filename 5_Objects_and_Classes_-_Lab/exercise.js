// let person = { name:'Peter', age:20, height:183 };
// console.log(person);
// console.log(person.age);
// console.log(person['name']);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let person = { name:'Peter', age:20, height:183, grades: [5, 5, 5]};
// person.name = 'Valio'
// console.log(person.name)
// person.grades.push(3)
// console.log(person.grades)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let person = { name:'Peter', age:20, height:183, grades: [5, 5, 5], info: {email: 'kiril@gmail.com'}};
// person.name = 'Valio'
// console.log(person.name)
// person.grades.push(3)
// console.log(person.grades)
// console.log(person.info.email)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let person = { name:'Peter', age:20, height:183, grades: [5, 5, 5], info: {email: 'kiril@gmail.com'}};
// delete person.name
// console.log(person)
// console.log(person.name)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// function personInfo (fName, lName, years) {
//     age = Number(years)
//     let person = {firstName: fName, lastName: lName, age: years, sayHello: function() {
//         return `${this.firstName} ${this.lastName}`
//     } };

//     console.log(person.sayHello());
//     return person;
// }

// console.log(personInfo("Peter", "Pan","20"));

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// function personInfo (fName, lName, years) {
//     age = Number(years)
//     let person = {firstName: fName, lastName: lName, age: years, sayHello: function() {
//         return `${this.firstName} ${this.lastName}`
//     } };

//     // 1ви начин
//     const keys = Object.keys(person)
//     for (const key of keys) {
//         console.log(`Key: ${key}`); // дай ми всеки ключ
//         console.log(`Value: ${person[key]}`); // за всеки един ключ ми дай ст-ста
//     }

//     // 2ри начин
//     const values = Object.values(person)
//     for (const value of values) {
//         console.log(`Value: ${value}`);
//     }

//     // 3ти начин. Използва се главно когато имаме сортиране
//     const tuples = Object.entries(person)
//         .forEach(([key, value]) => console.log(key, value));

//     // може и по долния начин
//     // for (const [key, value] of tuples) {
//     //     console.log(`Key: ${key}`);
//     //     console.log(`Value: ${value}`);
//     // }
// }

// console.log(personInfo("Peter", "Pan","20"));

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// const person = {
//     firstName: 'Peter',
//     lastName: 'Petrov',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// };

// let jsonString = JSON.stringify(person);
// console.log(jsonString);
// let personObjAgain = JSON.parse(jsonString);
// console.log(personObjAgain);
// console.log(personObjAgain.firstName);
// console.log(personObjAgain.lastName);
// console.log(personObjAgain.fullName());

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// обръщане на обект в масив

// let phonebook = { 'Tim': '0876566344',
//                   'Bill': '0896543112' };
// let myArr = Object.entries(phonebook);

// console.log(myArr); 
// // [ ['Tim', '0876566344'],
// //   ['Bill', '0896543112'] ]

// let firstEntry = myArr[0]; 
// console.log(firstEntry[0]);  // Entry key -> 'Tim'
// console.log(firstEntry[1]);  // Entry value -> '0876566344'

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let people = {
//     'Kiril': {age: 25, email: 'kiril@abv.bg'},
//     'Peter': {age: 24, email: 'pesho@abv.bg'},
//     'Georgi': {age: 23, email: 'georgi@abv.bg'},
// }

// // обръщане във вложен масив
// const myArr = Object.entries(people) // ще имаме [[],[],[]]


// // сортиране по имена по възходящ ред (по азбучен ред сортира key-a)
// let sortedByName = myArr.sort((personA, personB) => {
//     let personAName = personA[0]; // Peter Kiril
//     let personBName = personB[0]; // Georgi Peter
//     return personAName.localeCompare(personBName);
// })
// for (const [name, info] of sortedByName) {
//     console.log(name); // Georgi, Kiril, Peter
//     console.log(info); // {age: 23, email: 'georgi@abv.bg'}, {age: 25, email: 'kiril@abv.bg'}, {age: 24, email: 'pesho@abv.bg'}
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// класове

class Student {
    constructor(name, age, grades) {
      this.name = name;
      this.age = age
      this.grades = grades
    }

    sayHello() {
        return `My name is ${this.name}`
    }
}

const student1 = new Student('Kiril', 25, [3,4,5]);
const student2 = new Student('Georgi', 26, [4,4,5]);
const student3 = new Student('Peter', 27, [6,4,5]);
console.log(student1);
console.log(student1.name);
console.log(student1.sayHello());
