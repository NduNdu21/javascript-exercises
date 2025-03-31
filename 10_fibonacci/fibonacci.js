const fibonacci = function (pos) {

    if (pos < 0) {
        return "OOPS"
    } else {
        let value = 1

        // initialising fib array with first 4 values
        let fibArr = [0, 1]

        //get value of position
        for (let i = 2; i <= pos; i++) {
            fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
        }

        value = fibArr[pos]

        return value
    }

};

// Do not edit below this line
module.exports = fibonacci;
