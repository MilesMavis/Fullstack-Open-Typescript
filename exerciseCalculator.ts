interface Exercises {
  target: number;
  log: number[];
}

interface results {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
}

const parseArguments = (args: string[]): Exercises => {
  if (args.length < 4) throw new Error("Not enough arguments");

  if (
    !isNaN(Number(args[2])) &&
    process.argv.slice(3).every((n) => !isNaN(Number(n)))
  ) {
    return {
      target: Number(args[2]),
      log: args.slice(3).map((n) => Number(n)),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const exerciseCalculator = (log: number[], target: number): results => {
  const periodLength = log.length;
  const average =
    log.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    periodLength;

  let rating;
  let ratingDescription;

  if (average >= target) {
    rating = 3;
    ratingDescription = "Good job";
  } else if (average >= target / 2) {
    rating = 2;
    ratingDescription = "Could be better";
  } else {
    rating = 1;
    ratingDescription = "Bad!";
  }

  return {
    periodLength,
    trainingDays: log.filter((day) => day !== 0).length,
    target,
    average,
    success: average >= target,
    rating,
    ratingDescription,
  };
};

try {
  const { target, log } = parseArguments(process.argv);
  console.log(exerciseCalculator(log, target));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

export {};
