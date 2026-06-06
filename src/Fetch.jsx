import { useState } from "react";
import { useRef } from "react";

export function GetData() {
  const numberRef = useRef();
  const [msg, setmsg] = useState();
  const [loading, setloading] = useState(false);
  const getFact = async () => {
    const number = numberRef.current.value;
    setloading(true);
    const response = await fetch(`http://www.number-trivia.com/${number}`);
    const message = await response.text();
    setloading(false);
    setmsg(message);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input ref={numberRef} type="number" placeholder="Enter a Number" />
      <button onClick={getFact}>Get Fact</button>
      <p>{msg}</p>
    </div>
  );
}
