import React, { useState, useEffect } from "react";
// by default useEffect runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  let count = 0;
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      console.log("useEffectd", value);
    }
    // document.title = `New Messages(${value})`;
  }, [value]);
  console.log("render component");

  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
