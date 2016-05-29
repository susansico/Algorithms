/* Median.js */

/* Median is middle value in list of numbers in numerical order. Partitioning from Quicksort algorithm is used to find median of an unordered list of numbers. */
function Median(medianSequenceId, medianResultsId) {

        var spaceFlag = true;
        var intFlag = true;
        /* Convert input string with space separated list of numbers into integer array. */
        var intArray = StringToArray(document.getElementById(medianSequenceId).value, spaceFlag, intFlag);
        var medianResults = document.getElementById(medianResultsId);
        /* Divide integer array length by 2, round up, and subtract 1 for 0 start index, to get index (position) of
         median in array.  */
        var medianIndex = Math.ceil(intArray.length / 2) - 1;
        /* Initialized pivot index and start to 0 and end to last index in array. */
        var pivotIndex = 0;
        var start = 0;
        var end = intArray.length - 1;
        var showResultsFlag = true;
    
        medianResults.value="";
        
        /* Partition integer array until pivot index equals median index. */
        while (pivotIndex !== medianIndex) {

            /* If start index equals end index, array of numbers is in numerical order and number at median index is median. */
            if (start === end)
                pivotIndex = medianIndex;
            else {
                
                /* When Partition is first called, pivot is number at last or end index of array. Using end index, Partition divides array into numbers less than pivot and more than pivot and returns new pivot index. Pivot number at index divides array into numbers less than pivot and numbers more than pivot. */
                pivotIndex = Partition(intArray, start, end, medianResults, showResultsFlag);

                /* If median index has not been found, adjust start or end. */
                if (pivotIndex !== medianIndex) {

                    /* If pivot index is less than median index, median number can be found within numbers greater than number at pivot index. Assign start to next index. */
                    if (pivotIndex < medianIndex)
                        start = pivotIndex + 1;
                    /* If pivot index equals end index, look for median in numbers to left of end number. Assign end to index before it. */
                    else if (pivotIndex === end)
                        end -= 1;
                }
            }
        }
        
        /* If there are an even amount of numbers, median is addition of two middle numbers divided by 2. */
        if ((intArray.length % 2) === 0)
            medianResults.value += ((intArray[pivotIndex] + intArray[pivotIndex + 1]) / 2);
        else medianResults.value += intArray[pivotIndex];
}
