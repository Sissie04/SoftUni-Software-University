function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let totalPrice = 0;

    switch (town) {

        case "Sofia":
            if (product === "coffee") {
                totalPrice = quantity * 0.50;
            } else if (product === "water") {
                totalPrice = quantity * 0.80;
            } else if (product === "beer") {
                totalPrice = quantity * 1.20;
            } else if (product === "sweets") {
                totalPrice = quantity * 1.45;
            } else {
                totalPrice = quantity * 1.60;
            }
            break;

        case "Plovdiv":
            if (product === "coffee") {
                totalPrice = quantity * 0.40;
            } else if (product === "water") {
                totalPrice = quantity * 0.70;
            } else if (product === "beer") {
                totalPrice = quantity * 1.15;
            } else if (product === "sweets") {
                totalPrice = quantity * 1.30;
            } else {
                totalPrice = quantity * 1.50;
            }
            break;

        case "Varna":
            if (product === "coffee") {
                totalPrice = quantity * 0.45;
            } else if (product === "water") {
                totalPrice = quantity * 0.70;
            } else if (product === "beer") {
                totalPrice = quantity * 1.10;
            } else if (product === "sweets") {
                totalPrice = quantity * 1.35;
            } else {
                totalPrice = quantity * 1.55;
            }
            break;

    }
    console.log(totalPrice);

}
smallShop(["sweets", "Sofia", "2.23"]);