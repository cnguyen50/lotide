
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObject'); 


const assertObjectsEqual = function(actualObj, expectedObj) {
  const inspect = require('util').inspect;
  if (eqObjects(actualObj, expectedObj)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
  }
};

module.exports = assertObjectsEqual;
