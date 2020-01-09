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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === false) {
    return console.log(`🛑 🛑 🛑 Assertion Failed: ${[arr1]} !== ${[arr2]}`);
  }
  return console.log(`✅ ✅ ✅ Assertion Passed: ${[arr1]} === ${[arr2]}`);
};

//Functions that do not return values and instead print out messages to the console are more difficult to test using assertions. This is because we cannot simply compare their return value to an expected value//



