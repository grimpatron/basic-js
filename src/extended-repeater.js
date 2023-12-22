const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const main = String(str);
  let { 
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  addition = String(addition);
  
  const additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  let result = Array(repeatTimes).fill(main + additionStr).join(separator);

  return result


  // throw new NotImplementedError('Not implemented');
  // const {
  //   repeatTimes = 1,
  //   separator = "+",
  //   addition = "",
  //   additionRepeatTimes = 1,
  //   additionSeparator = "",
  // } = options;

  // let result ='';
  // console.debug(str, addition);
  // result += `${str}`;
  // for (let index = 1; index < repeatTimes; index++) {
  //   result += `${separator}${str}${addition}`;
  //   if (additionRepeatTimes) result += `${additionSeparator}`
  // }
  // return result;
  // let xxx = `${str}${addition}${additionSeparator}`
  for(let i = 0; i < repeatTimes; i++){
    result += str;
    if (i != repeatTimes - 1) result += separator;
  }
  if (additionRepeatTimes) result += additionSeparator;
  return result;
}

module.exports = {
  repeater
};
