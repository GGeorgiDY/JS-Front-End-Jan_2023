function wordsTracker (input) {
    let myDict = {}
    let searchedWords = input.shift().split(" ") // ['this', 'sentence']
    // for (const sWord of searchedWords) {
    //     for (const word of input) {
    //         if (sWord === word) {
    //             if (!myDict.hasOwnProperty(sWord)) {
    //                 myDict[sWord] = 1
    //             }
    //             else {
    //                 myDict[sWord] += 1
    //             }
    //         }
    //     }
    // }

    // горното може и така
    for (const sWord of searchedWords) {
        let count = input.filter((w) => w === sWord).length;
        myDict[sWord] = count;
    }

    // console.log(myDict) // {this: 3, sentence: 2}

    // превръщане на обекта в масив
    const tuples = Object.entries(myDict) // [['this', 3], ['sentence', 2]]

    // сортиране на масива на база value-то по низходящ ред
        .sort((wordA, wordB) => {
            let [_nameA, countA] = wordA; // слагаме 1 "_" преди името за да кажем че е неизползвана променлива
            let [_nameB, countB] = wordB; // слагаме 1 "_" преди името за да кажем че е неизползвана променлива
            return countB - countA;
        })
    
    // принтиране
    for (const [word, count] of tuples) {
        console.log(`${word} - ${count}`)
    }
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)