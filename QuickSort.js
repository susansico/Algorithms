/* QuickSort.js */

/* This Quicksort is Quicksort in place using Lomuto partitioning method to sort numbers in ascending order.  Algorithm first partitions large integer array into two smaller sub-arrays - low elements and high elements, and then recursively sorts sub-arrays.  Partitioning starts by picking last element in array as pivot and reordering array so that all elements with values less than pivot come before pivot and all elements with values greater come after it. Partitioning is recursively applied to sub-arrays until array has ordered list of numbers. */
function QuickSortInitialize(quickSortNumberSequenceId, quickSortResultsId) {

    /* Initialize by converting input string into number array and calling QuickSort with number array, start index, end index, results field, and show results on web page flag as arguments. */
    var quickSortNumberSequence = document.getElementById(quickSortNumberSequenceId).value;
    var quickSortResults = document.getElementById(quickSortResultsId);
    var intFlag = true;
    var spaceFlag = true;
    var numArray = StringToArray(quickSortNumberSequence, spaceFlag, intFlag);
    var showResultsFlag = true;

    quickSortResults.value = "";
    QuickSort(numArray, 0, numArray.length - 1, quickSortResults, showResultsFlag);
}

function QuickSort(numArray, start, end, quickSortResults, showResultsFlag) {

    var pivotIndex;

    /* If start index is less than end index, partition array and call QuickSort on left (less than pivot and right (greater than pivot) sub-arrays. */
    if(start < end) {

        pivotIndex = Partition(numArray, start, end, quickSortResults, showResultsFlag);

        QuickSort(numArray, start, pivotIndex - 1, quickSortResults, showResultsFlag);
        QuickSort(numArray, pivotIndex + 1, end, quickSortResults, showResultsFlag);
    }
}
