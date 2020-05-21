/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len <= 2) return len;
  let l = 1,
    r = 2;
  while (r < len) {
    if (nums[l - 1] === nums[r]) r++;
    else nums[++l] = nums[r++];
  }
  nums.length = l + 1;
  return l + 1;
};
// @lc code=end
