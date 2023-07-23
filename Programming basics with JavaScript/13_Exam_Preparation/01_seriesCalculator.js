function seriesCalculator(input) {
    let seriesTitle = input[0];
    let seasons = Number(input[1]);
    let episodesPerSeason = Number(input[2]);
    let episodeDurationWithoutAds = Number(input[3]);

    let adsDuration = episodeDurationWithoutAds * 0.20;
    let episodeDuration = episodeDurationWithoutAds + adsDuration;
    let totalDuration = seasons * episodesPerSeason * episodeDuration;
    let extraTime = seasons * 10;

    let totalTime = totalDuration + extraTime;

    console.log(`Total time needed to watch the ${seriesTitle} series is ${Math.floor(totalTime)} minutes.`);

}
seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"]);