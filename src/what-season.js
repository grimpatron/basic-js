const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const errorsList = {
    empty: "Unable to determine the time of year!",
    invalid: "Invalid date!"
  }
  const seasonsList = {
    winter: [0, 1, 11],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  }

  if (!date) return errorsList.empty;
  
  // if (date.getTime()) {
  //   const mr = date.getMonth();
  //   const xxx = Object.entries(sl).find(([key, value]) => {
  //     if (value.includes(mr)) return key;
  //   });
  //   return xxx[0];
  // }

  try {

    if (date.getTime()) {
      const result = Object.entries(seasonsList).find( ([key, value]) => {
        if (value.includes(date.getMonth())) return key;
      });
      
      return result[0];
    }
  } catch (e) { throw new Error(errorsList.invalid) }
}

module.exports = {
  getSeason
};
