function studentRegister(input) {
    let myDict = {}

    for (const line of input) {
        let a = line.split(', ')
        let [text1, text2, text3] = a
        let b = text1.split(': ')
        let c = text2.split(': ')
        let d = text3.split(': ')
        let name = b[1]
        let grade = c[1]
        let grades = d[1]

        if (grades > 3) {
            grade = Number(grade) + 1
            if (!myDict.hasOwnProperty(grade)) {
                myDict[grade] = []
            }
            myDict[grade].push({'name': name, 'grades': grades})
        } 
    }

    // console.log(myDict) // {9: Array(2), 10: Array(3), 11: Array(3), 12: Array(2)}

    for (let key of Object.keys(myDict).sort((a, b) => Number(a) - Number(b))) {
        console.log(`${key} Grade`)

        let students = []
        let marks = []
        for (let info of myDict[key]) {
            // console.log(info) // {name: 'Ethan', grades: '5.66'}
            students.push(info.name)
            marks.push(info.grades)
        }

        let marksSum = 0
        for (const mark of marks) {
            marksSum += Number(mark)
        }
        console.log(`List of students: ${students.join(', ')}`)
        console.log(`Average annual score from last year: ${(marksSum / marks.length).toFixed(2)}`)
        console.log("")
    }
}

studentRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])