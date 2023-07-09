function examPreparation(input) {
    let index = 0;
    let maxBadGrades = Number(input[index]);
    index++;

    let examName = input[index];
    index++;

    let examGrade = Number(input[index]);
    index++;


    let badGrades = 0;
    let manyBadGrades = false;
    let gradesSum = 0;
    let gradeCount = 0;
    let lastExam = '';


    while (examName !== 'Enough') {
        lastExam = examName;
        if (examGrade <= 4) {
            badGrades++;
        }
        if (badGrades === maxBadGrades) {
            manyBadGrades = true;
            break;
        }
        gradesSum += examGrade;
        gradeCount++;

        examName = input[index];
        index++;

        examGrade = Number(input[index]);
        index++;



    }
    if (manyBadGrades) {
        console.log(`You need a break, ${badGrades} poor grades.`);
    } else {
        let averageGrade = gradesSum / gradeCount;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastExam}`);
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);
