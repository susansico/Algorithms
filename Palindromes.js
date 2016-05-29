/* Palindromes.js */

/*  Palindrome is word, phrase, or sequence that reads same backward as forward, e.g. madam or nurses run. Determine if input string is Palindrome. */
function PalindromeWord(palindromeTestWordId, palindromeResultId) {

    /* Remove any spaces in input string in order to test as sequence of letters. */
    var palindromeTestWord = RemoveSpaces(document.getElementById(palindromeTestWordId).value);
    var palindromeResult = document.getElementById(palindromeResultId);
    /* Get middle index of sequence of letters by dividing length by 2, rounding up, and subtracting 1 for 0 start. */
    var lettersMiddleIndex = Math.ceil((palindromeTestWord.length) / 2) - 1;

    /* Compare each letter starting at index 0 and ending at middle index, to each letter starting at end index and ending before or at middle index depending on odd or even string length. */
    for (var i = 0, j = palindromeTestWord.length - 1; i <= lettersMiddleIndex; i++, j--) {

        /* If any of letter comparisons are not equal, word or phrase is not  Palindrome. */
        if (palindromeTestWord[i] !== palindromeTestWord[j]) {

            palindromeResult.value = "This is not a Palindrome.";
            return;
        }
    }

    palindromeResult.value = "This is a Palindrome.";
}

/* Given input string of lowercase letters, determine index of character whose removal will make string Palindrome.  If string is Palindrome, print -1. */
function PalindromeLetters(palindromeTestLettersId, palindromeLetterResultId) {

    var palindromeTestLetters = document.getElementById(palindromeTestLettersId).value;
    var palindromeLetterResult = document.getElementById(palindromeLetterResultId);
    /* Get middle index of letter string by dividing string length by 2, rounding up, and subtracting 1 for 0 start. */
    var lettersMiddleIndex = Math.ceil((palindromeTestLetters.length) / 2) - 1;

    /* Compare each letter starting at 0 index and ending at middle index to each letter starting at end index and ending
     before or at middle index depending on odd or even length. */
    for (var i = 0, j = palindromeTestLetters.length - 1; i <= lettersMiddleIndex; i++, j--) {

        /* If letters are not equal, compare letter at i (left of middle) to letter at j -1 index (next letter from end to right of middle index). If there is no match, it means letter at i index does not match any letter to right of middle index.  Otherwise, letter at i index does match letter at j - 1 index, meaning letter at j does not match any letters to left of middle index. */
        if (palindromeTestLetters[i] !== palindromeTestLetters[j]) {

            if (palindromeTestLetters[i] !== palindromeTestLetters[j - 1]) {

                palindromeLetterResult.value = i;
                return;
            }
            else {

                palindromeLetterResult.value = j;
                return;
            }
        }
    }

    /* If input string is already palindrome, result value is -1. */
    palindromeLetterResult.value = "-1";
}