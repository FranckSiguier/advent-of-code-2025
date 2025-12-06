import { extractLines } from "../utils/extractLines";

const lines = await extractLines(6);

function doTheOperation(number: number[], operand: string) {
  if (operand === "+") return number.reduce((a, b) => a + b);
  if (operand === "*") return number.reduce((a, b) => a * b);
}

const numbers0 = lines[0]?.split(/\s+/);
const numbers1 = lines[1]?.split(/\s+/);
const numbers2 = lines[2]?.split(/\s+/);
const numbers3 = lines[3]?.split(/\s+/);
const operands = lines[4]?.split(/\s+/);

let sum = 0;

for (let i = 0; i < numbers0!.length; i++) {
  sum += doTheOperation(
    [
      Number(numbers0![i]),
      Number(numbers1![i]),
      Number(numbers2![i]),
      Number(numbers3![i]),
    ],
    operands![i]!
  )!;
}

console.log(sum);
