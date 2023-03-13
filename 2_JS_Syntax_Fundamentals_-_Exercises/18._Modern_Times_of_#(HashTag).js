function modernTimes(text) {
    let words = text.split(' ') //текста го превръщаме в масив
    // console.log(words)
    // ['Nowadays', 'everyone', 'uses', '#', 'to', 'tag', 'a', '#special', 'word', 'in', '#socialMedia']

    let result = [];

    for (const word of words) {
        if (word.startsWith('#') && word.length > 1 && checkIfWordIsValid(word)) {
            result.push(word.slice(1));
        }
    }
    console.log(result.join('\n'))


    function checkIfWordIsValid(myWord) {
        let myWordLowercase = myWord.toLowerCase().slice(1); //slice маха '#' от думата
        let isValid = true;

        for (const symbol of myWordLowercase) {
            let asciiCode = symbol.charCodeAt(0);
            if (!(asciiCode >= 97 && asciiCode <= 122)) { //ако символа не е между 97 и 122
                isValid = false;
                break;
            }
        }
        return isValid 
    } 
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');