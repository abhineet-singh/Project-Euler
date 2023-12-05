import { getSquareRoot, isPerfectSquare } from "./util";

const integerRightTriangles = (M: number): number => {
  const perimeterSolCountObj: Record<string, number> = {};

  for (let a = 1; a < M; a += 1) {
    for (let b = a + 1; b < M; b += 1) {
      const squareSum = a * a + b * b;

      if (isPerfectSquare(squareSum)) {
        const c = getSquareRoot(squareSum);

        const p = a + b + c;

        if (p <= M)
          perimeterSolCountObj[p] = (perimeterSolCountObj[p] || 0) + 1;
      }
    }
  }

  let maxSol = -1;
  let answer = 0;

  Object.entries(perimeterSolCountObj).forEach(([perimeter, solutionCount]) => {
    if (solutionCount > maxSol) {
      maxSol = solutionCount;
      answer = Number(perimeter);
    }
  });

  return answer;
};

console.time();
const M = 1_000;
console.log(integerRightTriangles(M));
console.timeEnd();
