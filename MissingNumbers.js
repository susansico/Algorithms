/* MissingNumbers.js */

/* Given input if two strings of space separated numbers with number in first string being subset of numbers in second string, find missing numbers in first string. */
function MissingNumbers(subsetNumbersStringId, numbersStringId, missingNumbersResultsId) {
    
    var spaceFlag = true;
    var intFlag = true;
    /* Convert input strings into integer arrays. */
    var subsetNumbersArray = StringToArray(document.getElementById(subsetNumbersStringId).value, spaceFlag, intFlag);
    var numbersArray = StringToArray(document.getElementById(numbersStringId).value, spaceFlag, intFlag);
    var missingNumbersResults = document.getElementById(missingNumbersResultsId);
    var breakFlag;
    var showResultsFlag = false;
    var repeatingNumbers = true;

    for (var i = 0; i < subsetNumbersArray.length; i++) {

        breakFlag = false;
        for (var j = 0; j < numbersArray.length && !breakFlag; j++) {

            if(subsetNumbersArray[i] === numbersArray[j]) {

                numbersArray = RemoveArrayEntry(numbersArray, j);
                breakFlag = true;
            }
        }
    }

    /* Sort missing numbers in ascending order. */
    QuickSort(numbersArray, 0, numbersArray.length - 1, null, showResultsFlag);

    /* Remove repeats of missing numbers. Continue looping through numbers array, removing repeating numbers until there are no more repeating numbers. */
    while (repeatingNumbers) {

        breakFlag = false;
        for (i = 0, j = 1; i < numbersArray.length - 1 && !breakFlag; i++, j++) {

            if (numbersArray[i] === numbersArray[j])  {

                numbersArray = RemoveArrayEntry(numbersArray, j);
                breakFlag = true;
            }
        }
        if (!breakFlag)
            repeatingNumbers = false;
    }

    missingNumbersResults.value = "";
    for (i = 0; i < numbersArray.length; i++) {

            missingNumbersResults.value += (numbersArray[i].toString() + " ");
    }
}