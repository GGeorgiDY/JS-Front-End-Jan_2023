function vacation(num, typeOfGroup, dayOfWeek) {
    if (typeOfGroup === "Students") {
        if (dayOfWeek === "Friday") {
            price = 8.45
            totalPrice = price * num
        }
        else if (dayOfWeek === "Saturday") {
            price = 9.80
            totalPrice = price * num
        }
        else if (dayOfWeek === "Sunday") {
            price = 10.46
            totalPrice = price * num
        }

        if (num >= 30) {
            totalPrice -= totalPrice * 0.15
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`)
    }

    else if (typeOfGroup === "Business") {
        if (dayOfWeek === "Friday") {
            price = 10.90
            totalPrice = price * num
        }
        else if (dayOfWeek === "Saturday") {
            price = 15.60
            totalPrice = price * num
        }
        else if (dayOfWeek === "Sunday") {
            price = 16
            totalPrice = price * num
        }

        if (num >= 100) {
            totalPrice -= 10 * price
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`)
    }

    else if (typeOfGroup === "Regular") {
        if (dayOfWeek === "Friday") {
            price = 15
            totalPrice = price * num
        }
        else if (dayOfWeek === "Saturday") {
            price = 20
            totalPrice = price * num
        }
        else if (dayOfWeek === "Sunday") {
            price = 22.50
            totalPrice = price * num
        }

        if (10 <= num && num <= 20) {
            totalPrice -= totalPrice * 0.05
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`)
    }
}

vacation(30,
    "Students",
    "Sunday"
    )

vacation(100,
    "Business",
    "Sunday"
    )

vacation(40,
    "Regular",
    "Saturday"
    )