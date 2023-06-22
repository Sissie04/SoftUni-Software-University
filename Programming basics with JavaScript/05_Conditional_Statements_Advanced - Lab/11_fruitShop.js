function fruitShop(input) {

    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);

    let totalPrice = 0;

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === 'banana') {
                totalPrice = quantity * 2.50;
            } else if (fruit === 'apple') {
                totalPrice = quantity * 1.20;
            } else if (fruit === 'orange') {
                totalPrice = quantity * 0.85;
            } else if (fruit === 'grapefruit') {
                totalPrice = quantity * 1.45;
            } else if (fruit === 'kiwi') {
                totalPrice = quantity * 2.70;
            } else if (fruit === 'pineapple') {
                totalPrice = quantity * 5.50;
            } else if (fruit === 'grapes') {
                totalPrice = quantity * 3.85;
            } else {
                console.log('error');
                return;
            }
            break;
        case "Saturday":
        case "Sunday":
            if (fruit === 'banana') {
                totalPrice = quantity * 2.70;
            } else if (fruit === 'apple') {
                totalPrice = quantity * 1.25;
            } else if (fruit === 'orange') {
                totalPrice = quantity * 0.90;
            } else if (fruit === 'grapefruit') {
                totalPrice = quantity * 1.60;
            } else if (fruit === 'kiwi') {
                totalPrice = quantity * 3;
            } else if (fruit === 'pineapple') {
                totalPrice = quantity * 5.60;
            } else if (fruit === 'grapes') {
                totalPrice = quantity * 4.20;
            } else {
                console.log('error');
                return;
            }
            break;
        default:
            console.log("error");
            return;
    }
    console.log(totalPrice.toFixed(2));
}
fruitShop(["grapes", "Saturday", "0.5"]);
