/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
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
// @lc code=end

