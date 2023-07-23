function specialNumbers(input) {
    let number = Number(input[0]);
    let result = '';

    for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
        let isSpecial = true;

        let currentNumStr = currentNum.toString();

        for (let i = 0; i < currentNumStr.length; i++) {
            let currentDigit = Number(currentNumStr[i]);

            if (number % currentDigit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial === true) {
            result += currentNum + ' ';
        }
    }
    console.log(result);

}
specialNumbers(["3"]);