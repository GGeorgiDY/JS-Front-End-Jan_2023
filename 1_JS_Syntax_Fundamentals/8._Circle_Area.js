function myFunc(argument) {
    let typeArgument = typeof argument;
    if (typeArgument === 'number') {
        result = Math.PI * (argument ** 2);
        console.log(result.toFixed(2));
    }

    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeArgument}.`)
    }
}


myFunc(5);
myFunc('name');