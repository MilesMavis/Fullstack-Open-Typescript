/* eslint-disable react/react-in-jsx-scope */
// useState
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllDiaryEntries, createDiaryEntry } from "./diaryEntryService";
import { DiaryEntry, Visibility, Weather } from "./types";
import DiaryEntryComponent from "./components/DiaryEntry";

function App() {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getAllDiaryEntries().then((data) => setDiaryEntries(data));
  }, []);

  const diaryEntryCreation = async (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();
      const response = await createDiaryEntry({
        date,
        visibility: visibility as Visibility,
        weather: weather as Weather,
        comment,
      });

      setDiaryEntries(diaryEntries.concat(response));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    }

    setDate("");
    setVisibility("");
    setWeather("");
    setComment("");
  };

  const handleVisibilityChange = (data: Visibility) => {
    setVisibility(data);
  };

  const handleWeatherChange = (data: Weather) => {
    setWeather(data);
  };

  return (
    <>
      <h2>Add new entry</h2>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <form onSubmit={diaryEntryCreation}>
        <div>
          date{" "}
          <input
            type="date"
            value={date}
            min="1901-01-01"
            max="2100-12-31"
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          visibility: great{" "}
          <input
            type="radio"
            name="visibility"
            onChange={() => handleVisibilityChange(Visibility.Great)}
          />
          good{" "}
          <input
            type="radio"
            name="visibility"
            onChange={() => handleVisibilityChange(Visibility.Good)}
          />
          ok{" "}
          <input
            type="radio"
            name="visibility"
            onChange={() => handleVisibilityChange(Visibility.Ok)}
          />
          poor{" "}
          <input
            type="radio"
            name="visibility"
            onChange={() => handleVisibilityChange(Visibility.Poor)}
          />
        </div>
        <div>
          weather: sunny{" "}
          <input
            type="radio"
            name="weather"
            onChange={() => handleWeatherChange(Weather.Sunny)}
          />
          rainy{" "}
          <input
            type="radio"
            name="weather"
            onChange={() => handleWeatherChange(Weather.Rainy)}
          />
          cloudy{" "}
          <input
            type="radio"
            name="weather"
            onChange={() => handleWeatherChange(Weather.Cloudy)}
          />
          stormy{" "}
          <input
            type="radio"
            name="weather"
            onChange={() => handleWeatherChange(Weather.Stormy)}
          />
          windy{" "}
          <input
            type="radio"
            name="weather"
            onChange={() => handleWeatherChange(Weather.Windy)}
          />
        </div>
        <div>
          comment{" "}
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Diary entries</h2>
      {diaryEntries.map((e) => (
        <DiaryEntryComponent key={e.id} {...e} />
      ))}
    </>
  );
}

export default App;
