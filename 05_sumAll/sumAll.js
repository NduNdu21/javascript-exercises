const sumAll = function(num1, num2) {
    let final = 0;

    if ((num1 > 0 && num2 > 0) && (Number.isInteger(num1) && Number.isInteger(num2))) {
        if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                final += i;
            }       
        } else {
            for (let i = num1; i <= num2; i++) {
                final += i;
            }
        }
    } else {
        return "ERROR"
    }

    return final
};

// Do not edit below this line
module.exports = sumAll;
