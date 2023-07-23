function skeleton(input) {
    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let lengthInMeters = Number(input[2]);
    let secondsPer100M = Number(input[3]);

    let totalControlSeconds = controlMinutes * 60 + controlSeconds;
    let secondsPerM = secondsPer100M / 100;
    let timeInSeconds = secondsPerM * lengthInMeters;

    let slowDown = lengthInMeters / 120;
    let totalSlowDown = slowDown * 2.5;

    let totalTime = timeInSeconds - totalSlowDown;


    if (totalTime <= totalControlSeconds) {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${totalTime.toFixed(3)}.`);
    } else {
        let secondsNeeded = totalTime - totalControlSeconds;
        console.log(`No, Marin failed! He was ${secondsNeeded.toFixed(3)} second slower.`);
    }


}
skeleton(["2",
    "12",
    "1200",
    "10"]);