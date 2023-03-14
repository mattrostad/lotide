const {eqObjects} = require('./index.js')

const assertObjectsEqual = function(actual, expected) {
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