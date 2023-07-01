function tennisRanklist(input) {
    let tournamentsNumber = Number(input[0]);
    let allPoints = Number(input[1]);
    let currentPoints = 0;
    let points = 0;
    let winnerCount = 0;
    let rank = input[2];

    for (let i = 0; i < tournamentsNumber; i++) {
        if (rank == 'W') {
            points = 2000;
            winnerCount++;
        } else if (rank == 'F') {
            points = 1200;
        } else if (rank == 'SF') {
            points = 720;
        }
        allPoints += points;
        currentPoints += points;
        rank = input[i + 3];
    }

    let averagePoints = currentPoints / tournamentsNumber;
    let winnerPercent = winnerCount / tournamentsNumber * 100;
    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winnerPercent.toFixed(2)}%`);
}


//tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
//tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);