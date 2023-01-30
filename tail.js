// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

function tail(array){
  return array[2]
}

// TEST CODE



assertEqual(tail([5,6,7]), 7)
assertEqual(tail([10,11,12]), 12)