function passwordValidator(password) {
    // анонимна функция, която взима някаква парола и проверява дължината й. 
    const isValidLenght = (pass) => pass.length >= 6 && pass.length <= 10;
    // regex който проверява дали 'pass' съдържа само буккви и цифри
    const hasOnlyLettersAndDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass)
    // дали съдържа поне две цифри. Ако не е връща Fasle
    const hasAtLeastTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

    let passIsValid = true;

    if (!isValidLenght(password)) {
        console.log("Password must be between 6 and 10 characters");
        passIsValid = false;
    }

    if (!hasOnlyLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
        passIsValid = false;
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
        passIsValid = false;
    }

    if (passIsValid) {
        console.log("Password is valid");
    }
}


passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');