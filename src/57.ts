import { addStrings } from "./util";

const squareRootConvergents = (M: number): number => {
  let numerator = "3";
  let denominator = "2";
  let answer = 0;
  let iterationCount = 1;

  while (iterationCount <= M) {
    if (numerator.length > denominator.length) {
      answer += 1;
    }

    const twoTimesDenominator = addStrings(denominator, denominator);
    const nextNumerator = addStrings(twoTimesDenominator, numerator); // 2 * denominator + numerator

    const nextDenominator = addStrings(numerator, denominator); // numerator + denominator

    denominator = nextDenominator;
    numerator = nextNumerator;

    iterationCount += 1;
  }

  return answer;
};

// let i'th expansion of the series in fraction is given as (num / den)
// then (i + 1)'th expansion in fraction can be written as 1 + (1 / (1 + (num / den) ) )

// or by simplifying we get (i + 1)'th expansion = (2 * den + num) / (num + den)

console.time();
const M = 1_000;
console.log(squareRootConvergents(M));
console.timeEnd();
