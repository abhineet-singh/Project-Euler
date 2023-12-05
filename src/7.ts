import { sieve } from "./util";

const findPrime = (M: number): number => {
  const LEN = 1_000_001;
  const [primeArr] = sieve(LEN); // get all prime numbers upto 1 million

  return primeArr[M - 1]; // M - 1 as primeArr starts with 0th index
};

console.time();
const M = 10_001;
console.log(findPrime(M));
console.timeEnd();
