import { extractLines, writeLinesToFile } from "../utils/extractLines";

const lines = await extractLines(6);

function doTheOperation(number: number[], operand: string) {
  if (operand === "+") return number.reduce((a, b) => a + b);
  if (operand === "*") return number.reduce((a, b) => a * b);
}

const numbersAndOperand: string[][] = [];

let i = 0;

while (i < lines[0]!.length) {
  if (
    lines[0]![i] === " " &&
    lines[1]![i] === " " &&
    lines[2]![i] === " " &&
    lines[3]![i] === " "
  ) {
    lines[0] = lines[0]?.substring(0, i) + "a" + lines[0]?.substring(i + 1);
    lines[1] = lines[1]?.substring(0, i) + "a" + lines[1]?.substring(i + 1);
    lines[2] = lines[2]?.substring(0, i) + "a" + lines[2]?.substring(i + 1);
    lines[3] = lines[3]?.substring(0, i) + "a" + lines[3]?.substring(i + 1);
  }
  i++;
}

writeLinesToFile(lines, 6);
numbersAndOperand.push(lines[0]?.split("a")!);
numbersAndOperand.push(lines[1]?.split("a")!);
numbersAndOperand.push(lines[2]?.split("a")!);
numbersAndOperand.push(lines[3]?.split("a")!);
numbersAndOperand.push(lines[4]?.split(/\s+/)!);

let sum = 0;

for (let i = 0; i < numbersAndOperand[0]!.length; i++) {
  let numbers: number[] = [];
  for (let j = numbersAndOperand[0]![i]!.length - 1; j >= 0; j--) {
    let numberString = "";
    if (numbersAndOperand[0]![i]![j])
      numberString += numbersAndOperand[0]![i]![j];
    if (numbersAndOperand[1]![i]![j])
      numberString += numbersAndOperand[1]![i]![j];
    if (numbersAndOperand[2]![i]![j])
      numberString += numbersAndOperand[2]![i]![j];
    if (numbersAndOperand[3]![i]![j])
      numberString += numbersAndOperand[3]![i]![j];
    numbers.push(Number(numberString));
  }

  sum += doTheOperation(numbers, numbersAndOperand[4]![i]!)!;
}

console.log(sum);
