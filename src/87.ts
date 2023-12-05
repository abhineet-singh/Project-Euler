import { getSquareRoot, sieve } from "./util";

const primePowerTriples = (M: number): number => {
  const sqRoot = getSquareRoot(M);

  // we will only require prime numbers till square root of M
  // since after that sum of a prime square, prime cube, and prime fourth power
  // will always be greater than M.
  const [primeArr] = sieve(sqRoot);

  const answerSet: Set<number> = new Set();
  const len = primeArr.length;

  for (let i = 0; i < len; i += 1) {
    const primeSquare = primeArr[i] ** 2;

    for (let j = 0; j < len; j += 1) {
      const primeCube = primeArr[j] ** 3;

      if (primeSquare + primeCube > M) break;

      for (let k = 0; k < len; k += 1) {
        const sum = primeSquare + primeCube + primeArr[k] ** 4;

        if (sum > M) break;

        answerSet.add(sum);
      }
    }
  }

  return answerSet.size;
};

console.time();
const M = 50_000_000;
console.log(primePowerTriples(M));
console.timeEnd();
