// function swapElements(arr) {
//     for (let i = 0; i < arr.length/2; i++) {
//       swap(arr, i, arr.length - 1 - i);
//     }

//     console.log(arr.join(' '));

//     function swap(elements, i, j) {
//       let temp = elements[i];
//       elements[i] = elements[j];
//       elements[j] = temp;
//     }
//   }

//   swapElements([1,2,3,4,5])
//   връща 5 4 3 2 1

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// function printCertificate(grade, [firstName, lastName]) {

//     function printHeader() {
//         console.log(`~~~-   {@}   -~~~`);
//         console.log(`~- Certificate -~`);
//         console.log(`~~~-  ~---~  -~~~`);
//     }

//     function printNames() {
//         console.log(`${firstName} ${lastName}`);
//     }

//     function printGrade() {
//         console.log(getGradeAsText());
//     }

//     function getGradeAsText() {
//         if (grade < 3) {
//             return(`Fail (2)`);
//         }
        
//         else if (3 <= grade && grade < 3.50) {
//             return `Poor (${grade.toFixed(2)})`;
//         }
    
//         else if (3.5 <= grade && grade < 4.50) {
//             return `Good (${grade.toFixed(2)})`;
//         }
        
//         else if (4.5 <= grade && grade < 5.50) {
//             return `Very good (${grade.toFixed(2)})`;
//         }
        
//         else if (5.5 <= grade) {
//             return `Excellent (${grade.toFixed(2)})`;
//         }
//     }

//     if (grade < 3) {
//         console.log("Student does not qualify");
//     }
//     else {
//         printHeader();
//         printNames();
//         printGrade();
//     }
// }


// printCertificate(5.25, ['Kiril', 'Kirilov']);
// printCertificate(2.99, ['Kiril', 'Kirilov']);

// ще принтира

// ~~~-   {@}   -~~~
// ~- Certificate -~
// ~~~-  ~---~  -~~~
// Kiril Kirilov
// Very good (5.25)

// Student does not qualify
  
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// call back функция

// function sayHello() {
//     return "Hello, ";
// }

// function greeting(sayHello, name) {
//     return sayHello() + name;
// }

// console.log(greeting(sayHello, "JavaScript!"));
// Hello, JavaScript!

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let number = [1, 2, 3, 4, 5, 6, 7];
// let mappedNumbers = number // правим си нов масив понеже map връща нов масив
//     .map(multiplyByTwo) // това си е call back функция (предикат)
//     // .filter() // това си е call back функция (предикат)
//     // .forEach() // това си е call back функция (предикат)
//     // .find() // това си е call back функция (предикат)
//     // .findIndex() // това си е call back функция (предикат)
//     // .reduce() // това си е call back функция (предикат)

// console.log(mappedNumbers);

// function multiplyByTwo(value) {
//     return value * 2
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    