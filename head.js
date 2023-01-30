// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

function head(array){
  return array[0]
}

// TEST CODE



assertEqual(head([5,6,7]), 5)
assertEqual(head([10,11,12]), 11)