/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
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
    let node;
    if (height % 2 === 0) node = queue.shift();
    else node = queue.pop();
    answer[height].push(node.val);
    if (height % 2 === 0) {
      node.left && nextQueue.push(node.left);
      node.right && nextQueue.push(node.right);
    } else {
      node.right && nextQueue.unshift(node.right);
      node.left && nextQueue.unshift(node.left);
    }
  }
  return answer;
};
// @lc code=end
