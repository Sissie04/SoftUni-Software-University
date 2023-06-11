function projectsCreation(input) {

    let architectName = input[0];
    let projectCount = Number(input[1]);
    let hoursPerProject = 3;
    let neededHours = projectCount * hoursPerProject;

    console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${projectCount} project/s.`);
}
projectsCreation(["Sanya", "9"]);
