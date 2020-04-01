/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  const obj = {}
  for (let i = A.length - 1; i >= 0; i--) {
    if (obj[A[i]]) {
      return A[i];
    }
    else {
      obj[A[i]] = true;
    }
  }
};