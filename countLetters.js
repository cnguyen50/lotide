const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(string) {
  const values = {};
  for (let char of string) {
    if (!values[char]) {
      values[char] = 0;
    }
    values[char]++;
  }
  return values;
} 


  
console.log(countLetters('LHL'));