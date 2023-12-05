const numberSpiralDiagonals = (M: number): number => {
  let answer = 1; // spiral starts with 1

  for (let sideLength = 3; sideLength <= M; sideLength += 2) {
    let diagonalValue = sideLength ** 2; // each spiral ends with (side ^ 2)

    answer += diagonalValue;

    // calculating the value of the previous 3 diagonals
    for (let i = 1; i <= 3; i += 1) {
      diagonalValue -= sideLength - 1;

      answer += diagonalValue;
    }
  }

  return answer;
};

console.time();
const M = 1_001;
console.log(numberSpiralDiagonals(M));
console.timeEnd();

export {};
