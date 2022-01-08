/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


class MinHeap {
  constructor() {
    this.heapList = [];
  }
  getParentIndex(index) {
    return (index - 1) >> 1;
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  swap(aIndex, bIndex) {
    const t = this.heapList[aIndex];
    this.heapList[aIndex] = this.heapList[bIndex]
    this.heapList[bIndex] = t;
  }
  size() {
    return this.heapList.length;
  }
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heapList[parentIndex].val > this.heapList[index].val) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  sinkDown(index) {
    const leftChildIndex = this.getLeftIndex(index);
    const rightChildIndex = this.getRightIndex(index);
    let swapIndex = index;
    if (this.heapList[leftChildIndex] && this.heapList[leftChildIndex].val < this.heapList[swapIndex].val) {
      swapIndex = leftChildIndex;
    }
    if (this.heapList[rightChildIndex] && this.heapList[rightChildIndex].val < this.heapList[swapIndex].val) {
      swapIndex = rightChildIndex;
    }
    if (swapIndex !== index) {
      this.swap(swapIndex, index);
      this.sinkDown(swapIndex);
    }
  }
  insert(node) {
    this.heapList.push(node);
    this.shiftUp(this.heapList.length - 1)
  }
  pop() {
    const top = this.heapList.shift();
    if (this.heapList.length > 1) {
      this.heapList.unshift(this.heapList.pop());
      this.sinkDown(0);
    }
    return top;
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const res = new ListNode(-1);

  const heap = new MinHeap();
  lists.forEach(l => {
    if (l) heap.insert(l);
  });
  let pointer = res;

  while (heap.size() > 0) {
    const topNode = heap.pop();
    pointer.next = topNode;
    if (topNode.next) heap.insert(topNode.next);
    pointer = topNode;
  }
  return res.next;
};

// @lc code=end
// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }
// mergeKLists([[{ val: 1 }], [{ val: 3 }], [{ val: 2 }]])