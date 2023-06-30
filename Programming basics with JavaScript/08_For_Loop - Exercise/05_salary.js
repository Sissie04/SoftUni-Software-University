function salary(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 0; i < openTabs; i++) {
        let tabName = input[i + 2];

        if (tabName === "Facebook") {
            salary -= 150;
        } else if (tabName === "Instagram") {
            salary -= 100;
        } else if (tabName === "Reddit") {
            salary -= 50;
        }
    }


    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }

}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);