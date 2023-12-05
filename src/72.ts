import { getEulerTotientValue } from "./util";

const countingFractions = (M: number): number => {
  let answer = 0;

  for (let num = 2; num <= M; num += 1) {
    answer += getEulerTotientValue(num);
  }

  return answer;
};

console.time();
const M = 1_000_000;
console.log(countingFractions(M));
console.timeEnd();
