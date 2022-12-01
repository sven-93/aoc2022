import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let maxCal = -1;
  let currCal = 0;
  for (let i = 0; i < input.length; i++) {
    currCal += Number(input[i]);
    if (!input[i + 1] || Number(input[i + 1]) === 0) {
      if (currCal > maxCal) {
        maxCal = currCal;
      }
      currCal = 0;
    }
  }

  return maxCal;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let maxCal1 = -1;
  let maxCal2 = -1;
  let maxCal3 = -1;
  let currCal = 0;
  for (let i = 0; i < input.length; i++) {
    currCal += Number(input[i]);
    if (!input[i + 1] || Number(input[i + 1]) === 0) {
      if (currCal > maxCal1 && maxCal2 > maxCal1 && maxCal3 > maxCal1) {
        maxCal1 = currCal;
      } else if (currCal > maxCal2 && maxCal3 > maxCal2) {
        maxCal2 = currCal;
      } else if (currCal > maxCal3) {
        maxCal3 = currCal;
      }

      currCal = 0;
    }
  }

  return maxCal1 + maxCal2 + maxCal3;
};

run({
  part1: {
    tests: [
      {
        input: `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
