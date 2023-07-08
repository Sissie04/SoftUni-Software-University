function graduation(input) {
    let student = input[0];

    let year = 1;
    let index = 1;
    let fails = 0;
    let gradesSum = 0;

    while (year <= 12) {
        let grade = Number(input[index]);
        index++;

        gradesSum += grade;

        if (grade < 4) {
            fails++;

            if (fails > 1) {
                break;
            }
        }
        year++;

    }
    if (fails > 1) {
        console.log(`${student} has been excluded at ${year - 1} grade`);
    } else {
        let averageGrade = gradesSum / 12;
        console.log(`${student} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }

}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);