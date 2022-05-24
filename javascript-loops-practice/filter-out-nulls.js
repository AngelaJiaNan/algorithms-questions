/* exported filterOutNulls */
function filterOutNulls(values) {
  var results = [];
  for ( let i = 0; i < values.length; i ++) {
    if ( values[i] != null) {
      results.push(values[i]);
    }
  }
  return results;
}
