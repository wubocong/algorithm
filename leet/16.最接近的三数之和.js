/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let closest = nums[0] + nums[1] + nums[2];

  const last2sum = nums[len - 2] + nums[len - 1];
  const last3sum = nums[len - 3] + last2sum;
  if (last3sum <= target) closest = last3sum;
  else {
    for (let i = 0; i < len - 2; i++) {
      if (closest === target) {
        break;
      }

      if (i && nums[i] === nums[i - 1]) {
        continue;
      }

      if (nums[i] + nums[i + 1] + nums[i + 2] >= target) {
        if (
          Math.abs(nums[i] + nums[i + 1] + nums[i + 2] - target) <
          Math.abs(closest - target)
        )
          closest = nums[i] + nums[i + 1] + nums[i + 2];
        break;
      }

      if (nums[i] + last2sum <= target) {
        if (Math.abs(nums[i] + last2sum - target) < Math.abs(closest - target))
          closest = nums[i] + last2sum;
        continue;
      }

      let start = i + 1,
        end = len - 1;
      while (start < end) {
        const sum = nums[i] + nums[start] + nums[end];
        if (sum === target) {
          closest = target;
          break;
        } else {
          if (Math.abs(sum - target) < Math.abs(closest - target)) {
            closest = sum;
          }
          if (sum > target) {
            while (nums[end] === nums[--end]) {}
          } else if (sum < target) {
            while (nums[start] === nums[++start]) {}
          }
        }
      }
    }
  }
  return closest;
};
// @lc code=end
