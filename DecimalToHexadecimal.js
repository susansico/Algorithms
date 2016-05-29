/* DecimalToHexadecimal.js */

/* Convert decimal number to hexadecimal number. Continue dividing number by 16 until there is no remainder with the
 first remainder starting at rightmost position and following remainders going to left. */
function DecimalToHexadecimal(decimalNumberId, hexadecimalResultId) {

    var decimalNumber = parseInt(document.getElementById(decimalNumberId).value);
    var hexResult = document.getElementById(hexadecimalResultId);
    var remainderArray = [];
    var index = 0;
    var quotient;
    var letterFlag = false;

    /* If decimal number is less than 16, just get remainder. */
    if (decimalNumber > 15) {

        /* Using remainder operator, add remainder of dividing decimal number by 16 to remainder array. Then
         divide decimal number by 16 using Math.floor so that quotient will be rounded down. */
        remainderArray[index] = decimalNumber % 16;
        quotient = Math.floor(decimalNumber / 16);
        
        /* While quotient is more than zero, keep dividing and adding remainder to remainder array. */
        while(quotient > 0) {

            index++;
            remainderArray[index] = quotient % 16;
            quotient = Math.floor(quotient / 16);
        }
    }
    else remainderArray[index] = decimalNumber % 16;
    
    hexResult.value = "";
    /* For each remainder in array starting from last remainder, using  case statement, if remainder number is between 10 and 15 inclusive, using  table, convert numbers to their respective hexadecimal letters A through F and add to result string.  If remainder is not between 10 and 15 inclusive, just to result string. */
    for (var i = remainderArray.length - 1; i >= 0; i--) {

        switch(remainderArray[i]) {
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                hexResult.value += HexLetterOrIntegerConversionTable(remainderArray[i], letterFlag);
                break;
            default:
                hexResult.value += remainderArray[i].toString();
        }
    }
}
