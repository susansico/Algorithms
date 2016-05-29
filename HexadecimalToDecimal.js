/* HexadecimalToDecimal.js */

/* Starting with rightmost digit or letter in hexadecimal number, multiply each digit or letter by 16 to increasing powers starting with  power of 0, adding multiplications together to get decimal number. Convert letters to decimal equivalent. 16 to power of 0 is 1. */
function HexadecimalToDecimal(hexadecimalNumberId, decimalResultId) {
    
    var spaceFlag = false;
    var intFlag = false;
    /* Convert string input to string array. */
    var hexStringArray = StringToArray(document.getElementById(hexadecimalNumberId).value, spaceFlag, intFlag);
    var hexIntArray = [];
    var letterFlag = true;
    var decimalResultInt = 0;
    var decimalResult = document.getElementById(decimalResultId);

    /* For each digit or letter in hex number starting from rightmost digit or letter, using  case statement, if array entry at that index is letter, using table, convert letter to decimal number and add to hex array starting at 0 index, otherwise convert digit to integer and add to hex array. */
    for (var i = hexStringArray.length - 1, j = 0; i >= 0; i--, j++) {

            switch(hexStringArray[i]) {
                case "A":
                case "B":
                case "C":
                case "D":
                case "E":
                case "F":
                    hexIntArray[j] = HexLetterOrIntegerConversionTable(hexStringArray[i], letterFlag);
                    break;
                default:
                    hexIntArray[j] = parseInt(hexStringArray[i]);
            }
    }

    /* For each number in hex array multiply by 16 to increasing powers starting with  power of 0 (1 * 16 * 16 * 16 etc.) which equates to 1 (j = 1) and add decimal result which was initialized to 0. */
    for (i = 0, j = 1; i < hexIntArray.length; i++, j*= 16) {

        decimalResultInt += (hexIntArray[i] * j);
    }

    decimalResult.value = decimalResultInt.toString();
}