function employees (input) {
    myDict = {};
    for (const person of input) {
        let personalNumber = person.length;
        myDict[person] = personalNumber;
    }

    // for in е цикъла който използваме за обикаляне на обекти. 
    for (const key in myDict) {
        console.log(`Name: ${key} -- Personal Number: ${myDict[key]}`) 
    }
}


employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])

