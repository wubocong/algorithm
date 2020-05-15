/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const solution = [];
  const len = nums.length;
  if (len > 0) {
    const combination = [];
    function recursive(unusedCount = len) {
      if (unusedCount === 0) solution.push([...combination]);
      for (let i = 0; i < len; i++) {
        if (nums[i] === false) continue;
        const tmp = nums[i];
        nums[i] = false;
        combination.push(tmp);
        recursive(unusedCount - 1);
        nums[i] = tmp;
        combination.pop();
      }
    }
    recursive();
  }
  return solution;
};
// @lc code=end
