function solution(statues) {
  let solutions = 0;
  let orderedStatues = statues.sort();
  console.log(orderedStatues);
  // [2,3,6,8]
  // i = 2, end 8
  // 2,3,4,5,6,7,8
  // is 2 in the array, move on
  // ...
  // is 4 in the array, its not so add +1 to solutions
  for (let i = orderedStatues[0]; i < orderedStatues[orderedStatues.length - 1]; i++) {
    if (!orderedStatues.includes(i)) {
      solutions++
    }
    console.log(i);
  }
  return solutions;
}
