function charactersInRange(ch1, ch2) {
    let ch1AsNumbers = ch1.codePointAt(0);
    let ch2AsNumbers = ch2.charCodeAt(0);
    let result = [];

    let min = Math.min(ch1AsNumbers, ch2AsNumbers);
    let max = Math.max(ch1AsNumbers, ch2AsNumbers);

    for (let i = min + 1; i < max; i++) {
        result.push(String.fromCharCode(i))
    }

    console.log(result.join(' '))
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');