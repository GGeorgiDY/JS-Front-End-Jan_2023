function convertToObject (someJson) {
    let myObj = JSON.parse(someJson);
    let keys = Object.keys(myObj);
    // for (const key of keys) {
    //     console.log(`${key}: ${myObj[key]}`)
    // }

    // може и с for in цикъл
    for (const key in myObj) {
        console.log(`${key}: ${myObj[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}') // идва от сървъра