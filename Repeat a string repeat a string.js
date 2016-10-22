
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<=0) return "";
  else{
      var result = str;
      for ( var i = 0; i < num-1; i ++){
          result +=str;
      }
      return result;
   }
}

repeatStringNumTimes("abc", 3);

