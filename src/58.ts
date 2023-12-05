import { isPrime } from "./util";

const spiralPrimes = (): number => {
  // total diagonal number checked starts with 1, to include first layer diagonal value 1.
  let totalDiagonalNumberChecked = 1;
  let count = 0;

  // let side = length of square spiral, Length of the square spiral increases by 2,
  for (let side = 3; ; side += 2) {
    // each layer of the spiral always ends on a diagonal, with value = (side ^ 2)
    let diagonalValue = side * side;

    for (let k = 1; k <= 3; k += 1) {
      diagonalValue = diagonalValue - side + 1; // calculate the previous 3 diagonals

      if (isPrime(diagonalValue)) count += 1;
    }

    totalDiagonalNumberChecked += 4; // generated 4 diagonals, increase count by 4

    const percentage = (count / totalDiagonalNumberChecked) * 100;

    if (percentage < 10.0) return side;
  }
};

console.time();
console.log(spiralPrimes());
console.timeEnd();
