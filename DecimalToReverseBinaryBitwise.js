/* DecimalToReverseBinaryBitwise.js */

/* Given input string of decimal number, convert to binary and reverse binary digits. */
function DecimalToReverseBinaryBitwise(decimalNumberId, reversedBinaryResultsId) {

    /* Convert decimal number string to number. */
    var decimalNumber = parseInt(document.getElementById(decimalNumberId).value);
    var reversedBinaryResults = document.getElementById(reversedBinaryResultsId);
    /* Convert decimal number to binary string using num.toString with radix parameter of 2 signifying base or binary. */
    var binaryString = decimalNumber.toString(2);
    /* Number of  binary digits is length of string. */
    var numberBinaryDigits = binaryString.length - 1;
    /* Get middle index of binary string by dividing string length by 2 and rounding down. Needed for first shifting right half of binary number to left and then shifting left half of binary number to right. */
    var leftRightShiftSplit = Math.floor((binaryString.length / 2));
    var reversedBinaryNumber;
    var binaryDigit = 1;
    /* If binary representation of decimal number ends with 0, add leading 0 to binary reversed string result because decimal and binary numbers do not start with leading zeros. */
    var leadingZero = false;

    reversedBinaryResults.value = decimalNumber + " Binary: " + binaryString + "\n";
    /* To start reversal of binary digits, use bitwise AND operator, whose operands are converted to signed 32-bit integers in binary. AND binary of decimal number with 1 which results in binary of rightmost digit. Shift rightmost digit to left number of binary digits - 1.  Shifts rightmost digit to leftmost digit and assign result to reversedBinaryNumber.  */
    reversedBinaryNumber = (decimalNumber & 1) << numberBinaryDigits;
    if (reversedBinaryNumber !== 0)
        reversedBinaryResults.value += reversedBinaryNumber.toString(2) + "\n";
    else leadingZero = true;
    
    /* Starting at next leftmost digit until middle index, continue with decimal number AND with 2 which results in binary of that digit, shift number of digits - 2 to second rightmost digit, and OR (bitwise operator) and assign result with/to reversedBinaryNumber.  binaryDigit starts at 1 for rightmost digit and for each digit going left increases by power of 2. numberBinaryDigits decreases by two because shifting decreased positions. */
    for (var i = 1; i < leftRightShiftSplit; i++) {

        reversedBinaryNumber |= ((decimalNumber & (binaryDigit *= 2)) << (numberBinaryDigits -= 2));
        if (leadingZero === false)
            reversedBinaryResults.value += reversedBinaryNumber.toString(2) + "\n";
        else reversedBinaryResults.value += ("0" + reversedBinaryNumber.toString(2) + "\n");
    }

    /* If odd number of binary digits, initialize numberBinaryDigits to 0 because middle digit does not move. Otherwise, initialize to 1 because shifting digits to right of middle index starting at i which is now equal to middle index and first digit is shifted 1 position to right. */
    if ((binaryString.length % 2) !== 0)
        numberBinaryDigits = 0;
    else numberBinaryDigits = 1;

    /* Starting at middle index, increase binaryDigit to next power of two, AND with decimal number to get binary number for current digit position, shift binary number to right numberBinaryDigits, and OR and assign with/to reversedBinaryNumber. Increase numberBinaryDigits by 2 and continue until last binary digit in binary number. */
    for (; i < binaryString.length; i++) {

        reversedBinaryNumber |= ((decimalNumber & (binaryDigit *= 2)) >> numberBinaryDigits);
        if (leadingZero === false)
            reversedBinaryResults.value += reversedBinaryNumber.toString(2) + "\n";
        else reversedBinaryResults.value += ("0" + reversedBinaryNumber.toString(2) + "\n");
        numberBinaryDigits += 2;
    }
}
