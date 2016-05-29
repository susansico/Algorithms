/* Factorial.js */

/* Factorial of positive number is product of all preceding positive numbers starting from 1.  Factorial
*   of 5 is 1 * 2 * 3 * 4 * 5 (25).  Given number input, find Factorial. Since Javascript numbers are represented as IEEE 754 double-precision floats, they lose integer precision for values beyond +/- 2^^53. Used Yaffle BigInteger library - https://github.com/Yaffle/BigInteger - to handle large integers that require 64 bits. */
function Factorial(factorializeNumberId, factorialResultId) {

    var number = parseInt(document.getElementById(factorializeNumberId).value);
    var factorialResult = document.getElementById(factorialResultId);
    var factorial = 1;
    var factorialInteger;
    
    /* Since product of number * 1 is number, starting from i initialized to 2, with factorial initialized to 1, multiplying factorial by i.c*/
    for (var i = 2; i <= number; i++) {

        factorial = BigInteger.multiply(factorial, i);
    }

    factorialResult.value = factorial.toString(10);
}
