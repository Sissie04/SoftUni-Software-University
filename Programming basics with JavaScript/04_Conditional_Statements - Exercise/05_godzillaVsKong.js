function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let clothesPricePerExtra = Number(input[2]);

    let decorPrice = budget * 0.10;
    let clothesTotalPrice = extrasCount * clothesPricePerExtra;

    if (extrasCount > 150) {
        clothesTotalPrice = clothesTotalPrice * 0.90;
    }

    let totalPrice = decorPrice + clothesTotalPrice;

    if (totalPrice > budget) {

        let neededMoney = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);

    } else {

        let moneyLeft = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88", "222", "55.68"]);