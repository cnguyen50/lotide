const assertEqual = require('./assertEqual');

const bestTvShowByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

const findKeyByValue = function(object, show) {
let resultKey = "";

  for (const [key, value] of Object.entries(object)) {
    if (show !== value) {
      resultKey = undefined;
    } else {
      return resultKey = key;
    }
  }
  return resultKey;
};

module.exports = findKeyByValue;

// console.log(findKeyByValue(bestTvShowByGenre, 'The Wire'))
// console.log(findKeyByValue(bestTvShowByGenre, 'The Expanse'))
// console.log(findKeyByValue(bestTvShowByGenre, 'Brooklyn Nine-Nine'))


// assertEqual(findKeyByValue(bestTvShowByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTvShowByGenre, 'Thats 70s Show'), undefined); //both pass

