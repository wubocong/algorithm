/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const solution = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  if (len > 0) {
    const combination = [];
    function recursive(unusedCount = len) {
      if (unusedCount === 0) solution.push([...combination]);
      for (let i = 0; i < len; i++) {
        if (nums[i] === false || (i > 0 && nums[i] === nums[i - 1])) continue;
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
