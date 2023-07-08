function accountBalance(input) {

    let operation = input[0];
    let total = 0;
    let index = 1;

    while (operation !== 'NoMoreMoney') {
        let sum = Number(operation);

        if (sum < 0) {
            console.log('Invalid operation!');
            break;
        }
        total += sum;

        console.log(`Increase: ${sum.toFixed(2)}`);

        operation = input[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);

}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);