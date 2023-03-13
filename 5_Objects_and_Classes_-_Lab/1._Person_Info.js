function personInfo (fName, lName, years) {
    let myDict = {}
    myDict.firstName = fName;
    myDict.lastName = lName;
    myDict.age = Number(years);

    return myDict
}

console.log(personInfo("Peter", "Pan","20"));