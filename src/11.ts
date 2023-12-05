import data from "../data/11";

const getUpValue = (
  mat: number[][],
  r: number,
  c: number,
  M: number
): number => {
  if (r - M + 1 >= 0) {
    let answer = 1;

    for (let i = 0; i < M; i += 1) answer *= mat[r - i][c];

    return answer;
  }
  return 0;
};

const getDownValue = (
  mat: number[][],
  r: number,
  c: number,
  M: number
): number => {
  if (r + M - 1 < mat.length) {
    let answer = 1;

    for (let i = 0; i < M; i += 1) answer *= mat[r + i][c];

    return answer;
  }
  return 0;
};

const getLeftValue = (
  mat: number[][],
  r: number,
  c: number,
  M: number
): number => {
  if (c - M + 1 >= 0) {
    let answer = 1;

    for (let i = 0; i < M; i += 1) answer *= mat[r][c - i];

    return answer;
  }
  return 0;
};

const getRightValue = (
  mat: number[][],
  r: number,
  c: number,
  M: number
): number => {
  if (c + M - 1 < mat[0].length) {
    let answer = 1;

    for (let i = 0; i < M; i += 1) answer *= mat[r][c + i];

    return answer;
  }
  return 0;
};

const getUpperRightDiagonalValue = (
  mat: number[][],
  r: number,
  c: number,
  M: number
): number => {
  if (r - M + 1 >= 0 && c + M - 1 < mat[0].length) {
    let answer = 1;

    for (let i = 0; i < M; i += 1) answer *= mat[r - i][c + i];

    return answer;
  }
  return 0;
};

const getUpperLeftDiagonalValue = (
  mat: number[][],
  r: number,
  c: number,
  M: number
): number => {
  if (r - M + 1 >= 0 && c - M + 1 >= 0) {
    let answer = 1;

    for (let i = 0; i < M; i += 1) answer *= mat[r - i][c - i];

    return answer;
  }
  return 0;
};

const getDownRightDiagonalValue = (
  mat: number[][],
  r: number,
  c: number,
  M: number
): number => {
  if (r + M - 1 < mat.length && c - M + 1 >= 0) {
    let answer = 1;

    for (let i = 0; i < M; i += 1) answer *= mat[r + i][c - i];

    return answer;
  }
  return 0;
};

const getDownLeftDiagonalValue = (
  mat: number[][],
  r: number,
  c: number,
  M: number
): number => {
  if (r + M - 1 < mat.length && c + M - 1 < mat[0].length) {
    let answer = 1;

    for (let i = 0; i < M; i += 1) answer *= mat[r + i][c + i];

    return answer;
  }
  return 0;
};

const largestProductInAGrid = (M: number): number => {
  const rows = data.length;
  const columns = data[0].length;
  let answer = -1;

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      answer = Math.max(
        answer,
        ...[
          getUpValue(data, i, j, M),
          getDownValue(data, i, j, M),
          getLeftValue(data, i, j, M),
          getRightValue(data, i, j, M),
          getUpperRightDiagonalValue(data, i, j, M),
          getUpperLeftDiagonalValue(data, i, j, M),
          getDownRightDiagonalValue(data, i, j, M),
          getDownLeftDiagonalValue(data, i, j, M),
        ]
      );
    }
  }

  return answer;
};

console.time();
const M = 4;
console.log(largestProductInAGrid(M));
console.timeEnd();
