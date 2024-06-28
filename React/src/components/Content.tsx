/* eslint-disable react/react-in-jsx-scope */
import CoursePart from "../types";

function Part(props: CoursePart) {
  let additionalContent: JSX.Element;

  switch (props.kind) {
    case "basic":
      additionalContent = <i>{props.description}</i>;
      break;
    case "group":
      additionalContent = (
        <p>project exercises {props.groupProjectCount.toString()}</p>
      );
      break;
    case "background":
      additionalContent = (
        <div>
          <i>{props.description}</i> <p>submit to {props.backgroundMaterial}</p>
        </div>
      );
      break;
    case "special":
      additionalContent = (
        <div>
          <i>{props.description}</i>{" "}
          <p>
            required skills{" "}
            {props.requirements.toString()}
          </p>
        </div>
      );
      break;
    default:
      additionalContent = <div></div>;
      break;
  }

  return (
    <div>
      <h3>
        {props.name} {props.exerciseCount}
      </h3>
      {additionalContent}
    </div>
  );
}

interface ContentProps {
  content: CoursePart[];
}

export default function Content({ content }: ContentProps) {
  return (
    <div>
      {content.map((coursePart, i) => (
        <Part key={i} {...coursePart} />
      ))}
    </div>
  );
}
