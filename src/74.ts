import { genericForDigitsOfANumber } from "./util";

const fact: Record<string, number> = {}; // store the factorial of each digit from 0 to 9.
fact[0] = 1;

// calculate the factorial of digits from 1 to 9
for (let i = 1; i < 10; i += 1) fact[i] = fact[i - 1] * i;

// store the chain length of each number
const memo: Record<string, number> = {};

// returns the sum of the factorials of its digits
const factOfDigit = (currAnswer: number, digit: number): number => {
  return currAnswer + fact[digit];
};

const calcChainLength = (num: number, numVisited: Set<number>): number => {
  // if the number has already been visited return 0
  if (numVisited.has(num)) return 0;

  // If the chain length of the number is already in the record, return that value
  if (memo[num]) return memo[num];

  // Otherwise, add the number to the set of visited numbers
  numVisited.add(num);

  const len = calcChainLength(
    genericForDigitsOfANumber(num, 0, factOfDigit),
    numVisited
  );
  memo[num] = 1 + len;

  return memo[num];
};

const digitFactorialChains = (M: number): number => {
  let answer = 0;

  for (let num = 1; num < M; num += 1) {
    const numVisited: Set<number> = new Set();
    const length = calcChainLength(num, numVisited);

    if (length === 60) answer += 1;
  }

  return answer;
};

console.time();
const M = 1_000_000;
console.log(digitFactorialChains(M));
console.timeEnd();
