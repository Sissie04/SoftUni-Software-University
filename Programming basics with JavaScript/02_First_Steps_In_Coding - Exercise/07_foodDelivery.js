function foodDelivery(input) {

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegeterianMenus = Number(input[2]);

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let vegeterianMenusPrice = vegeterianMenus * 8.15;

    let totalPrice = chickenMenusPrice + fishMenusPrice + vegeterianMenusPrice;
    let dessert = totalPrice * 0.20;
    let delivery = 2.50;
    let finalPrice = totalPrice + dessert + delivery;

    console.log(finalPrice);
}
foodDelivery(["2", "4", "3"]);
