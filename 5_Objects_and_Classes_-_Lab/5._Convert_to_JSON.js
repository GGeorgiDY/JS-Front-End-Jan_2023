function convertToJson(fName, lName, hairCol) {
    let personInfo = {
        "name": fName,
        "lastName": lName,
        "hairColor": hairCol
    }
    let result = JSON.stringify(personInfo)
    console.log(result)
}

convertToJson('George', 'Jones', 'Brown')