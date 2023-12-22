const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */






//  В популярной игре «Сапер» у вас есть доска с минами и клетками  которые не содержат мин, имеют число, обозначающее общее количество мин в соседних ячейках. Начнём с расстановки мин мы хотим создать настройку игры «Сапер».

function minesweeper(matrix ) {
  const result = [];

  if (matrix.length === 0 || matrix[0].length === 0) return [];
  
  // abscissa
  for (let abscCnt = 0; abscCnt < matrix.length; abscCnt++) {
    const arr = [];
    result.push(arr);

    // ordinate
    for (let ordCnt = 0; ordCnt < matrix[0].length; ordCnt++) {
      let count = 0;
      for (let x = abscCnt - 1; x <= abscCnt + 1; x++) {

        for (let y = ordCnt - 1; y <= ordCnt + 1; y++) {
          if (x >= 0 && y >= 0 && x < matrix.length && 
              y < matrix[0].length && !(x == abscCnt && y == ordCnt)) {

            if (matrix[x][y] == true) {
              count += 1;
            } else count += 0;
            
          }
        }

      }
      result[abscCnt].push(count);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
