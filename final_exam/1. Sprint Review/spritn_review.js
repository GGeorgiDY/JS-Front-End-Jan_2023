function SprintReview (input) {
    let n = input.shift()
    let assignees = {}

    for (let i = 0; i < n; i++) {
        // const element = input.shift().split(':');
        // let assignee = element[0];
        // let taskId = element[1];
        // let title = element[2];
        // let status = element[3];
        // let estimatedPoints = element[4];
        let data = input.shift()
        let [assignee, taskId, title, status, estimatedPoints] = data.split(":");
        
        if (!(assignee in assignees)) {
            assignees[assignee] = []  
        } 
        // if (!(taskId in assignees[assignee] )) {
        //     assignees[assignee].push({taskId, title, status, "points": estimatedPoints * 1})
        // }
        assignees[assignee].push({taskId, title, status, "points": estimatedPoints * 1})
    }

    // console.log(JSON.stringify(assignees))
    // {"Kiril":[{"taskId":"BOP-1209","title":"Fix Minor Bug","status":"ToDo","points":3}],"Mariya":[{"taskId":"BOP-1210","title":"Fix Major Bug","status":"In Progress","points":3},{"taskId":"BOP-1213","title":"New Account Page","status":"In Progress","points":13}],"Peter":[{"taskId":"BOP-1211","title":"POC","status":"Code Review","points":5}],"Georgi":[{"taskId":"BOP-1212","title":"Investigation Task","status":"Done","points":2}]}

    for (const data of input) {
        // console.log(data)
        // Add New:Kiril:BOP-1217:Add Info Page:In Progress:5
        // Change Status:Peter:BOP-1290:ToDo
        // Remove Task:Mariya:1
        // Remove Task:Joro:1
        
        line = data.split(":")
        let command = line.shift()

        if (command === "Add New") {
            let [assignee, taskId, title, status, estimatedPoints] = line
            if (!(assignees.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            } else {
                assignees[assignee].push({taskId, title, status, 'points': estimatedPoints * 1})
            }
        }

        else if (command === "Change Status") {
            let [assignee, taskId, newStatus] = line
            if (!(assignees.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
                continue
            }

            let taskIdExis = false
            for (const asd of assignees[assignee]) {
                if (asd.taskId === taskId) {
                    taskIdExis = true
                    asd.status = newStatus
                }
            }
            if (!taskIdExis) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
            }
        }

        else if (command === "Remove Task") {
            let [assignee, index] = line

            if (!(assignees.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
                continue
            }
            if (Number(index) >= assignees[assignee].length || Number(index) < 0) {
                console.log("Index is out of range!")
            }

            assignees[assignee].splice(Number(index), 1) // нарочно го махам така, иначе с delete, на мястото на втория вложен речник, ще има null
        }
    }

    // console.log(JSON.stringify(assignees))

    let validCodes = ['ToDo', 'In Progress', 'Code Review', 'Done']
    let validCodesDict = {'ToDo': 0, 'In Progress': 0, 'Code Review': 0, 'Done': 0}
    let doneTask = 0
    let otherTasks = 0
    let assigneesArr = Object.entries(assignees)


    for (const [key, value] of assigneesArr) {
        for (el of value) {
            if (validCodes.includes(el.status)) {
                validCodesDict[el.status] += el.points
                if (el.status === "Done") {
                    doneTask += el.points
                } else {
                    otherTasks += el.points
                }
            }
        }
    }


    let validCodesArr = Object.entries(validCodesDict)
    for (const [key, value] of validCodesArr) {
        if (key == "Done") {
            console.log(`${key} Points: ${value}pts`)
        } else {
            console.log(`${key}: ${value}pts`)
        }
    }

    if (doneTask >= otherTasks) {
        console.log("Sprint was successful!")
    } else {
        console.log("Sprint was unsuccessful...")
    }
}

SprintReview([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    // 'Change Status:Peter:BOP-1211:ToDo',
    'Remove Task:Mariya:1',
    // 'Remove Task:Mariya:2',
    'Remove Task:Joro:1',
])

SprintReview([
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