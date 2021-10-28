/* Q. Complete the function that takes a non-negative integer, and returns a list of nonnegative integer pairs whose values - when squared - sum to the given integer.
For example, given the parameter 25, the function should return the two pairs [0,
5] and [3, 4] because 0^2 + 5^2 = 25 and 3^2 + 4^2 = 25.
Return the pairs in ascending order, so e.g. [[0, 5], [3, 4]] not [[5, 0], [3,
4]] or [[3, 4], [0, 5]], etc.
If the given value cannot be expressed as the sum of two squares, return an empty
array.
Note: The upper bound of the parameter value will be 2,147,483,647

Solution. */

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
