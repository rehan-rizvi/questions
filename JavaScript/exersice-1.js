/* Q. ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The
last digit can be 0-9 or X, to indicate a value of 10.
An ISBN-10 number is valid if the sum of the digits multiplied by their position
modulo 11 equals zero.
For example:
ISBN : 1 1 1 2 2 2 3 3 3 9
position : 1 2 3 4 5 6 7 8 9 10
This is a valid ISBN, because:
(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

Solution: */

function validISBN10(isbn = '') {
  if (isbn.length !== 10) return false;
  let isValid = false, isbnSummation = 0;
  isbn.split('').every((item, index, arr) => {
    const position = index + 1, isItemString = isNaN(item);
    if (
      isItemString &&
      item.toLowerCase() === 'x' &&
      position !== 10
     ) return false;
    isbnSummation += (item.toLowerCase() === 'x' ? 10 : +item) * position;
    if (arr.length === position) {
      isValid = isbnSummation % 11 === 0;
    }
    return true;
  });
  
  return isValid;
}