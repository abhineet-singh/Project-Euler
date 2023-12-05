import { genericForDigitsOfANumber } from "./util";

const memo: Record<string, boolean> = {};
memo[1] = false;
memo[89] = true;

const squareOfDigit = (currAnswer: number, digit: number): number => {
  return currAnswer + digit * digit;
};

const checkChain = (num: number): boolean => {
  if (memo[num] !== undefined) return memo[num];

  memo[num] = checkChain(genericForDigitsOfANumber(num, 0, squareOfDigit));

  return memo[num];
};

const squareDigitChains = (M: number): number => {
  let answer = 0;

  for (let num = 1; num < M; num += 1) {
    const result = checkChain(num);

    answer += result ? 1 : 0;
  }

  return answer;
};

console.time();
const M = 10_000_000;
console.log(squareDigitChains(M));
console.timeEnd();
