const findKeyByValue = function(obj, showName) {
  for (const key in obj) {
    if (obj[key] === showName) {
      return key;
    }
  }
};


//Test cases

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
//outputs: sci_fi

module.exports = findKeyByValue