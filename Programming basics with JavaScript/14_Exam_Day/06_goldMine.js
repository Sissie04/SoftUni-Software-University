function goldMine(input) {
    let index = 0;

    let locations = Number(input[index]);
    index++;


    for (let i = 0; i < locations; i++) {
        
        let averageIncome = Number(input[index]);
        index++;

        let days = Number(input[index]);
        index++;

        let yield = 0;

        for (let j = 0; j < days; j++) {
            let currentYield = Number(input[index]);
            index++;

            yield += currentYield;
        }

        let averagePerLocation = (yield / days);
        let difference = Math.abs(averagePerLocation - averageIncome);
        if (averagePerLocation < averageIncome) {
            console.log(`You need ${difference.toFixed(2)} gold.`);
        } else {
            console.log(`Good job! Average gold per day: ${averagePerLocation.toFixed(2)}.`);
        }
    }
}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);