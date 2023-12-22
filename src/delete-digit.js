const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(n) {
//   let num = String(n);
//   let newresultArr = [];
//   for (let index = 0; index < num.length; index++) {
//     newArr.push(num.slice(index, 1) + num.slice(index));
//     num = String(n);
//   }

//   console.log(newArr);
//   newArr = newArr.forEach(element => Number(element));
//   // newArr = newArr.sort( (a, b) => a - b );

//   return 1;
// }

function deleteDigit(n) {
  let str = String(n);
  let resultArr = [];
  
  for (let i = 0; i < str.length; i++) {
    let newStr = "";
    for (let j = 0; j < str.length; j++) {
      if (j !== i) {
        newStr += str[j];
      }
    }
    resultArr.push(newStr);
  }
  
  // resultArr = resultArr.map(Number);
  resultArr = resultArr.sort( (a, b) => a + b );
  return Math.max(...resultArr);
}




module.exports = {
  deleteDigit
};
