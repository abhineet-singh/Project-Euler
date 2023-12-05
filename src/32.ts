const countDigits = (n: number, digitsFrequencyArr: number[]): number[] => {
  let num = n;
  const digitsArr = digitsFrequencyArr;

  while (num) {
    const a = num % 10;

    digitsArr[a] += 1;

    num = Math.floor(num / 10);
  }

  return digitsArr;
};

const check = (present: number[]): boolean => {
  if (present[0] !== 0) return false;

  for (let i = 1; i < 10; i += 1) {
    // if any digit has frequency not equal to 1, it is not a pan digital no.
    if (present[i] !== 1) return false;
  }

  return true;
};

const panDigital = (): number => {
  const answerSet: Set<number> = new Set();

  // i -> number of digits in a
  for (let i = 1; i <= 2; i += 1) {
    const n = 10 ** (4 - i); // lowerBound for x
    const m = 10 ** (4 - i + 1); // upperBound for x

    const a0 = 10 ** (i - 1); // lowerBound for a
    const a1 = 10 ** i; // upperBound for a

    for (let a = a0; a < a1; a += 1) {
      for (let j = n; j < m; j += 1) {
        let digitsFrequencyArr = Array.from({ length: 10 }, () => 0);
        const product = a * j;

        digitsFrequencyArr = countDigits(a, digitsFrequencyArr);
        digitsFrequencyArr = countDigits(j, digitsFrequencyArr);
        digitsFrequencyArr = countDigits(product, digitsFrequencyArr);

        if (check(digitsFrequencyArr)) answerSet.add(product);
      }
    }
  }

  return Array.from(answerSet).reduce((sum, n) => sum + n);
};

// a * x = y

// if a is 1 digit number (1-9)     x must be (1000 - 9999)
// if a is 2 digit (10 -99)         x must be (100 - 999)
// if a is 3 digit (100 - 999 )     x must be (10 -99) repeating 2nd case
// if a is 4 digit (1000 - 9999)    x must be (1-9) repeating 1st case

// if a is 5 digit, product y will also be at least 5 digit number,
// therefore, sum of digits of a and y will be greater than 9,
// hence a >= 5 digit number will never result in an answer.

console.time();
console.log(panDigital());
console.timeEnd();

export {};
