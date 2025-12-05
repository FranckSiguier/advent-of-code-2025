import { extractLines } from "../utils/extractLines";

const lines = await extractLines(1);

function parseLine(line: string): {
  direction: string;
  clicks: number;
} {
  const direction = line.slice(0, 1);
  const clicks = Number(line.slice(1));

  return { direction, clicks };
}

function calculateEndPosition(
  direction: string,
  clicks: number,
  startPosition: number
) {
  let endPosition = 0;

  if (direction === "L") {
    endPosition = startPosition - (clicks % 100);
  } else {
    endPosition = startPosition + (clicks % 100);
  }

  if (endPosition > 100) {
    endPosition = 0 + (endPosition % 100);
  }

  if (endPosition === 100) {
    endPosition = 0;
  }

  if (endPosition < 0) {
    endPosition = 100 - Math.abs(endPosition);
  }
  console.log(endPosition);
  return endPosition;
}

let startPos = 50;

let numberOfZeros = 0;

lines.forEach((line) => {
  const { direction, clicks } = parseLine(line);
  const endPosition = calculateEndPosition(direction, clicks, startPos);
  if (endPosition === 0) {
    numberOfZeros++;
  }
  startPos = endPosition;
});

console.log(numberOfZeros);
