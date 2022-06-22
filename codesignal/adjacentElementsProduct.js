function solution(inputArray) {
  let max = -100;
  for (var i = 0; i < inputArray.length - 1; i++) {
    const currentProduct = inputArray[i] * inputArray[i + 1];
    if (currentProduct > max) {
      max = currentProduct;
    }
  }
  return max;
}
