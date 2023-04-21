// src/components/Counter.lite.tsx
import { useState } from '@builder.io/mitosis';

type Props = {
  initialValue: number;
};

export default function Counter(props: Props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
