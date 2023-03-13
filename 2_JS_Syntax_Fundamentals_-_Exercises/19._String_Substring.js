function stringSubstring(word, text) {
    let wordLowerCase = word.toLowerCase();
    let textLowerCase = text.split(' '); // правим го на масив

    for (const el of textLowerCase) {
        if (el.toLowerCase() === wordLowerCase) {
            return word;
        }
    }
    return `${word} not found!`;
}

console.log(stringSubstring('javascript','JavaScript is the best programming language'));
console.log(stringSubstring('python','JavaScript is the best programming language'));