const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPostions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i); //create new obj and push element as value

    } else if (sentence[i] === " ") {
      [sentence[i]].slice(" ");

    } else {
      results[sentence[i]] = [i];
    }
  }
  return results; //put value in array as obj
};

module.exports = letterPostions;

// console.log(letterPostions('lighthouse in the house'));
// assertArraysEqual(letterPostions("hello").e, [1]);

