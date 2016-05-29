/* Algorithms.js - Utility function for JavaScript algorithm files. */

/* Converts decimal numbers to hex letters and hex letters to decimal numbers depending on letter flag. */
function HexLetterOrIntegerConversionTable(object, letterFlag) {

    var hexTable = [["A", 10], ["B", 11], ["C", 12], ["D", 13], ["E", 14], ["F", 15]];
    
    for (var i = 0; i < hexTable.length; i++) {

        if (letterFlag) {
            if (object === hexTable[i][0])
                return (hexTable[i][1]);
        }
        else if (object === hexTable[i][1])
            return(hexTable[i][0]);
    }
}

/* Convert number array to string vial new string initialized to empty. */
function NumberArrayToString(numArray) {

    var numString = "";
    
    for (var i = 0; i < numArray.length; i++) {

     numString += (numArray[i].toString() + " ");
    }
    
    return(numString);
}

/* Used in Partition function, swaps number at given indexes via temp number. */
function NumberSwap(array, index1, index2) {

    var tempNum = array[index1];
    array[index1] = array[index2];
    array[index2] = tempNum;
}

/* Removes character from string at given index via new string initialized to empty. */
function RemoveCharacter(string, index) {

    var newString = "";

    for (var i = 0; i < string.length; i++) {

        if (i != index)
            newString += string[i];
    }

    return newString;
}

/* Remove array entry at given index via new array initialized to empty array; */
function RemoveArrayEntry(array, index){

    var newArray = [];
    
    for (var i = 0, j = 0; i < array.length; i++) {

        if (i != index) {
            newArray[j] = array[i];
            j++;
        }
    }
    
    return newArray;
}

/* Removes spaces from string via new string. */
function RemoveSpaces(string) {

    /* Declare empty string. */
    var newString = "";

    /* Test each character of string. If character is not space, add to newString. */
    for (var i = 0; i < string.length; i++) {

        if (string[i] !== " ")
            newString += string[i];
    }

    return newString;
}

/* Used in Median and QuickSort algorithms, assigns number array to results text area for each array and sub-array partition. */
function ShowChangedNumberArray(numArray, textResults) {

    for(var i = 0; i < numArray.length; i++) {

        textResults.value += (numArray[i] + " ");
    }
    textResults.value += "\n";
}

/* Converts string to either number array or string array depending on integer flag and removes spaces from string depending on space flag. */
function StringToArray(string, spaceFlag, intFlag) {

    var j = 0;
    var tempString = "";
    var array = [];

    for (var i = 0; i < string.length; i++) {

        /* If no spaces are to be removed from string, add string at given index to array at given index. */
        if (!spaceFlag)
            array[i] = string[i];
        else { /* Otherwise if space, remove space from string via temp string. */
            if (string[i] != " ")
            tempString += string[i];
            else { /* Otherwise depending on integer flag, add temp string value to array at given index. */

                StringOrIntegerArray(array, j, tempString, intFlag);
                tempString = "";
                j++;
            }
            /* Call function again for last string entry. */
            StringOrIntegerArray(array, j, tempString, intFlag);
        }
    }

    return(array);
}

/* If not converting string to number array, add temp string value to array at given index, otherwise convert string value to integer and add to array at given index. */
function StringOrIntegerArray(array, index, tempString, intFlag) {


    if (!intFlag)
        array[index] = tempString;
    else array[index] = parseInt(tempString);
}

/* Create sub-string from string starting at start index until end index. Used in AnagramLetters function to split input string into two strings of lowercase letters to be compared. */
function StringToSubString(string, startIndex, length) {

    var newString = "";

    for (var i = startIndex; i < length; i++) {

        newString += string[i];
    }

    return newString;
}

/* Partition number array and sub-arrays into sub-arrays by dividing array into numbers less than pivot and greater than pivot. */
function Partition(numArray, start, end, quickSortResults, showResultsFlag) {

    /* Initialize j to start index of array. */
    var j = start;

    /* Initialize i to start of array. Loop through array from first number to next to last number, comparing each number at index i to last number. */
    for (var i = start; i < end; i++) {

        /* if number at index i is less than or equal to last number, swap number with number at index j and increment j. */
        if (numArray[i] <= numArray[end]) {

            NumberSwap(numArray, j, i);
            j++;
        }
    }
    /* After looping through array, swap number at j, with number at end. */
    NumberSwap(numArray, j, end);
    if (showResultsFlag)
        ShowChangedNumberArray(numArray, quickSortResults);

    /* Return index j as pivot index. */
    return(j);
}