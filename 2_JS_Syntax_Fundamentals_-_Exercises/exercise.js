function listOfNames (names) {
    return [...names]
    .sort((aName, bName) => aName.localeCompare(bName)) // 1во сортира по букви
    .sort((aName, bName) => aName.length - bName.length) // 2ро сортира по дължина на думите
}

console.log(listOfNames(["Ema", "John", "Bob", "Christina", "Ema"]));


