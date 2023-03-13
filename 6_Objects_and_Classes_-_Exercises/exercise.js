// как може един масив да го превърнем в обект с reduce
// какво прави reduce - ако имаме един масив, reduce ще приеме една call-back функция чрез която ще мине през всеки един елемент и ще го добави към някаква редуцирана ст-ст (в този случай обекта). Reduce връща обект в този случай

// function parseEmployees(input){
//     let employees = input.reduce((data, employee) => {
//         data[employee] = employee.length;
//         return data; // задължително трябва да връщаме data
//     }, {}) // тук {} означава че искаме крайния резултат да ни е обект

//     for (const key in employees) {
//         console.log(`Name: ${key} -- Personal Number: ${employees[key]}`) 
//     }
// }

// parseEmployees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ])

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function companyUsers(input) {
    let myDict = {}

    // изграждаме си обекта на база input-a
    for (const i of input) {
        let compamyInfo = i.split(" -> ")
        let company = compamyInfo[0].trim()
        let employeeID = compamyInfo[1].trim()

        if (myDict.hasOwnProperty(company)) {
            if ( !myDict[company].includes(employeeID)) { // проверяваме дали го има в масива
                myDict[company].push(employeeID)
            }
        }
        else{
            myDict[company] = []
            myDict[company].push(employeeID)
        }
    }

    // обръщаме обекта в масив и сортиране
    let myArr = Object.entries(myDict)
        .sort((nameA, nameB) => {
        let [companyA , _infoA] = nameA; // слагаме 1 "_" преди името за да кажем че е неизползвана променлива
        let [companyB , _infoB] = nameB; // слагаме 1 "_" преди името за да кажем че е неизползвана променлива
        return companyA.localeCompare(companyB)
    })    

    // принтираме
    for (const [company, info] of myArr) {
        console.log(`${company}`)
        for (const y of info) {
            console.log(`-- ${y}`)
        }
    }
}
    

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'SoftUni -> AA12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])