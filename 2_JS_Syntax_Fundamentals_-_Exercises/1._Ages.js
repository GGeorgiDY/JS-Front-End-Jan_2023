function ageDeterminator(num) {
    if (0 <= num && num <= 2) {
        age = 'baby'
        console.log(age)
    }
    else if (3 <= num && num <= 13) {
        age = 'child'
        console.log(age)
    }
    else if (14 <= num && num <= 19) {
        age = 'teenager'
        console.log(age)
    }
    else if (20 <= num && num <= 65) {
        age = 'adult'
        console.log(age)
    }
    else if (66 <= num) {
        age = 'elder'
        console.log(age)
    }
    else{
        console.log(`out of bounds`)
    }
}

ageDeterminator(20)
ageDeterminator(1)
ageDeterminator(100)
ageDeterminator(-1)