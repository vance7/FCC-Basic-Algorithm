
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if(howMany > arr.length) return [];
  else if (howMany === 0) return arr;
  else{
    return arr.slice(howMany,arr.length);
  }
  return arr;
}

slasher([1, 2, 3], 2);

