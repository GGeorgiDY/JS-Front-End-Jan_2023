function flightSchedule(input) {
    let myDict = {}
    let line = input.shift()

    for (const flight of line) {
        let [flightCode, ...city] = flight.split(' ')
        city = city.join(' ')
        
        myDict[flightCode] = {'city': city, 'status': 'Ready to fly'}
    }

    let changedStatuses = input.shift()
    for (const flight of changedStatuses) {
        let [flightCode, status] = flight.split(' ')
        
        if (myDict.hasOwnProperty(flightCode)) {
            myDict[flightCode].status = status
        }
    }

    // console.log(myDict)

    let searchedStatus = input.join(' ')
    if (searchedStatus === 'Ready to fly') {
        for (const [code, info] of Object.entries(myDict)) {
            if (info.status === 'Ready to fly') {
                console.log(`{ Destination: '${info.city}', Status: '${info.status}' }`)
            }
        }
    } else {
        for (const [code, info] of Object.entries(myDict)) {
            if (info.status === searchedStatus) {
                console.log(`{ Destination: '${info.city}', Status: '${info.status}' }`)
            }
        }
    }
}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
])