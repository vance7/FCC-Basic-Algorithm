function reverseString(str) {
  var arrOfstr = str.split("");
  console.log(arrOfstr);
  var arrOfresult = arrOfstr.reverse();
  var result = arrOfresult.join("");
  return result;
}

reverseString("hello");

