import * as fs from "fs/promises";
import * as path from "path";

const readFile = async (fileName: string) => {
  const data = await fs.readFile(fileName, {
    encoding: "utf8",
    flag: "r",
  });

  return data;
};

const convertRawDataToJs = async (fileName: string) => {
  const data = await readFile(fileName);

  const normalizeData = data
    .split("\n")
    .reduce((acc: number[][], str: string) => {
      const strToNumArr = str.split(",").map((strNum) => Number(strNum));

      console.log(strToNumArr, ",");

      return [...acc, strToNumArr];
    }, []);

  console.log(normalizeData);
};

const getSudokuGrids = async (fileName: string) => {
  const data = await readFile(fileName);

  const lines = data.split("\n");
  let sudoku: number[][] = [];
  const gridOfSudoku: number[][][] = [];

  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].includes("Grid")) {
      sudoku = [];
    } else {
      sudoku.push(lines[i].split("").map((strNum) => Number(strNum)));
    }

    if (sudoku.length === 9) gridOfSudoku.push(sudoku);
  }

  console.log(gridOfSudoku);
};

const fileName = path.join(__dirname, "96.txt");
// convertRawDataToJs(fileName);
getSudokuGrids(fileName);
