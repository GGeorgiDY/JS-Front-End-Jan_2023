function bookShelf(input) {
    let shelfs = {}
    for (const i of input) {
        // console.log(i)
        if (i.includes(" -> ")) { // includes проверява дали даден стрин съществува в друг стринг или масив
            let [shelfID, shelfGenre] = i.split(" -> ")
            if (!shelfs.hasOwnProperty(shelfID)) { // hasOwnProperty проверява дали даден ключ съществува
                shelfs[shelfID] = [shelfGenre]
            }
        }


        else if(i.includes(": ")) {
            let [bookTitle, bookAuthor, bookGenre] = i.split(": ").join("+").split(", ").join("+").split("+")
            for (let shelf in shelfs) {
                if (shelfs[shelf][0] === bookGenre) {
                    shelfs[shelf].push(bookTitle);
                    shelfs[shelf].push(bookAuthor);
                }
            }
        }
    }

    console.log(shelfs)

    let shelfsArr = Object.entries(shelfs)
    .sort((nameA, nameB) => {
        let [_termA , definitionA] = nameA; // слагаме 1 "_" преди името за да кажем че е неизползвана променлива
        let [_termB , definitionB] = nameB; // слагаме 1 "_" преди името за да кажем че е неизползвана променлива
        return definitionB.length - definitionA.length
    })

    console.log(shelfsArr)

    for (const [key, value] of shelfsArr) {
        // console.log(`${key}`); // +
        // console.log(`${value}`); // sci-fi,Future of Dawn,Aiden Rose,Losing Dreams,Gail Starr,Name of Earth,Jo Bell
        let finalGenre = value.shift()
        console.log(`${key} ${finalGenre}: ${value.length / 2}`)
        for (let i = 0; i < value.length; i+=2) {
            console.log(`--> ${value[i]}: ${value[i+1]}`)
        }
    }
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])