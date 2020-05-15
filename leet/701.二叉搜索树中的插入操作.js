/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
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
// @lc code=end

