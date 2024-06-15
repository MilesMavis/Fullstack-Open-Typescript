interface BmiValues {
  height: number;
  weight: number;
}

interface Stats {
  height: number;
  weight: number;
  bmi: string;
}

const parseArguments = (args: number[]): BmiValues => {
  if (args.length < 2) throw new Error("Not enough arguments");
  if (args.length > 2) throw new Error("Too many arguments");

  if (!isNaN(args[0]) && !isNaN(args[1])) {
    return {
      height: args[0],
      weight: args[1],
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

export const bmiCalculator = (height: number, weight: number): string => {
  const bmi = (weight * 10000) / height ** 2;

  if (bmi < 16) return "Underweight (Severe thinness)";
  else if (bmi < 17) return "Underweight (Moderate thinness)";
  else if (bmi < 18.5) return "Underweight (Mild thinness)";
  else if (bmi < 25) return "Normal range (healthy weight)";
  else if (bmi < 30) return "Overweight (Pre-obese)";
  else if (bmi < 35) return "Obese (Class I)";
  else if (bmi < 40) return "Obese (Class II)";
  else return "Obese (Class III)";
};

const bmiHelper = (args: number[]): Stats | string => {
  const { height, weight } = parseArguments(args);

  return {
    height,
    weight,
    bmi: bmiCalculator(height, weight),
  };
};

export default bmiHelper;
