function suppliesForSchool(input) {

    let packOfPens = 5.80;
    let packOfMarkers = 7.20;
    let boardCleanser = 1.20;

    let penQuantity = Number(input[0]);
    let markerQuantity = Number(input[1]);
    let litersBoardCleanser = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = packOfPens * penQuantity;
    let markersPrice = packOfMarkers * markerQuantity;
    let boardCleanserPrice = boardCleanser * litersBoardCleanser;

    let totalSum = pensPrice + markersPrice + boardCleanserPrice;
    let discountedSum = totalSum - totalSum * (discount / 100);
    console.log(discountedSum);



}
suppliesForSchool(["2", "3", "4", "25"]);
