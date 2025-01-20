const reverseString = function(string) {
    let display = ""
    for (let i = string.length - 1; i >= 0; i--) {
        display += string.charAt(i)
    }

    return display
};

// Do not edit below this line
module.exports = reverseString;
