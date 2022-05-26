/* exported reverse */
function reverse(array) {
  var updatedArray = [];
  for ( let i = array.length - 1; i >= 0; i--){
    updatedArray.push(array[i]);
  }
  return updatedArray;
}
