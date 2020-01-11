const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } return true; 
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    
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
