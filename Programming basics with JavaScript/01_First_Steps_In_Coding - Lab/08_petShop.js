function petShop(input) {

    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;
    let dogFoodQuantity = Number(input[0]);
    let catFoodQuantity = Number(input[1]);
    let finalPrice = dogFoodPrice * dogFoodQuantity + catFoodPrice * catFoodQuantity;
    
    console.log(`${finalPrice} lv.`);

}
petShop(["13", "9"]);
