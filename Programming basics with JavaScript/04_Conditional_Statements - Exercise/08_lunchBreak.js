function lunchBreak(input) {

    let movieName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let relaxTime = breakDuration / 4;
    let timeLeft = breakDuration - (lunchTime + relaxTime);

    if (timeLeft >= episodeDuration) {
        let minutesLeft = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(minutesLeft)} minutes free time.`);

    } else {
        let neededTime = episodeDuration - timeLeft;
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(neededTime)} more minutes.`);
    }


}
lunchBreak(["Game of Thrones", "60", "96"]);
