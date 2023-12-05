import { genericForDigitsOfANumber } from "./util";

const fifthPower = (currAnswer: number, digit: number): number => {
  return currAnswer + digit ** 5;
};

const digitFifthPowers = (): number => {
  let answer = 0;

  for (let num = 2; num < 1_000_000; num += 1) {
    const sum = genericForDigitsOfANumber(num, 0, fifthPower);

    if (sum === num) {
      answer += sum;
    }
  }

  return answer;
};

// for 999_999, sum of fifth power of digits is 354_294
// implying, after that no num will have sum of fifth power of its digits equal to that num

console.time();
console.log(digitFifthPowers());
console.timeEnd();
