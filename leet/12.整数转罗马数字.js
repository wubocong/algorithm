/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  function dealWithThousands(n) {
    const thousands = Math.floor(n / 1000);
    let str = '';
    for (let i = 0; i < thousands; i++) {
      str += 'M';
    }
    return str + dealWithThunreds(n % 1000);
  }
  function dealWithThunreds(n) {
    let thunreds = Math.floor(n / 100);
    let str = '';
    if (thunreds === 9) {
      str = 'CM';
    } else if (thunreds === 4) {
      str = 'CD';
    } else {
      if (thunreds >= 5) {
        str = 'D';
        thunreds -= 5;
      }
      for (let i = 0; i < thunreds; i++) {
        str += 'C';
      }
    }
    return str + dealWithTens(n % 100);
  }
  function dealWithTens(n) {
    let tens = Math.floor(n / 10);
    let str = '';
    if (tens === 9) {
      str = 'XC';
    } else if (tens === 4) {
      str = 'XL';
    } else {
      if (tens >= 5) {
        str = 'L';
        tens -= 5;
      }
      for (let i = 0; i < tens; i++) {
        str += 'X';
      }
    }
    return str + dealWithOnes(n % 10);
  }
  function dealWithOnes(n) {
    let ones = n;
    let str = '';
    if (ones === 9) {
      str = 'IX';
    } else if (ones === 4) {
      str = 'IV';
    } else {
      if (ones >= 5) {
        str = 'V';
        ones -= 5;
      }
      for (let i = 0; i < ones; i++) {
        str += 'I';
      }
    }
    return str;
  }
  return dealWithThousands(num);
};
// @lc code=end
