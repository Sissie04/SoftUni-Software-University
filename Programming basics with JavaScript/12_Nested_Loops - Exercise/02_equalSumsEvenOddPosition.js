function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = '';

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let evenPosition = 0;
        let oddPosition = 0;

        let currentNumStr = currentNum.toString();

        for (let i = 0; i < currentNumStr.length; i++) {
            let currentDigit = Number(currentNumStr[i]);
            let position = i + 1;

            if (position % 2 === 0) {
                evenPosition += currentDigit;
            } else {
                oddPosition += currentDigit;
            }
        }

        if (evenPosition === oddPosition) {
            result += currentNumStr + ' ';

        }
    }
    console.log(result);

}
equalSumsEvenOddPosition(["100000", "100050"]);