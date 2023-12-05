import { checkForPentagonalNumber } from "./util";

const pentagonNumbers = (): number => {
  // minDiff stores the difference of a pair of pentagonal number
  // whose sum and difference is also pentagonal
  let minDiff = Number.MAX_SAFE_INTEGER;

  // stores the generated pentagonal numbers
  const pentagonNumbersArr: number[] = [];

  // flag determines whether to continue search for a pair or not
  let continueSearch = true;

  for (let k = 1; ; k += 1) {
    const len = pentagonNumbersArr.length;

    // generate a new pentagonal number Pk
    const Pk = (k * (3 * k - 1)) / 2;

    // starting from last
    for (let j = len - 1; j >= 0; j -= 1) {
      // get a previously generated pentagonal number Pj
      const Pj = pentagonNumbersArr[j];

      // find the sum and difference with Pk
      const currDiff = Pk - Pj;
      const currSum = Pk + Pj;

      if (currDiff < minDiff) {
        if (
          checkForPentagonalNumber(currDiff) &&
          checkForPentagonalNumber(currSum)
        ) {
          minDiff = currDiff;
        }
      }
      // if the current difference is larger than minDiff
      else {
        // If it is the first comparison for Pk and difference is larger than the minDiff
        // stop searching for the answer since going ahead the difference will only increase
        if (j === len - 1) continueSearch = false;

        break;
      }
    }

    // store the newly generated pentagonal number
    pentagonNumbersArr.push(Pk);

    if (!continueSearch) break;
  }

  return minDiff;
};

console.time();
console.log(pentagonNumbers());
console.timeEnd();
