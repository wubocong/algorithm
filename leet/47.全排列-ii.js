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
  if (nums.length > 0) {
    function recursive(unused = Array.from(nums), arr = []) {
      const len = unused.length;
      if (len === 0) solution.push(arr);
      for (let i = 0; i < len; i++) {
        if (i > 0 && unused[i] === unused[i - 1]) continue;
        const newUnused = Array.from(unused);
        newUnused.splice(i, 1);
        const newArr = Array.from(arr);
        newArr.push(unused[i]);
        recursive(newUnused, newArr);
      }
    }
    recursive();
  }
  return solution;
};
// @lc code=end
