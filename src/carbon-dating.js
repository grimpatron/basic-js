const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  // const sa = String(sampleActivity);
  // if ( sampleActivity == 3) return false;
  
  const log = 0.693 / HALF_LIFE_PERIOD;
  // console.debug(sampleActivity, sa);
  const res = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / log;
  if (typeof sampleActivity == 'string' && res > 0 && isFinite(res)) {
    return Math.ceil(res);
  } else {
    return false;
  }

  // console.debug(sampleActivity);
  // const AA = Number(sampleActivity);
  // const log = 0.693;

  // if (isNaN(AA))    return false;
  // if (AA > 15)      return false;
  // if (isFinite(AA)) return false;

  // // return log / HALF_LIFE_PERIOD;
  // return Math.ceil(
  //   Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD)
  // );
}

module.exports = {
  dateSample
};
