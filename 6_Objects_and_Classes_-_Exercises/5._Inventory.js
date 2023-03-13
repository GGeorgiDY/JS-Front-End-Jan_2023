function inventory(input) {
    let myList = []

    for (const i of input) {
        let myDict = {}
        let heroInfo = i.split(" / ");
        let heroName = heroInfo[0];
        let heroLevel = Number(heroInfo[1]);
        let heroItems = heroInfo[2];

        myDict["Hero"] = heroName;
        myDict["level"] = heroLevel;
        myDict["items"] = [heroItems];

        myList.push(myDict)
    }

    let sortedHeroes = myList
        .sort((heroA, heroB) => {
            return heroA.level - heroB.level
        })

    for (const heroes of sortedHeroes) {
        const tuples = Object.entries(heroes)
        for (const [key, value] of tuples) {
            if (key === "Hero") {
                console.log(`${key}: ${value}`)
            }
            else {
                console.log(`${key} => ${value}`)
            }
        }
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])