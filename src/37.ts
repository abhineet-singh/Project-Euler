import { sieve } from "./util";

const checkLeftToRight = (primeNum: number, isPrimeArr: boolean[]): boolean => {
  let num = primeNum;

  const numLen = num.toString().length;
  let divisor = 10 ** numLen;

  while (num) {
    if (!isPrimeArr[num]) return false;

    num = Math.floor(num % divisor);

    divisor /= 10;
  }

  return true;
};

const checkRightToLeft = (primeNum: number, isPrimeArr: boolean[]): boolean => {
  let num = primeNum;

  while (num) {
    if (!isPrimeArr[num]) return false;

    num = Math.floor(num / 10);
  }

  return true;
};

const truncatablePrimes = (M: number): number => {
  const [primeArr, isPrimeArr] = sieve(M);

  const n = primeArr.length;
  let answer = 0;

  for (let i = 0; i < n; i += 1) {
    const primeNum = primeArr[i];

    if (
      primeNum > 10 &&
      checkRightToLeft(primeNum, isPrimeArr) &&
      checkLeftToRight(primeNum, isPrimeArr)
    ) {
      answer += primeNum;
    }
  }

  return answer;
};

console.time();
const M = 1_000_001;
console.log(truncatablePrimes(M));
console.timeEnd();
