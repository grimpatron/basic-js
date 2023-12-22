const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let result = 0;

  for (let rows = 0; rows < matrix.length; rows++) {
    for (let i = 0; i < matrix[rows].length; i++) {

    if (rows === 0 || matrix[rows - 1][i] !== 0) {
      result += matrix[rows][i];
    }
      
    }
  }
  
  return result;
}

module.exports = {
  getMatrixElementsSum
};
