function meetings(info) {
    let myArr = {}

    // разделяме масива
    for (const scaduale of info) {
            let [day, person] = scaduale.split(' ')
        
        // проверяваме дали key-a го има и според резултата правим различни неща
        if (myArr.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        }
        else {
            myArr[day] = person
            console.log(`Scheduled for ${day}`)
        }
    }

    // принтираме резултата
    for (const key in myArr) {
        console.log(`${key} -> ${myArr[key]}`)
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)