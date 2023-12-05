import { sortNumber } from "./util";

const cubicPermutations = (M: number): number => {
  const cubicsObj: Record<string, number[]> = {};

  //   for (let i = 1400; i <= 2800; i += 1) {
  //     const cube = i ** 3;

  //     cubicsObj[cube] = true;
  //   }

  //   const cubesArr = Object.keys(cubicsObj);

  //   for (let a = 0; a < cubesArr.length; a += 1) {
  //     const cube = cubesArr[a];
  //     // console.log(cube);
  //     const permutations: string[] = [];

  //     const dd = (num: string): boolean => num[0] !== "0";

  //     generatePermutations(cube, 0, permutations, dd);
  //     const uniqueValues = [...new Set(permutations.map((perm) => Number(perm)))];

  //     let count = 0;
  //     console.log(a + 1, "----------");

  //     for (let i = 0; i < uniqueValues.length; i += 1) {
  //       const x = uniqueValues[i];
  //       //   console.log(x);
  //       const y = getCubeRoot(x);

  //       if (cubicsObj[x] || y ** 3 === x) {
  //         count += 1;
  //         console.log(x);
  //       }

  //       if (count === 5) return cube;
  //     }
  //   }

  for (let num = 1; ; num += 1) {
    const cube = num ** 3; // generate the cube of the number

    // sort the cube number in an ascending order
    const sortedCubeNumber = sortNumber(cube);

    // using the sorted cube number as key, store the number into the list for that particular key
    cubicsObj[sortedCubeNumber] = [...(cubicsObj[sortedCubeNumber] || []), num];

    const numArr = cubicsObj[sortedCubeNumber];

    if (numArr.length === M) return numArr[0] ** 3;
  }
};

console.time();
console.log(cubicPermutations(5));
console.timeEnd();
