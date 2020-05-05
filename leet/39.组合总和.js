/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const solution = [];
  const len = candidates.length;
  if (len > 0) {
    candidates.sort((a, b) => a - b);
    function recursive(index = 0, arr = [], sum = 0) {
      for (let i = index; i < len; i++) {
        const newArr = Array.from(arr);
        const newSum = sum + candidates[i];
        if (newSum <= target) {
          newArr.push(candidates[i]);
          if (newSum === target) return solution.push(newArr);
          else recursive(i, newArr, newSum);
        } else break;
      }
    }
    recursive();
  }
  return solution;
};
// @lc code=end
