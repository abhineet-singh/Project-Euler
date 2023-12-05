import { addStrings } from "./util";

const thousandDigitFibonacciNumber = (): number => {
  let a = "1";
  let b = "1";

  for (let index = 3; ; index += 1) {
    const nextFib = addStrings(a, b);

    if (nextFib.length === 1000) return index;
    a = b;
    b = nextFib;
  }
};

console.time();
console.log(thousandDigitFibonacciNumber());
console.timeEnd();
