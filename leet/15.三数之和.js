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

// wrong answer
// var threeSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   const len = nums.length;
//   const rst = [];
//   const rstObj = {};
//   if (nums[len - 1] >= 0) {
//     for (let i = 0; i < len - 2; i++) {
//       if (nums[i] > 0) break;
//       if (i && nums[i] === nums[i - 1]) continue;
//       for (let j = i + 1; j < len - 1; j++) {
//         if (j > i + 1 && nums[j] === nums[j - 1]) continue;
//         const sum1 = nums[i] + nums[j];
//         if (sum1 > 0) break;
//         for (let k = j + 1; k < len; k++) {
//           if (k > j + 1 && nums[k] === nums[k - 1]) continue;
//           const sum2 = sum1 + nums[k];
//           if (sum2 > 0) break;
//           if (sum2 === 0) {
//             const solution = [nums[i], nums[j], nums[k]];
//             if (!rstObj[solution.join('')]) {
//               rst.push(solution);
//               rstObj[solution.join('')] = true;
//             }
//           }
//         }
//       }
//     }
//   }
//   return rst;
// };

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const rst = [];
  if (nums[0] <= 0 && nums[len - 1] >= 0 && len >= 3) {
    for (let i = 0; i < len - 2; i++) {
      if (i && nums[i] === nums[i - 1]) {
        continue;
      }
      let start = i + 1,
        end = len - 1;
      while (start < end) {
        const sum = nums[i] + nums[start] + nums[end];
        if (sum > 0) {
          end--;
        } else if (sum < 0) {
          start++;
        } else {
          rst.push([nums[i], nums[start], nums[end]]);
          while (nums[start] === nums[++start]) {}
          while (nums[end] === nums[--end]) {}
        }
      }
    }
  }
  return rst;
};
// @lc code=end
