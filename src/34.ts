import { genericForDigitsOfANumber } from "./util";

const fact: Record<string, number> = {};
fact[0] = 1;

for (let i = 1; i < 10; i += 1) fact[i] = fact[i - 1] * i;

const factorialOfDigit = (currAnswer: number, digit: number): number => {
  return currAnswer + fact[digit];
};

const digitFactorials = (): number => {
  let answer = 0;

  for (let num = 3; num < 10_000_000; num += 1) {
    const sum = genericForDigitsOfANumber(num, 0, factorialOfDigit);

    if (sum === num) answer += sum;
  }

  return answer;
};

// let C = 9_999_999
// for C, sum of factorial of digits is 2_540_160,
// after C, maximum number that can be added to the sum of factorial of digits is 362_880 (9!)
// which still be way less than the actual number
// implying after C, that no number will have the sum of factorial of digits equal to that num.

console.time();
console.log(digitFactorials());
console.timeEnd();
