function matrix (n) {
    let result = []
    let row = []
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            row.push(n)
        }
        result.push(row.join(' '))
        row = []
    }
    console.log(result.join('\n'))
}


matrix(7)