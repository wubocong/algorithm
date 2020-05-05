/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0,
    hi = nums.length - 1;
  if (hi === 0) return nums[0] === target ? 0 : -1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    if (nums[lo] === target) return lo;
    if (nums[hi] === target) return hi;
    if (target > nums[mid]) {
      if (nums[mid] > nums[lo]) lo = mid + 1;
      else if (target > nums[hi]) hi = mid - 1;
      else lo = mid + 1;
    } else {
      if (nums[mid] < nums[hi]) hi = mid - 1;
      else if (target < nums[lo]) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  return -1;
};
// @lc code=end
