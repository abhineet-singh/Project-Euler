import { getHCF } from "./util";

const countingFractionsInARange = (M: number): number => {
  let answer = 0;

  for (let d = 4; d <= M; d += 1) {
    // since the fractions should be greater than 1/3, we need to only check
    // numbers which will produce ratio greater than 1/3
    const start = Math.ceil(d / 3);

    for (let n = start; 2 * n < d; n += 1) {
      if (getHCF(d, n) === 1) {
        answer += 1;
      }
    }
  }

  return answer;
};

console.time();
const M = 12_000;
console.log(countingFractionsInARange(M));
console.timeEnd();
