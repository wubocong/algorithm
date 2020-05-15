/*
 * @lc app=leetcode.cn id=998 lang=javascript
 *
 * [998] 最大二叉树 II
 */

// @lc code=start
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
var insertIntoMaxTree = function(root, val) {
  let node = root, prev = {};
  let insert = false;
  while (node) {
    if (node.val < val) {
      if (prev.val) {
        prev.right = { val, left: node, right: null };
        insert = true;
        break;
      } else {
        prev = { val, left: node, right: null };
        return prev;
      }
    }
    prev = node;
    node = node.right;
  }
  if (!insert) {
    prev.right = { val, left: null, right: null };
  }
  return root;
};
// @lc code=end

