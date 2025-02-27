/* eslint-disable react/prop-types */
import useCounter from "../hooks/use-counter";
import Button from "../components/Button";

export default function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button secondary onClick={increment}>
        Increment!
      </Button>
    </div>
  );
}
