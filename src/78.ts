const coinPartitions = (M: number): number => {
  const ways = Array.from({ length: M + 1 }, () => 0);
  ways[0] = 1;

  const oneMillion = 1_000_000;

  for (let i = 1; i <= M; i += 1) {
    for (let num = i; num <= M; num += 1) {
      ways[num] = (ways[num] + ways[num - i]) % oneMillion;
    }

    if (ways[i] === 0) return i;
  }

  return -1;
};

// found the upper limit of 60,000 after trail and error method
console.time();
console.log(coinPartitions(60_000));
console.timeEnd();

export {};
