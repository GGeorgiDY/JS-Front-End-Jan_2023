function pianist(input) {
    let numberOfPieces = input.shift()
    myDict = {}

    for (let i = 0; i < numberOfPieces; i++) {
        let asd = input.shift()
        let pieces = asd.split('|')

        let piece = pieces[0]
        let composer = pieces[1]
        let key = pieces[2]

        myDict[piece] = [composer, key]   
    }

    // console.log(myDict)
    // console.log(input)

    for (const asd of input) {
        if (asd === "Stop") {
            break;
        }

        pieces = asd.split('|')

        command = pieces[0]
        if (command === "Add"){
            let piece = pieces[1]
            let composer = pieces[2]
            let key = pieces[3]

            if (piece in myDict) {
                console.log(`${piece} is already in the collection!`)
            }else{
                myDict[piece] = [composer, key]
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        }

        else if (command === "Remove") {
            let piece = pieces[1]
            if (piece in myDict) {
                delete myDict[piece]
                console.log(`Successfully removed ${piece}!`)
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }

        else if (command === "ChangeKey") {
            let piece = pieces[1]
            let new_key = pieces[2]
            
            if (piece in myDict) {
                myDict[piece][1] = new_key
                // pieces[piece].key = newKey
                console.log(`Changed the key of ${piece} to ${new_key}!`)
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }

    let result = Object.entries(myDict)
    for (const [key, value] of result) {
        console.log(`${key} -> Composer: ${value[0]}, Key: ${value[1]}`)
    }

    // console.log(myDict)
}


pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])