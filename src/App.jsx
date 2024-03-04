import "./App.css";
import Square from "./SquareComponent";

const data = [
  {
    title: "square 1",
    value: 10,
  },
  {
    title: "square 2",
    value: 20,
  },
  {
    title: "square 3",
    value: 30,
  },
];
export default function App() {
  return (
    <section>
      {data.map((d, i) => (
        <Square key={i} title={d.title} value={d.value} />
      ))}
    </section>
  );
}
