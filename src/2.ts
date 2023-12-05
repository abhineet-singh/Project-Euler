const evenFib = (M: number): number => {
  let answer = 0;

  let a = 1;
  let b = 2;

  while (b < M) {
    if (b % 2 === 0) answer += b;

    const nextFib = a + b;
    a = b;
    b = nextFib;
  }

  return answer;
};

console.time();
const M = 4_000_000;
console.log(evenFib(M));
console.timeEnd();

export {};
