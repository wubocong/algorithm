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
    const combination = [];
    function recursive(index = 0, sum = 0) {
      for (let i = index; i < len; i++) {
        const newSum = sum + candidates[i];
        if (newSum <= target) {
          combination.push(candidates[i]);
          if (newSum === target) {
            solution.push([...combination]);
            combination.pop();
            return;
          } else {
            recursive(i, newSum);
            combination.pop();
          }
        } else break;
      }
    }
    recursive();
  }
  return solution;
};
// @lc code=end
