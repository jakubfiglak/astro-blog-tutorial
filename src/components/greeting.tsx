import { useState } from "react";

type GreetingProps = {
  messages: string[];
};

export const Greeting = ({ messages }: GreetingProps) => {
  const get_random_message = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, set_greeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => set_greeting(get_random_message())}>
        New Greeting
      </button>
    </div>
  );
};
