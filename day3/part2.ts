import { extractLines } from "../utils/extractLines";

const lines = await extractLines(3);

let sum = 0;
function recursiveFindNextBiggestDigit(
  subline: string,
  biggestNumber: string
): number {
  if (biggestNumber.length === 12) return Number(biggestNumber);
  const limit = 12 - biggestNumber.length;
  let biggestDigit = Number(subline[0]);
  let biggestIndex = 0;
  for (let i = 1; i <= subline.length - limit; i++) {
    if (Number(subline[i]) > biggestDigit) {
      biggestDigit = Number(subline[i]);
      biggestIndex = i;
    }
  }
  biggestNumber += biggestDigit.toString();

  return recursiveFindNextBiggestDigit(
    subline.slice(biggestIndex + 1),
    biggestNumber
  );
}

lines.forEach((line) => {
  const biggestNumber = recursiveFindNextBiggestDigit(line, "");
  console.log(biggestNumber);

  sum += biggestNumber;
});

console.log(sum);
