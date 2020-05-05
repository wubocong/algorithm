/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = len - 1; j > i; j--) {
        if (nums[i] < nums[j]) {
          let t = nums[i];
          nums[i] = nums[j];
          nums[j] = t;
          reverse(nums, i + 1, len - 1);
          return;
        }
      }
    } else if (i === 0) {
      nums.sort((a, b) => a - b);
      return;
    }
  }
};
function reverse(arr, start, end) {
  while (start < end) {
    const t = arr[start];
    arr[start] = arr[end];
    arr[end] = t;
    start++;
    end--;
  }
}
// @lc code=end
