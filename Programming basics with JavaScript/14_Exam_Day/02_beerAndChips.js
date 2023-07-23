function beerAndChips(input) {
    let fanName = input[0];
    let budget = Number(input[1]);
    let beersCount = Number(input[2]);
    let chipsCount = Number(input[3]);

    let beersPrice = beersCount * 1.20;
    let pricePerChips = beersPrice * 0.45;

    let chipsPrice = Math.ceil(pricePerChips * chipsCount);

    let totalCost = beersPrice + chipsPrice;

    if (totalCost <= budget) {
        let moneyLeft = budget - totalCost;
        console.log(`${fanName} bought a snack and has ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalCost - budget;
        console.log(`${fanName} needs ${moneyNeeded.toFixed(2)} more leva!`);
    }

}
beerAndChips(["George",
    "10",
    "2",
    "3"]);
