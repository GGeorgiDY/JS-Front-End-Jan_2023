function order(product, quantity) {
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;

    if (product === "coffee") {
        result = coffeePrice * quantity
    }

    else if (product === "water") {
        result = waterPrice * quantity
    }

    else if (product === "coke") {
        result = cokePrice * quantity
    }

    else if (product === "snacks") {
        result = snacksPrice * quantity
    }

    console.log(result.toFixed(2))
}

order("water", 5);
order("coffee", 2);