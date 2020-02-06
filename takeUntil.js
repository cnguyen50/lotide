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



const takeUntil = function(array, callback) {
  const result = [];
  for (const el of array) {
    if (callback(el)){
      return result;
    } else {
      result.push(el);
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);// [ 1, 2, 5, 7, 2 ]

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
