function paintingEggs(input) {
    let eggsSize = input[0];
    let eggsColor = input[1];
    let boxes = Number(input[2]);

    let totalSum = 0;

    switch (eggsSize) {
        case 'Large':
            switch (eggsColor) {
                case 'Red':
                    totalSum = boxes * 16;
                    break;
                case 'Green':
                    totalSum = boxes * 12;
                    break;
                case 'Yellow':
                    totalSum = boxes * 9;
                    break;
            }
            break;

        case 'Medium':
            switch (eggsColor) {
                case 'Red':
                    totalSum = boxes * 13;
                    break;
                case 'Green':
                    totalSum = boxes * 9;
                    break;
                case 'Yellow':
                    totalSum = boxes * 7;
                    break;
            }
            break;

        case 'Small':
            switch (eggsColor) {
                case 'Red':
                    totalSum = boxes * 9;
                    break;
                case 'Green':
                    totalSum = boxes * 8;
                    break;
                case 'Yellow':
                    totalSum = boxes * 5;
                    break;
                    break;
            }
    }
    let taxes = totalSum * 0.35;
    let finalSum = totalSum - taxes;
    console.log(`${finalSum.toFixed(2)} leva.`);

}

paintingEggs(["Large",
    "Red",
    "7"]);