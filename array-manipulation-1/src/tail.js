/* exported tail */
function tail(array) {
  let result = [];
  for ( let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

// another Soultion :
// function tail(array) {
//   return array.splice(1);
// }
