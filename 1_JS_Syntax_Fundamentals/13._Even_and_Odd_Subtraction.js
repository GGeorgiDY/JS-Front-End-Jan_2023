function diffOfEvenAndOdd(data) {
    let sumOfEven = 0;
    let sumOfOdd = 0;

    for (let index=0; index<data.length; index++) {
        let number = data[index];

        if (number % 2 === 0){
            sumOfEven += number
        }

        else{
            sumOfOdd += number
        }
    }

    let result = sumOfEven - sumOfOdd
    console.log(result)
}

diffOfEvenAndOdd([1,2,3,4,5,6]);
diffOfEvenAndOdd([3,5,7,9]);
diffOfEvenAndOdd([2,4,6,8,10]);