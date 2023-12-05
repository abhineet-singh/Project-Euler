import { calcLargePower } from "./util";

const powerDigitSum = (A: number, B: number): number => {
  const digits = calcLargePower(A, B);

  return digits.reduce((sum: number, digit) => sum + digit);
};

console.time();
console.log(powerDigitSum(2, 1000));
console.timeEnd();
