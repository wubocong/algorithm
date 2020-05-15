/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var max = 0;
  var i = 0,
    j = height.length - 1;
  while (i < j) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) i += 1;
    else j -= 1;
  }
  return max;
};
// @lc code=end
