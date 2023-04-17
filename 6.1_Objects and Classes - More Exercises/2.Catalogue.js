function catalogue(input) {
    let myDict = {}
    let range = input.length

    for (let i = 0; i < range; i++) {
        let line = input.shift().split(' : ')
        let [name, price] = line
        let letter = name[0]
        
        if (!(myDict.hasOwnProperty(letter))) {
            myDict[letter] = []
        }
        myDict[letter].push({'name': name, 'price': price})
    }

    for (let key of Object.keys(myDict).sort()) {
        console.log(key);
        for (let prod of myDict[key].sort((a, b) => a.name.localeCompare(b.name))) {
            console.log(` ${prod.name}: ${prod.price}`);
        }
    }

    console.log(myDict) // {A: Array(3), F: Array(1), T: Array(2), D: Array(1), B: Array(1)}
    console.log(Object.keys(myDict).sort()) // ['A', 'B', 'D', 'F', 'T']

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])