import { checkForHexagonalNumber, checkForPentagonalNumber } from "./util";

const check = (M: number): number[] => {
  const answer: number[] = [];

  for (let i = 1; i < M; i += 1) {
    const triangularNum = (i * (i + 1)) / 2;

    if (
      checkForHexagonalNumber(triangularNum) &&
      checkForPentagonalNumber(triangularNum)
    )
      answer.push(triangularNum);
  }

  return answer;
};

// let k ---> any triangular number
// if it is a hexagonal number also, n(2n - 1) = k or (2n^2 - n - k = 0), should result a integer,
// and if it is a pentagonal number also, n(3n - 1)/2 = k or (3n^2 - n - 2k = 0) should result a integer,

console.time();
const M = 1_000_000;
console.log(check(M));
console.timeEnd();
