function depositCalculator(input) {

    let deposit = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualRate = Number(input[2]);

    let totalRate = deposit * (annualRate / 100);
    let ratePerMonth = totalRate / 12;
    let totalSum = deposit + depositTerm * ratePerMonth;
    console.log(totalSum);

}
depositCalculator(["200", "3", "5.7"]);
