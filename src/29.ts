import { calcLargePower } from "./util";

const distinctPowers = (M: number): number => {
  const distinctPowersSet: Set<string> = new Set();

  for (let a = 2; a <= M; a += 1) {
    for (let b = 2; b <= M; b += 1) {
      const pow = calcLargePower(a, b).join("");

      distinctPowersSet.add(pow);
    }
  }

  const answer = distinctPowersSet.size;

  return answer;
};

console.time();
const M = 100;
console.log(distinctPowers(M));
console.timeEnd();
