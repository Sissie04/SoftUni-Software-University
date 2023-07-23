function easterCompetition(input) {
    let breadCount = Number(input[0]);

    let bestBaker = '';
    let bestPoints = 0;
    let index = 1;

    for (let currentBread = 1; currentBread <= breadCount; currentBread++) {
        let bakerName = input[index];
        index++;

        let command = input[index];
        index++;

        let totalGrade = 0;

        while (command !== 'Stop') {
            let grade = Number(command);

            totalGrade += grade;

            command = input[index];
            index++;
        }

        console.log(`${bakerName} has ${totalGrade} points.`);

        if (totalGrade > bestPoints) {
            console.log(`${bakerName} is the new number 1!`);
            bestBaker = bakerName;
            bestPoints = totalGrade;
        }
    }
    console.log(`${bestBaker} won competition with ${bestPoints} points!`);

}
easterCompetition(["3",
    "Chef Manchev",
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"]);