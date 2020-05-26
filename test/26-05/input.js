// sort the set of numbers
// Get the index of the middle number by dividing the last index of the set by two: <last index> / 2
// If the resulting index is a whole number (e.g. 7) then the median of the set is the value in that index.
// Otherwise (if num is a fraction, e.g. 7.5) then the median is calculated by adding the two values in the indexes
//around it (for 7.5 it would be 7, and 8 ) and dividing them by two.
const myArry = [1, 2, 3, 4, 5, 6, 8, 9];
function mid(arr) {
  const myArry = arr.sort((a, b) => a - b);
  const dividNumber = (myArry.length - 1) / 2;

  if (dividNumber % 2 == 0) {
    console.log(myArry[dividNumber]);
  } else {
    // console.log(Math.floor(dividNumber) + Math.ceil(dividNumber));
    console.log(
      (myArry[Math.floor(dividNumber)] + myArry[Math.ceil(dividNumber)]) / 2
    );
  }
}
mid(myArry);
