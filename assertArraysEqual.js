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
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${array2}`);
    return false
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 3]), false);

//eqArrays([1, 2, 3], [1, 2, 3]), true
//eqArrays([1, 2, 3], [3, 2, 3]), false

//Functions that do not return values and instead print out messages to the console are more difficult to test using assertions. This is because we cannot simply compare their return value to an expected value/