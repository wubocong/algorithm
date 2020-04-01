/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  const arr = [];
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] % 2) {
      arr.push(A[i]);
    } else {
      arr.unshift(A[i]);
    }
  }
  return arr;
};