/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if(!root) return [];
  let queue = [root],
    nextQueue = [];
  const answer = [[]];
  let height = 0;
  while (queue.length || nextQueue.length) {
    if (queue.length === 0) {
      queue = nextQueue;
      nextQueue = [];
      height++;
      answer.push([]);
    }
    const node = queue.shift();
    answer[height].push(node.val);
    node.left && nextQueue.push(node.left);
    node.right && nextQueue.push(node.right);
  }
  return answer;
};
// @lc code=end
