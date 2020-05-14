/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const solution = [];
  const len = nums.length - 1;
  if (len === -1) return [[]];
  function recursive(index = 0, arr = []) {
    if (index === len) {
      solution.push(arr, [...arr, nums[index]]);
    } else {
      recursive(index + 1, arr);
      recursive(index + 1, [...arr, nums[index]]);
    }
  }
  recursive();
  return solution;
};
// @lc code=end
