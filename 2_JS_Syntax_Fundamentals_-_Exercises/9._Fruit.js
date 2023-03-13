function fruitPrice(fruit, quantity, price) {
    quantity = quantity / 1000
    console.log(`I need $${(quantity * price).toFixed(2)} to buy ${quantity.toFixed(2)} kilograms ${fruit}.`)
}

fruitPrice('orange', 2500, 1.80)