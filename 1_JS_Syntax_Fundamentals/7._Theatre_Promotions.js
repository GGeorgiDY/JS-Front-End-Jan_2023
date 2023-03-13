function myFunc(typeOfDay, age) {
    if (0 <= age && age <= 18) {
        if (typeOfDay === 'Weekday') {
            result = 12
        }
        else if (typeOfDay === 'Weekend') {
            result = 15
        }
        else if (typeOfDay === 'Holiday') {
            result = 5
        }

        console.log(`${result}$`)
    }

    else if (18 < age && age <= 64) {
        if (typeOfDay === 'Weekday') {
            result = 18
        }
        else if (typeOfDay === 'Weekend') {
            result = 20
        }
        else if (typeOfDay === 'Holiday') {
            result = 12
        }

        console.log(`${result}$`)
    }

    else if (64 < age && age <= 122) {
        if (typeOfDay === 'Weekday') {
            result = 12
        }
        else if (typeOfDay === 'Weekend') {
            result = 15
        }
        else if (typeOfDay === 'Holiday') {
            result = 10
        }

        console.log(`${result}$`)
    }

    else {
        console.log("Error!");
    }

}


myFunc('Weekday', 42)
myFunc('Holiday', -12)