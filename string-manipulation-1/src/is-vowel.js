/* exported isVowel */
function isVowel(char) {
  let vowel = ['a','e', 'i', 'o', 'u'];
  let lowerCaseLetter = char.toLowerCase();
  return vowel.includes(lowerCaseLetter);
}
