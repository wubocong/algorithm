/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length;
  if (len === 1) return nums[0] === target ? [0, 0] : [-1, -1];
  function search(pos) {
    let start, end;
    if (nums[0] === target) start = 0;
    else
      for (let i = pos - 1; i >= 0; i--) {
        if (nums[i] !== target) {
          start = i + 1;
          break;
        }
      }
    if (nums[len - 1] === target) end = len - 1;
    else
      for (let i = pos + 1; i < len; i++) {
        if (nums[i] !== target) {
          end = i - 1;
          break;
        }
      }
    return [start, end];
  }
  let lo = 0;
  hi = len - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (target === nums[mid]) return search(mid);
    if (target === nums[lo]) return search(lo);
    if (target === nums[hi]) return search(hi);
    if (target < nums[mid]) hi = mid - 1;
    else lo = mid + 1;
  }
  return [-1, -1];
};

// @lc code=end
