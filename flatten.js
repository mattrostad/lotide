const eqArrays = require('./eqArrays');

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

console.log(flatten([1, 2, [3, 4], 5, [6]]))
module.exports = flatten;