function petShop(input) {

    let dogFoodQuantity = Number(input[0]);
    let catFoodQuantity = Number(input[1]);
    let finalPrice = 2.50 * dogFoodQuantity + 4 * catFoodQuantity;
    
    console.log(`${finalPrice} lv.`);

}
petShop(["13", "9"]);
