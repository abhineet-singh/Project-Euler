import { isPrime } from "./util";

const goldbachOtherConjecture = (): number => {
  for (let num = 9; ; num += 2) {
    if (!isPrime(num)) {
      let isAnswer = true;

      for (let a = 1; 2 * a * a <= num; a += 1) {
        const twiceOfSquare = 2 * a * a;

        const rem = num - twiceOfSquare;

        if (isPrime(rem)) isAnswer = false;
      }

      if (isAnswer) return num;
    }
  }
};

console.time();
console.log(goldbachOtherConjecture());
console.timeEnd();
