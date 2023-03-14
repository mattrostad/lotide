const middle = function (array) {
  if (array.length < 2) {
    return array[0];
  } else if (array.length % 2 !== 0) {
    return array[Math.floor(array.length / 2)];
  } else {
    let result = []
    result.push(array[(array.length / 2) -1])
    result.push(array[(array.length / 2)])
    return result
  }
};

module.exports = middle;