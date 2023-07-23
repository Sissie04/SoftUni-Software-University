function trainTheTrainers(input) {
    let index = 0;

    let judgeCount = Number(input[index]);
    index++;

    let operation = input[index];
    index++;

    let totalGradeSum = 0;
    let totalGradeCount = 0;

    while (operation !== 'Finish') {
        let presentationName = operation;
        let gradeSum = 0;

        for (let i = 0; i < judgeCount; i++) {
            let currentGrade = Number(input[index]);
            index++;

            gradeSum += currentGrade;
        }
        let averageGrade = gradeSum / judgeCount;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);

        totalGradeSum += averageGrade;
        totalGradeCount++;

        operation = input[index];
        index++;
    }

    let finalAverageGrade = totalGradeSum / totalGradeCount;
    console.log(`Student's final assessment is ${finalAverageGrade.toFixed(2)}.`);

}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);