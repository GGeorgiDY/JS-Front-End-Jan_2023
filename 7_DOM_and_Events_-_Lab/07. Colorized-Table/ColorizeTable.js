function colorize() {
    const evenTrs = Array.from(document.querySelectorAll('body > table > tbody > tr:nth-child(even)'))
    console.log(evenTrs)
    
    for (let i = 0; i < evenTrs.length; i++) {
        evenTrs[i].style.backgroundColor = 'Teal'
    }
}