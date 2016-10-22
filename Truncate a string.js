
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var result = str;
  if(num<=3){
    return result.slice(0,num)+"...";
  }
  else if (num>3&&num<str.length){
    return result.slice(0,num-3)+"...";
  }
  else{
    return result;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

