function listOfNames (names) {
    return [...names]
    .sort((aName, bName) => aName.localeCompare(bName)) // тук ще ги сортира
    .map((name, index) => `${index + 1}.${name}`)  //за всеки елемент добавя цифричка
    .join('\n');  // всеки елемент от масива да е на нов ред
}

// console.log(names)

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]))