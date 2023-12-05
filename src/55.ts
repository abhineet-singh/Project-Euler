import { addStrings, isPalindrome, reverseString } from "./util";

const lychrelNumbers = (): number => {
  const M = 10_000;
  let answer = 0;

  for (let i = 1; i <= M; i += 1) {
    let iterationCount = 50;
    let foundPalindrome = false;
    let nextString = i.toString();

    while (iterationCount > 0) {
      const addedString = addStrings(nextString, reverseString(nextString));

      if (isPalindrome(addedString)) {
        foundPalindrome = true;
        break;
      }

      nextString = addedString;
      iterationCount -= 1;
    }

    if (!foundPalindrome) answer += 1;
  }

  return answer;
};

console.time();
console.log(lychrelNumbers());
console.timeEnd();
