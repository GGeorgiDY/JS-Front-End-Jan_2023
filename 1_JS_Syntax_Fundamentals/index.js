// function solve(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
//     console.log(`The first number is: ${firstNumber} and the second number is ${secondNumber}`);
// }

// solve(5, 4)
// solve(1, 3)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// function solve(name, age) {
//     let output = `My name is ${name} and my age is ${age}`;
//     console.log(output);
// }

// solve('Georgi', 28)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// function solve(grade) {
//     console.log(grade.toFixed(2)); //tofixed връща string, а не число!
// }

// solve(5.23412241)
// 5.23

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// function solve() {
//     for (var index = 0; index < 5; index ++) {

//     }
//     console.log(index)
// }

// solve()

// ако бяхме написали вместо var, let тогава щеше да ни даде грешка, защото щеше да е извън скоупа на цикъла
// докато var живее в скоупа на цялата функция
// сега ни принтира 5

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let output = 5
// console.log(typeof output)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let first = 5;
// if (5 <= first && first <= 20) {
//     console.log('Between 5 and 20')
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let first = 5;
// let output = 5 <= first && first <= 20
//     ? 'In between'
//     : 'not in between';
// console.log(output)

// In between

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let first = 5
// if (5 <= first && first <= 20) {
//     console.log('In between');
// } else {
//     console.log('Not in between');
// }

// In between

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Тук switch работи като последователност от if, else if, else if и т.н.
// case е обикновен if. Case могат да са много
// default е само един и той е като else. Ще се изпълни ако другите не се изпълнят

// let name = 'Kiro';
// switch(name) {
//     case 'Kiro':
//         console.log('The right name');
//     break;
//     default:
//         console.log('Default')
// }

// The right name

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let dayOfWeek = 'Sunday';
// switch (dayOfWeek) {
//     case 'Monday':
//     case 'Tuesday':
//     case 'Wednesday':
//     case 'Thursday':
//     case 'Friday':
//         console.log('Go to work');
//     break;
//     case 'Saturdat':
//     case 'Sunday':
//         console.log('Time off!');
//     break;
//     default:
//         console.log('Non existing day!');
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Така проверяваме дали дадена променлва е декларирана

// let name = 'Kiro'
// if (name) {
//     console.log('Declared')
// }

// Declared

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// for loop

// for (let i = 1; i <= 5; i ++){
//     console.log(i);
// }

// 1
// 2
// 3
// 4
// 5

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// while loop

// let i = 1
// while (i <= 5){
//     console.log(i);
//     i++
// }

// 1
// 2
// 3
// 4
// 5

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let first = numbers[0];
// let last = numbers[numbers.length -1];
// let nonExistent = numbers[-1]; // тук индекс от -1 несъществува за това връща undefined
// console.log(first)
// console.log(last)
// console.log(nonExistent)

// 1
// 10
// undefined

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let [first, second, third] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(numbers);

// 1
// 2
// 3
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3, [4,5,6,7,8,9,10]];
// console.log(numbers);

// (4) [1, 2, 3, Array(7)]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3, ...[4,5,6,7,8,9,10]];
// console.log(numbers);

// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let other = [4, 5, 6]
// let numbers = [1,2,3, ...other];
// console.log(numbers);

// (6) [1, 2, 3, 4, 5, 6]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// function solve(name, ...otherParams) {
//     console.log(name);
//     console.log(otherParams);
// }
// solve('Kiro', 'test', 'test2', 3)

// Kiro
// (3) ['test', 'test2', 3]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// обхождане на масив с for-of loop

// let other = [4, 5, 6]
// let numbers = [1,2,3, ...other];
// for (const num of numbers) {
//     console.log(num);
// }

// ще принтира 1 2 3 4 5 6 на нови редове

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// обхождане на масив с for loop

// let other = [4, 5, 6]
// let numbers = [1,2,3, ...other];
// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// ще принтира 1 2 3 4 5 6 на нови редове

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1, 2, 3, 4, 5, 6];
// let output = numbers.join(', ');
// console.log(output);

// 1, 2, 3, 4, 5, 6

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5];
// let last = numbers.pop();
// console.log(last);
// console.log(numbers);

// 5
// (4) [1, 2, 3, 4]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5];
// let first = numbers.shift();
// console.log(first);
// console.log(numbers);

// 1
// (4) [2, 3, 4, 5]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5];
// numbers.unshift(0);
// console.log(numbers);
// numbers.unshift(...[-3,-2,-1])
// console.log(numbers)

// (6) [0, 1, 2, 3, 4, 5]
// (9) [-3, -2, -1, 0, 1, 2, 3, 4, 5]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5];
// numbers.push(...[6,7,8])
// console.log(numbers)
// let lenght = numbers.push(...[9,10,11,12])
// console.log(numbers)
// console.log(lenght) //връща дължината на масива

// (8) [1, 2, 3, 4, 5, 6, 7, 8]
// (12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// 12

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5];
// let mySlice = numbers.slice(1, 3);
// console.log(numbers)
// console.log(mySlice)

// (5) [1, 2, 3, 4, 5]
// (2) [2, 3]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5];
// let mySplice = numbers.splice(1, 3);
// console.log(numbers)
// console.log(mySplice)

// (2) [1, 5]
// (3) [2, 3, 4]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5];
// let toInsert = [-1, 0]
// let mySplice = numbers.splice(0, 2, ...toInsert);
// console.log(numbers)
// console.log(toInsert)
// console.log(mySplice)

// (5) [-1, 0, 3, 4, 5]
// (2) [-1, 0]
// (2) [1, 2]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5];
// numbers
//     .forEach((num) => {
//         console.log(num);
//     })

// ще принтира 1 2 3 4 5 на нови редове

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numbers = [1,2,3,4,5];
// let transformed = numbers
//     .map((num) => num*2);
// let even = numbers
//     .filter((num) => num % 2 === 0);
// console.log(transformed)
// console.log(even)

// (5) [2, 4, 6, 8, 10]
// (2) [2, 4]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||


