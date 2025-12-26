const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let arrSum = arr.reduce((sum, current) => {
    return sum + current;
  }, 0)
  return arrSum;
};

const multiply = function(arr) {
  let arrMultiply = arr.reduce((result, current) => {
    return result * current;
  }, 1)
  return arrMultiply;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  
  // if (num == 0) return 1;
  // let result = 1
  // for (i = num; i >= 1; i--) {
  //   result *= i
  // }
  // return result;

  // OR...

  if (num == 0 || num == 1) return 1;
  let result = 1;
  for (i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
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
