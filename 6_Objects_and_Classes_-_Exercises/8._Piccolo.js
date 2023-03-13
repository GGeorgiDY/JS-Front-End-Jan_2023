function piccolo(input) {
    myDict = {}

    for (const carNumber of input) {
        let [command, number] = carNumber.split(", ")
        if (command === "IN") {
            if (!myDict.hasOwnProperty(number)) {
                myDict[number] = 1
            }
        }

        else {
            if (myDict.hasOwnProperty(number)) {
                delete myDict[number]
            }
        }
    }

    // console.log(myDict) // {CA9999TT: 1, CA2844AA: 1, CA9876HH: 1, CA2822UU: 1}

    // превръщане на обекта в масив
    const tuples = Object.keys(myDict) // ['CA9999TT', 'CA2844AA', 'CA9876HH', 'CA2822UU']

    // сортиране на масива
        .sort((aName, bName) => aName.localeCompare(bName))
    
    for (const car of tuples) {
        console.log(car)
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)