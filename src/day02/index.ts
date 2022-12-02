import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const lookup = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,
  };
  let score = 0;
  for (const game of input) {
    // @ts-ignore
    score += lookup[game];
  }

  return score;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const decLookup = {
    "A X": "C",
    "A Y": "A",
    "A Z": "B",
    "B X": "A",
    "B Y": "B",
    "B Z": "C",
    "C X": "B",
    "C Y": "C",
    "C Z": "A",
  };

  const lookup = {
    "A A": 4,
    "A B": 8,
    "A C": 3,
    "B A": 1,
    "B B": 5,
    "B C": 9,
    "C A": 7,
    "C B": 2,
    "C C": 6,
  };

  let score = 0;
  for (const game of input) {
    // @ts-ignore
    const newGame = game.slice(0, -1) + decLookup[game];
    // @ts-ignore
    score += lookup[newGame];
  }

  return score;
};

run({
  part1: {
    tests: [
      {
        input: `
A Y
B X
C Z`,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
A Y
B X
C Z`,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
