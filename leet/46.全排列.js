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
  if (nums.length > 0) {
    function recursive(unused = Array.from(nums), arr = []) {
      const len = unused.length;
      if (len === 0) solution.push(arr);
      for (let i = 0; i < len; i++) {
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
