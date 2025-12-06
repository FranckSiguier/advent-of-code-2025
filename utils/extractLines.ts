const base_path =
  "/Users/Franck.Siguier/code/FranckSiguier/personal-projects/advent-of-code-2025";

export async function extractLines(day: number): Promise<string[]> {
  const path = `${base_path}/day${day}/input.txt`;
  const file = Bun.file(path);
  const text = await file.text();
  return text.split("\n");
}

export async function extractFromOneLine(day: number): Promise<string[]> {
  const path = `${base_path}/day${day}/input.txt`;
  const file = Bun.file(path);
  const text = (await file.text()).split(",");
  return text;
}

export async function writeLinesToFile(lines: string[], day: number) {
  const path = `${base_path}/day${day}/output.txt`;
  const file = Bun.file(path);
  await file.write(lines.join("\n"));
}
