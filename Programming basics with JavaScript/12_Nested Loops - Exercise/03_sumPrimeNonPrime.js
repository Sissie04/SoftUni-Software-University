function sumPrimeNonPrime(input) {
    let index = 0;

    let operation = input[index];
    index++;

    let sumPrime = 0;
    let sumNonPrime = 0;

    while (operation !== 'stop') {
        let currentNum = Number(operation);

        if (currentNum < 0) {
            console.log('Number is negative.');
            operation = input[index];
            index++;
            continue;
        }
        let isPrime = true;

        for (let divider = 2; divider < currentNum; divider++) {

            if (currentNum % divider === 0) {
                isPrime = false;
                break;
            }

        }

        if (isPrime === true) {
            sumPrime += currentNum;
        } else {
            sumNonPrime += currentNum;
        }

        operation = input[index];
        index++;

    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
