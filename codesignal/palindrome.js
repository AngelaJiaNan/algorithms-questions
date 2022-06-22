function solution(inputString) {
  // 1. split the string into an array of letters
  // 2. reverse the array (the order of the letters)
  // 3. then take the array of letters into a string
  let reserveString = inputString.split('').reverse().join('');
  return reserveString === inputString;
  // console.log(reserveString);
}
