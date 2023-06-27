function onTimeForExam(input) {

    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let totalExamTime = examHour * 60 + examMinutes;
    let totalArrivalTime = arrivalHour * 60 + arrivalMinutes;

    let totalDifference = Math.abs(totalExamTime - totalArrivalTime);
    let hourDifference = Math.floor(totalDifference / 60);
    let minuteDifference = totalDifference % 60;

    if (totalExamTime === totalArrivalTime) {
        console.log('On time');
    } else if (totalExamTime < totalArrivalTime) {
        console.log('Late');

        if (totalDifference < 60) {
            console.log(`${totalDifference} minutes after the start`);
        } else {
            if (minuteDifference < 10) {
                console.log(`${hourDifference}:0${minuteDifference} hours after the start`);
            } else {
                console.log(`${hourDifference}:${minuteDifference} hours after the start`);
            }
        }
    } else {
        if (totalDifference <= 30) {
            console.log('On time');
            console.log(`${totalDifference} minutes before the start`);
        } else {
            console.log('Early');

            if (totalDifference < 60) {
                console.log(`${totalDifference} minutes before the start`);
            } else {
                if (minuteDifference < 10) {
                    console.log(`${hourDifference}:0${minuteDifference} hours before the start`);
                } else {
                    console.log(`${hourDifference}:${minuteDifference} hours before the start`);
                }
            }

        }


    }


}
onTimeForExam(["9", "30", "9", "50"]);