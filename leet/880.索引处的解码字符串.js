/*
 * @lc app=leetcode.cn id=880 lang=javascript
 *
 * [880] 索引处的解码字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

// 使用双链表解决，储存一种特殊数据结构
var decodeAtIndex = function (S, K) {
  let node = { repeat: 1, str: '', length: 0, next: null, prev: { length: 0 } };
  let index = 0;
  while (index < S.length && node.length < K) {
    if (S.charCodeAt(index) >= 97) {
      node.str = node.str.concat(S[index]);
      node.length++;
    } else {
      node.repeat = S.charCodeAt(index) - 48;
      node.length = node.length * node.repeat;
      node.next = { repeat: 1, str: '', length: node.length, next: null, prev: node }
      node = node.next;
    }
    index++;
  }
  return findK(node, K);
};

/**
 * @param {{repeat:number,str:string,length:number,next:curNode,prev:lastNode}} curNode 
 * @param {number} K 
 * @return {string}
 */
function findK(curNode, K) {
  let k = K;
  while (curNode) {
    k = k % (curNode.prev.length + curNode.str.length)
    if (k === 0 && curNode.str.length > 0) return curNode.str.slice(-1);
    else if (k > curNode.prev.length) return curNode.str[k - curNode.prev.length - 1];
    else curNode = curNode.prev;
  }
}
// @lc code=end

