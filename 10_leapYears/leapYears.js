const leapYears = function(year) {
    let isLeapYear = false;

    if (year % 4 !== 0) {
        return isLeapYear;
    } else if (year % 100 == 0 && year % 400 == 0) {
        isLeapYear = true;
        return isLeapYear;
    } else if (year % 100 == 0) {
        isLeapYear = false;
        return isLeapYear
    } 
    else {
        isLeapYear = true;
        return isLeapYear;
    }
};

console.log(leapYears(700))
console.log(leapYears(1985))
// Do not edit below this line
module.exports = leapYears;
