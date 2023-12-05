import { getSquareRoot } from "./util";

const specialPythagoreanTriplet = (M: number): number => {
  for (let b = 1; b < M / 2; b += 1) {
    const divisor = M - b;

    const first = M * (M / 2 - b);

    if (first % divisor === 0) {
      const a = first / divisor;

      const c = getSquareRoot(a * a + b * b);

      return a * b * c;
    }
  }

  return -1;
};

// first eqn,  a^2 + b^2 = c^2
// second eqn,  a + b + c = M
// c = M - (a + b)
// substitute c in first eqn and solve for a
// a = M * (M/2 - b) / (M - b)

// iterate b from 1 to M/2 and check which b satisfies the above egn
// till M/2 as (M/2 - b) will return 0 or negative after that

console.time();
const M = 1_000;
console.log(specialPythagoreanTriplet(M));
console.timeEnd();
