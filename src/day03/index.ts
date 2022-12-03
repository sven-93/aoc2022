import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let sum = 0;
  for (const items of input) {
    const left = items.slice(0, items.length / 2);
    const right = items.slice(items.length / 2, items.length);

    for (const char of [...left]) {
      if (right.includes(char)) {
        if (char === char.toLowerCase()) {
          sum += char.charCodeAt(0) - 96;
        } else if (char === char.toUpperCase()) {
          sum += char.charCodeAt(0) - 38;
        }
        break;
      }
    }
  }

  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let sum = 0;

  for (let i = 0; i < input.length; i += 3) {
    for (const char of [...input[i]]) {
      if (input[i + 1].includes(char) && input[i + 2].includes(char)) {
        if (char === char.toLowerCase()) {
          sum += char.charCodeAt(0) - 96;
        } else if (char === char.toUpperCase()) {
          sum += char.charCodeAt(0) - 38;
        }
        break;
      }
    }
  }
  return sum;
};

run({
  part1: {
    tests: [
      {
        input: `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
