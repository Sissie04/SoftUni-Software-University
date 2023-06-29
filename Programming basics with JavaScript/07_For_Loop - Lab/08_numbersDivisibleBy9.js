function numbersDivisibleBy9(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let sum = 0;
    let currentNum = "";

    for (let i = startNum; i <= endNum; i++) {
        if (i % 9 === 0) {
            sum += i;
            currentNum += i + '\n';
        }


    }
    console.log(`The sum: ${sum}`);
    console.log(currentNum);

}
numbersDivisibleBy9(["100", "200"]);