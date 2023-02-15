const testScores = [80, 88, 90, 77, 81, 66]

const takeUntil =  function(array, callback){
const results = []
  for (const value of array){
console.log("results are:", results);
console.log("value is :", value);
    if (callback(value)){
      console.log("Value did not pass the criteria")
      break;
    } else {
      console.log("Value did pass the criteria")
      results.push(value)
    }
  }
  return results
}


const passingScores = takeUntil(testScores, x => x < 70);

console.log(passingScores)


const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
      }
    };

assertArraysEqual(passingScores, [80,88,90,77,81])