const calcCycleLength = (divisor: number): number => {
  // keeps track of the remainder and the position that they are occurring in
  const remPosition: Record<string, number> = {};

  let dividend = 1;

  for (let currPos = 1; ; currPos += 1) {
    const rem = dividend % divisor;

    if (rem === 0) return 0;

    if (remPosition[rem]) {
      return currPos - remPosition[rem];
    }

    // store the remainder and the position at which they occur
    // so if the same remainder occurs again, it will indicate the recurring cycle
    remPosition[rem] = currPos;

    dividend = rem * 10;
  }
};

const reciprocalCycles = (M: number): number => {
  let answer = 0;
  let maxLength = -1;

  for (let d = 2; d < M; d += 1) {
    const len = calcCycleLength(d);

    if (len > maxLength) {
      maxLength = len;
      answer = d;
    }
  }

  return answer;
};

console.time();
console.log(reciprocalCycles(1_000));
console.timeEnd();

export {};
