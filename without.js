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

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));


/*const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/

//assertArraysEqual(without([1 ,2, 3], [1]));



