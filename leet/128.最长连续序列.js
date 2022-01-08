/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const visited = {};
  let max = 0;
  nums.forEach((val) => {
    visited[val] = false;
  });
  for (let i = 0; i < nums.length; i++) {
    if (visited[nums[i]]) continue;
    let left = nums[i] - 1;
    while (visited[left] === false) {
      visited[left] = true;
      left--;
    }
    let right = nums[i] + 1;
    while (visited[right] === false) {
      visited[right] = true;
      right++;
    }
    if (right - left - 1 > max) max = right - left - 1
  }
  return max;

};
// @lc code=end

