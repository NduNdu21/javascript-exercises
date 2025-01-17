const repeatString = function(string, num) {
    let display = ""
    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++){
            display += string
        }
        return display
    }
};

// Do not edit below this line
module.exports = repeatString;
