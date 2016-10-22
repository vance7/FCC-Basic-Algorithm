
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word){
    return word.replace(/(\w)/,(match, p1)=> p1.toUpperCase());
  }).join(' ');
}

titleCase("I'm a little tea pot");


