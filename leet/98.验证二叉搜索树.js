/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  if (!root) return true;
  let sign = true;
  function dfs(node = root, min = -Infinity, max = Infinity) {
    if (!sign) return;
    if (node.val >= max || node.val <= min) {
      sign = false;
      return;
    }
    if (node.left) dfs(node.left, min, node.val);
    if (node.right) dfs(node.right, node.val, max);
  }
  dfs();
  return sign;
};
// @lc code=end
