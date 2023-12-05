import { getEulerTotientValue, sortNumber } from "./util";

const isPermutation = (a: number, b: number): boolean => {
  return sortNumber(a) === sortNumber(b);
};

const totientPermutation = (M: number): number => {
  let minNum = Number.MAX_SAFE_INTEGER;
  let minDen = 1;

  for (let num = 2; num <= M; num += 1) {
    const phiOfNum = getEulerTotientValue(num);

    if (isPermutation(num, phiOfNum) && num / phiOfNum < minNum / minDen) {
      minNum = num;
      minDen = phiOfNum;
    }
  }

  return minNum;
};

console.time();
const M = 10_000_000;
console.log(totientPermutation(M));
console.timeEnd();
