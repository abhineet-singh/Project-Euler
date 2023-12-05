import { sieve } from "./util";

const quadraticPrime = (M: number): number => {
  const [primeArr] = sieve(M);

  const n = primeArr.length;
  let answer = 0;

  for (let i = 0; i < n; i += 1) answer += primeArr[i];

  return answer;
};

console.time();
const M = 2_000_001;
console.log(quadraticPrime(M));
console.timeEnd();
