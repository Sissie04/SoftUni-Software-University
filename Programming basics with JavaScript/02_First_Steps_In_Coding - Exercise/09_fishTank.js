function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let precents = Number(input[3]);

    let capacity = length * width * height;
    let liters = capacity / 1000;
    let busySpace = precents / 100;
    let neededLiters = liters * (1 - busySpace);

    console.log(neededLiters);


}
fishTank(["85", "75", "47", "17"]);