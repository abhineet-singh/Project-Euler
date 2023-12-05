const combinatoricsSelections = (M: number, upperBound: number): number => {
  let answer = 0;

  for (let num = 1; num <= upperBound; num += 1) {
    const half = Math.floor(num / 2);
    let product = 1;
    let divisor = 1;

    for (let r = 1; r <= half; r += 1) {
      product *= num - (r - 1);
      divisor *= r;

      const nCr = product / divisor;

      if (nCr > M) {
        const removeVal = 2 * (r - 1) + 1;
        answer += num - removeVal;
        break;
      }
    }
  }

  return answer;
};

console.time();
const M = 1_000_000;
const UPPER_BOUND = 100;
console.log(combinatoricsSelections(M, UPPER_BOUND));
console.timeEnd();

export {};
