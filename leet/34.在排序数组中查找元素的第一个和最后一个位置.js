/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0, right = nums.length;
    let rightSearched = false;
    let resultRight;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            right = mid;
            if(!rightSearched) {
                resultRight = searchRight(nums, target, mid);
                rightSearched = true;
            }
            
        }
        else if(nums[mid] < target) left = mid + 1;
        else right = mid;
    }
    return nums[left] === target ? [left, resultRight]  : [-1, -1];
    
};

function searchRight(nums, target, sLeft){
    let left = sLeft, right = nums.length;
    
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) left = mid + 1;
        else if(nums[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left - 1;
}
