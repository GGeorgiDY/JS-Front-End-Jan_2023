function makeADict(input) {
    let myDict = {}
    for (const i of input) {
        // console.log(i); {"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}
        let obj = JSON.parse(i);
        // console.log(obj) {Coffee: 'A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.'}

        let objList = Object.entries(obj)
        let [key, value] = objList[0]
        myDict[key] = value
    }

    // правене на масив и сортиране
    let dictAsList = Object.entries(myDict)
        .sort((nameA, nameB) => {
            let [termA , _definitionA] = nameA; // слагаме 1 "_" преди името за да кажем че е неизползвана променлива
            let [termB , _definitionB] = nameB; // слагаме 1 "_" преди името за да кажем че е неизползвана променлива
            return termA.localeCompare(termB)
        })
    
    // принтиране
    for (const key of dictAsList) {
        console.log(`Term: ${key[0]} => Definition: ${key[1]}`)
    }
}

makeADict([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )