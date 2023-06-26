function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishersCount = Number(input[2]);

    let totalPrice = 0;

    switch (season) {
        case 'Spring':
            totalPrice += 3000;
            break;

        case 'Summer':
        case 'Autumn':
            totalPrice += 4200;
            break;

        case 'Winter':
            totalPrice += 2600;
            break;
    }

    if (fishersCount <= 6) {
        totalPrice *= 0.90;
    } else if (fishersCount >= 7 && fishersCount <= 11) {
        totalPrice *= 0.85;
    } else {
        totalPrice *= 0.75;
    }

    if (fishersCount % 2 === 0 && season !== "Autumn") {
        totalPrice *= 0.95;
    }

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let neededMoney = totalPrice - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }

}
fishingBoat(["2000", "Winter", "13"]);