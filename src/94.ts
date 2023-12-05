import { getHCF } from "./util";

const almostEquilateralTriangles = (M: number): number => {
  let answer = 0;

  for (let m = 1; m * m <= M; m += 1) {
    const start = m % 2 === 0 ? 1 : 2;

    for (let n = start; n < m; n += 2) {
      // generate a pythagorean triplet
      const a = m * m - n * n;
      const b = 2 * m * n;
      const c = m * m + n * n;

      // now there can be 2 perimeters for this problem
      // first triangle with side (c, c, 2 * b), perimeter will be 2 * (b + c)
      const p1 = 2 * (b + c);

      // second triangle with side (c, c, 2 * a), perimeter will be 2 * (a + c)
      const p2 = 2 * (a + c);

      // now if both of these perimeters are greater than 1 billion, break;
      if (p1 > M && p2 > M) break;

      let tempSum = 0;

      // else check if this triplet satisfies the condition or not
      if (Math.abs(2 * b - c) === 1) tempSum += p1;

      if (Math.abs(2 * a - c) === 1) tempSum += p2;

      // if this triplet satisfies the condition,
      // check whether they are primitive pythagorean triplet or not
      if (tempSum && getHCF(m, n) === 1) answer += tempSum;
    }
  }

  return answer;
};

// consider a right angle triangle (a,b,c), with c as hypotenuse
// now if one of the other side (a or b) is doubled (2*a or 2*b)
// is equal to c, solution is found for this given problem
console.time();
console.log(almostEquilateralTriangles(1_000_000_000));
console.timeEnd();
