import { sieve } from "./util";

const getPrimeCount = (a: number, b: number, isPrimeArr: boolean[]): number => {
  let count = 0;

  for (let n = 0; ; n += 1) {
    const eqnVal = n * n + a * n + b;

    if (!isPrimeArr[eqnVal]) return count;

    count += 1;
  }
};

const quadraticPrime = (M: number): number => {
  const [, isPrimeArr] = sieve(1_000_001);
  let answer = -1;
  let maxPrimeCount = -1;

  for (let a = -M; a <= M; a += 1) {
    // a takes value from [-M, M]

    for (let b = 0; b <= M; b += 1) {
      // b cannot be negative value, as for n = 0, eqn will give negative value and cannot be prime

      const currPrimeCount = getPrimeCount(a, b, isPrimeArr);

      if (currPrimeCount > maxPrimeCount) {
        maxPrimeCount = currPrimeCount;
        answer = a * b;
      }
    }
  }

  return answer;
};

console.time();
const M = 1_000;
console.log(quadraticPrime(M));
console.timeEnd();
