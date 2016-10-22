
function findLongestWord(str) {
  var arr = str.split(" ");
  var maxlength =0;
  for(var i =0; i < arr.length; i ++){
    if(arr[i].length>maxlength){
      maxlength = arr[i].length;
    }
  }
  return maxlength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

