/* eslint-disable react/react-in-jsx-scope */
interface TotalProps {
  count: number;
}

export default function Total(props: TotalProps) {
  return <p>Number of exercises {props.count}</p>;
}
