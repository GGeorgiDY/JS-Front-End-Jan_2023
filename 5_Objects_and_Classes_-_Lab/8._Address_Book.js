function adressBook(input) {
    let adressBookMap = {};

    // правим инфорамцията ни на обект
    for (const line of input) {
        let [name, adress] = line.split(':');
        adressBookMap[name] = adress;
    }

    // обръщаме го отново в масив, като запазваме само ключа
    // let sortedNames = Object.keys(adressBookMap)
    //     // сортираме го по азбучен ред
    //     .sort((nameA, nameB) => nameA.localeCompare(nameB));
    
    // console.log(sortedNames) // ['Bill', 'Peter', 'Tim']

    // принтираме резултата
    // for (const name of sortedNames) {
    //     console.log(`${name} -> ${adressBookMap[name]}`)
    // }

    // може и така като сортираме и по ключ и по ст-ст
    let sortedNames = Object.entries(adressBookMap);
    sortedNames.sort((a, b) => a[0].localeCompare(b[0]));

    // console.log(sortedNames) // (3) [Array(2), Array(2), Array(2)]

    for (const [name, info] of sortedNames) {
        console.log(`${name} -> ${adressBookMap[name]}`)
    }
}


adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)