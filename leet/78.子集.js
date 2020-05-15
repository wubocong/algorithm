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
  const combination = [];
  function recursive(index = 0) {
    if (index === len) {
      solution.push([...combination], [...combination, nums[index]]);
    } else {
      recursive(index + 1, combination);
      combination.push(nums[index]);
      recursive(index + 1, combination);
      combination.pop();
    }
  }
  recursive();
  return solution;
};
// @lc code=end
