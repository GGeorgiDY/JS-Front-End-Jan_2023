function sprintReview(data) {
    let n = data.shift()
    let assignees = {}
    let totalPointsDone = 0
    let totalPointsOther = 0
    let totalPoints = {'ToDo': Number(0), 'In Progress': Number(0), 'Code Review': Number(0), 'Done Points': Number(0)}

    for (let i = 0; i < n; i++) {
        let line = data.shift().split(':')
        let [assignee, taskId, title, status, estimatedPoints] = line

        if (!assignees.hasOwnProperty(assignee)) {
            assignees[assignee] = []
        }
        assignees[assignee].push({'taskId': taskId, 'title': title, 'status': status, 'estimatedPoints': estimatedPoints})
    }
    // console.log(assignees) // {Kiril: Array(1), Mariya: Array(2), Peter: Array(1), Georgi: Array(1)}

    for (let i = 0; i < data.length; i++) {
        let line = data[i].split(':')
        let command = line.shift()
        
        if (command === 'Add New') {
            let [assignee, taskId, title, status, estimatedPoints] = line
            if (!assignees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
                continue
            }
            assignees[assignee].push({'taskId': taskId, 'title': title, 'status': status, 'estimatedPoints': estimatedPoints})
        }

        else if (command === 'Change Status') {
            let [assignee, searchedtaskId, newStatus] = line
            if (!assignees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
                continue
            }

            let searchedtaskIdExist = false
            for (const arr of assignees[assignee]) {
                if (arr.taskId === searchedtaskId) {
                    arr.status = newStatus
                    searchedtaskIdExist = true
                }
            } 
            
            if (searchedtaskIdExist === false) {
                console.log(`Task with ID ${searchedtaskId} does not exist for ${assignee}!`)
            }  
        }

        else if (command === 'Remove Task') {
            let [assignee, index] = line
            if (!assignees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
                continue
            }
            if (index >= assignees[assignee].length || index < 0) {
                console.log("Index is out of range!")
                continue
            }
            assignees[assignee].splice(index, 1)
        }
    }

    // console.log(assignees) // {Kiril: Array(2), Mariya: Array(1), Peter: Array(1), Georgi: Array(1)}

    for (const key of Object.keys(assignees)) {
        for (const arr of assignees[key]) {
            // console.log(arr) // {taskId: 'BOP-1209', title: 'Fix Minor Bug', status: 'ToDo', estimatedPoints: '3'}

            if (arr.status === 'ToDo') {
                totalPoints['ToDo'] += Number(arr.estimatedPoints)
                totalPointsOther += Number(arr.estimatedPoints)
            }

            else if (arr.status === 'In Progress') {
                totalPoints['In Progress'] += Number(arr.estimatedPoints)
                totalPointsOther += Number(arr.estimatedPoints)
            }

            else if (arr.status === 'Code Review') {
                totalPoints['Code Review'] += Number(arr.estimatedPoints)
                totalPointsOther += Number(arr.estimatedPoints)
            }

            else if (arr.status === 'Done') {
                totalPoints['Done Points'] += Number(arr.estimatedPoints)
                totalPointsDone += Number(arr.estimatedPoints)
            }
        }
    }

    for (const key of Object.keys(totalPoints)) {
        console.log(`${key}: ${totalPoints[key]}pts`)
    }

    if (totalPointsDone >= totalPointsOther) {
        console.log('Sprint was successful!')
    } else {
        console.log('Sprint was unsuccessful...')
    }
}

sprintReview([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
])

// sprintReview([
//     '4',
//     'Kiril:BOP-1213:Fix Typo:Done:1',
//     'Peter:BOP-1214:New Products Page:In Progress:2',
//     'Mariya:BOP-1215:Setup Routing:ToDo:8',
//     'Georgi:BOP-1216:Add Business Card:Code Review:3',
//     'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
//     'Change Status:Georgi:BOP-1216:Done',
//     'Change Status:Will:BOP-1212:In Progress',
//     'Remove Task:Georgi:3',
//     'Change Status:Mariya:BOP-1215:Done',
// ])