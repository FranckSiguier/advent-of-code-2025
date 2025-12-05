import { extractLines } from "../utils/extractLines";

const lines = await extractLines(5);

let sum = 0;

function extractRangesAndFreshIds(lines: string[], index: number) {
  return [lines.slice(0, index), lines.slice(index + 1)];
}

const [ranges, productIds] = extractRangesAndFreshIds(lines, 184);

let productSet = new Set();

productIds?.forEach((productId) => {
  ranges?.forEach((range) => {
    const rangeArray = range.split("-");
    const smallNumber = Number(rangeArray[0]);
    const bigNumber = Number(rangeArray[1]);
    const productIdNumber = Number(productId);
    if (
      smallNumber <= productIdNumber &&
      productIdNumber <= bigNumber &&
      !productSet.has(productId)
    ) {
      productSet.add(productId);
      sum++;
    }
  });
});

console.log(sum);
