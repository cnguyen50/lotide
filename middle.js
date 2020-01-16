const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');




const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) { 
    return [arr[Math.floor(arr.length / 2)]];
  } else { 
    return [arr[arr.length / 2] - 1, arr[arr.length / 2]];
  }
};

module.exports = middle;

//middle([1, 2, 3, 4, 5, 6]), [3, 4];