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

//Create a function flatten which will take in an array containing elements 
//including nested arrays of elements, and return a "flattened" version of the array.


const flatten = function(array){
  let flattenedArray = [];
  
  for(let element of array){
    if(Array.isArray(element)){
      for(let item of element){
        flattenedArray.push(item);
      }
    }else{
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]));

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]