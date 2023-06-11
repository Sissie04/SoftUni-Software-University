function yardGreening(input) {

    let pricePerSquareMeter = 7.61;
    let squareMeters = Number(input[0]);
    let totalSum = pricePerSquareMeter * squareMeters;
    let discount = totalSum * 0.18;
    let finalSum = totalSum - discount;

    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
yardGreening(["150"]);
