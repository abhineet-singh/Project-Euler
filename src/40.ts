const champernowneConstant = (M: number): number => {
  let answer = 1;
  let requiredLength = 1;
  let str = "";

  for (let num = 1; ; num += 1) {
    str += num;

    if (str.length >= requiredLength) {
      answer *= Number(str[requiredLength - 1]);

      requiredLength *= 10;
    }

    if (requiredLength > M) break;
  }

  return answer;
};

console.time();
console.log(champernowneConstant(1_000_000));
console.timeEnd();

export {};
