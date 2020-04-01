/**
 * @param {number[][]} grid
 * @return {number}
 */

function maxOfArray(arr) {
  var max = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
var maxIncreaseKeepingSkyline = function (grid) {
  var row = [], column = [];
  var increase = 0;
  for (var i = grid.length - 1; i >= 0; i--) {
    row[i] = maxOfArray(grid[i]);
  }
  for (var j = grid[0].length - 1; j >= 0; j--) {
    var max = 0;
    for (i = grid.length - 1; i >= 0; i--) {
      if (grid[i][j] > max) max = grid[i][j];
    }
    column[j] = max;
  }
  for (i = grid.length - 1; i >= 0; i--) {
    for (j = grid[0].length - 1; j >= 0; j--) {
      increase += Math.min(row[i], column[j]) - grid[i][j];
    }
  }
  return increase;
};