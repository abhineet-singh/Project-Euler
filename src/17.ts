const numberToWords = (num: number): string => {
  const basicWords: Record<string, string> = {
    0: "",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    hundred: "Hundred",
    thousand: "Thousand",
  };

  const printLessThanHundredWord = (b: number): string => {
    if (basicWords[b]) return basicWords[b];

    const onesDigit = b % 10;
    const tensDigit = Math.floor(b / 10);

    return basicWords[tensDigit * 10] + basicWords[onesDigit];
  };

  const printLessThanThousandWord = (c: number): string => {
    const hundredsDigit = Math.floor(c / 100);

    let answer = basicWords[hundredsDigit] + basicWords.hundred;

    const rest = printLessThanHundredWord(c % 100);

    if (rest) answer = `${answer}and${rest}`;

    return answer;
  };

  if (num < 100) return printLessThanHundredWord(num);

  if (num < 1000) return printLessThanThousandWord(num);

  return basicWords[1] + basicWords.thousand;
};

const numberLetterCounts = (): number => {
  let answer = 0;

  for (let i = 1; i <= 1000; i += 1) {
    const word = numberToWords(i);

    answer += word.length;
  }
  return answer;
};

console.time();
console.log(numberLetterCounts());
console.timeEnd();

export {};
