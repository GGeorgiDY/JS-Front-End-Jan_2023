function solve(sentence, word) {
    let censored = sentence.replace(word, '*'.repeat(word.length))
    do {
        censored = censored.replace(word, '*'.repeat(word.length))
    } while (censored.includes(word));
    
    console.log(censored)
}


solve(
    'A small sentance with some words small', 'small'
);