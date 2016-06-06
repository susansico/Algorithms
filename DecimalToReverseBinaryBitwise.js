/* DecimalToReverseBinaryBitwise.js */

/* Given input string of decimal number, convert to binary and reverse binary digits. */
function DecimalToReverseBinaryBitwise(decimalNumberId, reversedBinaryResultsId) {

    /* Convert decimal number string to number. */
    var decimalNumber = parseInt(document.getElementById(decimalNumberId).value);
    /* For showing results on web page. */
    var reversedBinaryResults = document.getElementById(reversedBinaryResultsId);
    /* Convert decimal number to binary string using num.toString with radix parameter of 2 signifying base or binary. */
    var binaryString = decimalNumber.toString(2);
    /* Get index of last digit in string. */
    var lastDigit = binaryString.length - 1;
    /* numDigitsToMove will decrease as binary number is reversed. */
    var numDigitsToMove = binaryString.length - 1;
    /* Get middle index of binary string by dividing string length by 2 and rounding down. Needed for first shifting right half of binary number to left and then shifting left half of binary number to right. */
    var leftRightShiftSplit = Math.floor((binaryString.length / 2));
    var reversedBinaryNumber;
    var binaryDigit = 1;
    /* If binary representation of decimal number ends with 0, add leading zeros to binary reversed string result because decimal and binary numbers do not start with leading zeros. */
    var leadingZeroString = CreateStringForLeadingZeros(binaryString);
    /* When binary number ends in more than one zero, when using bitwise operators to reverse, the resulting reversed binary number will be only one zero until a one digit is encountered.  Result for each ending 0 reversal should be zeros for total number of digits in the binary string.  Zero string is used to show result on the web page. */
    var zeroString = CreateZeroString(binaryString);

    reversedBinaryResults.value = decimalNumber + " Binary: " + binaryString + "\n";
    /* To start reversal of binary digits, use bitwise AND operator, whose operands are converted to signed 32-bit integers in binary. AND binary of decimal number with 1 which results in binary of rightmost digit. Shift rightmost digit to left by number of binary digits - 1.  Assign result to reversedBinaryNumber.  */
    if (binaryString[lastDigit] === "0")
        reversedBinaryResults.value += zeroString + "\n";
    else {

        reversedBinaryNumber = (decimalNumber & 1) << numDigitsToMove;
        reversedBinaryResults.value += reversedBinaryNumber.toString(2) + "\n";
    }
    
    /* Starting at next leftmost digit until middle index, continue with decimal number AND with 2 which results in binary of that digit, shift number of digits - 2 to second rightmost digit, and OR (bitwise operator) and assign result with/to reversedBinaryNumber.  binaryDigit starts at 1 for rightmost digit and for each digit going left increases by power of 2. numDigitsToMove decreases by two because shifting decreased digit positions. */
    for (var i = 1; i < leftRightShiftSplit; i++) {

        reversedBinaryNumber |= ((decimalNumber & (binaryDigit *= 2)) << (numDigitsToMove -= 2));
        if (binaryString[lastDigit - i] === "0")
            reversedBinaryResults.value += zeroString + "\n";
        else reversedBinaryResults.value += (leadingZeroString + reversedBinaryNumber.toString(2) + "\n");
    }

    /* If odd number of binary digits, initialize numDigitsToMove to 0 because middle digit does not move. Otherwise, initialize to 1 because shifting digits to right of middle index starting at i which is now equal to middle index and first digit is shifted 1 position to right. */
    if ((binaryString.length % 2) !== 0)
        numDigitsToMove = 0;
    else numDigitsToMove = 1;

    /* Starting at middle index, increase binaryDigit to next power of two, AND with decimal number to get binary number for current digit position, shift binary number to right numDigitsToMove, and OR and assign with/to reversedBinaryNumber. Increase numDigitsToMove by 2 and continue until last binary digit in binary number. */
    for (; i < binaryString.length; i++) {

        reversedBinaryNumber |= ((decimalNumber & (binaryDigit *= 2)) >> numDigitsToMove);
        reversedBinaryResults.value += (leadingZeroString + reversedBinaryNumber.toString(2) + "\n");
        numDigitsToMove += 2;
    }
}