function howToUseReduce (myArr) {
    let sum = myArr.reduce((previousVal, currentVal) => {
        return previousVal + currentVal
    }, 0)
    console.log(sum)
}


howToUseReduce([1,4,2,3])

// тук показваме:
// как се използва reduce
// как се обхожда масив с reduce, като се извършват определени неща

// reduce взима от масива предходното число и сегашното число, като им казваме какво да правят тези числа. 
// предходното число го слагаме в края на 'функцията reduce' и в този случай то ни е '0'
// тук казваме сумирай ми 0 и 1, след това сумирай 1 и 4, след това сумирай 5 и 2, след това сумирай 7 и 3
// резултата се запазва в променливата sum

