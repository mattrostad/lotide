const takeUntil =  function(array, callback){
const results = []
  for (const value of array){
console.log("results are:", results);
console.log("value is :", value);
    if (callback(value)){
      console.log("Value did not pass the criteria")
      break;
    } else {
      console.log("Value did pass the criteria")
      results.push(value)
    }
  }
  return results
}

module.exports =  takeUntil