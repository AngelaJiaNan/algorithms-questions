/* exported isPalindromic */
function isPalindromic(string) {
  const splitSting = string.split('');
  const reversedSting = splitSting.reverse();
  const joinArray = reversedSting.join('').split(' ').join('');
  return string.split(' ').join('') === joinArray;
}
