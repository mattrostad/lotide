const assertEqual = require('./assertEqual');
//this function takes in 2 arrays and returns true if same or false if not

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false
    }
  } 
  return true;
};

module.exports = eqArrays;
