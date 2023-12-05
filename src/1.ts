const multiples3or5 = (M: number): number => {
  let answer = 0;

  for (let i = 1; i < M; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) answer += i; // if divisible by 3 or 5 add to answer
  }

  return answer;
};

console.time();
const M = 1_000;
console.log(multiples3or5(M));
console.timeEnd();

export {};
