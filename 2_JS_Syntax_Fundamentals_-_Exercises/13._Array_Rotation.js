function arrayRotations(numbers, rotations) {
    rotations %= numbers.length; // правя го за да си съкратя броя на ротациите

    for (let i = 0; i < rotations; i++) {
        let firstNum = numbers.shift();
        numbers.push(firstNum);
    }

    console.log(numbers.join(' '))
}

arrayRotations([51, 47, 32, 61, 21], 2);
arrayRotations([32, 21, 61, 1], 4);
arrayRotations([2, 4, 15, 31], 5);