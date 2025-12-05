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
  let zeros = 0;

  zeros += Math.trunc(clicks / 100);

  if (direction === "L") {
    endPosition = startPosition - (clicks % 100);
  } else {
    endPosition = startPosition + (clicks % 100);
  }

  if (endPosition > 100) {
    endPosition = endPosition % 100;
    zeros += 1;
    if (clicks === 196) {
      console.log("c", zeros);
    }
  }

  if (endPosition === 100 || endPosition === 0) {
    endPosition = 0;
    zeros += 1;
    if (clicks === 196) {
      console.log("d", zeros);
    }
  }

  if (endPosition < 0) {
    if (endPosition + (clicks % 100) !== 0) {
      zeros += 1;
    }
    endPosition = 100 - Math.abs(endPosition);
  }

  console.log({ startPosition, direction, clicks, endPosition, zeros });
  return { endPosition, zeros };
}

let startPos = 50;

let numberOfZeros = 0;

lines.forEach((line) => {
  const { direction, clicks } = parseLine(line);
  const { endPosition, zeros } = calculateEndPosition(
    direction,
    clicks,
    startPos
  );

  numberOfZeros += zeros;
  startPos = endPosition;
});

console.log(numberOfZeros);
