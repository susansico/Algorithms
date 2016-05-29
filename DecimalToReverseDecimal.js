/* DecimalToReverseDecimal */

/* Given input of decimal number, reverse digits in number. */
function DecimalToReverseDecimal(decimalNumberId, reversedDecimalResultsId) {

    var decimalNumberString = document.getElementById(decimalNumberId).value;
    /* Convert decimal number string to decimal number. */
    var decimalNumber = parseInt(decimalNumberString);
    var reversedDecimalResults = document.getElementById(reversedDecimalResultsId);
    var remainder;
    /* Initialize reversed decimal number to 0 so that first time through for loop, reversed decimal number multiplied by 10 equals 0. */
    var reversedDecimalNumber = 0;

    /* Using for loop, multiply reversed number by 10 (first time through loop, reversed number is 0), get remainder of dividing decimal number by 10 by using remainder operator, add remainder to reversed number, and divide number by 10 rounding down and assigning new quotient to number. Continue for all digits in decimal number. For example, number 201 divided by remainder operator equals 1 and 201 divided by 10 equals 20. 1 is added to reverse decimal number which was initialized to 0 to equal 1. Next time through loop reversed number of 1 is multiplied by 10 to equal 10, remainder of 20 divided by 10 is 0 which is added to reversed number to equal 10, and 20 is divided by 10 to equal 2.  Next time though loop reversed number 10 is multiplied by 10 to equal 100. Remainder of 2 divided by 10 is 2 which is added to remainder to equal 102, reversed decimal number. */
    for (var i = 0; i < decimalNumberString.length; i++) {

        reversedDecimalNumber *= 10;
        remainder = decimalNumber % 10;
        reversedDecimalNumber += remainder;
        decimalNumber = Math.floor(decimalNumber / 10);
    }

    /* Since decimal numbers do not have leading zeros, if last character of decimal number string equals 0, add zero character to reversed decimal results string. */
    if (decimalNumberString[decimalNumberString.length - 1] !== "0")
        reversedDecimalResults.value = reversedDecimalNumber.toString();
    else reversedDecimalResults.value = "0" + reversedDecimalNumber.toString();
}
