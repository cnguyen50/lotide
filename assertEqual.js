const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

module.exports = assertEqual;

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// head([5,6,7]), 5;
// head(["Hello", "Lighthouse", "Labs"]), "Hello";