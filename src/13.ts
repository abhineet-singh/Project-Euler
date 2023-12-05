import data from "../data/13";
import { addStrings } from "./util";

const largeSum = (M: number): string => {
  const len = data.length;

  let answer = "";

  for (let i = 0; i < len; i += 1) {
    answer = addStrings(answer, data[i]);
  }

  return answer.slice(0, M);
};

console.time();
const M = 10;
console.log(largeSum(M));
console.timeEnd();
