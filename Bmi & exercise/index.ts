import express from "express";
import bmiHelper from "./helpers/bmiHelper";
import exerciseCalculator from "./helpers/exerciseHelper";


const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height: number = Number(req.query.height);
  const weight: number = Number(req.query.weight);

  try {
    res.send(bmiHelper([height, weight]));
  } catch (error) {
    res.status(400).send({ error: "malformatted parameters" });
  }
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    res.status(400).send({ error: "parameters missing" });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  if (isNaN(target) || !daily_exercises.every((n: number) => !isNaN(n))) {
    res.status(400).send({ error: "malformatted parameters" });
  }

  res.send(exerciseCalculator(daily_exercises as number[], Number(target)))
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
