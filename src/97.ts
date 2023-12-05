import { reverseString } from "./util";

const largeNonMersennePrime = (): string => {
  const REQUIRED_LENGTH = 10;
  const M = 28_433;
  const N = 7_830_457;

  const answer: number[] = [1];

  // calculates 2 ^ N
  for (let i = 1; i <= N; i += 1) {
    const len = Math.min(answer.length, REQUIRED_LENGTH); // keep track of only last 10 digits
    let carry = 0;

    for (let j = 0; j < len; j += 1) {
      const prod = answer[j] * 2 + carry;

      answer[j] = prod % 10;

      carry = Math.floor(prod / 10);
    }

    if (answer.length < REQUIRED_LENGTH) {
      while (carry) {
        answer.push(carry % 10);

        carry = Math.floor(carry / 10);
      }
    }
  }

  let carry = 0;

  // multiples 2^N to M
  for (let j = 0; j < REQUIRED_LENGTH; j += 1) {
    const prod = answer[j] * M + carry;

    answer[j] = prod % 10;

    carry = Math.floor(prod / 10);
  }

  // add 1 to the last digit of the answer
  answer[0] += 1;

  return reverseString(answer.join(""));
};

console.time();
console.log(largeNonMersennePrime());
console.timeEnd();
