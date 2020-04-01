/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var l = nums.length;
  var obj = {};
  for (var i = 0; i < l; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      if (2 * nums[i] === target) return [obj[nums[i]], i]
    } else {
      obj[nums[i]] = i;
      if (target !== 2 * nums[i] && obj.hasOwnProperty(target - nums[i])) {
        return [obj[target - nums[i]], i];
      }
    }
  }
};

twoSum([3, 3], 6);