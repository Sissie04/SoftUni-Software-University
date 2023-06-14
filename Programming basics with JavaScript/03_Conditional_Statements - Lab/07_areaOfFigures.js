function areaOfFigures(input) {

    let figureShape = input[0];
    let area = 0;

    if (figureShape === "square") {
        let sideA = Number(input[1]);
        area = sideA * sideA;

    } else if (figureShape === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB;

    } else if (figureShape === "circle") {
        let radius = Number(input[1]);
        area = Math.PI * (radius * radius);

    } else if (figureShape === "triangle") {
        let sideA = Number(input[1]);
        let elevation = Number(input[2]);
        area = sideA * elevation / 2;
    }
    console.log(area.toFixed(3));
}
areaOfFigures(["triangle", "4.5", "20"]);