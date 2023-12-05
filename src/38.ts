const isPandigital = (num: number): boolean => {
  const digitFrequencyArr: number[] = Array.from({ length: 10 }, () => 0);
  let pandigitalNum = num;

  // count frequency of each digit in number

  while (pandigitalNum) {
    const mod = pandigitalNum % 10;

    digitFrequencyArr[mod] += 1;

    pandigitalNum = Math.floor(pandigitalNum / 10);
  }

  // if frequency of any digit is != 1, then it is not a pandigital number

  if (digitFrequencyArr[0] !== 0) return false;

  for (let i = 1; i < 10; i += 1) {
    if (digitFrequencyArr[i] !== 1) return false;
  }

  return true;
};

const panDigitalMultiples = (): number => {
  const M = 10_000;
  let answer = 0;

  // for each number till 10,000
  for (let i = 1; i < M; i += 1) {
    let productStr = "";

    // multiply it to (1,2,3,4 ... so on till 9)
    for (let n = 1; n < 10; n += 1) {
      const p = n * i;

      // append the product to a string
      productStr += p;

      // at each step check if formed string is pandigital
      if (isPandigital(Number(productStr))) {
        // check if formed pandigital number is greater than current answer
        answer = Math.max(answer, Number(productStr));
      }
    }
  }

  return answer;
};

// only need to check till 10,000, since any number greater than that cannot provide the answer
// since any 5-digit multiply by 1 and 2 will result at least two 5-digit numbers
// for example (18233 * 1 = 18233 and 18233 * 2 = 36466)
// hence the entire pandigital number (1823336466) will be greater than 9-digits

console.time();
console.log(panDigitalMultiples());
console.timeEnd();

export {};
