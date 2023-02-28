const findKeyByValue = function(obj, showName) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === showName) {
      return key;
    }
  }
};

module.exports = findKeyByValue