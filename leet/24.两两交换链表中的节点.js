/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let first = head;
  let prev;
  while (true) {
    let second;
    if (first) second = first.next;
    else break;
    if (!second) break;
    first.next = second.next;
    second.next = first;
    if (first === head) head = second;
    else prev.next = second;
    prev = first;
    first = first.next;
  }
  return head;
};
// @lc code=end
