import { partition } from "./util";

const primeSummations = (): number => {
  const options = [1, 2, 5, 10, 20, 50, 100, 200];

  const ways = partition(options, 200);

  return ways[200];
};

console.time();
console.log(primeSummations());
console.timeEnd();
