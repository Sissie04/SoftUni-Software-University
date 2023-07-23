function traveling(input) {
    let operation = input[0];
    let index = 1;

    while (operation !== 'End') {
        let destination = operation;
        let budget = Number(input[index]);
        index++;

        let savings = 0;

        while (savings < budget) {
            let currentMoney = Number(input[index]);
            index++;

            savings += currentMoney;
        }
        console.log(`Going to ${destination}!`);

        operation = input[index];
        index++;
    }


}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);