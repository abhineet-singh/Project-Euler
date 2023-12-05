import { getLCM } from "./util";

const smallestMultiple = (M: number): number => {
  let answer = 1;

  // smallest number divisible by 1 to M = LCM of 1 to M;
  for (let i = 1; i <= M; i += 1) {
    answer = getLCM(answer, i);
  }

  return answer;
};

console.time();
const M = 20;
console.log(smallestMultiple(M));
console.timeEnd();
