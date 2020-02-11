const assertEqual = require('./assertEqual');


const countLetters = function(string) {
  const result = {};
  for (let char of string) {
    if (!result[char]) {
      result[char] = 0;
    }
    result[char] += 1;
  }
  return result;
};

module.exports = countLetters;


