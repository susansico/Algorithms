/* FibonacciNumbers.js */

/* Starting from 0, 1, each number in  Fibonacci sequence is addition of two numbers before it. Since Javascript numbers are represented as IEEE 754 double-precision floats, they lose integer precision for values beyond +/- 2^^53. Used Yaffle BigInteger library - https://github.com/Yaffle/BigInteger - to handle large integers that require 64 bits. */
function FibonacciNumbers(fibonacciSequenceNumberId, fibonacciResultId) {

    /* Initialize num1 and num2 to first two numbers in Fibonacci sequence, 0 and 1 respectively. */
    var num1 = 0;
    var num2 = 1;
    var num3;
    /* Input sequenceNumber is number of integers in sequence. */
    var sequenceNumber = parseInt(document.getElementById(fibonacciSequenceNumberId).value);
    var fibonacciResult = document.getElementById(fibonacciResultId);

    /* Starting from an index of 2 and index less than sequenceNumber, add num1 and num2, assign to num3 and add to sequence array. Then assign num2 to num1 and num 3 to num2 to get next number in sequence. */
    fibonacciResult.value = "0, 1 ";
    for (var index = 2; index < sequenceNumber; index++) {

        num3 = BigInteger.add(num1, num2);
        fibonacciResult.value += ", " + num3;
        num1 = num2;
        num2 = num3;
    }
}

/* Add first two input numbers in this modified Fibonacci sequence with second number squared, then for each succeeding integer add two previous integers with second integer squared until number of integers in sequence equals third input number. Input string is three numbers separated by spaces. See Algorithms.html for restraints. */
function FibonacciModified(fibonacciIntegerStringId, fibonacciModifiedResultId) {

    var spaceFlag = true;
    var intFlag = false;
    /* Convert input string to array string. */
    var integerStringArray = StringToArray(document.getElementById(fibonacciIntegerStringId).value, spaceFlag, intFlag);
    /* Convert first two input numbers to num1 and num2 integers respectively. */
    var int1 = parseInt(integerStringArray[0]);
    var int2 = parseInt(integerStringArray[1]);
    var int3;
    /* Convert third input number to integer, sequenceNumber, number of integers in sequence. */
    var sequenceNumber = parseInt(integerStringArray[2]);
    var fibonacciModifiedResult = document.getElementById(fibonacciModifiedResultId);

    /* Starting at an index of two, square initialized num2, add to initialized num1, and assign to num3. Then assign int2 to int1 and int3 to int2 (succeeding integer in sequence is addition with square of preceding two integers),increment index, and loop though code again until number of integers in sequence in reached. */
    for (var index = 2; index < sequenceNumber; index++) {

        int2 = BigInteger.multiply(int2, int2);
        int3 = BigInteger.add(int1, int2);
        int1 = int2;
        int2 = int3;
    }

    fibonacciModifiedResult.value = int3;
}