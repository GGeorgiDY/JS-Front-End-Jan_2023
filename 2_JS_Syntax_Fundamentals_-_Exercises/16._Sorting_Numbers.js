function sortingNumbers(numbers) {
    let sorted = [...numbers].sort((a, b) => a - b); // сортира ми ги възходящо
    let step = 0;
    let result = [];
    while (sorted.length > 0) {
        if (step % 2 === 0) {
            result.push(sorted.shift());
        }
        else {
            result.push(sorted.pop());
        }
        step += 1
    }
    return result;
}


console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));