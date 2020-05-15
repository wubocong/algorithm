/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
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
// @lc code=end

