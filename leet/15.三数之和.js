/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const rst = [];

  const last2sum = nums[len - 2] + nums[len - 1];
  const last3sum = nums[len - 3] + last2sum;
  if (last3sum === 0) rst.push([nums[len - 3], nums[len - 2], nums[len - 1]]);
  else if (len >= 3 && last3sum > 0) {
    for (let i = 0; i < len - 2; i++) {
      if (i && nums[i] === nums[i - 1]) continue;

      if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
      if (nums[i] + nums[i + 1] + nums[i + 2] === 0) {
        rst.push([nums[i], nums[i + 1], nums[i + 2]]);
        break;
      }
      if (nums[i] + last2sum < 0) continue;
      if (nums[i] + last2sum === 0) {
        rst.push([nums[i], nums[len - 2], nums[len - 1]]);
        continue;
      }

      let start = i + 1,
        end = len - 1;
      while (start < end) {
        const sum = nums[i] + nums[start] + nums[end];
        if (sum > 0) {
          while (start < end && nums[end] === nums[--end]) {}
        } else if (sum < 0) {
          while (start < end && nums[start] === nums[++start]) {}
        } else {
          rst.push([nums[i], nums[start], nums[end]]);
          while (start < end && nums[start] === nums[++start]) {}
          while (start < end && nums[end] === nums[--end]) {}
        }
      }
    }
  }
  return rst;
};
// @lc code=end
