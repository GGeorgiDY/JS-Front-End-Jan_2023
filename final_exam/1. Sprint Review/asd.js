function sprintReview(data) {
    let n = data.shift()
    let myDict = {}
    let secondDict = {'ToDo': 0, 'In Progress': 0, 'Code Review': 0, 'Done Points': 0}
    let totalPointsDone = 0
    let totalPointsOther = 0

    for (let i = 0; i < n; i++) {
        let line = data.shift().split(':')
        let [assignee, taskId, title, status, estimatedPoints] = line

        if (!(myDict.hasOwnProperty(assignee))) {
            myDict[assignee] = []
        }
        myDict[assignee].push({'taskId': taskId, 'title': title, 'status': status, 'points': estimatedPoints * 1})
    }

    // console.log(JSON.stringify(myDict))

    for (let i = 0; i < data.length; i++) {
        let line = data[i].split(':')
        let command = line.shift()

        if (command === "Add New") {
            let [assignee, taskId, title, status, estimatedPoints] = line

            if (!(myDict.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
                continue
            }
            myDict[assignee].push({'taskId': taskId, 'title': title, 'status': status, 'points': estimatedPoints * 1})
        }

        else if (command === "Change Status") {
            let [assignee, taskId, newStatus] = line

            if (!(myDict.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
                continue
            }

            let taskIdExist = false
            for (const dict in myDict[assignee]) {
                // console.log(myDict[assignee][dict])
                if (myDict[assignee][dict].taskId === taskId) {
                    taskIdExist = true
                    myDict[assignee][dict].status = newStatus
                }
            }

            if (!(taskIdExist)) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
            } 
        }

        else if (command === "Remove Task") {
            let [assignee, index] = line

            if (!(myDict.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
                continue
            }

            if (index >= myDict[assignee].length || index < 0) {
                console.log("Index is out of range!")
                continue
            }

            myDict[assignee].splice(index, 1)
        }  
    }

    // console.log(JSON.stringify(myDict))

    let myDictAsArr = Object.entries(myDict)

    for (const [key, value] of myDictAsArr) {
        // console.log(key)
        // console.log(value)

        for (const el of value) {
            if (el.status === "ToDo") {
                secondDict['ToDo'] += el.points
                totalPointsOther += el.points
            }

            else if (el.status === "In Progress") {
                secondDict['In Progress'] += el.points
                totalPointsOther += el.points
            }

            else if (el.status === "Code Review") {
                secondDict['Code Review'] += el.points
                totalPointsOther += el.points
            }

            else if (el.status === "Done") {
                secondDict['Done Points'] += el.points
                totalPointsDone += el.points
            }
        }
    }

    // let secondDictAsArr = Object.entries(secondDict)
    // for (const key of secondDict) {
    //     console.log(`${key}: ${secondDict[key]}pts`)
    // }

    // let secondDictAsArr = Object.entries(secondDict)
    // console.log(secondDictAsArr)
    // for (const arr in secondDictAsArr) {
    //     console.log(arr)
    //     console.log(`${secondDictAsArr[arr]}: ${arr}pts`)
    // }


    for (const arr in secondDict) {
        // console.log(arr)
        // console.log(secondDict[arr])
        console.log(`${arr}: ${secondDict[arr]}pts`)
    }

    if (totalPointsDone >= totalPointsOther) {
        console.log('Sprint was successful!')
    } else {
        console.log('Sprint was unsuccessful...')
    }
}

// sprintReview([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ])

sprintReview([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
])