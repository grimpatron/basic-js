const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */


function getSumOfDigits(n) {
  // let result = [];
  if (n < 10) return n;

  const nArr    = String(n).split('');
  const result  = nArr.map(Number);
  const NextN   = result.reduce((acc, i) => acc + i, 0);

    // console.debug(NextN);
  // return getSumOfDigits(result);
  return getSumOfDigits(NextN);
}

module.exports = {
  getSumOfDigits
};
