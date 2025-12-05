import { extractFromOneLine } from "../utils/extractLines";

const lines = await extractFromOneLine(2);

function getRange(line: string): [number, number] {
  const [start, end] = line.split("-");
  return [Number(start), Number(end)];
}

let sum = 0;

function testToSet(stringifiedNumber: string, numberOfDigits: number) {
  const a = stringifiedNumber.match(new RegExp(`.{1,${numberOfDigits}}`, "g"));
  const b = new Set(a);

  if (!a) return false;

  return b.size === 1 && b.has(a[0]);
}

lines.forEach((line) => {
  const [start, end] = getRange(line);
  let i = start;
  while (i <= end) {
    const stringifiedNumber = i.toString();

    for (let j = 1; j <= stringifiedNumber.length / 2; j++) {
      if (testToSet(stringifiedNumber, j)) {
        console.log(i);
        sum += i;
        break;
      }
    }

    i++;
  }
});

console.log(sum);
