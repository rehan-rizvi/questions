function allSquaredPairs(num = 0) {
  const result = [], UPPER_BOUND = 2147483647;
  if (Number.isInteger(num) || num > -1 || num < UPPER_BOUND) {
   const squareRoot = Math.floor(Math.sqrt(num));
    for (let i = 0; i <= squareRoot; i++) {
      for (let j = i; j <= squareRoot ; j++) {
        if ((i*i) + (j*j) === num) {
          result.push([i, j]);
          break;
        }
      }
    } 
  }
  return result;
}
