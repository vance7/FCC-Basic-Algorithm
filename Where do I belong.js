
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var lowest = 0;
  arr.sort(function(a,b){
    return a-b;
  });
  for(var i = 0; i < arr.length; i ++){
    if(num>arr[i]) lowest = i+1; 
  }
  return lowest;
}

getIndexToIns([10, 20, 30, 40, 50], 30);

