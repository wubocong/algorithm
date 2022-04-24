/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// function sortArray(list, lo = 0, hi = list.length) {
//   // 归并排序
//   if (hi - lo > 2) {
//     const mid = lo + Math.floor((hi - lo) / 2);
//     sortArray(list, lo, mid);
//     sortArray(list, mid, hi);
//   }
//   merge(list, lo, hi);
//   return list;
// }
// function merge(list, lo, hi) {
//   const temp = []
//   for (let i = lo; i < hi; i++) {
//     temp[i] = list[i];
//   }
//   let pointerLeft = lo, mid = pointerRight = lo + Math.floor((hi - lo) / 2);
//   for (let i = lo; i < hi; i++) {
//     if (pointerLeft === mid) {
//       list[i] = temp[pointerRight++];
//     } else if (pointerRight === hi) {
//       list[i] = temp[pointerLeft++];
//     } else if (temp[pointerLeft] < temp[pointerRight]) {
//       list[i] = temp[pointerLeft++];
//     } else {
//       list[i] = temp[pointerRight++];
//     }
//   }
// }

function sortArray(list, lo = 0, hi = list.length) {
  // 快速排序
  if (hi - lo > 1) {
    const p = partition(list, lo, hi);
    sortArray(list, lo, p);
    sortArray(list, p + 1, hi);
  }
  return list;
}

function partition(list, lo, hi) {
  function swap(i, j) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
  const index = Math.floor(Math.random() * (hi - lo)) + lo;
  swap(lo, index); // 随机选取pivot
  const pivot = list[lo];
  let i = lo, j = hi;
  while (true) {
    while (list[++i] < pivot) {
      if (i === hi - 1) break;
    }
    while (list[--j] > pivot) {
      if (j === lo) break;
    }
    if (i >= j) break;
    swap(i, j);
  }
  swap(lo, j);
  return j;
}
// @lc code=end

