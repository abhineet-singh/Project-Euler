import { getSumOfDivisors } from "./util";

const amicableNumbers = (M: number): number => {
  let answer = 0;

  for (let A = 2; A <= M; A += 1) {
    const B = getSumOfDivisors(A) - A; // subtracting A to get sum of proper divisors

    const C = getSumOfDivisors(B) - B;

    if (C === A && C !== B) {
      answer += A;
    }
  }

  return answer;
};

console.time();
const M = 10_000;
console.log(amicableNumbers(M));
console.timeEnd();
