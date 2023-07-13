function walking(input) {
    let index = 0;
    let goalSteps = 10000;
    let totalSteps = 0;

    let currentSteps = input[index];
    index++;

    while (currentSteps !== 'Going home') {
        currentSteps = Number(currentSteps);
        totalSteps += currentSteps;

        if (totalSteps >= goalSteps) {
            break;
        }
        currentSteps = input[index];
        index++;
    }

    if (currentSteps === 'Going home') {
        let stepsHome = Number(input[index]);
        totalSteps += stepsHome;

        if (totalSteps >= goalSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - goalSteps} steps over the goal!`);
        } else {
            console.log(`${goalSteps - totalSteps} more steps to reach goal.`);
        }
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${totalSteps - goalSteps} steps over the goal!`);
    }

}
walking(["1000",
    "1500",
    "2000",
    "6500"]);