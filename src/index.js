
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix[0] == undefined) {
    return [];
  }
  else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) matrix[i].reverse();
    }
    return matrix.flat();
  }
}
