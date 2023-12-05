const sieve = (M: number): number[] => {
  const distinctPrimeFactors: number[] = Array.from({ length: M }, () => 0);

  for (let p = 2; p < M; p += 1) {
    if (distinctPrimeFactors[p] === 0) {
      for (let i = p * 2; i < M; i += p) distinctPrimeFactors[i] += 1;
    }
  }

  return distinctPrimeFactors;
};

const distinctPrimeFactors = (M: number): number => {
  const LEN = 1_000_001;
  const distinctPrimeFactorsArr = sieve(LEN); // get count of distinct prime factors for each no. upto 1 million

  let count = 0;

  // iterate over each number
  for (let i = 2; i < LEN; i += 1) {
    // if current number has M distinct prime factors
    if (distinctPrimeFactorsArr[i] === M) {
      count += 1;

      if (count === M) return i - M + 1;
    } else count = 0;
  }

  return -1;
};

console.time();
const M = 4;
console.log(distinctPrimeFactors(M));
console.timeEnd();

export {};
