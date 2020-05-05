/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const solution = [];
  const len = candidates.length;
  if (len > 0) {
    candidates.sort((a, b) => a - b);
    function recursive(index = 0, arr = [], sum = 0) {
      for (let i = index + 1; i < len; i++) {
        if (i > index + 1 && candidates[i] === candidates[i - 1]) continue;
        const newArr = Array.from(arr);
        const newSum = sum + candidates[i];
        if (newSum <= target) {
          newArr.push(candidates[i]);
          if (newSum === target) return solution.push(newArr);
          else recursive(i, newArr, newSum);
        } else break;
      }
    }
    recursive(-1);
  }
  return solution;
};
// @lc code=end
