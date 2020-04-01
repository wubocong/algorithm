/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const code = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  const obj = {};
  let count = 0;
  for (let i = words.length - 1; i >= 0; i--) {
    const l = words[i].length;
    let str = '';
    for (let j = 0; j < l; j++) {
      str += code[words[i][j].charCodeAt(0) - 97];
    }
    if (!obj[str]) {
      count++;
    } else {
      obj[str] = true;
    }
  }
  return count;
};