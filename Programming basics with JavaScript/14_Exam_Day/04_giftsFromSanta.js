function giftsFromSanta(input) {
    let numM = Number(input[0]);
    let numN = Number(input[1]);
    let numS = Number(input[2]);

    let adresses = '';

    for (let i = numN; i >= numM; i--) {

        if (i % 2 === 0 && i % 3 === 0) {

            if (i === numS) {
                break;
            }

            adresses += i + ' ';
        }
    }

    console.log(adresses);

}
giftsFromSanta(["1",
"36",
"12"]);
