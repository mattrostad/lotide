const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
      }
    };

module.exports = assertArraysEqual;


const map = function(array, callback) {
  const results = [];
  for (word of array){
    results.push(callback(word))
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


//const cats = ["brown, orange, black, white"];


