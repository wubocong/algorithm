/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  var sum = 0
  function recursive(node) {
    if (node) {
      if (node.val <= R && node.val >= L) {
        sum += node.val
      }
      if (node.val <= L) {
        recursive(node.right);
      } else if (node.val >= R) {
        recursive(node.left);
      } else {
        recursive(node.left);
        recursive(node.right);
      }
    }
  }
  recursive(root);
  return sum;
};