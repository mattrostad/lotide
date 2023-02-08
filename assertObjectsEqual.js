const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const [k, v] of Object.entries(object1)) {
      if (Array.isArray(v)) {
        if (!eqArrays(v, object2[k])) {
          return false;
        }
      } else if (object2[k] !== v) {
        return false;
      }
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
   // Implement me!
   const inspect = require('util').inspect;
   if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
};

let a1 = {a: 1, b: 2};
let a2 = {a: 1, b: 2};
let b1 = {a: 2, b: 3};

assertObjectsEqual(a1, a2); // true
assertObjectsEqual(a1, b1); // false