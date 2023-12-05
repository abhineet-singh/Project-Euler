const hasSameDigits = (num: number, multiple: number): boolean => {
  const digitsFrequencyArr: number[] = Array.from({ length: 10 }, () => 0);

  let a = num;
  while (a) {
    const mod = a % 10;

    digitsFrequencyArr[mod] += 1;

    a = Math.floor(a / 10);
  }

  a = multiple;
  while (a) {
    const mod = a % 10;

    digitsFrequencyArr[mod] -= 1;

    a = Math.floor(a / 10);
  }

  for (let i = 0; i < 10; i += 1) {
    if (digitsFrequencyArr[i] !== 0) return false;
  }

  return true;
};

const permutedMultiples = (M: number): number => {
  for (let i = 1; ; i += 1) {
    let isAnswer = true;

    for (let multiplier = 2; multiplier <= M; multiplier += 1) {
      if (!hasSameDigits(i, i * multiplier)) {
        isAnswer = false;
        break;
      }
    }

    if (isAnswer) return i;
  }
};

console.time();
const M = 6;
console.log(permutedMultiples(M)); // for M = 3,4,5,6, answer is same
console.timeEnd();

export {};
