/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  function recursive(node = root) {
    let tail = node,
      leftTail;
    if (node.left) tail = leftTail = recursive(node.left);
    if (node.right) tail = recursive(node.right);
    if (leftTail) {
      leftTail.right = node.right;
      node.right = node.left;
      node.left = null;
    }
    return tail;
  }
  if (root) recursive();
};
// @lc code=end
