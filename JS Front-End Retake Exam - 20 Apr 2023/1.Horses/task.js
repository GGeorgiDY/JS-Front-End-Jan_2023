function horseRacingApp(data) {
    let horsesArr = data.shift().split('|');

    for(let i = 0; i < data.length; i++){
        let asd = data[i]
        if (asd === 'Finish') {
            console.log(horsesArr.join('->'));
            console.log(`The winner is: ${horsesArr.slice(-1)}`);
            break
        }

        let line = asd.split(' ');

        let newCommand = line.shift();

        if(newCommand === 'Retake'){
            let [fHorse, sHorse] = line

            let firstIndex = horsesArr.indexOf(fHorse);
            let secondIndex = horsesArr.indexOf(sHorse);
            if(firstIndex < secondIndex){
                horsesArr[firstIndex] = sHorse;
                horsesArr[secondIndex] = fHorse;
                console.log(`${fHorse} retakes ${sHorse}.`);                
            }
        } 
        
        else if(newCommand === 'Trouble'){
            let horse = line[0];

            if (horsesArr.includes(horse)) {
                let index = horsesArr.indexOf(horse);
                if(index > 0){
                    let indexToSwap = index - 1;
                    let horseToSwap = horsesArr[indexToSwap];
                    horsesArr[indexToSwap] = horse;
                    horsesArr[index] = horseToSwap;
                    console.log(`Trouble for ${horse} - drops one position.`);
                }
            }
        } 
        
        else if(newCommand === 'Rage'){
            let horse = line[0];
            let index = horsesArr.indexOf(horse);

            if (index < horsesArr.length - 2) {
                let nextHorse = horsesArr[index + 1];
                let nextNextHorse = horsesArr[index + 2];
                horsesArr[index + 2] = horse;
                horsesArr[index + 1] = nextNextHorse;
                horsesArr[index] = nextHorse;
                // console.log(`${horse} rages 2 positions ahead.`);
            } 
            else if(index < horsesArr.length - 1) {
                let nextHorse = horsesArr[index + 1];
                horsesArr[index] = nextHorse;
                horsesArr[horsesArr.length-1] = horse;
                // console.log(`${horse} rages 2 positions ahead.`);
            }
            console.log(`${horse} rages 2 positions ahead.`);
        } 
        
        else if(newCommand === 'Miracle'){
            let lasthorse = horsesArr[0];
            for(let i = 0; i < horsesArr.length -1; i++){
                horsesArr[i] = horsesArr[i+1];
            }
            horsesArr[horsesArr.length - 1] = lasthorse;
            console.log(`What a miracle - ${lasthorse} becomes first.`);
        } 
    }
}

// horseRacingApp(['Bella|Alexia|Sugar',
// 'Retake Alexia Sugar',
// 'Rage Bella',
// 'Trouble Bella',
// 'Finish'])

// horseRacingApp(['Onyx|Domino|Sugar|Fiona',
// 'Trouble Onyx',
// 'Retake Onyx Sugar',
// 'Rage Domino',
// 'Miracle',
// 'Finish'])

// horseRacingApp(['Fancy|Lilly',
// 'Retake Lilly Fancy',
// 'Trouble Lilly',
// 'Trouble Lilly',
// 'Finish',
// 'Rage Lilly'])

horseRacingApp(['Fancy|Lilly|ani|pepa',
'Miracle',
'Finish'])