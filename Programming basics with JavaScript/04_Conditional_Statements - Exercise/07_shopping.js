function shopping(input) {

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let CPUs = Number(input[2]);
    let RAMs = Number(input[3]);

    let videoCardPrice = videoCards * 250;
    let cpuPrice = CPUs * (videoCardPrice * 0.35);
    let ramPrice = RAMs * (videoCardPrice * 0.10);

    let totalSum = videoCardPrice + cpuPrice + ramPrice;

    if (videoCards > CPUs) {
        totalSum = totalSum * 0.85;
    }

    if (totalSum <= budget) {
        let moneyLeft = budget - totalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let neededMoney = totalSum - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }

}
shopping(["900", "2", "1", "3"]);
