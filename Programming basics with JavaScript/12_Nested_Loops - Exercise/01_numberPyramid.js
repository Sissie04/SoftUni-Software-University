function numberPyramid(input) {
    let n = Number(input[0]);
    let num = 1;
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            process.stdout.write(num + " ")
            num++;
            if (num > n) {
                return;
            }
        }
        console.log();
    }
}

numberPyramid(["15"]);