const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// let convert = words.map(x => x.length)
// console.log(convert); // [ 6, 7, 2, 5, 3 ]
// assertArraysEqual(convert, [ 6, 7, 2, 5, 3 ])
// const words = ["ground", "control", "to", "major", "tom"];
