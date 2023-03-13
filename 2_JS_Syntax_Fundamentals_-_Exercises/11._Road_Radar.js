function roadRadar(speed, area) {
    if (area === 'motorway') {
        let speedLimit = 130
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }
        else {
            if (speed - speedLimit <= 20){
                var speedStatus = 'speeding'
            }
            else if (speed - speedLimit <= 40){
                var speedStatus = 'excessive speeding'
            }
            else if (speed - speedLimit > 40){
                var speedStatus = 'reckless driving'
            }
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`)
        }
    }

    else if (area === 'residential') {
        let speedLimit = 20
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }
        else {
            if (speed - speedLimit <= 20){
                var speedStatus = 'speeding'
            }
            else if (speed - speedLimit <= 40){
                var speedStatus = 'excessive speeding'
            }
            else if (speed - speedLimit > 40){
                var speedStatus = 'reckless driving'
            }
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`)
        }
    }

    else if (area === 'interstate') {
        let speedLimit = 90
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }
        else {
            if (speed - speedLimit <= 20){
                var speedStatus = 'speeding'
            }
            else if (speed - speedLimit <= 40){
                var speedStatus = 'excessive speeding'
            }
            else if (speed - speedLimit > 40){
                var speedStatus = 'reckless driving'
            }
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`)
        }
    }

    else if (area === 'city') {
        let speedLimit = 50
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }
        else {
            if (speed - speedLimit <= 20){
                var speedStatus = 'speeding'
            }
            else if (speed - speedLimit <= 40){
                var speedStatus = 'excessive speeding'
            }
            else if (speed - speedLimit > 40){
                var speedStatus = 'reckless driving'
            }
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`)
        }
    }
}


roadRadar (40, 'city');
roadRadar (21, 'residential');
roadRadar (120, 'interstate');