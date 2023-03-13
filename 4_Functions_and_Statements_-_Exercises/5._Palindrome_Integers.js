function palindromeIntegers(numbers) {
    numbers
        .forEach((num) => {
            // console.log(num) обхожда масива и дава елемент по елемент
            console.log(isPalindrome(num))
        });
    
    function isPalindrome(num) {
        // правим променлива reverse, която пъви обръща числото в str, след това в масив, обръща го, джойнва го и го прави в int
        let reverse = Number([...num.toString()].reverse().join(''));
        return num === reverse;
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);