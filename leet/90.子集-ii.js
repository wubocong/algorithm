/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const solution = [];
  const subset = [];
  function recursive(index = 0) {
    solution.push([...subset]);
    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;
      subset.push(nums[i]);
      recursive(i + 1);
      subset.pop();
    }
  }
  recursive();
  return solution;
};
// @lc code=end
