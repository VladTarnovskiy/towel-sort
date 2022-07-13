
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {return []}
  let x = [];
  for(let i = 0; i < matrix.length; i++){
    if (i % 2 == 0) {
      x = x.concat(matrix[i])
    } else {
      x = x.concat(matrix[i].reverse())
    }
  }
  return x;
}

