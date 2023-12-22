const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = new Array;
  result = arr.filter((el) => el != -1);
  result.sort((a, b) => a - b);

  // const net = arr.filter((el) => {el !== -1});

  for (let i = 0, pos = 0; i < arr.length; i++) {
    if (arr[i] !== -1) arr[i] = result[pos++];
  }

  return arr;
}

module.exports = {
  sortByHeight
};
