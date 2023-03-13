function phoneBook(someArr) {
    let myArr = {}
    for (const i of someArr) {
        let numberInfo = i.split(' ');
        let name = numberInfo[0];
        let number = numberInfo[1];

        // може и така
        // let [name, number] = i.split(' ')

        // може да направим проверка дали даден ключ вече съществува. Това става ето така:
        // if (!myArr.hasOwnProperty(name)) {  // ако го няма
        //     myArr[name] = number
        // }


        myArr[name] = number;
    }

    for (const key in myArr) {
        console.log(`${key} -> ${myArr[key]}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)