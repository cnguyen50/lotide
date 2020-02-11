const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const middle = function(arr) {
  const mid = arr.length / 2;
  if (arr.length <= 2) {
    return [];

  } else if (arr.length % 2 === 1) { 
    return [arr[Math.floor(mid)]];

  } else { 
    return [arr[mid] - 1, arr[mid]];
  }
};

module.exports = middle;

//console.log(middle([1, 2, 3, 4, 5, 6]))//outputs [3, 4];