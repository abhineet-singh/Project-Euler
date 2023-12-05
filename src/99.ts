import baseExponentArr from "../data/99";

const largestExponential = (): number => {
  const len = baseExponentArr.length;
  let answer = 0;
  let maxLogValue = 0;

  for (let i = 0; i < len; i += 1) {
    const [base, exponent] = baseExponentArr[i];

    const val = Math.log10(base) * exponent;

    if (val > maxLogValue) {
      maxLogValue = val;
      answer = i + 1;
    }
  }

  return answer;
};

console.time();
console.log(largestExponential());
console.timeEnd();
