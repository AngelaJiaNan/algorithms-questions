/* exported reverseWords */
function reverseWords(string){
  const newWord =[];
  const reversed = string.split(' ');
  for(let i=0; i < reversed.length; i++) {
    reversed[i].split('').reverse().join('');
    newWord.push(reversed[i].split('').reverse().join(''));
  }
  return newWord.join(' ');
}
