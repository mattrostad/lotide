// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

function tail(array){
  return array.slice(1)
}

// TEST CODE


const result1 = tail([5,6,7])
assertEqual(result1[0], 6) 
assertEqual(result1[1], 7) 
assertEqual(result1.length, 2) 