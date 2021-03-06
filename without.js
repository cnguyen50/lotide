const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(sourceArr, itemsToRemove) {
  let newArr = sourceArr;
  for (let i = 0; i < newArr.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (sourceArr[i] === itemsToRemove[x]) {
        newArr.splice(i, 1)
      }
    }
  }
  return newArr;
};


module.exports = without;

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
/*const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/

//assertArraysEqual(without([1 ,2, 3], [1]));



