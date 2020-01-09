const eqArrays = function(array1, array2) {
  let arrayEq = "";
  for (let i = 0; i < array1.length; i++) {
    for (let x = 0; x < array2.length; x++) {
      if (array1[i] === array2[x]) {
        arrayEq = true;
      } else {
        arrayEq = false;
      }
    }
  } return arrayEq;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
    return true;
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
};

const middle = function(numOfArray) {
  let output = [];
  if (numOfArray.length % 2 !== 0) {
    output.push(Math.ceil(numOfArray.length / 2));
  } else {
    output.push(numOfArray.length / 2);
    output.push(numOfArray.length / 2 + 1);
  }
  return output;
};

//middle([1, 2, 3, 4, 5, 6]), [3, 4]); => [3,4]
