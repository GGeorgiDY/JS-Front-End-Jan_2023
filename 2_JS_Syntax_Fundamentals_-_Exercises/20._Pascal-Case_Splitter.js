// function pascalCaseSplitter(text) {
//     splittedText = text.split(/(?=[A-Z])/);
//     console.log(splittedText.join(', '))
// }


function pascalCaseSplitter(text) {
    let output = ''
    for (const el of text) {
        let asciiCode = el.charCodeAt(0);
        if (asciiCode >= 65 && asciiCode <= 90) {
            if (output.length > 0) {
                output += ', '
            }
        }
        output += el
    }
    console.log(output)
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')