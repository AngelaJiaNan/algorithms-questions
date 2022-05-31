/* exported getKeys */
function getKeys(object) {
  const keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}
