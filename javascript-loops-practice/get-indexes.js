/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  for ( let i = 0; i < array.length; i ++) {
    indexes.push(i);
    console.log(i);
  }
  return indexes;
}
