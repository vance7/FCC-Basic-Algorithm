
function largestOfFour(arr) {
  // You can do this!
  var largestArr = [];
  for(var i = 0; i < arr.length;i++){
    var largestNum = arr[i][0];
    for (var j = 1;j < arr[i].length;j++ ){
      largestArr[i] = largestNum;
      if(arr[i][j]>largestNum){
        largestNum = arr[i][j];
        largestArr[i] = largestNum;
      }
    }
  }
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

