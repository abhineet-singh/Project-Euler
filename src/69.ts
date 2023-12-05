import { getEulerTotientValue } from "./util";

const totientMaximum = (M: number): number => {
  let maxNum = 1;
  let maxDen = 1;

  for (let num = 2; num <= M; num += 1) {
    const phiOfNum = getEulerTotientValue(num);

    if (num / phiOfNum > maxNum / maxDen) {
      maxDen = phiOfNum;
      maxNum = num;
    }
  }

  return maxNum;
};

console.time();
const M = 1_000_000;
console.log(totientMaximum(M));
console.timeEnd();
