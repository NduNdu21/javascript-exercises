const palindromes = function (phrase) {
    let palindrome = false
    let phr = ""
    let revPhr = ""

    //Logic to remove punctuation and spaces. Reverse the string after this
    phr = phrase.split("").filter(char => {return /[a-zA-z0-9]/.test(char);}).join("").toLowerCase() // split to make array, filter to remove spaces etc, join to make string

    //reversing the string to compare it and see if it is a palindrome
    for (let i = phr.length - 1; i >= 0; i--) {
        revPhr += phr[i]
    }

    if (revPhr === phr) {
        palindrome = true
    }

    return palindrome
};

// Do not edit below this line
module.exports = palindromes;
