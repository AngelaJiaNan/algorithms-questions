/* exported countdown */
function countdown(number) {
 var result = [];
 for (let i = number; i > -1; i--) {
   result.push(i);
 }
 return result;
}
