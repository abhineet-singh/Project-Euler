import pathValuesArr from "../data/81";

const minPathToNextCol = (
  pathMatrix: number[][],
  currR: number,
  currC: number,
  rowLen: number
): number => {
  let answer = Number.MAX_SAFE_INTEGER;

  let cumulativeSum = 0;

  for (let i = currR; i >= 0; i -= 1) {
    cumulativeSum += pathMatrix[i][currC];

    answer = Math.min(answer, cumulativeSum + pathMatrix[i][currC + 1]);
  }

  cumulativeSum = 0;

  for (let i = currR; i < rowLen; i += 1) {
    cumulativeSum += pathMatrix[i][currC];

    answer = Math.min(answer, cumulativeSum + pathMatrix[i][currC + 1]);
  }

  return answer;
};

const pathSumThreeWays = (matrix: number[][]): number => {
  const pathMatrix = matrix;

  const col = matrix[0].length;
  const row = matrix.length;

  for (let c = col - 2; c >= 0; c -= 1) {
    const tempArr = Array.from({ length: row }, () => 0);

    for (let r = 0; r < row; r += 1) {
      tempArr[r] = minPathToNextCol(pathMatrix, r, c, row);
    }

    for (let r = 0; r < row; r += 1) {
      pathMatrix[r][c] = tempArr[r];
    }
  }

  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < row; i += 1) {
    answer = Math.min(answer, pathMatrix[i][0]);
  }

  return answer;
};

console.time();
console.log(pathSumThreeWays(pathValuesArr));
console.timeEnd();
