const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  domains.forEach((domain) => {
    let curStr = "";
    const subdomains = domain.split(".").reverse();

    subdomains.forEach((subdomain) => {
      curStr += `.${subdomain}`;
      let x = 1;
      if (result[curStr]) x++;
      result[curStr] = x;
    });
  });

  return result;
}

module.exports = {
  getDNSStats
};
