import { calcLargeFactorial } from "./util";

const factorialDigitSum = (A: number): number => {
  const digits = calcLargeFactorial(A);

  return digits.reduce((sum: number, digit) => sum + digit);
};

console.time();
console.log(factorialDigitSum(100));
console.timeEnd();
