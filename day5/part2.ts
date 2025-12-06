import { extractLines } from "../utils/extractLines";

const lines = await extractLines(5);

function extractRangesAndFreshIds(lines: string[], index: number) {
  return [
    lines.slice(0, index).map((line) => {
      const range = line.split("-");
      const rangeNumbers = range.map(Number);
      return rangeNumbers;
    }),
    lines.slice(index + 1),
  ];
}

const [ranges, _productIds] = extractRangesAndFreshIds(lines, 184) as [
  number[][],
  string[]
];

const validRanges = ranges.filter((range) => range.length === 2);
const sortedRanges = validRanges.sort((a, b) => a[0]! - b[0]!);

const mergedRanges: number[][] = [];

for (const range of sortedRanges) {
  const [start, end] = range;
  if (!start || !end) continue;

  if (mergedRanges.length === 0) {
    mergedRanges.push([start, end]);
    continue;
  }

  const lastRange = mergedRanges[mergedRanges.length - 1]!;
  const [, lastEnd] = lastRange;

  if (start <= lastEnd! + 1) {
    lastRange[1] = Math.max(lastEnd!, end);
  } else {
    mergedRanges.push([start, end]);
  }
}

let sum = 0;
for (const [start, end] of mergedRanges) {
  if (start && end) {
    sum += end - start + 1;
  }
}

console.log(sum);
