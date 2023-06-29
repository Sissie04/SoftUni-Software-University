function vowelsSum(input) {

    let text = input[0];
    let vowelsSum = 0;

    for (let i = 0; i <= text.length; i++) {
        let character = text[i];
        
        if (character === 'a') {
            vowelsSum += 1;
        } else if (character === 'e') {
            vowelsSum += 2;
        } else if (character === "i") {
            vowelsSum += 3;
        } else if (character === 'o') {
            vowelsSum += 4;
        } else if (character === 'u') {
            vowelsSum += 5;
        }
    }
    console.log(vowelsSum);
}
vowelsSum(["hi"]);