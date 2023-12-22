const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let ABR = '';

  if (!Array.isArray(members)) return false
  // console.debug(members);
  for (let index = 0; index < members.length; index++) {
    if (typeof members[index] == 'string') {
      let xxx = members[index].trim();
      ABR += xxx.charAt(0).toUpperCase();
    }
  }
  return ABR.split("").sort().join("");
}

module.exports = {
  createDreamTeam
};
