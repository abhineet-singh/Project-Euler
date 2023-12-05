import { convertToBinary, isPalindrome } from "./util";

const doubleBasePalindromes = (M: number): number => {
  let answer = 0;

  for (let num = 1; num < M; num += 1) {
    if (isPalindrome(num) && isPalindrome(convertToBinary(num))) {
      answer += num;
    }
  }

  return answer;
};

console.time();
console.log(doubleBasePalindromes(1_000_000));
console.timeEnd();
