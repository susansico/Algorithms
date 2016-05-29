/* Prime.js */

/* Prime number is natural number greater than 1 that has no positive divisors other than 1 and itself. */
function Prime(primeTestNumberId, primeTestNumberResultId) {

    var primeTestNumber = parseInt(document.getElementById(primeTestNumberId).value);
    var primeTestNumberResult = document.getElementById(primeTestNumberResultId);
    var remainder = 0;
    var isPrime = false;

    /* Divide test number using remainder operator by numbers between 1 (one is positive divisor for all positive numbers) and test number, counting number of remainders. */
    for (var i = 2; i < primeTestNumber; i++) {

        if (primeTestNumber % i)
            remainder++;
    }

    /* if number of remainders equals all numbers between 1 and number, number is prime number. */
    if (remainder === (primeTestNumber - 2)) {

        isPrime = true;
        primeTestNumberResult.value = "This is a prime number.";
    }
    else primeTestNumberResult.value = "This is not a prime number.";
}
