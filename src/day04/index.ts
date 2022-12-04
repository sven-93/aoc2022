import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let sum = 0;

  for (const pair of input) {
    // e.g. 22-23,22-60
    // firstSection = 22-23      secondSection = 22-60
    const [firstSection, secondSection] = pair.split(",");
    // first Array = [22,23]     second Array = [22,60]
    const firstSectionArr = firstSection.split("-").map(Number);
    const secondSectionArr = secondSection.split("-").map(Number);

    // left = [22,23]
    const left = Array.from(
      { length: firstSectionArr[1] - firstSectionArr[0] + 1 },
      (_, i) => i + firstSectionArr[0], // i sets the start number of array
    );

    // right = [22,23,24,25,26,27..........60)
    const right = Array.from(
      { length: secondSectionArr[1] - secondSectionArr[0] + 1 },
      (_, i) => i + secondSectionArr[0],
    );

    if (
      left.every((x) => right.includes(x)) ||
      right.every((x) => left.includes(x))
    ) {
      sum += 1;
    }
  }

  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let sum = 0;

  for (const pair of input) {
    // e.g. 22-23,22-60
    // firstSection = 22-23      secondSection = 22-60
    const [firstSection, secondSection] = pair.split(",");
    // first Array = [22,23]     second Array = [22,60]
    const firstSectionArr = firstSection.split("-").map(Number);
    const secondSectionArr = secondSection.split("-").map(Number);

    // left = [22,23]
    const left = Array.from(
      { length: firstSectionArr[1] - firstSectionArr[0] + 1 },
      (_, i) => i + firstSectionArr[0], // i sets the start number of array
    );

    // right = [22,23,24,25,26,27..........60)
    const right = Array.from(
      { length: secondSectionArr[1] - secondSectionArr[0] + 1 },
      (_, i) => i + secondSectionArr[0],
    );

    if (
      left.some((x) => right.includes(x)) ||
      right.some((x) => left.includes(x))
    ) {
      sum += 1;
    }
  }
  return sum;
};

run({
  part1: {
    tests: [
      {
        input: `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
