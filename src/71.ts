import { getHCF } from "./util";

const orderedFractions = (M: number): number => {
  let minRatio = 0.1;
  let minDiff = 1.0;
  let answer = 0;

  for (let d = 10; d <= M; d += 1) {
    // Since we already find a fraction stored in minRatio which is close to 3/7
    // we only need to check fractions which will be greater than the minimum fraction
    const start = Math.floor(d * minRatio);

    for (let n = start; n < d; n += 1) {
      if (n / d > 3 / 7) break;

      // reduced proper fractions have hcf as 1
      if (getHCF(d, n) === 1) {
        const currRatio = n / d;

        // check how close this fraction is to 3/7
        const currDiff = 3 / 7 - currRatio;

        // if curr fraction is more close to 3/7 than previous fractions, store the current fraction and diff
        if (currDiff < minDiff) {
          // difference is used to compare with other fractions, which one is more close to 3/7
          minDiff = currDiff;

          // fraction is used to generate starting point for next number
          minRatio = currRatio;
          answer = n;
        }
      }
    }
  }

  return answer;
};

console.time();
const M = 1_000_000;
console.log(orderedFractions(M));
console.timeEnd();
