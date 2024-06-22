interface Values {
  height: number;
  weight: number;
}

const parseArguments = (args: string[]): Values => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const bmiCalculator = (height: number, weight: number): string => {
  const bmi = (weight * 10000) / height ** 2;
  return bmiClassifier(bmi);
};

const bmiClassifier = (bmi: number): string => {
  if (bmi < 16) return "Underweight (Severe thinness)";
  else if (bmi < 17) return "Underweight (Moderate thinness)";
  else if (bmi < 18.5) return "Underweight (Mild thinness)";
  else if (bmi < 25) return "Normal range (healthy weight)";
  else if (bmi < 30) return "Overweight (Pre-obese)";
  else if (bmi < 35) return "Obese (Class I)";
  else if (bmi < 40) return "Obese (Class II)";
  else return "Obese (Class III)";
};

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(bmiCalculator(height, weight));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}

export {bmiCalculator};
