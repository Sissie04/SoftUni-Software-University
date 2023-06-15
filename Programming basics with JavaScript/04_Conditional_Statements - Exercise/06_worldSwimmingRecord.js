function worldSwimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPer1Meter = Number(input[2]);

    let distance = distanceInMeters * secondsPer1Meter;
    let extraTime = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = distance + extraTime;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let timeNeeded = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);