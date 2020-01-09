const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};



const findKeyByValue = function(object, value) {
  let findKey = "";
  let keyOfObject = Object.keys(object);
  for (let i = 0; i < keyOfObject.length; i++) {
    if (object[keyOfObject[i]] === value) {
      findKey = keyOfObject[i];
    } else {
      findKey = undefined;
    }
  }
  return findKey;
};

const bestTvShowByGenre = {
  sciFi: 'The Expanse',
  comdey: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};


assertEqual(findKeyByValue(bestTvShowByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTvShowByGenre, 'Thats 70s Show'), undefined);