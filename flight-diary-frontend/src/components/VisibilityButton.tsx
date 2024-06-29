/* eslint-disable react/react-in-jsx-scope */
import { Visibility } from "../types";

interface VisibilityProps {
  visibility: Visibility;
}

export default function VisibilityButton(props: VisibilityProps) {
  return (
    <>
      <input type="radio" id={props.visibility} name="visibility" value={props.visibility} />
      <label htmlFor={props.visibility}>{ props.visibility }</label>
    </>
  );
}
