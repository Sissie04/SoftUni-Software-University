function trekkingMania(input) {
    let musalaTeams = 0;
    let monblanTeams = 0;
    let kilimandjaroTeams = 0;
    let k2Teams = 0;
    let everestTeams = 0;

    let groupCount = Number(input[0]);
    let peopleCount = Number(input[1]);

    for (let i = 1; i <= groupCount; i++) {
        let currentNum = Number(input[i]);
        peopleCount += currentNum;

        if (currentNum <= 5) {
            musalaTeams += currentNum;
        } else if (currentNum >= 6 && currentNum <= 12) {
            monblanTeams += currentNum;
        } else if (currentNum >= 13 && currentNum <= 25) {
            kilimandjaroTeams += currentNum;
        } else if (currentNum >= 26 && currentNum <= 40) {
            k2Teams += currentNum;
        } else if (currentNum >= 41) {
            everestTeams += currentNum;
        }
    }
    peopleCount = musalaTeams + monblanTeams + kilimandjaroTeams + k2Teams + everestTeams;
    let p1Musala = musalaTeams / peopleCount * 100;
    let p2Monblan = monblanTeams / peopleCount * 100;
    let p3Kilimandjaro = kilimandjaroTeams / peopleCount * 100;
    let p4K2 = k2Teams / peopleCount * 100;
    let p5Everest = everestTeams / peopleCount * 100;


    console.log(`${(p1Musala).toFixed(2)}%`);
    console.log(`${(p2Monblan).toFixed(2)}%`);
    console.log(`${(p3Kilimandjaro).toFixed(2)}%`);
    console.log(`${(p4K2).toFixed(2)}%`);
    console.log(`${(p5Everest).toFixed(2)}%`);

}
//trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);