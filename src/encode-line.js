const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  for (let index = 0, cnt = 1; index <= str.length; index++) {
    if (index <= str.length && str[index + 1] === str[index]) {
      cnt++;
    } else {
      if (cnt !== 1) result += `${cnt}${str[index]}`;
      if (cnt === 1) result += `${str[index]}`;
      cnt = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
