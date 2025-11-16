const findTheOldest = function (people) {
  let oldestAge = 0;
  let oldestPerson = {}

  for (let person of people) {
    let age = 0;
    let currentYear = new Date().getFullYear();

    if (!person.yearOfDeath) {
      age = currentYear - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }

    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }
  }
  return oldestPerson;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
