/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
  function maxOfArray(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let index = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] > max) {
        max = arr[i];
        index = i;
      }
    }
    return { max, index };
  }
  function recursive(node, arr) {
    if (arr.length > 0) {
      const { max, index } = maxOfArray(arr);
      node.val = max;
      node.left = node.right = null;
      if (index > 0) {
        node.left = {};
        recursive(node.left, arr.slice(0, index));
      }
      if (index + 1 < arr.length) {
        node.right = {};
        recursive(node.right, arr.slice(index + 1));
      }
    }
  }
  const tree = {};
  recursive(tree, nums)
  return tree;
};
