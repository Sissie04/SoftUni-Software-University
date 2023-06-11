function repainting(input) {

    let nylone = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workingHours = Number(input[3]);

    let nylonPrice = (nylone + 2) * 1.50;
    let paintPrice = (paint * 1.10) * 14.50;
    let thinnerPrice = thinner * 5;
    let trashbag = 0.40;

    let totalSum = nylonPrice + paintPrice + thinnerPrice + trashbag;
    let employees = (totalSum * 0.30) * workingHours;

    let finalSum = totalSum + employees;
    console.log(finalSum);


}
repainting(["10", "11", "4", "8"]);