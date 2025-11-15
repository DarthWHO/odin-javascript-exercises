const sumAll = function (first, second) {
  let newFirst = first;
  let newSecond = second;
  let total = 0;

  if (first > second) {
    newFirst = second;
    newSecond = first;
  }

  if (
    newFirst < 0 ||
    newSecond < 0 ||
    !Number.isInteger(newFirst) ||
    !Number.isInteger(newSecond)
  ) {
    return "ERROR";
  }

  if (newFirst === newSecond) {
    return newFirst + newSecond;
  }

  while (newFirst <= newSecond) {
    total += newFirst
    newFirst++
  }

  return total

};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
