function oscars(input) {
    let actor = input[0];
    let academicPoints = Number(input[1]);
    let jury = Number(input[2]);

    for (let i = 0; i < jury * 2; i += 2) {
        let juryName = input[i + 3];
        let juryPoints = Number(input[i + 4]);

        academicPoints += juryName.length * juryPoints / 2;

        if (academicPoints > 1250.50) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${(academicPoints).toFixed(1)}!`);
            break;
        }

    }

    if (academicPoints <= 1250.50) {
        console.log(`Sorry, ${actor} you need ${(1250.50 - academicPoints).toFixed(1)} more!`);
    }

}

/*oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]); */