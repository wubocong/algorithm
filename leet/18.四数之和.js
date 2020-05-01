/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const rst = [];

  const last2sum = nums[len - 2] + nums[len - 1];
  const last3sum = nums[len - 3] + last2sum;
  const last4sum = nums[len - 4] + last3sum;
  if (last4sum === target)
    rst.push([nums[len - 4], nums[len - 3], nums[len - 2], nums[len - 1]]);
  else if (len >= 4 && last4sum > target) {
    for (let i = 0; i < len - 3; i++) {
      if (i && nums[i] === nums[i - 1]) continue;

      if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
      if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] === target) {
        rst.push([nums[i], nums[i + 1], nums[i + 2], nums[i + 3]]);
        break;
      }

      if (nums[i] + last3sum < target) continue;
      if (nums[i] + last3sum === target) {
        rst.push([nums[i], nums[len - 3], nums[len - 2], nums[len - 1]]);
        continue;
      }

      for (let j = i + 1; j < len - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) continue;

        if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
        if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] === target) {
          rst.push([nums[i], nums[j], nums[j + 1], nums[j + 2]]);
          break;
        }

        if (nums[i] + nums[j] + last2sum < target) continue;
        if (nums[i] + nums[j] + last2sum === target) {
          rst.push([nums[i], nums[j], nums[len - 2], nums[len - 1]]);
          continue;
        }
        
        let start = j + 1,
          end = len - 1;
        while (start < end) {
          const sum = nums[i] + nums[j] + nums[start] + nums[end];
          if (sum > target) {
            while (start < end && nums[end] === nums[--end]) {}
          } else if (sum < target) {
            while (start < end && nums[start] === nums[++start]) {}
          } else {
            rst.push([nums[i], nums[j], nums[start], nums[end]]);
            while (start < end && nums[start] === nums[++start]) {}
            while (start < end && nums[end] === nums[--end]) {}
          }
        }
      }
    }
  }
  return rst;
};
// @lc code=end
