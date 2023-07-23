function footballSouvenirs(input) {
    let team = input[0];
    let souvenirType = input[1];
    let souvenirCount = Number(input[2]);

    let totalSum = 0;

    if (team === 'Argentina') {

        switch (souvenirType) {
            case 'flags':
                totalSum = souvenirCount * 3.25;
                break;
            case 'caps':
                totalSum = souvenirCount * 7.20;
                break;
            case 'posters':
                totalSum = souvenirCount * 5.10;
                break;
            case 'stickers':
                totalSum = souvenirCount * 1.25;
                break;
            default:
                console.log("Invalid stock!");
                return;
        }

    } else if (team === 'Brazil') {

        switch (souvenirType) {
            case 'flags':
                totalSum = souvenirCount * 4.20;
                break;
            case 'caps':
                totalSum = souvenirCount * 8.50;
                break;
            case 'posters':
                totalSum = souvenirCount * 5.35;
                break;
            case 'stickers':
                totalSum = souvenirCount * 1.20;
                break;
            default:
                console.log("Invalid stock!");
                return;
        }

    } else if (team === 'Croatia') {

        switch (souvenirType) {
            case 'flags':
                totalSum = souvenirCount * 2.75;
                break;
            case 'caps':
                totalSum = souvenirCount * 6.90;
                break;
            case 'posters':
                totalSum = souvenirCount * 4.95;
                break;
            case 'stickers':
                totalSum = souvenirCount * 1.10;
                break;
            default:
                console.log("Invalid stock!");
                return;
        }

    } else if (team === 'Denmark') {

        switch (souvenirType) {
            case 'flags':
                totalSum = souvenirCount * 3.10;
                break;
            case 'caps':
                totalSum = souvenirCount * 6.50;
                break;
            case 'posters':
                totalSum = souvenirCount * 4.80;
                break;
            case 'stickers':
                totalSum = souvenirCount * 0.90;
                break;
            default:
                console.log("Invalid stock!");
                return;
        }
    } else {
        console.log("Invalid country!");
        return;
    }

    console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${team} for ${totalSum.toFixed(2)} lv.`);


}
footballSouvenirs(["Argentina",
    "shirts",
    "35"]);