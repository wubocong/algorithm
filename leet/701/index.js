/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  let node = root, prev = {};
  while (node) {
    prev = node;
    if (node.val < val) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  if (prev.val > val) {
    prev.left = { val, left: null, right: null };
  } else {
    prev.right = { val, left: null, right: null };
  }
  return root;
};