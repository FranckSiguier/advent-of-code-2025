import { extractLines } from "../utils/extractLines";

const lines = await extractLines(3);

function getBiggestNumberAndIndex(line: string): number {
  let biggestDigit = 0;
  let biggestIndex = 0;
  for (let i = 0; i < line.length - 1; i++) {
    if (Number(line[i]) === 9) {
      biggestDigit = 9;
      biggestIndex = i;
      break;
    }
    if (Number(line[i]) > biggestDigit) {
      biggestDigit = Number(line[i]);
      biggestIndex = i;
    }
  }

  let secondIndex = biggestIndex + 1;
  let secondDigit = Number(line[secondIndex]);
  let biggestNumber = Number(line[biggestIndex]! + line[secondIndex]);
  for (let j = secondIndex; j < line.length; j++) {
    if (Number(line[j]) === 9) {
      biggestNumber = Number(line[biggestIndex]! + 9);
      break;
    }

    if (Number(line[j]) > secondDigit) {
      secondDigit = Number(line[j]);
      secondIndex = j;
      biggestNumber = Number(line[biggestIndex]! + line[secondIndex]);
    }
  }
  return biggestNumber;
}

let sum = 0;
lines.forEach((line) => {
  const biggestNumber = getBiggestNumberAndIndex(line);
  console.log({ line, biggestNumber });
  sum += biggestNumber;
});
console.log(sum);
