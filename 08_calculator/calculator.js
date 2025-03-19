const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	let sum = arr.reduce(add)

  function add(tot, num) {
    return tot + num;
  }

  return sum
};

const multiply = function(arr) {
  let prod = arr.reduce(multi)

  function multi(tot, num) {
    return tot * num;
  }

  return prod
};

const power = function(num1, num2) {
	let prod = Math.pow(num1, num2)

  return prod
};

const factorial = function(num) {
	let result = num

  if (num === 0 || num === 1) {
    result = 1
  } 

  while (num > 1) {
    num--
    result *= num
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
