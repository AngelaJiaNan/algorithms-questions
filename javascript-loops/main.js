/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber = currentNumber +1;
  }
  return numbers;
}
var res = getNumbersToTen();
console.log('getNumbersToTen()', res);

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber = currentNumber +2;
  }
  return evenNumbers;
}
var result = getEvenNumbersToTwenty();
console.log('getEvenNumbersToTwenty()', result);

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count = count +1;
  }
  return repeated;
}

var word = repeatWord('math', 10);
console.log('repeatWord()', word);

function logEachCharacter(string) {
  for (var i =0; i < string.length; i++) {
    console.log(string[i]);
  }
}

logEachCharacter('Trevor');

function doubleAll(numbers) {
  var doubled = [];
  for (var i=0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

var numbers = doubleAll([3,5,7,9]);
console.log('doubleAll([3,5,7,9])', numbers);

function getKeys(object) {
  var keys = [];
  for (key in object) {
    keys.push(key);
  }
  return keys;
}
var key = getKeys({ name: 'Angela', title: '24 hours'});
console.log('getKeys(object)', key);
