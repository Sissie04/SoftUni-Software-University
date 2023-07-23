function roomPainting(input) {
    let paintCount = Number(input[0]);
    let rollsCount = Number(input[1]);
    let pricePerPairGloves = Number(input[2]);
    let pricePerOneBrush = Number(input[3]);

    let paintPrice = paintCount * 21.50;
    let rollsPrice = rollsCount * 5.20;

    let glovesCount = Math.ceil(rollsCount * 0.35);
    let brushesCount = Math.floor(paintCount * 0.48);

    let glovesPrice = glovesCount * pricePerPairGloves;
    let brushesPrice = brushesCount * pricePerOneBrush;

    let totalCost = paintPrice + rollsPrice + glovesPrice + brushesPrice;

    let delivery = totalCost / 15;

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);

}

roomPainting("10", "8", "2.2", "5");