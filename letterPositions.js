const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
for (let index = 0; index < sentence.length; index++) {
  const letter = sentence[index];
  if(letter !== " "){
    if(!results[letter]){
      results[letter] = [index]
    }
    else {
      results[letter].push(index)
    }
  }
}
  return results;
};

module.exports = letterPositions