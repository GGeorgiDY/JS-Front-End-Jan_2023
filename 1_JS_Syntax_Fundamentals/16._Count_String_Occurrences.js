function countOccurrances(inputString, searched) {
    let words = inputString.split(` `);
    let counter = 0;
    for (let word of words) {
        if (word === searched) {
            counter += 1;
        }
    }
    console.log(counter)
}

countOccurrances(
    'This is a word and iit also is a sentence', 'is'
)