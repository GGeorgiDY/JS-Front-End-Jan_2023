function nthEl (arr, n) {
    let output = []
    for (let index = 0; index < arr.length; index+=n) {
        output.push(arr[index])      
    }
    return output
}

console.log(nthEl(['5','20', '31', '4', '20'], 2));
console.log(nthEl(['dsa','asd', 'test', 'tset'], 2));
console.log(nthEl(['1', '2','3', '4', '5'], 6));