const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // this will check every element in the arr to check if it is the same and return false if not.
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}.`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // Get rid of facking spaces and joins together
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

console.log(letterPositions('lighthouse rules'));

assertArraysEqual(letterPositions('lighthouse rules').e, [9, 13]);