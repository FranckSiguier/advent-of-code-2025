import { extractLines } from "../utils/extractLines";

const lines = await extractLines(7);

function findTheIndexesOfTheSplitters(line: string): number[] {
  let indexesOfSplitters: number[] = [];
  line.split("").forEach((character, index) => {
    if (character === "^") indexesOfSplitters.push(index);
  });
  return indexesOfSplitters;
}

const memo = new Map<string, number>();

function countPaths(beamIndex: number, depth: number): number {
  if (depth >= lines.length) {
    return 1;
  }

  const currentLine = lines[depth]!;

  const key = `${beamIndex},${depth}`;
  if (memo.has(key)) {
    return memo.get(key)!;
  }

  let pathCount = 0;

  if (findTheIndexesOfTheSplitters(currentLine).includes(beamIndex)) {
    pathCount =
      countPaths(beamIndex - 1, depth + 1) +
      countPaths(beamIndex + 1, depth + 1);
  } else {
    pathCount = countPaths(beamIndex, depth + 1);
  }

  memo.set(key, pathCount);
  return pathCount;
}

const startIndex = lines[0]?.indexOf("S")!;

const totalPaths = countPaths(startIndex, 2);

console.log(totalPaths);
