/* eslint-disable react/react-in-jsx-scope */
import { DiaryEntry } from "../types";

export default function DiaryEntryComponent(props: DiaryEntry) {
  return (
    <div>
      <h3>{props.date}</h3>
      <div>visibility: { props.visibility }</div>
      <div>weather: { props.weather }</div>
    </div>
  )
} 
