import { calcLargePower } from "./util";

const powerfulDigitCounts = (): number => {
  let answer = 0;

  for (let base = 1; base < 10; base += 1) {
    for (let exponent = 1; exponent <= 30; exponent += 1) {
      const power = calcLargePower(base, exponent);

      if (exponent === power.length) {
        answer += 1;
      }
    }
  }

  return answer;
};

// If the base is greater than 9, we will never get an answer
// because the digit/exponent ratio will always be greater than 1
console.time();
console.log(powerfulDigitCounts());
console.timeEnd();
