const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
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

module.exports = eqObjects;
