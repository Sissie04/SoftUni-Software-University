function cleverLily(input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let savedMoney = 0;
    let moneyGiven = 10;

    for (let currentAge = 1; currentAge <= age; currentAge++) {
        if (currentAge % 2 !== 0) {
            savedMoney += pricePerToy;
        } else {
            savedMoney += moneyGiven - 1;
            moneyGiven += 10;
        }

    }

    if (savedMoney >= washerPrice) {
        let moneyLeft = savedMoney - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washerPrice - savedMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }



}
cleverLily(["21", "1570.98", "3"]);