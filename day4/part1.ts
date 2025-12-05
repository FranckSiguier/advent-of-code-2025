import { extractLines } from "../utils/extractLines";

const lines = await extractLines(4);

lines.unshift(new Array(lines[0]!.length + 1).join("a"));
lines.push(new Array(lines[0]!.length + 1).join("a"));

let sum = 0;

function areThereLessThan4RollsAround(
  line: string,
  lineAbove: string,
  lineUnder: string,
  index: number
) {
  let rolls = 0;

  if (lineAbove[index] === "@") rolls++;
  if (lineAbove[index - 1] === "@") rolls++;
  if (lineAbove[index + 1] === "@") rolls++;
  if (line[index + 1] === "@") rolls++;
  if (line[index - 1] === "@") rolls++;
  if (lineUnder[index] === "@") rolls++;
  if (lineUnder[index - 1] === "@") rolls++;
  if (lineUnder[index + 1] === "@") rolls++;

  if (rolls < 4) return true;
  return false;
}

for (let j = 1; j < lines.length; j++) {
  const newLineAbove = "a" + lines[j - 1]! + "a";
  const newLineUnder = "a" + lines[j + 1]! + "a";
  const newLine = "a" + lines[j] + "a";

  for (let i = 1; i < newLine.length; i++) {
    if (newLine[i] !== "@") continue;

    if (areThereLessThan4RollsAround(newLine, newLineAbove, newLineUnder, i)) {
      sum++;
    }
  }
}

console.log(sum);
