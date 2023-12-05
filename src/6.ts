const sumSquareDifference = (n: number): number => {
  // sum of squares of first n natural numbers = n * (n + 1) * (2*n + 1) / 6;
  const a = (n * (n + 1) * (2 * n + 1)) / 6;

  // sum of first n natural numbers = n * (n + 1) / 2;
  const b = (n * (n + 1)) / 2;

  return b * b - a;
};

console.time();
const M = 100;
console.log(sumSquareDifference(M));
console.timeEnd();

export {};
