import { partition, sieve } from "./util";

const primeSummations = (): number => {
  const [options] = sieve(100);

  const ways = partition(options, 100);

  for (let i = 0; i < ways.length; i += 1) {
    if (ways[i] >= 5_000) return i;
  }

  return -1;
};

console.time();
console.log(primeSummations());
console.timeEnd();
