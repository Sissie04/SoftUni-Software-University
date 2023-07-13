function cake(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let totalPieces = width * length;

    let takenPieces = input[index];
    index++;

    while (takenPieces !== 'STOP') {
        takenPieces = Number(takenPieces);
        totalPieces -= takenPieces;

        if (totalPieces <= 0) {
            break;
        }

        takenPieces = input[index];
        index++;
    }

    if (takenPieces === 'STOP') {
        console.log(`${totalPieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
    }

}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);
