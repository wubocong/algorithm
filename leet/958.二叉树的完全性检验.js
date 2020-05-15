/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
  const bfsQueue = [root];
  let sign = true;
  let pointer = 0;
  while (bfsQueue[pointer]) {
    const node = bfsQueue[pointer];
    if (node.left) {
      if (!sign) return false;
      bfsQueue.push(node.left);
    } else {
      sign = false;
    }
    if (node.right) {
      if (!sign) return false;
      bfsQueue.push(node.right);
    } else {
      sign = false;
    }
    pointer++;
  }
  return true;
};
// @lc code=end

