function reversed(num, data) {
    let lst = [];
    for (x = 1; x <= num; x += 1)
        lst.unshift(data.shift())

    console.log(lst.join(' '))
}

reversed(3, [10, 20, 30, 40, 50])
reversed(4, [-1, 20, 99, 5])
reversed(2, [66, 43, 75, 89, 47])