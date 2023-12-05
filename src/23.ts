import { getSumOfDivisors } from "./util";

const nonAbundantSums = (): number => {
  const UPPER_LIMIT = 28123;

  const abundantNumObj: Record<string, boolean> = {};
  const abundantNumArr: number[] = [];

  // find and store all the abundant numbers below upper limit
  for (let i = 2; i <= UPPER_LIMIT; i += 1) {
    const sumOfProperDivisors = getSumOfDivisors(i) - i;

    if (sumOfProperDivisors > i) {
      abundantNumObj[i] = true;
      abundantNumArr.push(i);
    }
  }

  const len = abundantNumArr.length;
  let answer = 0;

  //  iterate over each number till upper limit
  for (let num = 1; num <= UPPER_LIMIT; num += 1) {
    let isCombinationFound = false;

    // now iterate over array of abundant numbers
    for (let j = 0; j < len; j += 1) {
      const abundantNum = abundantNumArr[j];

      if (abundantNum >= num) break;

      // and check if a sum of 2 abundant numbers = num exists or not
      if (abundantNumObj[num - abundantNum]) {
        isCombinationFound = true;
        break;
      }
    }

    if (!isCombinationFound) answer += num;
  }

  return answer;
};

console.time();
console.log(nonAbundantSums());
console.timeEnd();
