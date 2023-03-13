function towns(input) {
    // ползваме for of защото това е масив
    for (const townInfo of input) {
        let myDict = {}
        let modifiedTown = townInfo.split(" | ")
        myDict['town'] = modifiedTown[0];
        myDict['latitude'] = Number(modifiedTown[1]).toFixed(2);
        myDict['longitude'] = Number(modifiedTown[2]).toFixed(2);

        console.log(myDict)
    }
}


towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)