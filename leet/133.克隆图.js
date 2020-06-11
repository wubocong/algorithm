/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const nodes = [];
  if (node) {
    function getNode(originNode = node) {
      if (nodes[originNode.val]) return nodes[originNode.val];
      const cloneNode = { val: originNode.val, neighbors: [] };
      nodes[originNode.val] = cloneNode;
      const len = originNode.neighbors.length;
      for (let i = 0; i < len; i++) {
        cloneNode.neighbors.push(getNode(originNode.neighbors[i]));
      }
      return cloneNode;
    }
    return getNode();
  }
};
// @lc code=end
