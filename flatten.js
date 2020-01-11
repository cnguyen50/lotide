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

console.log(flatten([1, [2], [3, 4, 5, 6]]));