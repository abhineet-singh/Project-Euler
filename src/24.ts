import { generatePermutations } from "./util";

const lexicographicPermutations = (str: string, M: number): string => {
  const answer: string[] = [];

  generatePermutations(str, 0, answer);
  answer.sort();

  return answer[M - 1];
};

console.time();
const M = 1_000_000;
console.log(lexicographicPermutations("0123456789", M));
console.timeEnd();
