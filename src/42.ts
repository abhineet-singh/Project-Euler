import wordsArr from "../data/42";
import { checkForTriangularNumber, getNameValue } from "./util";

const codedTriangleNumbers = (): number => {
  const len = wordsArr.length;
  let answer = 0;

  for (let i = 0; i < len; i += 1) {
    const value = getNameValue(wordsArr[i]);

    if (checkForTriangularNumber(value)) answer += 1;
  }

  return answer;
};

console.time();
console.log(codedTriangleNumbers());
console.timeEnd();
