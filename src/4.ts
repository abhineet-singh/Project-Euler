import { isPalindrome } from "./util";

const largestPalindromeProduct = (M: number): number => {
  const lowerBound = 10 ** (M - 1);
  const upperBound = 10 ** M;
  let answer = -1;

  for (let a = lowerBound; a < upperBound; a += 1) {
    for (let b = a; b < upperBound; b += 1) {
      const product = a * b;

      if (isPalindrome(product)) answer = Math.max(answer, product);
    }
  }

  return answer;
};

console.time();
const M = 3;
console.log(largestPalindromeProduct(M));
console.timeEnd();
