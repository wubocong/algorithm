/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  function findNext(node) {
    while (node) {
      if (node.left) return [node.left, node];
      if (node.right) return [node.right, node];
      node = node.next;
    }
    return [null, node];
  }
  let [nextStart, node] = findNext(root);
  while (nextStart) {
    let cur = nextStart;
    while (node) {
      if (cur === node.left) {
        if (node.right) {
          cur.next = node.right;
          cur = node.right;
          continue;
        }
      }
      let newCur;
      [newCur, node] = findNext(node.next);
      cur.next = newCur;
      cur = newCur;
    }
    [nextStart, node] = findNext(nextStart);
  }
  return root;
};
// @lc code=end
