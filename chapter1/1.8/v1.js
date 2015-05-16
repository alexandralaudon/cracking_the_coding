var isSubstring = function (str1, str2) {
  var string1 = str1.split("").sort();
  var string2 = str2.split("").sort();

  for (var i = 0; i < string1.length; i++){
    if(string1[i] !== string2[i]) return false;
  }
  return true;
};

console.log(isSubstring("hello", "ohell"));
