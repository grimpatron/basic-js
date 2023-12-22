const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

// 'very.unusual.@.unusual.com@usual.com' - @ два раза!
function getEmailDomain(email) {
  const charAt = email.lastIndexOf("@");
  const result = email.slice(charAt + 1);

  return result;
}

module.exports = {
  getEmailDomain
};
