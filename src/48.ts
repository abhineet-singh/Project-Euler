// answer = SUM of p^p, for every p <= M

const selfPowers = (M: number): number => {
  const MOD = 10_000_000_000;
  let answer = 0;

  // for every p <= M
  for (let p = 1; p <= M; p += 1) {
    let powerAns = 1;

    // calculates (p ^ p)
    for (let i = 1; i <= p; i += 1) {
      powerAns = ((powerAns % MOD) * (p % MOD)) % MOD;
    }

    answer = ((answer % MOD) + (powerAns % MOD)) % MOD; // adds (p ^ p) to the answer
  }

  return answer;
};

console.time();
const M = 1_000;
console.log(selfPowers(M));
console.timeEnd();

export {};
