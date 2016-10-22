
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var lastStr = str.charAt(str.length-1);
  var i = str.length-1;
  while(i>=0&&str.charAt(i)!==" "){
    if(lastStr === target)return true;
    else{
      lastStr = str.slice(--i,str.length);
    }
  }
  return false;
}

confirmEnding("Bastian", "n");

