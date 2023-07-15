function multiplicationTable() {
    for (let numA = 1; numA <= 10; numA++) {


        for (let numB = 1; numB <= 10; numB++) {
            let result = numA * numB;
            console.log(`${numA} * ${numB} = ${result}`);

        }
    }
}
multiplicationTable();
