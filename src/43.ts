const subStringDivisibility = (str: string, currPtr: number): void => {
  if (currPtr === str.length) {
    console.log(str);
  }

  for (let i = currPtr; i < str.length; i += 1) {
    const letterArr = str.split("");

    const temp = letterArr[currPtr];
    letterArr[currPtr] = letterArr[i];
    letterArr[i] = temp;

    const newStr = letterArr.join("");

    const primeArr = [2, 3, 5, 7, 11, 13, 17];

    let isSubStringDivisible = true;

    for (let k = 0; k < 7; k += 1) {
      const startIndex = k + 1;
      const endIndex = k + 4;
      const subNumber = Number(newStr.slice(startIndex, endIndex));

      if (currPtr < endIndex - 1) break;

      if (subNumber % primeArr[k] !== 0) {
        isSubStringDivisible = false;
        break;
      }
    }

    if (isSubStringDivisible) subStringDivisibility(newStr, currPtr + 1);
  }
};

console.time();
subStringDivisibility("0123456789", 0);
console.timeEnd();

export {};
