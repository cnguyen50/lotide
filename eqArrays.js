const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

eqArrays([1, 2, 3], [1, 2, 3]); //true
eqArrays([1, 2, 3], [3, 2, 1]); // false
eqArrays(["1", "2", "3"], ["1", "2", "3"]);//true

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));