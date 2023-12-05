import { sieve } from "./util";

const consecutivePrimeSum = (M: number): number => {
  // first find all the prime numbers (primeArr) and if a number is prime or not (isPrimeArr)
  const [primeArr, isPrimeArr] = sieve(M);

  let answer = -1;
  let maxConsecutiveLen = -1;

  const n = primeArr.length;

  // loop through all sub-arrays of prime numbers

  for (let left = 0; left < n; left += 1) {
    let sum = primeArr[left];

    for (let right = left + 1; right < n; right += 1) {
      sum += primeArr[right];

      if (sum > M) break;

      const currConsecutiveLen = right - left + 1;

      if (isPrimeArr[sum] && currConsecutiveLen > maxConsecutiveLen) {
        maxConsecutiveLen = currConsecutiveLen;
        answer = sum;
      }
    }
  }

  return answer;
};

console.time();
const M = 1_000_001;
console.log(consecutivePrimeSum(M));
console.timeEnd();
