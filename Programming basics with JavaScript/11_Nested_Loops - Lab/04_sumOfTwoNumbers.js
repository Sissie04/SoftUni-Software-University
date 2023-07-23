function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFound = false;

    let combinations = 0;

    for (let num1 = start; num1 <= end; num1++) {

        for (let num2 = start; num2 <= end; num2++) {
            combinations++;

            if (num1 + num2 === magicNum) {
                console.log(`Combination N:${combinations} (${num1} + ${num2} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }

}
sumOfTwoNumbers(["1", "10", "5"]);
