import { generatePermutations, isPrime } from "./util";

const pandigitalPrime = (): number => {
  const answer: string[] = [];

  generatePermutations("1234567", 0, answer);
  answer.sort();

  const len = answer.length - 1;

  for (let i = len; i >= 0; i -= 1) {
    const num = Number(answer[i]);

    if (isPrime(num)) return num;
  }

  return -1;
};

// 8-digit and 9-digit pandigital numbers are always divisible by 3 (sum of digits will always a multiple of 3)
// therefore, cannot result a prime number

console.time();
console.log(pandigitalPrime());
console.timeEnd();
