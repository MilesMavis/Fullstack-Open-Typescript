import express from "express";
import diagnosisRouter from "./src/routes/diagnoses";
import patientRouter from "./src/routes/patients";

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnosisRouter);
app.use("/api/patients", patientRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
