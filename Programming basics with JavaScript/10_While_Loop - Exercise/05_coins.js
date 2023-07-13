function coins(input) {
    let change = Number(input[0]);
    let coins = Math.floor(change * 100);
    let returnedCoins = 0;

    while (coins > 0) {
        if (coins >= 200) {
            returnedCoins++;
            coins -= 200;
        } else if (coins >= 100) {
            returnedCoins++;
            coins -= 100;
        } else if (coins >= 50) {
            returnedCoins++;
            coins -= 50;
        } else if (coins >= 20) {
            returnedCoins++;
            coins -= 20;
        } else if (coins >= 10) {
            returnedCoins++;
            coins -= 10;
        } else if (coins >= 5) {
            returnedCoins++;
            coins -= 5;
        } else if (coins >= 2) {
            returnedCoins++;
            coins -= 2;
        } else if (coins >= 1) {
            returnedCoins++;
            coins -= 1;
        }
    }
    console.log(returnedCoins);
}
coins(["1.23"]);