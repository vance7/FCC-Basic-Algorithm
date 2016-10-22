
function factorialize(num) {
  if(num === 0) return 1;
  else{
      var result = num;
      for(var i = num-1;i>0;i--){
        result *=i;
      }
      return result;
  }
}

factorialize(5);

