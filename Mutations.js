
function mutation(arr) {
  var str = arr[0].toLowerCase().split('');
  var match = arr[1].toLowerCase().split('');
  return match.every(function(char){
    return str.indexOf(char) !== -1;
  });
}

mutation(["hello", "hey"]);


