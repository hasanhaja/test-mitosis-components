// src/components/MyComponent.lite.tsx
import { useState } from '@builder.io/mitosis';

type Props = {
  message: string;
};

export default function MyBasicComponent(props: Props) {
  const [name, setName] = useState("Hasan");
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{props.message || 'Hello'} {name}! I can run in React, Vue, Solid or Svelte!</p>
      <button onClick={() => setName("Ali")}>Click me</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
