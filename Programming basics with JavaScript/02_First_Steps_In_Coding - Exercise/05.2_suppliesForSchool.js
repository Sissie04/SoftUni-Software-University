function suppliesForSchool(input) {

    let penQuantity = Number(input[0]);
    let markerQuantity = Number(input[1]);
    let litersBoardCleanser = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = penQuantity * 5.80;
    let markersPrice = markerQuantity * 7.20;
    let boardCleanserPrice = litersBoardCleanser * 1.20;

    let totalSum = pensPrice + markersPrice + boardCleanserPrice;
    let discountedSum = totalSum - totalSum * (discount / 100);
    console.log(discountedSum);



}
suppliesForSchool(["2", "3", "4", "25"]);
