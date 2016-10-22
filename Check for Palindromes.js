
function palindrome(str) {
  // Good luck!
  var pal = str.split('').reverse().join('').toLowerCase().replace(/[\W_]/g, '');
  return pal == str.toLowerCase().replace(/[\W_]/g, '');
}



palindrome("Eye");


