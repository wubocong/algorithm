/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length;
  let pos = len - 1;
  for (i = pos - 1; i >= 0; ) {
    if (pos - i <= nums[i]) {
      pos = i;
      i = pos - 1;
    } else {
      i--;
    }
  }
  return pos === 0;
};
// @lc code=end
