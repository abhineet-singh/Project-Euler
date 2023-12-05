import { getSumOfDivisors } from "./util";

// stores the sum of proper of divisors for a given value
const memo: Record<string, number> = {};

const getSumOfProperDivisors = (num: number): number => {
  if (memo[num] === undefined) {
    memo[num] = getSumOfDivisors(num) - num;
  }

  return memo[num];
};

const checkChain = (
  startingPoint: number,
  currentNum: number,
  numVisited: Set<number>
): boolean => {
  // if starting point of the chain is equal to current number we have found a amicable chain
  if (startingPoint === currentNum) return true;

  // if current number is greater than 1 million or equal to 1, terminate the chain
  if (currentNum > 1_000_000 || currentNum === 1) return false;

  // if the current number is already seen in the chain, a loop has occurred terminate the chain
  if (numVisited.has(currentNum)) return false;

  // if above conditions are not true, add the current number to the chain
  numVisited.add(currentNum);

  const result = checkChain(
    startingPoint,
    getSumOfProperDivisors(currentNum),
    numVisited
  );

  return result;
};

const amicableChains = (M: number): number => {
  let answer = Number.MAX_SAFE_INTEGER;
  let maxChainLength = -1;

  for (let i = 10; i <= M; i += 1) {
    const numVisited: Set<number> = new Set();
    numVisited.add(i);

    const result = checkChain(i, getSumOfProperDivisors(i), numVisited);

    // if a particular number, results a amicable chain
    if (result) {
      const numInChain = Array.from(numVisited);

      const minValueInChain = Math.min(...numInChain);

      if (numInChain.length > maxChainLength) {
        maxChainLength = numInChain.length;
        answer = minValueInChain;
      }
    }
  }

  return answer;
};

console.time();
console.log(amicableChains(1_000_000));
console.timeEnd();
