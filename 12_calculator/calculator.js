const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr[0] == undefined) {
    return 0
  }
  return arr.reduce((total, value) => {
    return total + value;
  });
};

const multiply = function (arr) {

  return arr.reduce((total, value) => {
    return total * value;
  });
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  // Handle negative numbers (optional)
  if (n < 0) {
    return -1; // Or throw an error
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

sum([])

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
