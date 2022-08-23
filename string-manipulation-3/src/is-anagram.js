/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const splitString = firstString.replaceAll(' ', '').split('');
  const sortString = splitString.sort().join('');
  const secondStringSplit = secondString.replaceAll(' ', '').split('').sort().join('');
  return sortString === secondStringSplit;
}
