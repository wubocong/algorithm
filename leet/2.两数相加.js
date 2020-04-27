/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const rst = l1;
  while (true) {
    if (l2) l1.val += l2.val;
    if (l1.val >= 10) {
      l1.val -= 10;
      if (!l1.next) {
        l1.next = { val: 0, next: null };
      }
      l1.next.val++;
    }
    if (l2 && l2.next) {
      if (!l1.next) {
        l1.next = { val: 0, next: null };
      }
      l2 = l2.next;
      l1 = l1.next;
    } else {
      if (l1.next && l1.next.val === 10) {
        l1 = l1.next;
        if (l2) l2 = null;
      } else break;
    }
  }
  return rst;
};
// @lc code=end
