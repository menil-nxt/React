import { useState } from "react";

export const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-class">
      <h1>count :- {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count
      </button>
      <h3>Name : {props.name}</h3>
      <h3>Locality : {props.Locality}</h3>
    </div>
  );
};
