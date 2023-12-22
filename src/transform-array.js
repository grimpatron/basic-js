const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(/* arr */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }


function transform(arr) {
  const newArr = new Array;
  const str = {
    disNext: '--discard-next',
    disPrev: '--discard-prev',
    doubNext: '--double-next',
    doubPrev: '--double-prev',
  }

  if (!Array.isArray(arr))  { 
    throw new Error( `'arr' parameter must be an instance of the Array!`); 
  }


  for (let i = 0; i < arr.length; i++) { 
    switch (arr[i ]) { 
      case str.disNext:  i++;   break;      

      case str.disPrev: if (i > 0  && arr[i - 2] !== str.disNext) { 
        newArr.pop(); 
      } break; 

      case str.doubNext: if (i  < arr.length - 1) { 
        newArr.push(arr[i + 1]); 
      } break;             

      case  str.doubPrev: if  (i > 0 && arr[ i - 2] !== str.disNext) { newArr.push(arr[i - 1]); 
      
      // case string.doubPrev: if (i > 0 && arr[i] != string.disNext) { newArr.push(arr[i]);            

      } break; 
      default: newArr.push(arr[i]); break; } 
    }

  return newArr;
}

module.exports = {
  transform
};
