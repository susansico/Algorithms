/* InsertionSort.js */

/* Input is text string of space separated sorted integers with last integer being integer to insert into remaining sequence of integers. */
function InsertionSort(insertionSortIntegerSequenceId, insertionSortResultsId) {

    var spaceFlag = true;
    var intFlag = true;
    /* Convert input string into integer array. */
    var intArray = StringToArray(document.getElementById(insertionSortIntegerSequenceId).value, spaceFlag, intFlag);
    var insertionSortResults = document.getElementById(insertionSortResultsId);
    /* Integer to insert is last integer in array. */
    var insertionInt = intArray[intArray.length - 1];
    var breakFlag = false;

    insertionSortResults.value = "";
    /* Starting with first integer in array until next to last integer in array (excluding integer to insert), compare insertion integer to each integer in array. Stop comparison when insertion position had been found by setting break flag to true. */
    for (var i= 0; i < intArray.length - 1 && !breakFlag; i++) {

        /* If insertion integer is less than or equal to array integer, set break flag to true and move reamining
         integers, starting from next to last integer, to right. */
        if (insertionInt <= intArray[i]) {

            breakFlag = true;
            for (var j = intArray.length - 1; j > i; j--) {

                intArray[j] = intArray[j - 1];
                ShowChangedNumberArray(intArray, insertionSortResults);
            }
            /* Insert insertion integer into array position of integer less than or equal to insertion integer, because integer at this index and remaining integers have been moved right. */
            intArray[i] = insertionInt;
            ShowChangedNumberArray(intArray, insertionSortResults);
        }
    }
}
