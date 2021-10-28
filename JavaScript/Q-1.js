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
