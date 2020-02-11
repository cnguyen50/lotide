const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let x = 0; x < arr[i].length; x++) {
        newArr.push(arr[i][x]);
      }
    } else {
      newArr.push(arr[i]);
     
    }
    return newArr;
  }
};

module.exports = flatten;

// console.log(flatten([1, [2], [3, 4, 5, 6]]));