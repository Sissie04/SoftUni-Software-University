function balls(input) {
    let ballsCount = Number(input[0]);

    let points = 0;

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherBalls = 0;

    for (let i = 1; i <= ballsCount; i++) {
        let currentBall = input[i];

        if (currentBall === 'red') {
            points += 5;
            redBalls++;
        } else if (currentBall === 'orange') {
            points += 10;
            orangeBalls++;
        } else if (currentBall === 'yellow') {
            points += 15;
            yellowBalls++;
        } else if (currentBall === 'white') {
            points += 20;
            whiteBalls++;
        } else if (currentBall === 'black') {
            points = Math.trunc(points / 2);
            blackBalls++;
        } else {
            otherBalls++;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);


}
balls(["3",
    "white",
    "black",
    "pink"]);