import { v1 as uuid } from "uuid";

import patientData from "../../data/patients";
import {
  PatientEntry,
  NewPatientEntry,
  PatientsWithoutSsn,
  Patient,
} from "../types";

const getPatients = (): PatientsWithoutSsn[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const getPatientById = (id: string): Patient => {
  const patient = patientData.find((e) => e.id === id) as Patient;
  // const returnedPatient: Patient = { ...patient, entries: [] };
  return patient;
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const id = uuid();
  const newPatientEntry = { id, ...entry };

  patientData.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  addPatient,
  getPatientById,
};
