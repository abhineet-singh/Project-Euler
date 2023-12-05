import sudokuGrids from "../data/96";

const getNextEmptyCell = (sudoku: number[][]): [number, number] => {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (sudoku[i][j] === 0) return [i, j];
    }
  }

  // if the code is reached here means that the sudoku is solved now
  return [-1, -1];
};

const isSafe = (
  sudoku: number[][],
  value: number,
  x: number,
  y: number
): boolean => {
  // checks whether the same value exists in same column or not
  for (let r = 0; r < 9; r += 1) {
    if (sudoku[r][y] === value) return false;
  }

  // checks whether the same value exists in same row or not
  for (let c = 0; c < 9; c += 1) {
    if (sudoku[x][c] === value) return false;
  }

  const groupCol = y - (y % 3);
  const groupRow = x - (x % 3);

  // checks whether the same value exists in same 3x3 sub grid of the cell or not
  for (let i = groupRow; i < groupRow + 3; i += 1) {
    for (let j = groupCol; j < groupCol + 3; j += 1) {
      if (sudoku[i][j] === value) return false;
    }
  }

  return true;
};

const solveSudoku = (sudoku: number[][]): boolean => {
  const matrix = sudoku;

  // get the co-ordinate of the next empty cell in the sudoku
  const [x, y] = getNextEmptyCell(matrix);

  // if no empty cell is there, return true as sudoku is solved now
  if (x === -1 && y === -1) return true;

  // otherwise pickup a value between [1-9] for the current empty cell
  for (let option = 1; option <= 9; option += 1) {
    // and check if this value can be placed at this empty cell
    if (isSafe(matrix, option, x, y)) {
      // replace the empty cell with the current value
      matrix[x][y] = option;

      // calls the function recursively to check whether solution exists with this value
      if (solveSudoku(matrix)) return true;

      // if not, back-track and mark it again an empty cell
      matrix[x][y] = 0;
    }
  }

  return false;
};

const SuDoku = (grid: number[][][]): number => {
  return grid.reduce((acc, sudoku) => {
    // solve each of the sudoku problems
    solveSudoku(sudoku);

    // extract the first three numbers of the first row
    const [first, second, third] = sudoku[0];

    // form a number from the digits and add to the answer
    return acc + (first * 100 + second * 10 + third);
  }, 0);
};

console.time();
console.log(SuDoku(sudokuGrids));
console.timeEnd();
