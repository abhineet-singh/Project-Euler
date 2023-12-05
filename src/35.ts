import { sieve } from "./util";

const isCircularPrime = (primeNum: number, isPrimeArr: boolean[]): boolean => {
  const len = primeNum.toString().length; // get the length of the prime number

  let circularPrime = primeNum;

  for (let i = 0; i < len; i += 1) {
    const circularPrimeStr = circularPrime.toString(); // convert the number to string

    circularPrime = Number(
      circularPrimeStr.slice(-1) + circularPrimeStr.slice(0, -1) // put the last digit of the prime no. at first
    );

    if (!isPrimeArr[circularPrime]) return false; // if the no. formed is not prime, then not a circular prime
  }

  return true;
};

const circularPrimes = (M: number): number => {
  const [primeArr, isPrimeArr] = sieve(M); // get all prime numbers below 1 million
  const n = primeArr.length;

  let answer = 0;

  for (let i = 0; i < n; i += 1) {
    const primeNum = primeArr[i];

    if (isCircularPrime(primeNum, isPrimeArr)) answer += 1; // it is a circular prime, increase the count
  }

  return answer;
};

console.time();
const M = 1_000_001;
console.log(circularPrimes(M));
console.timeEnd();
