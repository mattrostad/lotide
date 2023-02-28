const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // Get rid of  spaces and joins together
  sentence = sentence.split(" ").join("").split("");

  // i == index, v == value
  for (const [i, v] of sentence.entries()) {
    if (results[v]) {
      results[v].push(i);
    } else {
      results[v] = [i];
    }
  }
  return results;
};

module.exports = letterPositions