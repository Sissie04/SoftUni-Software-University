function cinema(input) {

    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let cinemaHall = rows * columns;
    let income = 0;

    if (projectionType === 'Premiere') {
        income = cinemaHall * 12;
    } else if (projectionType === 'Normal') {
        income = cinemaHall * 7.50;
    } else {
        income = cinemaHall * 5;
    }

    console.log(`${income.toFixed(2)} leva`);

}
cinema(["Discount", "12", "30"]);