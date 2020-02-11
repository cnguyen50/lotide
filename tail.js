const assertEqual = require('./assertEqual');

const tail = function(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};

module.exports = tail;


//(tail(["Hello", "Lighthouse", "Labs"]));

// assertEqual(result, ["Lighthouse", "Labs"]);



