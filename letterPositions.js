//We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const countLetters = function(string) {
  const values = {}; 
  for (let char of string) { 
    if (!values[char]) { 
      values[char] = 0;
    }
    values[char]++; //
  }
  return values;
}


const letterPostions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
     results[sentence[i]].push(i);

    } else if (sentence[i] === " ") {
      [sentence[i]].slice(" ");

    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

console.log(letterPostions('lighthouse in the house'));
