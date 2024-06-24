/* eslint-disable react/react-in-jsx-scope */
interface HeaderProps {
  name: string;
}

export default function Header(props: HeaderProps) {
  return <h1>{props.name}</h1>;
};
