import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count]);

  const incCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button onClick={incCount}>Inc Count</button>
      <h2>Name - {name}</h2>
      <h3>Location - New Delhi</h3>
      <h4>Contact - @abhishekwacky</h4>
    </div>
  );
};

export default User;
