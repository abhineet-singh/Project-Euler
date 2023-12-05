import { calcLargePower } from "./util";

const powerfulDigitSum = (M: number): number => {
  let answer = 0;

  for (let a = 1; a < M; a += 1) {
    for (let b = 1; b < M; b += 1) {
      const powerValue = calcLargePower(a, b); // calculates a^b

      const sumOFDigits = powerValue.reduce((sum, digit) => {
        return sum + digit;
      }, 0);

      answer = Math.max(answer, sumOFDigits);
    }
  }

  return answer;
};

console.time();
console.log(powerfulDigitSum(100));
console.timeEnd();
