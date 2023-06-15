function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let totalCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;
    let totalPrice = puzzlesCount * 2.60 + dollsCount * 3 + teddyBearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;

    if (totalCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }
    totalPrice = 0.90 * totalPrice;

    if (totalPrice >= vacationPrice) {
        let moneyLeft = totalPrice - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let neededMoney = vacationPrice - totalPrice;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);