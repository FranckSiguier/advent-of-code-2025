import { extractLines } from "../utils/extractLines";

const lines = await extractLines(4);

lines.unshift(new Array(lines[0]!.length + 1).join("a"));
lines.push(new Array(lines[0]!.length + 1).join("a"));

function areThereLessThan4RollsAround(
  line: string[],
  lineAbove: string[],
  lineUnder: string[],
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

let sum = 0;
let linesArray = lines.map((line) => {
  return ("a" + line + "a").split("");
});
let changeHappened = true;

while (changeHappened) {
  changeHappened = false;
  for (let j = 1; j < linesArray.length; j++) {
    for (let i = 1; i < linesArray[j]!.length; i++) {
      if (linesArray[j]![i] !== "@") continue;

      if (
        areThereLessThan4RollsAround(
          linesArray[j]!,
          linesArray[j - 1]!,
          linesArray[j + 1]!,
          i
        )
      ) {
        linesArray[j]![i] = "x";
        sum++;
        changeHappened = true;
      }
    }
  }
}

console.log(sum);
