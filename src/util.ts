export const getSquareRoot = (num: number): number => {
  return Math.floor(Math.sqrt(num));
};

export const isPerfectSquare = (num: number): boolean => {
  const sqrt = getSquareRoot(num);

  return sqrt * sqrt === num;
};

export const sieve = (M: number): [number[], boolean[]] => {
  const isPrimeArr = Array.from({ length: M }, () => true);
  const primeArr: number[] = [];

  isPrimeArr[0] = false;
  isPrimeArr[1] = false;

  for (let p = 2; p < M; p += 1) {
    if (isPrimeArr[p]) {
      primeArr.push(p);

      for (let i = p * p; i < M; i += p) isPrimeArr[i] = false;
    }
  }

  return [primeArr, isPrimeArr];
};

export const getPrimeFactors = (M: number): number[] => {
  const answer: number[] = [];
  let num = M;

  while (num % 2 === 0) {
    answer.push(2);

    num /= 2;
  }

  for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
      answer.push(i);

      num /= i;
    }
  }

  if (num > 2) answer.push(num);

  return answer;
};

export const getNumberOfDivisors = (num: number): number => {
  const primeFactorsArr = getPrimeFactors(num);
  const n = primeFactorsArr.length;

  const primeFactorPowerObj: Record<number, number> = {};

  for (let i = 0; i < n; i += 1) {
    const pf = primeFactorsArr[i];

    primeFactorPowerObj[pf] = (primeFactorPowerObj[pf] || 0) + 1;
  }

  /* if prime factorization of num = (p1^a1)*(p2^a2)...(pn*an)
     number of divisors of num = (a1 + 1)*(a2 + 1)...(an + 1)   */

  return Object.values(primeFactorPowerObj).reduce((answer: number, count) => {
    return answer * (count + 1);
  }, 1);
};

export const getSumOfDivisors = (n: number): number => {
  let num = n;
  let answer = 1;

  /* if prime factorization of num = (p1^a1)*(p2^a2)...(pn*an)
     sum of divisors of num = (p1^(a1 + 1) - 1) / (p1 - 1)*....   */

  let count = 0;
  while (num % 2 === 0) {
    count += 1;

    num /= 2;
  }

  answer *= (2 ** (count + 1) - 1) / (2 - 1);

  for (let i = 3; i * i <= num; i += 2) {
    count = 0;

    while (num % i === 0) {
      count += 1;

      num /= i;
    }

    answer *= (i ** (count + 1) - 1) / (i - 1);
  }

  if (num > 2) {
    answer *= (num ** (1 + 1) - 1) / (num - 1);
  }

  return answer;
};

export const getEulerTotientValue = (M: number): number => {
  let answer = M;
  let num = M;

  if (num % 2 === 0) {
    answer /= 2;
  }

  while (num % 2 === 0) num /= 2;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      answer = (answer * (i - 1)) / i;
    }

    while (num % i === 0) num /= i;
  }

  if (num > 2) answer = (answer * (num - 1)) / num;

  return answer;
};

export const isPrime = (num: number): boolean => {
  if (num < 2) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

// A ^ B
export const calcLargePower = (A: number, B: number): number[] => {
  const digits: number[] = [1];

  for (let i = 1; i <= B; i += 1) {
    const len = digits.length;
    let carry = 0;

    for (let a = 0; a < len; a += 1) {
      const product = digits[a] * A + carry;

      digits[a] = product % 10;

      carry = Math.floor(product / 10);
    }

    while (carry) {
      digits.push(carry % 10);

      carry = Math.floor(carry / 10);
    }
  }

  return digits.reverse();
};

export const calcLargeFactorial = (A: number): number[] => {
  if (A === 0) return [0];

  const digits: number[] = [1];

  for (let i = 2; i <= A; i += 1) {
    const len = digits.length;
    let carry = 0;

    for (let a = 0; a < len; a += 1) {
      const product = digits[a] * i + carry;

      digits[a] = product % 10;

      carry = Math.floor(product / 10);
    }

    while (carry) {
      digits.push(carry % 10);

      carry = Math.floor(carry / 10);
    }
  }

  return digits.reverse();
};

export const isPalindrome = (num: number | string): boolean => {
  const numStr = num.toString();
  let left = 0;
  let right = numStr.length - 1;

  while (left < right) {
    if (numStr[left] !== numStr[right]) return false;

    left += 1;
    right -= 1;
  }

  return true;
};

export const getHCF = (a: number, b: number): number => {
  if (b === 0) return a;

  return getHCF(b, a % b);
};

export const getLCM = (a: number, b: number): number => {
  return (a * b) / getHCF(a, b);
};

export const reverseString = (a: string): string => {
  return a.split("").reverse().join("");
};

export const sortNumber = (num: number | string): string => {
  return num.toString().split("").sort().join("");
};

export const addStrings = (num1: string, num2: string): string => {
  let a = num1.length - 1;
  let b = num2.length - 1;

  let carry = 0;
  let answer = "";

  while (a >= 0 || b >= 0) {
    if (a >= 0) {
      carry += Number(num1[a]);
      a -= 1;
    }
    if (b >= 0) {
      carry += Number(num2[b]);
      b -= 1;
    }
    answer += carry % 10;
    carry = Math.floor(carry / 10);
  }

  if (carry) answer += carry;

  return reverseString(answer);
};

export const multiplyStrings = (A: string, B: string): string => {
  let answer = "";

  const lenA = A.length;
  const lenB = B.length;

  for (let i = lenB - 1; i >= 0; i -= 1) {
    const multiplier = Number(B[i]);

    let carry = 0;
    let currAns = "";

    for (let j = lenA - 1; j >= 0; j -= 1) {
      const digit = Number(A[j]);

      const prod = multiplier * digit + carry;

      currAns = (prod % 10) + currAns;

      carry = Math.floor(prod / 10);
    }

    if (carry) currAns = carry + currAns;

    let numberOfZeroes = lenB - i - 1;

    while (numberOfZeroes) {
      currAns += "0";

      numberOfZeroes -= 1;
    }

    answer = addStrings(answer, currAns);
  }

  return answer;
};

export const generatePermutations = (
  str: string,
  currPtr: number,
  answer: string[]
): void => {
  if (currPtr === str.length) {
    answer.push(str);
    return;
  }

  for (let i = currPtr; i < str.length; i += 1) {
    const letterArr = str.split("");

    const temp = letterArr[currPtr];
    letterArr[currPtr] = letterArr[i];
    letterArr[i] = temp;

    const newStr = letterArr.join("");

    generatePermutations(newStr, currPtr + 1, answer);
  }
};

export const convertToBinary = (num: number): string => {
  let temp = num;
  let answer = "";

  while (temp) {
    const mod = temp % 2;
    temp = Math.floor(temp / 2);

    answer = mod + answer;
  }

  return answer;
};

export const getNameValue = (name: string): number => {
  const len = name.length;
  const lowerCaseName = name.toLowerCase();

  let answer = 0;

  for (let i = 0; i < len; i += 1) {
    answer += lowerCaseName.charCodeAt(i) - "a".charCodeAt(0) + 1;
  }

  return answer;
};

export const checkForTriangularNumber = (num: number): boolean => {
  const triangularNumberDisc = 1 + 8 * num;

  if (isPerfectSquare(triangularNumberDisc)) {
    const a = getSquareRoot(triangularNumberDisc);

    if ((-1 + a) % 2 === 0) return true;
  }

  return false;
};

export const checkForPentagonalNumber = (num: number): boolean => {
  const pentagonalNumDisc = 1 + 24 * num;

  if (isPerfectSquare(pentagonalNumDisc)) {
    const a = getSquareRoot(pentagonalNumDisc);

    if ((1 + a) % 6 === 0) return true;
  }

  return false;
};

export const checkForHexagonalNumber = (num: number): boolean => {
  const hexagonalNumDisc = 1 + 8 * num;

  if (isPerfectSquare(hexagonalNumDisc)) {
    const a = getSquareRoot(hexagonalNumDisc);

    if ((1 + a) % 4 === 0) return true;
  }

  return false;
};

export const maximumPathSum = (matrix: number[][]): number => {
  const pathMatrix = matrix;
  const rows = pathMatrix.length;

  for (let r = rows - 2; r >= 0; r -= 1) {
    const cols = pathMatrix[r].length;

    for (let c = 0; c < cols; c += 1) {
      const maxNeighbor = Math.max(
        pathMatrix[r + 1][c],
        pathMatrix[r + 1][c + 1]
      );

      pathMatrix[r][c] += maxNeighbor;
    }
  }

  return pathMatrix[0][0];
};

export const genericForDigitsOfANumber = <T>(
  num: number,
  initialValue: T,
  operation: (currAnswer: T, digit: number) => T
): T => {
  let temp = num;
  let answer: T = initialValue;

  while (temp) {
    const mod = temp % 10;
    temp = Math.floor(temp / 10);

    answer = operation(answer, mod);
  }

  return answer;
};

export const partition = (options: number[], M: number): number[] => {
  const ways = Array.from({ length: M + 1 }, () => 0);
  ways[0] = 1;

  const len = options.length;

  for (let i = 0; i < len; i += 1) {
    const value = options[i];

    for (let num = value; num <= M; num += 1) {
      ways[num] += ways[num - value];
    }
  }

  return ways;
};
