function puppyCare(input) {
    let food = Number(input[0]) * 1000;
    let command = input[1];
    let index = 2;

    while (command !== 'Adopted') {
        let currentFood = Number(command);

        food -= currentFood;

        command = input[index];
        index++;
    }
    if (food >= 0) {
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
    }

}
puppyCare(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"]);