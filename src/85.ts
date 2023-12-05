const countingRectangles = (M: number): number => {
  let answer = 0;
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i * i <= M; i += 1) {
    for (let j = 1; j * j <= M; j += 1) {
      const numOfRectangles = (i * (i + 1) * j * (j + 1)) / 4;

      const currDiff = Math.abs(M - numOfRectangles);

      if (currDiff < minDiff) {
        minDiff = currDiff;
        answer = i * j;
      }
    }
  }

  return answer;
};

// total number of rectangles in a (m x n) rectangle is given by ( m * (m + 1) * n * (n + 1) ) / 4

console.time();
const M = 2_000_000;
console.log(countingRectangles(M));
console.timeEnd();

export {};
