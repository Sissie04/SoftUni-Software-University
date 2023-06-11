function basketballEquipment(input) {

    let annualTax = Number(input[0]);
    let shoes = annualTax * 0.60;
    let equipment = shoes * 0.80;
    let basketball = equipment / 4;
    let accessories = basketball / 5;

    let totalPrice = annualTax + shoes + equipment + basketball + accessories;
    console.log(totalPrice);

}
basketballEquipment(["365"]);