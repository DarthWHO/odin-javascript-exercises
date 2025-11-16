const reverseString = function (string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

const palindromes = function (phrase) {
  const charsToIgnore = [" ", ",", ".", "?", "!"];
  const phraseArray = phrase.split("");
  const cleaned = phraseArray.filter((char) => !charsToIgnore.includes(char));

  const cleanedString = cleaned.join("").toLowerCase();
  if (cleanedString == reverseString(cleanedString)) {
    return true;
  } else return false;
};

console.log(palindromes("r3ace3car"));
console.log(palindromes("tacos"));

// Do not edit below this line
module.exports = palindromes;
