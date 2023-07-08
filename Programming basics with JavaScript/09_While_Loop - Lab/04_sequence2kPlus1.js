function sequence2k(input) {
    let number = Number(input[0]);
    let index = 1;

    while (index <= number) {
        console.log(index);
        index = (index * 2) + 1;

    }

}
sequence2k(["3"]);