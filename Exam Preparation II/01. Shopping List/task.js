function shoppingList(input) {
    let groceries = input.shift().split("!") // ['Tomatoes', 'Potatoes', 'Bread']
    let lenOfList = input.length
    
    for (let i = 0; i < lenOfList; i++) {
        let line = input.shift()
        if (line === "Go Shopping!") {
            break
        }

        // add item at the beggining of the array
        let lineArr = line.split(" ")
        command = lineArr.shift()

        if (command === "Urgent") {
            item = lineArr[0]
            if (groceries.includes(item)) {
                continue
            }
            groceries.unshift(item)
        }
        
        // delete item
        else if (command === "Unnecessary") {
            item = lineArr[0]
            if (groceries.includes(item)) {
                let currentIndex = groceries.indexOf(item) // вземаме индекса на който се намира търсения item
                groceries.splice(currentIndex, 1) // премахваме елемента на дадения индекс
            }
        }

        // replace item
        else if (command === "Correct") {
            oldItem = lineArr[0]
            newItem = lineArr[1]
            if (groceries.includes(oldItem)) {
                let currentIndex = groceries.indexOf(oldItem)
                groceries[currentIndex] = newItem
            }
        }

        // remove item from current position and add it to the end of the array
        else if (command === "Rearrange") {
            item = lineArr[0]
            if (groceries.includes(item)) {
                let currentIndex = groceries.indexOf(item) // вземаме индекса на който се намира търсения item
                groceries.splice(currentIndex, 1) // премахваме елемента на дадения индекс
                groceries.push(item)
            }
        }
    }
    console.log(groceries.join(', '))
}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
// "Correct Bread Milk",
// "Unnecessary Bread",
"Urgent Tomatoes",
// "Urgent asd",
"Go Shopping!"])

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
