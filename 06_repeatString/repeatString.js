const repeatString = function (string, num) {
  if (num == 0) {
    return "";
  }
  if (num >= 1) {
    let newString = string
    for (let i = 1; i < num; i++) {
      newString += string;
    }
    return newString;
  } else {
    return "ERROR";
  }
};
console.log(repeatString("hey", 2));

// Do not edit below this line
module.exports = repeatString;
