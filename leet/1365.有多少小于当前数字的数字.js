/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const count = [];
  const smaller = [0];
  const len = nums.length;
  let max = 0;
  for (let i = len - 1; i >= 0; i--) {
    count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;
    if (nums[i] > max) max = nums[i]
  }
  for (let i = 1; i <= max; i++) {
    if (!count[i - 1]) count[i - 1] = 0;
    smaller[i] = smaller[i - 1] + count[i - 1];
  }
  const solution = [];
  for (let i = 0; i < len; i++) {
    solution.push(smaller[nums[i]]);
  }
  return solution;
};
// @lc code=end

