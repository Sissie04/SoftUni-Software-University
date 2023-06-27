function skiTrip(input) {
    let roomForOne = 18;
    let apartment = 25;
    let presidentApartment = 35;

    let days = Number(input[0]);
    let roomType = input[1];
    let review = input[2];


    let nights = days - 1;
    let roomPrice = 0;

    if (roomType === "room for one person") {
        roomPrice = roomForOne;
    } else if (roomType === "apartment") {
        roomPrice = apartment;
    } else if (roomType === "president apartment") {
        roomPrice = presidentApartment;
    }

    let totalCost = roomPrice * nights;

    if (roomType === "apartment") {
        if (nights < 10) {
            totalCost *= 0.70;
        } else if (nights >= 10 && nights <= 15) {
            totalCost *= 0.65;
        } else if (nights > 15) {
            totalCost *= 0.50;
        }
    } else if (roomType === "president apartment") {
        if (nights < 10) {
            totalCost *= 0.90;
        } else if (nights >= 10 && nights <= 15) {
            totalCost *= 0.85;
        } else if (nights > 15) {
            totalCost *= 0.80;
        }

    }

    if (review === "positive") {
        totalCost *= 1.25;
    } else {
        totalCost *= 0.90;
    }

    console.log(totalCost.toFixed(2));


}
skiTrip(["14", "apartment", "positive"]);
//skiTrip(["30", "president apartment", "negative"]);
//skiTrip(["12", "room for one person", "p
