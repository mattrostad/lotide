const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const middle = function(array) {
  const returnArray = [];

  if (array.length > 2) {
    let middle = array.length / 2 - 1;
    if (array.length % 2 !== 0) {
      //console.log(middle);
      returnArray.push((array[Math.ceil(middle)]));
    } else {
      returnArray.push(array[middle], array[middle + 1]);
    }
    return returnArray;
  } else {
    return [];
  }
};

console.log(middle([1,2,3,4,5,6,7]))

module.exports = middle;