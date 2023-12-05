import { getHCF } from "./util";

const singularIntegerRightTriangles = (M: number): number => {
  const perimeterSolution: Record<string, number> = {};

  for (let m = 2; m * m <= M; m += 1) {
    // reversing the parity of n according to m  (first condition)
    const start = m % 2 === 0 ? 1 : 2;

    for (let n = start; n < m; n += 2) {
      // m and n should be co-prime that is hcf(m,n) should be 1 (second condition)
      if (getHCF(m, n) === 1) {
        const a = m * m - n * n;
        const b = 2 * m * n;
        const c = m * m + n * n;

        const p = a + b + c;

        if (p > M) break;

        // increase the count of all the multiples of p
        for (let k = p; k <= M; k += p) {
          perimeterSolution[k] = (perimeterSolution[k] || 0) + 1;
        }
      }
    }
  }

  return Object.values(perimeterSolution).filter(
    (solutionCount) => solutionCount === 1
  ).length;
};

// Used Euclid Formula for generating pythagorean triplet
// It states to generate a primitive Pythagorean triplet (a,b,c)
// we need a pair of positive integers m and n where (m > n)
// first condition --->  m and n should have opposite parity (one even other should be odd and vice versa)
// second condition ---> hcf(m , n) should be 1, that is they should be co-prime
console.time();
const M = 1_500_000;
console.log(singularIntegerRightTriangles(M));
console.timeEnd();
