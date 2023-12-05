import { partition } from "./util";

const countingSummations = (M: number): number => {
  // generate an array with values from 1 to M
  const options = Array.from({ length: M }, (_, idx) => idx + 1);

  const ways = partition(options, M);

  // subtract 1 to exclude case of having (M + 0) as one way
  return ways[M] - 1;
};

console.time();
console.log(countingSummations(100));
console.timeEnd();
