function oddOccurrences (input) {
    input = input.toLowerCase()
    let inputListCopy = []
    let myDict = {}
    let inputList = input.split(" ") // ['java', 'c#', 'php', 'php', 'java', 'php', '3', 'c#', '3', '1', '5', 'c#']

    for (const word of inputList) {
        let count = inputList.filter((w) => w === word).length;
        if (count % 2 !== 0){
            myDict[word] = count;
        }
    }
    // console.log(myDict) // {1: 1, 5: 1, c#: 3, php: 3}

    let result = []
    for (let key in myDict) {
        result.push(key)
    }
    console.log(result.join(" "))
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')