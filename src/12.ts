import { getNumberOfDivisors } from "./util";

const highlyDivisibleTriangularNumber = (M: number): number => {
  for (let i = 1; ; i += 1) {
    const triangularNum = (i * (i + 1)) / 2;

    const numberOfDivisors = getNumberOfDivisors(triangularNum);

    if (numberOfDivisors > M) return triangularNum;
  }
};

console.time();
const M = 500;
console.log(highlyDivisibleTriangularNumber(M));
console.timeEnd();
