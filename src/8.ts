import data from "../data/8";

const largestProductInASeries = (M: number): number => {
  const len = data.length;
  let answer = -1;
  let product = 1;
  let zeroCount = 0;

  for (let i = 0; i < len; i += 1) {
    const a = Number(data[i]);

    if (a) product *= a;
    else zeroCount += 1;

    if (i - M + 1 >= 0) {
      if (!zeroCount) answer = Math.max(answer, product);

      const left = Number(data[i - M + 1]);

      if (left) product /= left;
      else zeroCount -= 1;
    }
  }

  return answer;
};

console.time();
const M = 13;
console.log(largestProductInASeries(M));
console.timeEnd();
