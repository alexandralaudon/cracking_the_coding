var stringCount = function(oldString){
  var oldArray = oldString.split("");
  console.log(oldArray);
  var newArray = [];
  var count = 0;

  for (var i = 0; i <= oldArray.length; i++){
    if (oldArray[i-1] !== oldArray[i] && oldArray[i-1] !== undefined){
      newArray.push(oldArray[i-1]);
      newArray.push(count);
      count = 0;
    }
    count++;
  }
  return newArray.join("");
};

console.log(stringCount("aaabbbbbcaa"));
