import namesArr from "../data/22";
import { getNameValue } from "./util";

const namesScores = (): number => {
  const len = namesArr.length;
  let answer = 0;

  namesArr.sort();

  for (let i = 0; i < len; i += 1) {
    answer += getNameValue(namesArr[i]) * (i + 1);
  }

  return answer;
};

console.time();
console.log(namesScores());
console.timeEnd();
