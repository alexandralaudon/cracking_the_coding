var stringCount = function(oldString){

  var oldArray = oldString.split("");
  var i = 0;
  var newArray = [oldArray[i]];
  var finalValue,
      recursiveValue;

  while(oldArray[i] === oldArray[i+1]){
    newArray.push(oldArray[i]);
    i++;
  }

  finalValue = newArray[0] + newArray.length;
  recursiveValue = oldArray.slice(newArray.length).join("");

  if (recursiveValue === "") return finalValue;

  return finalValue + stringCount(recursiveValue);

};

console.log(stringCount("aaabbbbbcaa"));
