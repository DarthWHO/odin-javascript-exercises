function round(value) {
  if (Number.isInteger(value)) {
    return value
  }
  return parseFloat(value.toFixed(1))
}

const convertToCelsius = function (temp) {
  const converted = (temp - 32) * (5 / 9);
  return round(converted);
};

const convertToFahrenheit = function (temp) {
  const converted = (temp * 9/5) + 32;
  return round(converted)
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
