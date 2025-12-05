import { extractFromOneLine } from "../utils/extractLines";

const lines = await extractFromOneLine(2);

function getRange(line: string): [number, number] {
  const [start, end] = line.split("-");
  return [Number(start), Number(end)];
}

let sum = 0;

function isEven(number: number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

lines.forEach((line) => {
  const [start, end] = getRange(line);
  let i = start;
  while (i <= end) {
    const stringifiedNumber = i.toString();
    if (isEven(stringifiedNumber.length)) {
      const a = stringifiedNumber.slice(0, stringifiedNumber.length / 2);
      const b = stringifiedNumber.slice(stringifiedNumber.length / 2);
      if (a === b) {
        sum += i;
      }
    }
    i++;
  }
});

console.log(sum);
