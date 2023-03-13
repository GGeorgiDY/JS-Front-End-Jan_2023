// function storeProvision(arr1, arr2) {
//     myDict = {}
//     for (let i = 0; i < arr1.length; i += 2) {
//         myDict[arr1[i]] = Number(arr1[i + 1])
//     }

//     for (let i = 0; i < arr2.length; i += 2) {
//         if (myDict.hasOwnProperty(arr2[i])) {
//             myDict[arr2[i]] += Number(arr2[i + 1])
//         }
//         else {
//             myDict[arr2[i]] = Number(arr2[i + 1])
//         }
//     }
    
//     for (const key in myDict) {
//         console.log(`${key} -> ${myDict[key]}`)
//     }
// }

// може и по горния начин - в долния предварително сливам двата масива и след това ги обхождам

function storeProvision(arr1, arr2) {
    myDict = {}
    let combined = [...arr1, ...arr2];

    for (let i = 0; i < combined.length; i += 2) {
        if (myDict.hasOwnProperty(combined[i])) {
            myDict[combined[i]] += Number(combined[i + 1])
        }
        else {
            myDict[combined[i]] = Number(combined[i + 1])
        }
    }
    
    for (const key in myDict) {
        console.log(`${key} -> ${myDict[key]}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )