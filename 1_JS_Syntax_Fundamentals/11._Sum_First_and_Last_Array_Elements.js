function sumOfFirstAndLastElement(lst) {
    firstElement = lst.shift()
    lastElement = lst.pop()
    let result = firstElement + lastElement
    console.log(result)
}

sumOfFirstAndLastElement([20, 30, 40])