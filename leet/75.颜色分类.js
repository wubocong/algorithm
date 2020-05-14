/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zero = 0,
    two = nums.length,
    i = 0;
  while (i < two) {
    if (nums[i] === 0) {
      if (i !== zero) {
        const temp = nums[i];
        nums[i] = nums[zero];
        nums[zero] = temp;
      }
      i++;
      zero++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      two--;
      if (nums[two] !== 2) {
        const temp = nums[i];
        nums[i] = nums[two];
        nums[two] = temp;
      }
    }
  }
};
// @lc code=end
