/* eslint-disable react/react-in-jsx-scope */
interface CoursePart {
  name: string;
  exerciseCount: number;
}

export default function Content({ content }: { content: CoursePart[] }) {
  return (
    <div>
      {content.map((coursePart, i) => (
        <p key={i}>
          {coursePart.name} {coursePart.exerciseCount}
        </p>
      ))}
    </div>
  );
}
