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



const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) { // for Odd
    return [arr[Math.floor(arr.length / 2)]];
  } else { // for even
    return [arr[arr.length / 2] - 1, arr[arr.length / 2]];
  }
};

console.log(middle([1, 2, 3, 4, 5, 6]), [3, 4]);