import { extractLines } from "../utils/extractLines";

const lines = await extractLines(7);

let sum = 0;

const indexOfStart = lines[0]?.indexOf("S")!;

let beamIndexes = new Set();
beamIndexes.add(indexOfStart);

function findTheIndexesOfTheSplitters(line: string): number[] {
  let indexesOfSplitters: number[] = [];
  line.split("").forEach((character, index) => {
    if (character === "^") indexesOfSplitters.push(index);
  });
  return indexesOfSplitters;
}

lines.forEach((line) => {
  const indexesOfSplittersForThisLine = findTheIndexesOfTheSplitters(line);
  indexesOfSplittersForThisLine.forEach((indexOfSplitter) => {
    if (beamIndexes.has(indexOfSplitter)) {
      beamIndexes.add(indexOfSplitter - 1);
      beamIndexes.add(indexOfSplitter + 1);
      beamIndexes.delete(indexOfSplitter);
      sum++;
    }
  });
});

console.log(sum);
