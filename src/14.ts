const memo: Record<string, number> = {};
memo[1] = 0;

const storeCount = (num: number): void => {
  if (memo[num] !== undefined) return; // if the length of the chain is already calculated, return

  const nextNum = num % 2 === 0 ? num / 2 : 3 * num + 1;

  storeCount(nextNum);

  memo[num] = memo[nextNum] + 1;
};

const longestCollatzSequence = (M: number): number => {
  let answer = -1;
  let longestChain = -1;

  for (let i = 1; i <= M; i += 1) {
    storeCount(i);

    if (memo[i] > longestChain) {
      longestChain = memo[i];
      answer = i;
    }
  }

  return answer;
};

console.time();
const M = 1_000_000;
console.log(longestCollatzSequence(M));
console.timeEnd();
