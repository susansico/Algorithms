/* Anagrams.js */

/* Anagram is word, phrase, or name formed by rearranging letters, such as cinema, formed from iceman. */
function AnagramWord(anagramOriginalWordId, anagramTestWordId, anagramWordResultId) {

    /* In order to compare test string against original string, remove any spaces from strings. */
    var anagramOriginalString = RemoveSpaces(document.getElementById(anagramOriginalWordId).value);
    var anagramTestString = RemoveSpaces(document.getElementById(anagramTestWordId).value);
    var anagramWordResult = document.getElementById(anagramWordResultId);
    var tempString = ""; /* Initialize tempString to empty string. */

    /* Match each character of original string to every character in test string. If original string character matches  character in test string, add test string character to tempString, remove character from test string, break out of test string loop, and continue with next character of original string. */
    for (var i = 0; i < anagramOriginalString.length; i++) {

        for (var j= 0; j < anagramTestString.length; j++) {

            if (anagramOriginalString[i] === anagramTestString[j]) {

                tempString += anagramOriginalString[i];
                anagramTestString = RemoveCharacter(anagramTestString, j);
                break;
            }
        }
    }

    /* If temp string matches original string, return true because test string has same characters as original string. */
    if (tempString === anagramOriginalString)
        anagramWordResult.value = "This is an Anagram.";
    else anagramWordResult.value = "This is not an Anagram.";
}

/* Find number of characters of first half of input string that need to be changed to make it an anagram of second half of input string. The input string is even number of characters. */
function AnagramLetters(anagramLettersStringId, anagramLettersResultId) {

    var anagramLettersString = document.getElementById(anagramLettersStringId).value;
    var anagramLettersResult = document.getElementById(anagramLettersResultId);
    var matched = 0;
    var lettersToReplace = 0;

    /* If input string has an even number of characters, split string in half into two separate strings,
     letters to test and anagram letters. */
    if ((anagramLettersString.length % 2) === 0) {

        var splitStringLength = anagramLettersString.length / 2;
        var testLettersString = StringToSubString(anagramLettersString, 0, splitStringLength);
        anagramLettersString = StringToSubString(anagramLettersString, splitStringLength, anagramLettersString.length);

        /* Match each letter of anagram string against every letter of test string.  If there is  match, increment matched counter, remove matched character in test string, break out of test string loop, and continue with next anagram string character. */
        for (var i = 0; i < anagramLettersString.length; i++) {

            for (var j = 0; j < testLettersString.length; j++) {

                if(testLettersString[j] === anagramLettersString[i]) {

                    matched++;
                    testLettersString = RemoveCharacter(testLettersString, j);
                    /*anagramLettersString = RemoveCharacter(anagramLettersString, i);
                    i--;*/
                    break;
                }
            }
        }

        /* Number of letters to replace is length of split strings minus number of matched characters. */
        lettersToReplace = splitStringLength - matched;
    }
    else lettersToReplace = "-1, Not an even number of letters.";

    anagramLettersResult.value = lettersToReplace;
}
