function vacationBookList(input) {

    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursPerDay = bookPages / pagesPerHour;
    let neededHoursPerDay = hoursPerDay / days;
    console.log(neededHoursPerDay);



}
vacationBookList(["212", "20", "2"]);
