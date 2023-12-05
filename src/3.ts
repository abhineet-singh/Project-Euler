import { getPrimeFactors } from "./util";

const largestPrimeFactor = (M: number): number => {
  const primeFactorArr = getPrimeFactors(M);

  return primeFactorArr.slice(-1)[0];
};

console.time();
const M = 600851475143;
console.log(largestPrimeFactor(M));
console.timeEnd();
