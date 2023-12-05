import pathValuesArr from "../data/81";

const pathSumTwoWays = (matrix: number[][]): number => {
  const pathMatrix = matrix;

  const col = matrix[0].length;
  const row = matrix.length;

  // for the first row you can reach element through left side only
  for (let i = 1; i < col; i += 1) {
    pathMatrix[0][i] += pathMatrix[0][i - 1];
  }

  // for the first column you can reach element by going down from top
  for (let i = 1; i < row; i += 1) {
    pathMatrix[i][0] += pathMatrix[i - 1][0];
  }

  for (let i = 1; i < row; i += 1) {
    for (let j = 1; j < col; j += 1) {
      const minNeighbor = Math.min(pathMatrix[i][j - 1], pathMatrix[i - 1][j]);

      pathMatrix[i][j] += minNeighbor;
    }
  }

  return pathMatrix[row - 1][col - 1];
};

console.time();
console.log(pathSumTwoWays(pathValuesArr));
console.timeEnd();
