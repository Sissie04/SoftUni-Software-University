function sumNumbers(input) {
    let firstNum = Number(input[0]);
    let currentNum = Number(input[1]);

    let sum = 0;
    let index = 2;

    while (sum < firstNum) {
        sum += currentNum;
        currentNum = Number(input[index]);
        index++;
    }
    console.log(sum);

}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"]);