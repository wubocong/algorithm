/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const stack = [];
  let cur = root;
  const traversal = [];
  while (cur) {
    if (cur.visited) {
      cur = stack.pop();
    } else if (cur.left && !cur.left.visited) {
      stack.push(cur);
      cur = cur.left;
    } else {
      traversal.push(cur.val);
      cur.visited = true;
      if (cur.right) {
        stack.push(cur);
        cur = cur.right;
      } else cur = stack.pop();
    }
  }
  return traversal;
};
// @lc code=end
