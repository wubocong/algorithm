/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let lo = 0,
    hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return true;
    if (nums[mid] === nums[lo]) {
      lo++;
      continue;
    }
    if (nums[lo] < nums[mid]) {
      if (target > nums[mid] || target < nums[lo]) lo = mid + 1;
      else hi = mid - 1;
    } else {
      if (target < nums[mid] || target > nums[hi]) hi = mid - 1;
      else lo = mid + 1;
    }
  }
  return false;
};
// @lc code=end
